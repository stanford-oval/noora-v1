// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOH-0X8L7Wh7d5rAncXiFO24Ma02mNeBQ",
  authDomain: "noora-e9327.firebaseapp.com",
  projectId: "noora-e9327",
  storageBucket: "noora-e9327.appspot.com",
  messagingSenderId: "627915482420",
  appId: "1:627915482420:web:d22a833a34a6b38faf7161",
  measurementId: "G-DBNHB03CFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { app, db, auth };
