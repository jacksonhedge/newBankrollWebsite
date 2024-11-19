import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'development-mode',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'development-mode',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'development-mode',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'development-mode',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || 'development-mode',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || 'development-mode',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'development-mode'
};

// Only initialize Firebase if we have valid config
const isDevelopment = import.meta.env.DEV;
const hasValidConfig = !isDevelopment || (
  firebaseConfig.apiKey !== 'development-mode' &&
  firebaseConfig.authDomain !== 'development-mode'
);

let app = null;
let db = null;
let auth = null;
let analytics = null;

if (hasValidConfig) {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
  } catch (error) {
    console.warn('Firebase initialization error:', error);
  }
} else {
  console.warn('Running in development mode without Firebase configuration');
}

export { db, auth, analytics };
export default app;
