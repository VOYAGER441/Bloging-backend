// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyhaDg42ak8FA2EDJkQPG9fHRHoKnu7u4",
  authDomain: "blog-backend-9961d.firebaseapp.com",
  projectId: "blog-backend-9961d",
  storageBucket: "blog-backend-9961d.firebasestorage.app",
  messagingSenderId: "969103550194",
  appId: "1:969103550194:web:615fed68d89633a37ad26b",
  measurementId: "G-GX99MJMBWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);