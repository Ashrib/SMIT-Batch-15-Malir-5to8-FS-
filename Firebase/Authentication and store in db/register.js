import { addDoc, auth, collection, createUserWithEmailAndPassword, db, GoogleAuthProvider, GoogleProvider, signInWithPopup } from "./firebaseConfig.js";



// Register User
let registerUser = async (e) => {
    e.preventDefault();
    const email = document.querySelector('#register-email').value;
    const password = document.querySelector('#register-password').value;
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        window.localStorage.setItem("uid", JSON.stringify(user.uid))
        
        const docRef = await addDoc(collection(db, "users"),{
            displayName: user?.displayName,
            email: user?.email,
            phoneNumber: user?.phoneNumber,
            photoURL: user?.photoURL,
            creationTime: user?.metadata?.creationTime,
            uid: user?.uid,
        });
        console.log('Registered:', user);
        window.location.replace('./dashboard.html')

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