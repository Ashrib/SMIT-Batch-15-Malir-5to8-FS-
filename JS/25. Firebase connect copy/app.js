import { collection, db, getDocs, query, where } from "./firebase/firebaseConfig.js";


let getData = async()=>{
    try {
        const usersRef = collection(db, "users");
        // const q = query(usersRef, where("cities", "array-contains",'lahore'));
        const q = query(usersRef, where("name", 'in', ['user5','update 2']));
        let fetchData = await getDocs(q);
        fetchData.forEach(doc => {
            console.log({id: doc?.id, ...doc.data()})
        });
    } catch (error) {
        console.error(error)
    }
}
getData()



