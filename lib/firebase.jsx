// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCQhLGd9T-XYD8yZAok-QjQ6y-0KV4aFJM",
    authDomain: "farms-4c829.firebaseapp.com",
    projectId: "farms-4c829",
    storageBucket: "farms-4c829.firebasestorage.app",
    messagingSenderId: "500028028157",
    appId: "1:500028028157:web:4cda043f6d88cd896ffa94"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const analytics = isSupported().then((yes) =>
  yes ? getAnalytics(app) : null
);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

