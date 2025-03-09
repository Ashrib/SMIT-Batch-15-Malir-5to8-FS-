
var names = ['usman', 'hamza', 'shazil', 'maaz', 'aniq'];

for(var i = 0; i <= 9; i++){
    // console.log(i);
}

for(var i = 0; i < names.length ; i++){
    if(names[i] === 'maaz'){
        console.log('at index:' , i);
        break;
    }
    console.log(i);
}
console.log(names);
