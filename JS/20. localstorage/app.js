let todos = ['a ','b'];


window.localStorage.setItem('username', 'abc')
window.localStorage.setItem('todo', 'todo')



let data = window.localStorage.getItem('username')
console.log(data)


let todoBox = document.querySelector(".todoBox");
console.log(todoBox);

function toStoreLocalStorage(){
    window.localStorage.setItem('todos', JSON.stringify(todos))
}
function toGetLocalStorage(){
    let data = JSON.parse(window.localStorage.getItem('todos'))
    if(data){
        todos = data
    }
   console.log(data)
}
toGetLocalStorage()

function renderTodos() { // function to render todos on screen
    todoBox.innerHTML = ''

  if(todos.length<1){ //check if no todo in array
    let todoDiv = document.createElement("div");
    todoDiv.innerText = 'no todo';
    todoBox.appendChild(todoDiv);
    return
  }

  for (let i = 0; i < todos.length; i++) { // loop on todos and render
    let todoDiv = document.createElement("div");
    let todoSpan = document.createElement("span")
    todoSpan.style.paddingRight = '20px';
    let todoDelete = document.createElement("button");
    todoDelete.id = i;
    todoDelete.innerText = 'delete';
    todoDelete.addEventListener('click', function (e){ // todo delete function
        console.log(e.target.id)
        todos.splice(e.target.id, 1)
        console.log(todos)
        toStoreLocalStorage()
        renderTodos()
    })

    todoDiv.className = "todo";
    todoSpan.innerText = todos[i];


    todoDiv.appendChild(todoSpan);
    todoDiv.appendChild(todoDelete);
    todoBox.appendChild(todoDiv);
  }
}
renderTodos()

function handleAdd() {
    let inpValue = document.querySelector("#todo-input").value;
    
    if(inpValue.length<1){ // validation for input
        alert("enter todo")
        return;
    }
    todos.push(inpValue);
    console.log(todos);
    toStoreLocalStorage()
    renderTodos()
}
