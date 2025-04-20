

var score = document.getElementById('score')

function showConsole(e){
  console.log(e.target.style.backgroundColor  )
}

var body = document.getElementsByTagName('body')[0]
var colors = ['red','yellow','green','blue']

for (let i = 0; i < 30; i++) {
  var randomNum = Math.floor(Math.random()*4)
  var divElm = document.createElement('div')
  divElm.className = 'card';
  divElm.style.backgroundColor = colors[randomNum];  
  // divElm.innerText = dataArray[i];
  // divElm.innerText = "Hello"
  divElm.addEventListener('click', showConsole)
  
  body.appendChild(divElm)
}



