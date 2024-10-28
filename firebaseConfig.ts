import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPiEJpa3g5j5R9uvsoTzEC9Pnwupyuwrw",
  authDomain: "reactnativebosch-d84df.firebaseapp.com",
  projectId: "reactnativebosch-d84df",
  storageBucket: "reactnativebosch-d84df.appspot.com",
  messagingSenderId: "988190600370",
  appId: "1:988190600370:web:32faff4f83ebad13c16dab",
  measurementId: "G-TKKE1R1WX6"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

