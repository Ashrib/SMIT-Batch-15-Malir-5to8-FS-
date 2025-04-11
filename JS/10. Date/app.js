var currentDate = new Date();

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log(dayNames[currentDate.getDay()])
console.log('getMonth:',currentDate.getMonth())
console.log('getFullYear:',currentDate.getFullYear())
console.log('getHours:',currentDate.getHours())
console.log('getMinutes:',currentDate.getMinutes())
console.log('getMilliseconds:',currentDate.getMilliseconds())
console.log('getTime:',currentDate.getTime())


var futureDate = new Date('June 11, 2028 15:30:00')
console.log('date 2',futureDate.getMinutes())

var mNow = currentDate.getTime();
var mFuture = futureDate.getTime();
var diff = mFuture - mNow ;
diff = diff / (1000* 60 * 60 * 24 * 30 *12)  ;

console.log(Math.round(diff))



var hrSpan = document.getElementById('hr');
var minSpan = document.getElementById('min');
var secSpan = document.getElementById('sec');

console.log(hrSpan.innerText)

// callback functions
setInterval(function (){
    var now = new Date();
    if(now.getHours() > 12){
        hrSpan.innerText = now.getHours() - 12;
    }
    else if(now.getHours() === 0){
        hrSpan.innerText = 12;
    }
    else{
        hrSpan.innerText =  now.getHours();
    }
    minSpan.innerText = now.getMinutes();
    secSpan.innerText = now.getSeconds();
}, 1000);




// var a = {
//     day:5,
//     date:12,
// }




