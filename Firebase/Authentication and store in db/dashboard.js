import { auth, onAuthStateChanged, signOut } from "./firebaseConfig.js";


let currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    currentUser = user
    console.log(currentUser)
    console.log("onAuthStateChanged: ", user)
    document.querySelector('#user-name').innerText = currentUser?.email


  } else {
    console.log('User is signed out')
  }
});

document.querySelector("#signout").addEventListener('click', () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('sign out success')

    window.location.replace('./index.html')

  }).catch((error) => {
    // An error happened.
    console.error(error)
  });

})


