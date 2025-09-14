// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG4WqmzXLAXSEw0GVzMBsAB_ON86Yah_Q",
  authDomain: "smit-firestore-1e367.firebaseapp.com",
  projectId: "smit-firestore-1e367",
  storageBucket: "smit-firestore-1e367.firebasestorage.app",
  messagingSenderId: "559579412068",
  appId: "1:559579412068:web:81947ea811748a2aec5171",
  measurementId: "G-2MGR33YMRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export { db, auth, createUserWithEmailAndPassword }