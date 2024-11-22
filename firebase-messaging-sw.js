importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Initialize Firebase with your config
firebase.initializeApp({
  apiKey: "AIzaSyD7VNKg6Gqam8qHZiHUpzgleVYbk8Gc9qU",
  authDomain: "bankroll-2ccb4.firebaseapp.com",
  projectId: "bankroll-2ccb4",
  storageBucket: "bankroll-2ccb4.firebasestorage.app",
  messagingSenderId: "443440711718",
  appId: "1:443440711718:web:dc3f58dfe81324edc3bee7",
  measurementId: "G-QZ2NEGJV6D"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/images/BankrollLogoTransparent.png',
    badge: '/images/BankrollLogoTransparent.png',
    data: payload.data,
    actions: [
      {
        action: 'open',
        title: 'Open App'
      }
    ]
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notification clicked:', event);
  event.notification.close();
  
  // Handle action clicks
  if (event.action === 'open') {
    // Open the app when the "Open App" action is clicked
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
        // Check if there is already a window/tab open with the target URL
        for (let client of windowClients) {
          if ('focus' in client) {
            return client.focus();
          }
        }
        // If no window/tab is open, open a new one
        if (clients.openWindow) {
          // Use the appropriate URL based on the environment
          const baseUrl = self.location.hostname === 'localhost' 
            ? `http://localhost:${self.location.port}`
            : 'https://onbankroll.com';
          return clients.openWindow(baseUrl);
        }
      })
    );
  }

  // Handle regular notification clicks
  const urlToOpen = new URL(
    event.notification.data?.url || '/',
    self.location.origin
  ).href;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      // Check if there is already a window/tab open with the target URL
      for (let client of windowClients) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      // If no window/tab is open, open a new one
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});

// Handle service worker installation
self.addEventListener('install', (event) => {
  console.log('[firebase-messaging-sw.js] Service Worker installing.');
  self.skipWaiting();
});

// Handle service worker activation
self.addEventListener('activate', (event) => {
  console.log('[firebase-messaging-sw.js] Service Worker activating.');
  event.waitUntil(clients.claim());
});
