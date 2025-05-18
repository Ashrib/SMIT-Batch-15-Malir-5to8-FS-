let mainDiv = document.querySelector('.main');
let data = [];

function renderCards() { 
    if (data.length < 1) {
        console.log('no data!')
        return
    }

    for (let i = 0; i < data.length; i++) { // loop on data array
        mainDiv.innerHTML += `<div class="card" style="width: 18rem;">
  <img src=${data[i].image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data[i].firstName + " " + data[i].lastName}</h5>
    <p class="card-text">Email: ${data[i].email}</p>
    <p class="card-text">Address: ${data[i].address.address}, ${data[i].address.city}</p>
  </div>
</div>`
    }
}

async function fetchData() {  // async function
    try {
        let response = await fetch('https://dummyjson.com/users');
        response = await response.json();  // convert data in JSON format
        data = response.users;
        console.log(data);
    } catch (error) {
        console.error(error)
    }
}

fetchData().then(function () { // then() will work on when fetchData() successfully completed
    renderCards() // render cards on screen after data fetch
})






// let getData = function (){  
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('success')

//         },2000)
//     })
// }


// async function handleData (){
// console.log( await getData())
// return await getData()

// }
// console.log(handleData())
// handleData()