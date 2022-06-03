// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6CJ3UHxZyLjR4Sqhp455v4oquTISImUM",
  authDomain: "eindproject-2ejaar.firebaseapp.com",
  projectId: "eindproject-2ejaar",
  storageBucket: "eindproject-2ejaar.appspot.com",
  messagingSenderId: "709632676612",
  appId: "1:709632676612:web:155e935c4fcd0e5920b651"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app)
export const storage = getStorage(app)
export const firestore = getFirestore();
export const db = getDatabase(app);
