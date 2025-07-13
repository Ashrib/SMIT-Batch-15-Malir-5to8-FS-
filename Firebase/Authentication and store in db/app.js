import { addDoc, auth, collection, createUserWithEmailAndPassword, db, GoogleAuthProvider, GoogleProvider, onAuthStateChanged, signInWithPopup } from "./firebaseConfig.js"



onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log("onAuthStateChanged: ", user)
        window.location.replace('./dashboard.html')
    } else {
        console.log('User is signed out')
        window.location.replace('./login.html')
    }
});







