var cities = ['karachi', 'lahore' ];
var nums = [4,5,6,7];
var bool = [true,false,true];
var mixArray = ['abc', 10, true, '', 100];



console.log(cities[2])
console.log(nums)//

nums = [1,2,3];
console.log(nums)//

mixArray[0] = 90;
console.log(mixArray)//

console.log(mixArray.length)//

mixArray[5] = 200;
mixArray[7] = 200;

console.log(mixArray)//

mixArray.push(1000, true, 'abc');
console.log(mixArray)//

mixArray.pop();
mixArray.pop();
console.log(mixArray)//

mixArray.unshift(0,1,3)
console.log(mixArray)//

mixArray.shift();
console.log(mixArray)//


var arr = [[1,2,[2,[3]]],4,5,6];
console.log(arr[0][2][0]);//
