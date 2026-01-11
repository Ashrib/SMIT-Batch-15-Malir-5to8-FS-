"use client"
import axios from "axios";
import { useState } from "react";

export default function Dashboard() {
   let [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <button className="border-1 p-3 bg-red-400"
        
        onClick={async()=>{
          try {
            let response = await axios.get('/api/auth/logout');
            console.log("Logout Response:", response);
          } catch (error) {
            console.error("Logout Error:", error);
          }
        }}
        >Logout</button>
      </div>
      <div>this is Dasboard page</div>
      <div className="mx-3">
        <h3>count: {count} </h3>
        <button className="border-1 p-3 bg-blue-400" onClick={()=> setCount(count++)}>++</button>
      </div>
    </div>
  );
}
