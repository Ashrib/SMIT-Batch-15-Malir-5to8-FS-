import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incByAmount } from '../redux/counter/counterSlice.js'

function Counter() {
    const count = useSelector((state)=> state.count.value)
  const dispatch = useDispatch()
  return (
    <div>
        <div>
          count:  {count}
        </div>
        <button
        onClick={()=> dispatch(increment())}>++</button>
        <button
        onClick={()=> dispatch(decrement())}>--</button>
        <button
        onClick={()=> dispatch(incByAmount(100))}>increment 100</button>
      </div>
  )
}

export default Counter