
var roundNum = Math.round(4.4);
console.log(roundNum);

var ceilNum = Math.ceil(0.00001)
console.log(ceilNum);

var floorNum = Math.floor(20.9999)
console.log(floorNum);




function generateNum(){
    document.querySelector('#number').innerText = Math.floor((Math.random()*6 )+1)
}

var randomNum = Math.floor((Math.random() *6) + 1);
console.log(randomNum);

var opt = Math.floor((Math.random() * 9000)+ 1000);
console.log(opt);

var chars = 'abcdefghijklmnopqrstuvwxyz@#$&';
var randomChars = (Math.floor(Math.random()*90)+10) +  chars[Math.floor((Math.random() * 30))] + (Math.floor(Math.random()*90)+10) + chars[Math.floor((Math.random() * 26))]
console.log("random chars: ", randomChars);


var text = 'pop';
var text2 = ''; 

for (var i = text.length -1; i >= 0; i--) {
    text2 += text[i];
}


if(text === text2){
    console.log(true)
}
else{
    console.log(false)

}

