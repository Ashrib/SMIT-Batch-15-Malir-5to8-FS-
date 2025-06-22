// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { signOut, onAuthStateChanged, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { onSnapshot, orderBy, limit, or, where, query, getFirestore, collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbpNck3A4VlCeIeCY0IlpHXyKNVNc0vdw",
  authDomain: "smit-users.firebaseapp.com",
  projectId: "smit-users",
  storageBucket: "smit-users.firebasestorage.app",
  messagingSenderId: "788090049512",
  appId: "1:788090049512:web:21e0d58f215a6d89170a5d",
  measurementId: "G-Y3GDE4E2T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { db,onSnapshot, auth,addDoc,collection, signOut, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged }