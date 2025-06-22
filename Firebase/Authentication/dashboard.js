import {auth,  signOut,onAuthStateChanged} from './firebaseConfig.js'


let users = [];


onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("onAuthStateChanged: ",user)
    
} else {
    console.log('User is signed out')
    window.location.replace('./index.html')
  }
});

const unsub = onSnapshot(collection(db, "users"), (response) => {
    users = []
    response?.docs?.forEach((doc)=>{
        users.push({id: doc?.id,...doc?.data()});
    })
    console.log("data: ", users)
});



let logOut = async()=>{
    await signOut(auth).then(() => {
        console.log('logout')
        unsub()
    }).catch((error) => {
        // An error happened.
        console.log(error)

})
}

document.querySelector("#signout").addEventListener('click', logOut);













