import { NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase-admin';

interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

interface FirebaseError {
  code: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json() as RegisterRequest;

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create user in Firebase Auth
    const userRecord = await adminAuth.createUser({
      email,
      password,
      displayName: name,
    });

    // Create user document in Firestore
    await adminDb.collection('users').doc(userRecord.uid).set({
      name,
      email,
      reputation: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message: 'User created successfully',
        user: {
          id: userRecord.uid,
          name,
          email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    const firebaseError = error as FirebaseError;
    console.error('Registration error:', error);
    
    // Handle Firebase specific errors
    if (firebaseError.code === 'auth/email-already-in-use') {
      return NextResponse.json(
        { error: 'Email already in use' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: firebaseError.message || 'Failed to create user' },
      { status: 400 }
    );
  }
} 