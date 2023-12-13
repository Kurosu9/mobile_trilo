// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeHCPH-YjauKtQNwXHzFq_hAsTT-Qz78o",
  authDomain: "trilop-5a9b2.firebaseapp.com",
  projectId: "trilop-5a9b2",
  storageBucket: "trilop-5a9b2.appspot.com",
  messagingSenderId: "370035045927",
  appId: "1:370035045927:web:bcce6c2af706649bc80002",
  measurementId: "G-5JJVVJP8ZG"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// const analytics = getAnalytics(app);