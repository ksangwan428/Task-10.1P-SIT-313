// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANoLJj7H2Jw09z9cAbjgYpOegZU5MQZRg",
  authDomain: "deakin-login-a1e81.firebaseapp.com",
  projectId: "deakin-login-a1e81",
  storageBucket: "deakin-login-a1e81.appspot.com",
  messagingSenderId: "690656878653",
  appId: "1:690656878653:web:a53c649c646e827ec10a54",
  measurementId: "G-GHJR7B98L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default getFirestore();