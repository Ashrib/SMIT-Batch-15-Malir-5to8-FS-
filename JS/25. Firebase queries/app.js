import {onSnapshot, collection, db, getDocs, query, where,or,orderBy,limit } from "./firebase/firebaseConfig.js";


let getData = async()=>{
    try {
        const usersRef = collection(db, "users");
        // const q = query(usersRef, where("cities", "array-contains",'lahore'));
        // const q = query(usersRef, where("name", 'in', ['user5','update 2']));
        // const q = query(usersRef, where("name", 'not-in', ['user5','update 2']));
        //AND
        // const q = query(usersRef, 
        //     where("name", '==', 'user5'), 
        //     where('age', '>', 25),
        // );

        // OR
        // const q = query(usersRef, 
        //         or(
        //             where("name", '==', 'user5'), 
        //             where('age', '==', 25)
        //         )
        //     );

        const q = query(usersRef, where('age','>',11),  orderBy('age','desc'), limit(3) )

        let fetchData = await getDocs(q);
        fetchData.forEach(doc => {
            console.log({id: doc?.id, ...doc.data()})
        });
    } catch (error) {
        console.error(error)
    }
}
// getData()

let realTimeData = []

const unsub = onSnapshot(collection(db, "users"), (res) => {
    realTimeData = []
    res?.docs?.forEach((doc)=>{
        realTimeData.push({id: doc?.id,...doc?.data()});
    })
    console.log("data: ", realTimeData)
});

document.querySelector('#about').addEventListener('click',()=>{
    unsub() // stop listening
    window.location.assign('./about.html')
})




