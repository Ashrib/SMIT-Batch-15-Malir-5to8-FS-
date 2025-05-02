var colorDiv = document.querySelectorAll('.colorDiv')
var emptyDiv = document.querySelectorAll('.empty')
var selectedColor = '';
var selectedText = '';

for( var i=0; i<colorDiv.length; i++){
    colorDiv[i].addEventListener('click', function (e){
         selectedColor = e.target.style.backgroundColor
         selectedText = e.target.innerText
        console.log(selectedColor)
    }
    )
}


for( var i=0; i<emptyDiv.length; i++){
    emptyDiv[i].addEventListener('click', function (e){
        console.log(e.target)
        if(selectedColor){
            e.target.style.backgroundColor = selectedColor;
            e.target.innerText = selectedText;
        }
        else{
            alert('select the color !!')
        }
    }
    )
}




// console.log(document.getElementById('center').childNodes[0].nodeValue)

