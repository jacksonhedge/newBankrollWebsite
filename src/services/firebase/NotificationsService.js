import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getFirestore, collection, addDoc, doc, setDoc, getDoc } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
import app from './config';

class NotificationsService {
  constructor() {
    this.messaging = getMessaging(app);
    this.db = getFirestore(app);
    this.functions = getFunctions(app);
  }

  // Initialize push notifications
  async initializePushNotifications() {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const token = await getToken(this.messaging, {
          vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
        });
        return token;
      }
      return null;
    } catch (error) {
      console.error('Error initializing push notifications:', error);
      return null;
    }
  }

  // Save user notification preferences
  async saveNotificationPreferences(userId, preferences) {
    try {
      await setDoc(doc(this.db, 'userPreferences', userId), {
        notifications: {
          inApp: preferences.inApp ?? true,
          sms: preferences.sms ?? false,
          email: preferences.email ?? false,
          pushToken: preferences.pushToken
        }
      }, { merge: true });
    } catch (error) {
      console.error('Error saving notification preferences:', error);
      throw error;
    }
  }

  // Get user notification preferences
  async getNotificationPreferences(userId) {
    try {
      const docRef = doc(this.db, 'userPreferences', userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data().notifications;
      }
      return {
        inApp: true,
        sms: false,
        email: false,
        pushToken: null
      };
    } catch (error) {
      console.error('Error getting notification preferences:', error);
      throw error;
    }
  }

  // Send a notification
  async sendNotification(userId, notification) {
    try {
      const sendNotificationFunction = httpsCallable(this.functions, 'sendNotification');
      await sendNotificationFunction({
        userId,
        notification
      });
    } catch (error) {
      console.error('Error sending notification:', error);
      throw error;
    }
  }

  // Store in-app notification
  async storeInAppNotification(userId, notification) {
    try {
      await addDoc(collection(this.db, 'users', userId, 'notifications'), {
        ...notification,
        timestamp: new Date(),
        read: false
      });
    } catch (error) {
      console.error('Error storing in-app notification:', error);
      throw error;
    }
  }

  // Listen for incoming push notifications
  onPushNotification(callback) {
    return onMessage(this.messaging, (payload) => {
      callback(payload);
    });
  }
}

export const notificationsService = new NotificationsService();
