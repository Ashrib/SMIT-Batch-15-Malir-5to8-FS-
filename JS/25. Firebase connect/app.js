import { collection, getDocs, db, addDoc, doc, deleteDoc, updateDoc } from './firebase/firebaseConfig.js'

let users = [];
//read data
let readData = async () => {
    try {
        users = [];
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            users.push({ uid: doc.id, ...doc.data() })
        });
        console.log("users=> ", users)
    } catch (error) {
        console.error(error)
    }
}
// delete data
let deleteData = async (uid) => {
    try {
        await deleteDoc(doc(db, "users", uid)).then(() => {
            console.log('successfully deleted!')
            readData().then(() => {
                renderUsers()
            })
        })
    } catch (error) {
        console.error(error)
    }
}
// updateData
let updateData = async (uid) => {
    try {
        console.log(uid)
        let form = document.querySelector('#form')
        const updateDocRef = doc(db, "users", uid);
        await updateDoc(updateDocRef, {
            name: form[0].value,
            email: form[1].value,
            age: form[2].value,
            address: form[3].value,
        }).then(() => {
            console.log('successfully updated!')
            readData().then(() => {
                renderUsers()
            })

            form.reset() // to reset the form
            document.querySelector('.update').style.display = 'none'
            document.querySelector('#add_btn').style.display = 'block'
        });
    } catch (error) {
        console.error(error)
    }
}

// edit data
let editData = async (uid) => {
    let form = document.querySelector('#form')

    console.log('edit', uid)
    let findUser = users.find((user) => user.uid === uid)
    form[0].value = findUser.name
    form[1].value = findUser.email
    form[2].value = findUser.age
    form[3].value = findUser.address
    document.querySelector('.update').style.display = 'flex'
    form.querySelector('#add_btn').style.display = 'none'

    let updateBtn = document.createElement("span")
    updateBtn.id = 'update_btn'
    updateBtn.innerText = "Update"
    updateBtn.addEventListener('click', () => {
        updateData(uid)
    })
    let updateDiv = document.querySelector('.update')
    updateDiv.innerHTML = ''
    updateDiv.appendChild(updateBtn)

}




let cardBoxDiv = document.querySelector('.cards-box')
let renderUsers = () => { // render users card
    cardBoxDiv.innerHTML = ''  // to remove old data
    users.map((user) => {
        let cardDiv = document.createElement('div')
        cardDiv.className = 'card'
        cardDiv.innerHTML = `
            <div class="btns">
            <button class="del-btn">delete</button>
            <button class="edit-btn">edit</button>
            </div>
            <h2>${user?.name}</h2>
            <h2>${user?.age}</h2>
            <h2>${user?.email}</h2>
            <h2>${user?.address}</h2>
        `
        cardDiv.querySelector('.del-btn').addEventListener('click', () => {
            deleteData(user.uid)
        })
        cardDiv.querySelector('.edit-btn').addEventListener('click', () => {
            editData(user.uid)
        })
        // document.querySelector('#form').addEventListener('submit', (e) => editData(e, user.uid))
        cardBoxDiv.appendChild(cardDiv)
    })
}

// initial call to read data and render users
readData().then(() => {
    renderUsers()
})

// create data
let createData = async (e) => {
    e.preventDefault();
    try {
        console.log(`data:`, {
            name: e.target[0].value,
            email: e.target[1].value,
            age: parseInt(e.target[2].value),
            address: e.target[3].value,
        })

        const docRef = await addDoc(collection(db, "users"), {
            name: e.target[0].value,
            email: e.target[1].value,
            age: parseInt(e.target[2].value),
            address: e.target[3].value,
        });

        readData().then(() => {
            renderUsers()

        })
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

document.querySelector('#form').addEventListener('submit', createData)
