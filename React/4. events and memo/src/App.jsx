import { useState, useRef, useEffect } from 'react'
import './App.css'
import ListItems from './components/ListItems.jsx'

function App() {
  const [input, setInput] = useState(null)
  const [todos, setTodos] = useState(['a'])
  let [count, setCount] = useState(0)
  const todoInput = useRef(null) // for the input reference


//  useMemo, useCallback, memo

  let todoHandler = () => {
    if (!input) {
      console.log('fill input')
      console.log(todoInput.current)
      todoInput.current.focus()

      return
    }
    setTodos([...todos, input])
  }


  return (
    <>
      <div className='flex justify-center '>
        <h3>{count}</h3>
        <button className='border-2 p-2' onClick={() => setCount(++count)}>+</button>
      </div>
      <div className='flex justify-center p-3 gap-2'>
        <input type='text' placeholder='enter todo'
          ref={todoInput}
          className=' p-2 outline-1'
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <button onClick={todoHandler}
          className='p-2 border-2 border-blue-900'
        >add</button>
      </div>

      <div className='flex items-center flex-col'>
        {(todos.length) < 1 ?
          <h2>no todo items</h2>
          :
          todos.map((item) => (
            <ListItems todo={item} />
          ))
        }
      </div>





      {/* <div
    onClick={()=> console.log('parent div')}
     style={{border:'1px solid black', width: '100%', padding:'2px'}}>

      <button
      onClick={(e)=> {
        e.stopPropagation()
        clickHandler() 
      }}
      >click</button>
    </div>
     */}
    </>
  )
}

export default App
