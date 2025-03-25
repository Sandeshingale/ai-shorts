// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-shorts-9e3cc.firebaseapp.com",
  projectId: "ai-shorts-9e3cc",
  storageBucket: "ai-shorts-9e3cc.firebasestorage.app",
  messagingSenderId: "826846609483",
  appId: "1:826846609483:web:f5c5cc3896b75ffd8a4dce",
  measurementId: "G-DQ01PZ0G38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
