import React, { useState } from 'react'

import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { getTodos, postTodos } from '../utilities/todos.js';
import { queryClient } from '../main.jsx';

function Todos() {
  const [todoValue , setTodoValue] = useState('')

  let fetchTodos = async()=>{
    let data = await getTodos();
    return data
  }
  
   let postTodoHandle = async(todoData)=>{ //post requests
    let data = await postTodos(todoData);
    return data
  }

  const { data } = useQuery({ // for get requests
    queryKey: ['todos'],
    queryFn: () => fetchTodos()
  })

  // Mutations
  const mutation = useMutation({ // for post,update,delete
    mutationFn: postTodoHandle,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
    // onError: ()=>{},
    // onSettled:()=>{}, // success or error,
    // onMutate: ()=>{} before post the todo (mutationfn)
  })

  console.log(data)

  return (
    <div>
      <div>
        <input value={todoValue} onChange={(e)=>setTodoValue(e.target.value)} type="text" placeholder='enter todo' />
        <button onClick={()=>{
          mutation.mutate(todoValue)
        }}>post</button>
      </div>
      <div>
      {data?.map(todo=>(
        <div className='border-2 p-3 my-2'>{todo}</div>
      ))}

    </div>
    </div>
  )
}

export default Todos