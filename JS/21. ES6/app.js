

// hoisting

console.log(stdName);
var stdName = 'abc';



if(true){
 let data = []

 console.log(data)
}

let num = 50

if(true){
    let data = []
    
    console.log(num)
    let num1 = 20
    console.log(num1)
}

const value = 0;


// arrow functions
let arrowFun = (num ,num2) => console.log('arrow function')
arrowFun();
 
let sum = (num,num2) => {
    let result = num + num2;
    return result;
}
console.log(sum(5,10));

let arr1 = [1,2,3];
let arr2 = [4,5,6,7,8,9];

let arr = [] ;
arr = arr.concat(arr1,arr2, 10,11,12)
console.log(arr)

// concat object
let array = [1, 2];

let arrayLike = {
  0: "something",
  1: "abc",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( array.concat(arrayLike) ); 


// map()
let res = arr.map((elm , i, array )=>{
        // console.log(elm, i, array)
    return elm+1
})
// console.log(res)



// spread operator
let numbers = [2,3,4,6,7,34,6,23]
let numbers2 = [45,56,678,456,34]
let resultArr = [200, ...numbers, ...numbers2, 200]
// console.log(resultArr)


let obj1 = {
    a: 10,
    b: 20,
}
let obj2 = {
    c: 120,
    d: 220,
}
let obj = {...obj1, ...obj2, e:200}
// console.log(obj)


// .push() logic 
let names = ['ali','maaz'];
names = [...names, 'usman'];

// rest parameters
let usersData = (name,email, contact, ...others)=>{ /// ...others is a rest parameter here
    // rest parameter is always an array
    console.log(name,email,contact,others)
    console.log(email)
    console.log(contact)
    console.log(others)
}
// passing different no.of arguments
usersData('ali', 'ali@gmail.com', '0310000000')
usersData('usman', 'usman@gmail.com', '03100000111','address')
usersData('usman', 'usman@gmail.com', '03100000111','address','age')
usersData('usman', 'usman@gmail.com', '03100000111','address','age')

// filter even numbers
let nums = [2,5,7,9,5,9,6];
console.log(nums.filter((item) => item%2 === 0))

let users = [
    {
        age: 20,
        city: 'karachi'
    },
    {
        age: 22,
        city: 'karachi'
    },
    {
        age: 23,
        city: 'lahore'
    }
];

// filter users with age
let filteredUsers = users.filter((user)=> user.age < 23);
console.log(filteredUsers);
















