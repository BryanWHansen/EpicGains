// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqUHhx8UBl1U8cvhA-9PtfSPLWEuJfLXo",
  authDomain: "epicgoals-bab0d.firebaseapp.com",
  projectId: "epicgoals-bab0d",
  storageBucket: "epicgoals-bab0d.firebasestorage.app",
  messagingSenderId: "40342508027",
  appId: "1:40342508027:web:0b84fca485e600898b3b5e",
  measurementId: "G-N9GX8MPXCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
