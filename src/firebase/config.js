// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyD7VNKg6Gqam8qHZiHUpzgleVYbk8Gc9qU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "bankroll-2ccb4.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://bankroll-2ccb4-default-rtdb.firebaseio.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "bankroll-2ccb4",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "bankroll-2ccb4.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "443440711718",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:443440711718:web:dc3f58dfe81324edc3bee7",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-QZ2NEGJV6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db, analytics };
export default app;