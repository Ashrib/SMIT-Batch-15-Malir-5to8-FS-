import { addDoc, and, collection, db, doc, getDocs, onSnapshot, or, orderBy, query, serverTimestamp, Timestamp, where } from "./firebaseConfig.js";

let selectedUser = null;
let users = []
let messages = []
let currentUser = JSON.parse(window.localStorage.getItem("uid"));
let loginUser = null
let chatUnsubscribe = null;


let fetchCurrentUser = async () => {
  try {
    const userDocRef = query(collection(db, "users"),where("uid", "==", currentUser));
    const userSnap = await getDocs(userDocRef)
    userSnap.forEach(doc=>{
      console.log(doc.data())
      loginUser = {id:doc.id, ...doc.data()}
    })
  } catch (error) {
    console.error("Error fetching current user:", error);
  }
};
fetchCurrentUser().then(()=>{
  document.querySelector("#name").innerHTML = loginUser?.displayName
})

let getChat = async (user) => {
  messages = [];
  selectedUser = user;
  console.log("selected user: ", selectedUser);
  console.log("messages: ", messages);

  // Unsubscribe previous listener if exists
  if (typeof chatUnsubscribe === "function") {
    chatUnsubscribe();
  }

  try {
    const q = query(
      collection(db, "messages"),
      or(
        and(where("from", "==", selectedUser?.uid), where("to", "==", currentUser)),
        and(where("from", "==", currentUser), where("to", "==", selectedUser?.uid))
      ),
      orderBy("createdAt")
    );

    chatUnsubscribe = onSnapshot(q, (snapshot) => {
      messages = [];
      snapshot.forEach((doc) => {
        messages.push({
          id: doc?.id, ...doc?.data()
        });
      });
      messages = messages.sort((a, b) => a?.createdAt - b.createdAt);
      console.log(messages);
      renderChats();
    });

  } catch (error) {
    console.error(error);
  }
}

let renderUser = () => {
  let usersBox = document.querySelector('.users-list')
  users.map((user) => {
    console.log(user?.displayName)
    let userDiv = document.createElement("div")
    userDiv.innerHTML = `<div class='user-card'>${user?.displayName}</div>`
    userDiv.querySelector(".user-card").addEventListener('click', () => {
      getChat(user)
    })
    usersBox.appendChild(userDiv)
  })
}

let renderChats = () => {
  let messagesBox = document.querySelector('.messages-box')
  messagesBox.innerHTML = '';

  if (messages.length < 1) {
    messagesBox.innerHTML = 'no chat';
    return
  }

  messages.map((msg) => {

    let msgDiv = document.createElement("div")
    msgDiv.className = (msg?.from == currentUser) ? 'right msg' : 'left msg'
    msgDiv.innerHTML = `${msg?.text}`
    // userDiv.querySelector(".user-card").addEventListener('click', () => {
    //   getChat(user)
    // })
    messagesBox.appendChild(msgDiv)
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


let sendMessage = async(value)=>{
  try {
  console.log(selectedUser?.uid)

    await addDoc(collection(db,"messages"),{
      text: value,
      to: selectedUser?.uid,
      from: currentUser,
      createdAt: serverTimestamp()
    }).then(()=>{
      console.log('message sent!')
    })
  } catch (error) {
    console.log(error)
  }
}

document.querySelector('#send-btn').addEventListener('click',()=>{
  let msgInput = document.querySelector('#message-inp');
  if(msgInput.value.length<1) return
  sendMessage(msgInput.value)

})

