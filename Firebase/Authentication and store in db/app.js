import { addDoc, auth, collection, createUserWithEmailAndPassword, db, GoogleAuthProvider, GoogleProvider, onAuthStateChanged, signInWithPopup } from "./firebaseConfig.js"



onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log("onAuthStateChanged: ", user)
        window.location.replace('./dashboard.html')
    } else {
        console.log('User is signed out')
    }
});



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
        }).then;
        console.log('Registered:', user);

    } catch (error) {
        console.error("Register error: ", error);
    }
}

document.querySelector("#register-form").addEventListener('submit', registerUser);








document.querySelector('#google-signIn').addEventListener('click', () => {
    signInWithPopup(auth, GoogleProvider).then((result) => {
        console.log(result)
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        console.log("credential: ", credential)
        console.log("user: ", user)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error(error)
    });
})