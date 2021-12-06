// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkfDrrg_lmWaeruGVWNj0McCSHaW6r14c",
  authDomain: "finalproject-ac298.firebaseapp.com",
  projectId: "finalproject-ac298",
  storageBucket: "finalproject-ac298.appspot.com",
  messagingSenderId: "905378090842",
  appId: "1:905378090842:web:edaf033642023f32366d63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
