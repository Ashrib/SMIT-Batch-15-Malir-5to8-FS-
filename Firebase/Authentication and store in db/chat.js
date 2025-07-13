import { collection, db, onSnapshot, query, where } from "./firebaseConfig.js";

let selectedUser = null;
let users = []
let currentUser = JSON.parse(window.localStorage.getItem("uid"));
 

let getChat = (user)=>{
    console.log(user)
}

let renderUser = ()=>{
    let usersBox = document.querySelector('.users-list')
    users.map((user)=>{
        console.log(user?.displayName)
        let userDiv = document.createElement("div")
        userDiv.innerHTML = `<div class='user-card'>${user?.displayName}</div>` 
        userDiv.querySelector(".user-card").addEventListener('click',()=>{
            getChat(user)
        })
        usersBox.appendChild(userDiv)
    })
}



const q = query(collection(db, "users"), where("uid", "!=", currentUser));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  users = []
  querySnapshot.forEach((doc) => {

    users.push({ ...doc.data(), id: doc.id })
  });
  console.log(users)
renderUser()

})


