
var data = ['karachi', 'lahore'];


var userCity = prompt('enter city').toLowerCase();
var check = false;

var a = "sgdf"
a.toUpperCase();

for (var i = 0; i < data.length; i++) {
    if (userCity === data[i]) {
        console.log('found!');
        check = true;
        break;
    }
}
if (check === false) {
    console.log('not found!')
}





