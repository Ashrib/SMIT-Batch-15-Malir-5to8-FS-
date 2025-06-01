import { collection, getDocs, db, addDoc, doc, deleteDoc, updateDoc } from './firebase/firebaseConfig.js'

let users = [];
//read data
(async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            users.push({ uid: doc.id, ...doc.data() })
        });
        console.log("users=> ", users)
    } catch (error) {
        console.error(error)
    }
})()

// if(users){
//     users.map(user=>{
//     })
// }

// create data
document.querySelector('#add_btn').addEventListener('click', async () => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: 'user2',
            age: 23,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
})


// delete Doc
let deleteUser = async () => {
    try {
        await deleteDoc(doc(db, "users", users[0].uid)).then(() => {
            console.log('successfully deleted!')
        })
    } catch (error) {
        console.error(error)
    }
}

document.querySelector('#delete_btn').addEventListener('click', deleteUser)

// update Doc
document.querySelector('#update_btn').addEventListener('click', async () => {
try {
    const updateDocRef = doc(db, "users", users[0].uid);
    await updateDoc(updateDocRef, {
        city: 'lahore',
    }).then(()=>console.log('successfully updated!'));

} catch (error) {
    console.error(error)
}
})

