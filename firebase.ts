// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMVmvhROpl84nFgg-t3Oh6qdFvbnpe9dI",
  authDomain: "notion-clone-34520.firebaseapp.com",
  projectId: "notion-clone-34520",
  storageBucket: "notion-clone-34520.firebasestorage.app",
  messagingSenderId: "768180357324",
  appId: "1:768180357324:web:7c612ace5a6352dcdb5a69",
  measurementId: "G-JPHFF17SF6"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

//const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
