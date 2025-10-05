let todos = ['play','eat','shopping']


export let getTodos = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(todos);
    }, 1000);
  });

  export let postTodos = (todo) =>
  new Promise((res, rej) => {
    setTimeout(() => {
        todos.push(todo)
      res([...todos]);
    }, 1000);
  });