import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,
    db,collection,addDoc
 } from './firebaseConfig.js'


let addUser = async (data) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            ...data
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

// Register User
let registerUser = async (e) => {
    e.preventDefault();
    const email = document.querySelector('#register-email').value;
    const password = document.querySelector('#register-password').value;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        const docRef = await addDoc(collection(db, "users"),{
            displayName: user?.displayName,
            email: user?.email,
            phoneNumber: user?.phoneNumber,
            photoURL: user?.photoURL,
            creationTime: user?.metadata?.creationTime,
        });
        console.log('Registered:', user);
    } catch (error) {
        console.error("Register error: ", error);
    }
}

document.querySelector("#register-form").addEventListener('submit', registerUser);

// Sign In User
let signInUser = async (e) => {
    e.preventDefault();
    const email = document.querySelector('#signin-email').value;
    const password = document.querySelector('#signin-password').value;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Signed in:', user);
    } catch (error) {
        console.error("Sign in error: ", error);
    }
}

document.querySelector("#signin-form").addEventListener('submit', signInUser);



onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log("onAuthStateChanged: ", user)
        window.location.replace('./dashboard.html')
    } else {
        console.log('User is signed out')
    }
});





