
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbx5d47Njr2WY5OMEODgICc8SXPIO_KIU",
  authDomain: "provabd-rebeca.firebaseapp.com",
  projectId: "provabd-rebeca",
  storageBucket: "provabd-rebeca.firebasestorage.app",
  messagingSenderId: "381478832158",
  appId: "1:381478832158:web:9114136379a05a33cac60f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
