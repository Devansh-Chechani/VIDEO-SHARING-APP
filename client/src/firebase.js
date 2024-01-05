// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDPEc0xbyqyxXzf0XSuv8hqN-A6XjUB7FI",
  authDomain: "clone-f96ea.firebaseapp.com",
  projectId: "clone-f96ea",
  storageBucket: "clone-f96ea.appspot.com",
  messagingSenderId: "37737442790",
  appId: "1:37737442790:web:a068afa9dd2c96238fba27",
  measurementId: "G-ZW510L0CQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app
export const provider = new GoogleAuthProvider()
export const auth = getAuth()