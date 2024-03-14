import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzoOtxso2FacKAnkkYauIO6YEQ1mmzOis",
  authDomain: "scissors-4f501.firebaseapp.com",
  projectId: "scissors-4f501",
  storageBucket: "scissors-4f501.appspot.com",
  messagingSenderId: "45889873516",
  appId: "1:45889873516:web:26bb63d356eb75ba811a49",
  measurementId: "G-2D6WJ3SSL1"
};

// Initialize Firebase
// initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore()

