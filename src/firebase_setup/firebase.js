// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOLBQo-D1xRuO2Db7kfEmdlTzNF7GmtTk",
  authDomain: "todo-app-reactjsx.firebaseapp.com",
  projectId: "todo-app-reactjsx",
  storageBucket: "todo-app-reactjsx.appspot.com",
  messagingSenderId: "753558178699",
  appId: "1:753558178699:web:564351f0a4e058b8b1fd8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
export const firestore = getFirestore(app);

export {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  auth,
  db,
};
