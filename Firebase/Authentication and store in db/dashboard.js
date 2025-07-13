import { addDoc, auth, collection, db, deleteDoc, doc, getDocs, onAuthStateChanged, onSnapshot, query, signOut, updateDoc, where } from "./firebaseConfig.js";


let currentUser = JSON.parse(window.localStorage.getItem("uid"));
let posts = []

 document.querySelector('.update').style.display = 'none'
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
    window.localStorage.clear()
    window.location.replace('./index.html')

  }).catch((error) => {
    // An error happened.
    console.error(error)
  });

})

document.querySelector("#post-btn").addEventListener('click', async () => {
  try {
    let inputValue = document.querySelector("#post-input").value
    const docRef = await addDoc(collection(db, "posts"), {
      text: inputValue,
      uid: currentUser.uid
    })
    console.log("post created.")
  } catch (error) {
    console.log(error)
  }



})

// updateData
let updateData = async (id) => {
    try {
        console.log(id)
        let input = document.querySelector('#post-input')
        const updateDocRef = doc(db, "posts", id);
        await updateDoc(updateDocRef, {
            text: input.value
        }).then(() => {
            console.log('successfully updated!')
            input.value = '' // to reset the form
            document.querySelector('.update').style.display = 'none'
            document.querySelector('#post-btn').style.display = 'block'
        });
    } catch (error) {
        console.error(error)
    }
}
// edit data
let editData = async (id) => {
    let input = document.querySelector('#post-input')

    let findPost = posts.find((post) => post.id === id)
    input.value = findPost.text
    document.querySelector('.update').style.display = 'flex'
    document.querySelector('#post-btn').style.display = 'none'

    let updateBtn = document.createElement("span")
    updateBtn.id = 'update_btn'
    updateBtn.innerText = "Update"
    updateBtn.addEventListener('click', () => {
        updateData(findPost.id)
    })
    let updateDiv = document.querySelector('.update')
    updateDiv.innerHTML = ''
    updateDiv.appendChild(updateBtn)
   

}

let deleteData = async (id) => {
  try {
    await deleteDoc(doc(db, "posts", id)).then(() => {
      console.log('successfully deleted!')

    })
  } catch (error) {
    console.error(error)
  }
}

let renderPosts = () => {
  let postsBox = document.querySelector(".posts-box")
  postsBox.innerHTML = ''
  posts.map((post) => {

    let cardDiv = document.createElement('div')
    cardDiv.className = 'post-card'
    cardDiv.innerHTML += `
      <span>${post?.text}</span>
      <button class="edit-btn">edit</button>
      <button class='del-btn'>delete</button>

    `
    cardDiv.querySelector('.del-btn').addEventListener('click', () => {
      deleteData(post.id)
    })
    cardDiv.querySelector('.edit-btn').addEventListener('click', () => {
      editData(post.id)
    })
    postsBox.appendChild(cardDiv)
  })
}


let getPosts = async () => {
  try {
    console.log(currentUser)

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      posts.push({ ...doc.data(), id: doc.id })
    });

  } catch (error) {
    console.error(error)
  }
}

// getPosts().then(()=>{
//   console.log(posts
//   )
//   renderPosts()
// })


const q = query(collection(db, "posts"), where("uid", "==", currentUser));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  posts = []
  querySnapshot.forEach((doc) => {

    posts.push({ ...doc.data(), id: doc.id })
  });
  renderPosts()
})