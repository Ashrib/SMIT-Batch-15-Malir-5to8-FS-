import { auth, onAuthStateChanged, signOut } from "./firebaseConfig.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log("onAuthStateChanged: ", user)
        
    } else {
        console.log('User is signed out')
    }
});

document.querySelector("#signout").addEventListener('click',()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
  console.log('sign out success')
  
  window.location.replace('./index.html')

}).catch((error) => {
  // An error happened.
  console.error(error)
});

})