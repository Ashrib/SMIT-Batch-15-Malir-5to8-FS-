import { auth, GoogleAuthProvider, GoogleProvider, onAuthStateChanged, signInWithPopup } from "./firebaseConfig.js"



onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log("onAuthStateChanged: ", user)
        window.location.replace('./dashboard.html')
    } else {
        console.log('User is signed out')
    }
});





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