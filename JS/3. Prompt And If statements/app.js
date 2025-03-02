// var userName = prompt("Enter your name.", "ali");
// console.log( userName);
var a = "";
// if(userName == a){
// console.log("welcome");
// }

if ("5" === 5) {
  //also check data type
  console.log("yes");
}
if ("5" == 5) {
  // just check values
  console.log("yes");
}

var age = 19;
if (age !== 18) {
  console.log("age");
}

if (age <= 19) {
  console.log("true");
} else {
  console.log("false");
}
// ---------nested if else--
var gender = "male";
if (age > 17) {
  if (gender == "male") {
    console.log("web and app");
    console.log("flutter dev");
  } else {
    console.log("graphic");
  }
} else {
  console.log("sorry");
}

//----Else if-----
if (age === 18) {
  console.log("18");
} else if (age === 19) {
  console.log("19");
} else if (age === 19) {
  console.log("19");
} else if (age === 19) {
  console.log("19");
} else if (age === 19) {
  console.log("19");
} else if (age === 19) {
  console.log("19");
} else {
  console.log("sorry");
}

var obtMarks = +prompt("enter your marks");
var per = (obtMarks / 500) * 100;
console.log(obtMarks);
// if (obtMarks > 500) {
//   alert("invaild");
// } else
//  if (per >= 90) {
//   console.log("A1");
// } else if (per >= 80) {
//   console.log("A");
// } else if (per >= 70) {
//   console.log("B");
// } else {
//   console.log("F");
// }

//----test of conditions-----
 //           a                      b
if ( (per >= 90 && per <=100) || age ===19) { //OR
    console.log('A1')
}
else if(per < 90  && per >= 80){
    console.log('A');
}
else if(per < 80  && per >= 70){
    console.log('B');
}




