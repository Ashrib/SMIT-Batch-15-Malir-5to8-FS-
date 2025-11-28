import { create } from 'zustand'
import Cookie from 'js-cookie'
import { useEffect } from 'react'



let getCookie = () => {
  return Cookie.get('token') || null
}


useEffect(()=>{


  
},[])



const useAuth = create((set) => ({
  user: null,
  // token: getCookie(),
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
    updateUser: (newUser) => set({ user: newUser }),
}))

export default useAuth