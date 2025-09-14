import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user)
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null)
      }
    });
  }, [])


  return (
    <AuthContext value={{ user, setUser, setIsEdit, isEdit, setEditProduct,editProduct }} >
      {children}
    </AuthContext>
  )
}

export default AuthContextProvider