import './App.css'
import TodoList from './components/TodoList.jsx'
import { useState } from 'react';


function App() {
  let [count, setCount] = useState(0)
  let [name, setName] = useState('ali')


  return ( // jsx
    <>
      <div  >
        <h2>{name}</h2>
        <h2>{count}</h2>
        <button onClick={()=>{
          setCount(++count)
        }}>+</button>
        <button  onClick={()=>{
          setCount(--count)
        }}>-</button>
        {/* {array.map((obj) => (
          (obj.name === 'user3') ?
            (<h4>{obj.name}</h4>)
            :
            (<h2 >{obj.name}</h2>)
        ))} */}

        <button 
        onClick={()=>{
          setName('usman')
        }}
        >change name</button>
        <TodoList />
      </div>

    </>
  )
}

export default App
