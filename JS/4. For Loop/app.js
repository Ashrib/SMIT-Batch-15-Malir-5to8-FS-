
var names = ['usman', 'hamza', 'shazil', 'maaz', 'aniq', 'hamza'];

for(var i = 0; i <= 9; i++){
    // console.log(i);
}

// for(var i = 0; i < names.length ; i++){
//     if(names[i] === 'maaz'){
//         console.log('at index:' , i);
//         break;
//     }
//     console.log(i);
// }
// console.log(names);

for(var i = names.length-1; i >=0; i--){
    // console.log(names[i]);
}


var count = 0;
for(var i = 0; i < names.length ; i++){
   if(names[i] === 'hamza'){
    count++;
   }
}
// console.log(count)




// for (var i = 0; i <7; i++) {   // n + 1
//     console.log(nums[i]) // n
//     console.log(nums[i]) // n
// }


// for (var i = 1; i < 6; i++) {  // n+1
//         console.log('outer i:', i); // n
//         for (var j = 1; j < 6 ; j++) {  //n+1
//             console.log('inner j:', j); // 5^2
//         }
//     }


var firstName = ['hamza','maaz','naeem'];
var lastName = ['ameer','sabir', 'ahmed'];
for(var i=0; i<firstName.length; i++){
    console.log(firstName[i] + ' ' + lastName[i])
}

var nums = [3,5,6];
var nums2 = [10,20,12,32,13];

var total = 0;
for(var i=0; i<nums.length; i++){
    // console.log(nums[i]);
    for (var j = 0; j < nums2.length; j++) {
        // console.log(nums2[j] * nums[i]);
        total += nums2[j] * nums[i]
    }
    console.log('total of: ',nums[i], " " , total);
    console.log('----------');
}
