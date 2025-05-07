import { NextAuthOptions } from "next-auth";
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
    strategy: "jwt"
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
}; 