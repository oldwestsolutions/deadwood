import { NextResponse } from 'next/server';
import { adminAuth, adminDb } from '@/lib/firebase-admin';

interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export async function POST(request: Request) {
  try {
    const body: RegisterRequest = await request.json();
    const { email, password, name } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Missing required fields' },
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
  } catch (error: any) {
    console.error('Registration error:', error);
    
    // Handle Firebase specific errors
    if (error.code === 'auth/email-already-in-use') {
      return NextResponse.json(
        { message: 'Email already in use' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
} 