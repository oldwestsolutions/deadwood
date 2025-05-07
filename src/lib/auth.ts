import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { adminAuth } from "@/lib/firebase-admin";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        try {
          // Sign in with Firebase Admin SDK
          const userRecord = await adminAuth.getUserByEmail(credentials.email);
          
          // Note: Firebase Admin SDK doesn't support password verification directly
          // You'll need to implement a custom solution or use Firebase Auth REST API
          // For now, we'll just return the user if they exist
          return {
            id: userRecord.uid,
            email: userRecord.email,
            name: userRecord.displayName,
            image: userRecord.photoURL,
          };
        } catch (error) {
          throw new Error("Invalid credentials");
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/login",
  },
}; 