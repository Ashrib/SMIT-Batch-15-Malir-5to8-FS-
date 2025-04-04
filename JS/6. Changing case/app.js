
var data = ['karachi', 'lahore'];


// var userCity = prompt('enter city').toLowerCase();
// var check = false;

// var a = "sgdf"
// a.toUpperCase();

// for (var i = 0; i < data.length; i++) {
//     if (userCity === data[i]) {
//         console.log('found!');
//         check = true;
//         break;
//     }
// }
// if (check === false) {
//     console.log('not found!')
// }

var username = 'ali';

var firstChar = username.slice(0,1).toUpperCase();
var remainChar = username.slice(1).toLowerCase();
console.log(firstChar+remainChar);  


var input = prompt('enter string');
for (var i = 0; i < input.length; i++) {
    // console.log(i);
    if(input.slice(i, i+2) === '  '){
        alert('no double spaces!');
        break;
    }
}

var text = "The New New Yorker magazine doesn't doesn't allow the phrase World War II some more text."
var text2 = "The New New Yorker magazine doesn't allow the phrase World War II some more text."
for (var i = 0; i < text.length; i++) {
    if(text.slice(i, i+12) === 'World War II'){
        text = text.slice(0,i) + "the Second World War" + text.slice(i+12);
        break;
    }
}
console.log(text);

var charIndex = text2.indexOf('World War II');
if( charIndex !== -1){
    text2 = text2.slice(0, charIndex) + "the Second World War" + text2.slice(charIndex+12);
}
console.log(text2);



console.log(text.charAt(2));
console.log(text[2]);


console.log(text.replace(/doesn't/g, 'does'));