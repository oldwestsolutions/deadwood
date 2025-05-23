import type { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { adminAuth } from "@/lib/firebase-admin";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }

        if (!adminAuth) {
          throw new Error("Authentication service is not configured");
        }

        try {
          // Sign in with Firebase
          const userCredential = await adminAuth.getUserByEmail(credentials.email);
          
          if (!userCredential) {
            throw new Error("No user found with this email");
          }

          return {
            id: userCredential.uid,
            email: userCredential.email,
            name: userCredential.displayName,
            image: userCredential.photoURL,
          };
        } catch (error) {
          console.error("Auth error:", error);
          throw new Error("Invalid credentials");
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
}; 