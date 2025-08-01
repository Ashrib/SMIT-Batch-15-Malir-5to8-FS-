// closure
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    }
}

let countValue = outer();
console.log(countValue())
console.log(countValue())
console.log(countValue())


// function currying
function total(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(total(5)(10)(10));


// null vs undefined
var a;
var b = null;



//  let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve()
//     },3000)
// }) 


let fetchData = async (api) => {
    return await fetch(api).then(res => res.json())
}

let api1 = 'https://api1'
let api2 = 'https://api2'
let api3 = 'https://api3'


let g = new Promise((res, rej) => {
    setTimeout(() => {
        res('data fetched')
    }, 2000)
})
let f = new Promise((res, rej) => {
    setTimeout(() => {
        res('data  fetched')
    }, 2000)
})
let e = new Promise((res, rej) => {
    setTimeout(() => {
        res('data fetched')
    }, 2000)
})

Promise.all([g, f,e])
    .then((values) => {
        console.log(values)
        console.log('all data fetched');
})









