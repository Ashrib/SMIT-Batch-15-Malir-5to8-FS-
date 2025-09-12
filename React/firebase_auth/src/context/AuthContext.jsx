import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

  return (
    <AuthContext value={{user,setUser}} >
        {children}
    </AuthContext>
  )
}

export default AuthContextProvider