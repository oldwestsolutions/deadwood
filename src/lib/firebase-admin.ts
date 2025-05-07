import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// Check if we have all required environment variables
const hasFirebaseConfig = process.env.FIREBASE_PROJECT_ID && 
                         process.env.FIREBASE_CLIENT_EMAIL && 
                         process.env.FIREBASE_PRIVATE_KEY;

// Initialize Firebase Admin only if we have the required config
if (!getApps().length && hasFirebaseConfig) {
  try {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  } catch (error) {
    console.error('Firebase Admin initialization error:', error);
  }
}

// Export initialized services only if Firebase is configured
export const adminAuth = hasFirebaseConfig ? getAuth() : null;
export const adminDb = hasFirebaseConfig ? getFirestore() : null; 