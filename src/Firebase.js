// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfqjmRo9gknq_lF18Tv1V8gtg1SvdX1UQ",
  authDomain: "movielist-1b0bf.firebaseapp.com",
  projectId: "movielist-1b0bf",
  storageBucket: "movielist-1b0bf.appspot.com",
  messagingSenderId: "327509930926",
  appId: "1:327509930926:web:af6d0d411c9066562f8e3f"
};

// Initialize Firebase
const Fb = initializeApp(firebaseConfig);

const db = getFirestore(Fb);

export {db};