import { create } from 'zustand'
import Cookie from 'js-cookie'
import axios from 'axios'

 (async()=>{
   try {
    const token = Cookie.get('token');
  if (token) {
      let response = await axios.get('http://localhost:3000/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      console.log("user data from authStore:", response);
      useAuth.setState({ user: response.data.data });
  }
  } catch (error) {
    console.log("error in authStore useEffect:", error);
  }
 })()

const useAuth = create((set) => ({
  user: null,
    updateUser: (newUser) => set({ user: newUser }),
}))

export default useAuth