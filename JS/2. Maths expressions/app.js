

console.log(4 % 2);
console.log(3 % 2);
console.log((499 / 500) * 100);
console.log(5 - 5 + 10 /10 *20);
console.log(((5 - 5) + 10) /10 *20);

var total = ((5 - 5) + 10) /10 * 20;
console.log(total);


var num = 1;
// num = num + 1;

// post-increment
num++; // 2
num++; // 3
// num = num - 1;
// post-decrement
num--; // 2
// pre-increment
++num;
// pre-decrement
--num;

var newNum = 1;
var newNum2 = newNum--;
console.log(newNum2);
console.log(newNum);

var num3 = 2;
// num3 += 20;
num3 *= 20;
console.log(num3);

// +=
// -=
// *=
// /=

let count = 0;
let add = ()=>{
    ++count;
    document.querySelector('#counter').innerHTML = count;
}
let sub = ()=>{
    count--;
    document.querySelector('#counter').innerHTML = count;
}

