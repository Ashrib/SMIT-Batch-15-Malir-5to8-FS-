
var spanElm = document.getElementById('show');
var inputElm = document.getElementById('userInput');

console.log(spanElm.innerText)

function showText (){
    console.log(inputElm.value)
    spanElm.innerText = 'hello world'
    console.log('clicked')
}

function valueToSet (btnValue){
    var inputValue = inputElm.value
    if(btnValue === '='){
        var result = eval(inputValue);
        inputElm.value = result;
        return ;
    }
     if(btnValue === 'del'){
        inputElm.value = inputValue.slice(0,inputValue.length-1 )
        return;
    }
     if(btnValue === 'c'){
        inputElm.value = ''
        return;
    }
    if(btnValue === 'x2'){
        inputElm.value = Math.pow(inputValue, 2)
        return;
    }
    inputElm.value += btnValue;

}


// console.log(eval('2*5+6/7'))











