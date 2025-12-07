import { create } from 'zustand'
import Cookie from 'js-cookie'
import axios from 'axios'


(async()=>{
  try {
    const token = Cookie.get('token');
  if (token) {
      let response = await axios.get('http://localhost:3000/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      // console.log("users data from userStore:", response);
      useUsers.setState({ users: response.data.users });
  }
  } catch (error) {
    console.log("error in authStore useEffect:", error);
  }
 })()

const useUsers = create((set) => ({
  users: [],
    addUsers: (newUser) => { set((state) => {
      const preUsers = state.users;
      const updatedUsers = [...preUsers, newUser]; 
      return { users: updatedUsers };
    });
  },
  updateUsers: (newUsers) => {set({users: [...newUsers]})}


}))

export default useUsers