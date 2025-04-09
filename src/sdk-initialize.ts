// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhWgfIETTyf7IwjWRVe6aIyi4AIhedxtA",
  authDomain: "knell-e27dc.firebaseapp.com",
  projectId: "knell-e27dc",
  storageBucket: "knell-e27dc.firebasestorage.app",
  messagingSenderId: "503258692746",
  appId: "1:503258692746:web:4e160907b7516c4339c173",
  measurementId: "G-6F7KY167XJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
