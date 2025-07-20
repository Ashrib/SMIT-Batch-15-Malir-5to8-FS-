import { addDoc, collection, db, getDownloadURL, ref, storage, uploadBytes } from "./firebaseConfig.js";




let imageUpload = async (fileValue) => {
    console.log(fileValue)
    try {
        const storageRef = ref(storage, `postImages/${fileValue?.name+Date.now()}`);

        // 'file' comes from the Blob or File API
        await uploadBytes(storageRef, fileValue).then(async(snapshot) => {
            console.log('Uploaded a blob or file!');
            console.log(snapshot);
            
            await getDownloadURL(storageRef).then((url) => {
                console.log(url);

                return url
                
  })
        });

    } catch (error) {
        console.error(error)
    }
}


/// flow to create
// let createPost = ()=>{
//     let hostedUrl = imageUpload()

//     if(hostedUrl){
//         addDoc(collection(db, "posts"),{
//             text: postInput,
//             image: hostedUrl,
//         })
//     }
// }


document.querySelector("#upload-btn").addEventListener("click", () => {

    let fileValue = document.querySelector("#file-input").files[0]
    if (!fileValue) {
        alert("please attach a file!")
        return;
    }
    imageUpload(fileValue)

})
