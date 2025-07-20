// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import {signInWithPopup,GoogleAuthProvider , signOut, onAuthStateChanged, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { onSnapshot, orderBy, limit, or, where, query, getFirestore, collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";
import { getDownloadURL,getStorage, ref,uploadBytes} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArpb15cS1NJT-nrpFgLpOcQ7HCuJTfv0I",
  authDomain: "e-commerce-web-f2234.firebaseapp.com",
  projectId: "e-commerce-web-f2234",
  storageBucket: "e-commerce-web-f2234.appspot.com",
  messagingSenderId: "331314702882",
  appId: "1:331314702882:web:64841f21d05433ed02f87b",
  measurementId: "G-Y8HR808SFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

const GoogleProvider = new GoogleAuthProvider();

export {storage, db,getDownloadURL,ref,uploadBytes,onSnapshot, auth,addDoc,collection, signOut, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged }