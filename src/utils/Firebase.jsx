// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXe7aijH-S-oIaeQoCpb3VasRS9JXFeLM",
  authDomain: "netflixgpt-d21bc.firebaseapp.com",
  projectId: "netflixgpt-d21bc",
  storageBucket: "netflixgpt-d21bc.firebasestorage.app",
  messagingSenderId: "264696097275",
  appId: "1:264696097275:web:72ba30df404224e6a1c35e",
  measurementId: "G-Z2L9DK8KE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);