import React, { createContext, useState, useContext, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { auth, db } from '../firebase/config';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up function
// In AuthContext.jsx
async function signup(email, password, userData) {
  try {
    console.log('Starting signup process for:', email);
    
    // Create the user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User authentication created:', user.uid);

    // Convert birthday string to timestamp
    const birthdayDate = new Date(userData.birthday);
    const birthdayTimestamp = Timestamp.fromDate(birthdayDate);

    // Format sleeper username
    const formattedSleeperUsername = userData.sleeperUsername?.startsWith('@') ? 
      userData.sleeperUsername : 
      `@${userData.sleeperUsername}`;

    // Format Venmo username
    const formattedVenmoUsername = userData.venmoUsername?.startsWith('@') ? 
      userData.venmoUsername : 
      `@${userData.venmoUsername}`;

    // Ensure username is provided or generate from email
    if (!userData.username) {
      throw new Error('Username is required');
    }

    // Create the user document in Firestore
    const userDoc = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      username: userData.username, // Use provided username
      venmoUsername: formattedVenmoUsername, // Add Venmo username
      address1: userData.address1 || '',
      address2: userData.address2 || null,
      city: userData.city || '',
      state: userData.state || '',
      postalCode: userData.postalCode || '',
      birthday: birthdayTimestamp,
      phoneNumber: userData.phoneNumber,
      sleeperUsername: formattedSleeperUsername,
      promoCode: userData.promoCode || null,
      dwollaCustomerId: '',
      dwollaBalance: 0,
      bonusBalance: 0,
      id: user.uid,
      lastUpdated: serverTimestamp(),
      lastBalanceUpdate: serverTimestamp(),
      createdAt: serverTimestamp()
    };

    console.log('Creating Firestore document for user:', userDoc);
    await setDoc(doc(db, "users", user.uid), userDoc);
    console.log('Firestore document created successfully');

    return user;
  } catch (error) {
    console.error('Signup error:', {
      code: error.code,
      message: error.message,
      stack: error.stack
    });
    throw error;
  }
}

  // Login function
  async function login(email, password) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  }

  // Logout function
  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error in logout:", error);
      throw error;
    }
  }

  // Password reset function
  async function resetPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Error in password reset:", error);
      throw error;
    }
  }

  // Effect to handle auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}