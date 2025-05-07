import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

// Initialize Firebase Admin
const apps = getApps();

if (!apps.length) {
  try {
    const serviceAccount = {
      projectId: 'robberbaron-9df59',
      clientEmail: 'firebase-adminsdk-fbsvc@robberbaron-9df59.iam.gserviceaccount.com',
      privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCu4+BjajOL4+hQ\nrI0eGzLJ5YoryWYhCc2DB+Z9jRlP2LP6e9rCuBtQ3r6BfC1PHgqWlAgaQ/o6FeyZ\nz9oK+lPeMqIHsov2+Tnb3Yn2B6P9XLBhuC4XP1QKksceJQRXuJxGK/i4c8W/NsU0\neD2t2MPaZLaliJKbJse91xgOl/BkBmZQk+Ablv0O8A798HwKLhi/vHKUHc8nJ7i6\nvt5/3BNT4QUmKbHGkFxtk7naYSnuxZCLsKSYTz2z3Iz47CVmG0LC+ukaqdDR6D8m\nzyQHwX1ct//w7S5HgnoLsGR5Wg2sOH8BL/4+e5v8ug1/9/BtP/Dfj4P0LmZkssqp\nN4ANaumXAgMBAAECggEADCDSa/fZSO9jqiCP4rwZIBDdLZ8tsscsFipN7NFZpYS4\n1SXnVvnkhGMGDBMRTftz2YW82sbHC2XU1BqAG6MeKM+9wSc7zJieT2XZeOiGZ1Nu\nX0B3YHZW/NVj80O26DcYY0djsWBEoOI1TSe02KGqfLKKS112vpqzCbJpFoNT5jkW\nq7vYDO0jcq01cTXgRHxV39VGK7wWaYZMPVDGNuco8Qs0+euKIRSjKHe9i5hEa7Nt\noeb5479yjcq4K+abQKqk9FQJY00p2qbbf1lCxB+IxjVzopwv+a43I/pzQvGIq2TX\nBVKSJS76S341fIR5J85UCuyy5piyhaohWdn25NEvTQKBgQDe+VrCCuUJp6GdgOWV\nHECW47/PaC9N6nAvxjLGJcpPr2JYy11gpDFh8yPSvVHOeFaheynm8zX/awE/pOBx\nW4Dp8sKP36PqKksksaF5kXC0J4BQMZDB6F196iHHL52MG3q1bky8aInelqe3+Ov7\ncpUPxCxiliIVT94uknE2tp6MRQKBgQDIy0t+D4BohO0LyLEIT7Tz526KiYFtZ0xY\n5r8F52cUzwXz1jYRxKoMwC0w9+m9J8ojRWcMppKCXKZbKMxt43+fO+Gx6xKHRjFB\nbMVgyF48O++a8Lk1gawH/vUW0i7V6Sp5+6SHWTpUJIZVL6p7RHeSxOHn2XwXpO+z\n1QW5z0KSKwKBgQDR+Vfya3gMg4O6YuvQY26fqZGzq5UAdsl289pUprnCGJMwszIY\nFAc9Ck6t4gLrwH80SlvHVTmAcjAW0xlZJqZbqXR3ME+X8IQa5fv+E2xi+t/mpQaA\n1GVWcemlPb3LdwUzXc99jaRnrM/8e7kebWTaGA8EOAWYtEGy8c0TjR35UQKBgD+U\noAL6xZ5S+PySP/xxwMq6rbYQdHtAClzcNACalXlxVGExo01dCLug3q5y0gCjaM5i\nW48V7653x/V1pcXmE7NIMt8zoFpVT6N33cgXqj9Ie0aEkyDuPpsJkHH5e/sgKeMW\nW7K//khGiILQ5RrDQ1mmHiJcK38RKxW2jmmXx2yhAoGBAN6Aq5UncbeOIZhQXdyb\nwo7v3yMJ6d2iz94FXjHsV0WfdLWqKBqzJhHKMfWWyojI/aqXWU7Z1BfkqciGs4gc\ncogt5ztgMueveXVnqNZ73u25wY6+uHKzEUSmKGEoQEOsHvQ7gmSDPwcYDoz/fOtv\nkCtM+LH8oyF4sgzV8lWljhCO\n-----END PRIVATE KEY-----\n',
    };

    initializeApp({
      credential: cert(serviceAccount),
    });
  } catch (error) {
    console.error('Firebase Admin initialization error:', error);
    throw error;
  }
}

const adminDb = getFirestore();
const adminAuth = getAuth();

export { adminDb, adminAuth }; 