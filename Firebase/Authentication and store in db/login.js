import { auth, GoogleAuthProvider, GoogleProvider, onAuthStateChanged, signInWithEmailAndPassword } from "./firebaseConfig.js";




onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log("onAuthStateChanged: ", user)
        window.location.replace('./dashboard.html')
    } else {
        console.log('User is signed out')
    }
});
// Sign In User
let signInUser = async (e) => {
    e.preventDefault();
    const email = document.querySelector('#signin-email').value;
    const password = document.querySelector('#signin-password').value;
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Signed in:', user);
        window.localStorage.setItem("uid", JSON.stringify(user.uid))

    } catch (error) {
        console.error("Sign in error: ", error);
    }
}

document.querySelector("#signin-form").addEventListener('submit', signInUser);

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