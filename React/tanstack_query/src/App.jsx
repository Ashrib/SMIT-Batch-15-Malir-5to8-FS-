import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

function App() {

  /// using tanstack query , no more need for state varibles and useEffect, try/catch


  // const [quotes, setquotes] = useState([])
  // const [loading, setLoading] = useState(false)

  let fetchData = async()=>{
    // try {
      // setLoading(true)
      let data = await axios.get('https://dummyjson.com/quotes');
      // setquotes(data?.data?.quotes)
      // setLoading(false)
      return data
    // } catch (error) {
      // console.log(error)
      // setLoading(false)
    // }


  }


  // useEffect(()=>{
  //    fetchData()
    
  // },[])



  const {data, isError, isLoading, isPending} = useQuery({
    queryKey: ['quotes'],
    queryFn: ()=> fetchData()
  })

console.log(isPending)
console.log(data)
if(isError){
  return <h2>Error.....</h2>
}

  if(isLoading){
    return <div>loading.....</div>
  }


  return (
    <>
    {
      data?.data?.quotes?.map((quote)=>(
        <div key={quote?.id} style={{border:'1px solid black', padding:'10px'}}>
          <p style={{fontSize:'2em'}}>{quote?.quote}</p>
          <div>
          <span>Author: </span>
          <span style={{fontStyle:'italic'}}>{quote?.author}</span>
          </div>
        </div>
      ))
    }

    </>
  )
}

export default App
