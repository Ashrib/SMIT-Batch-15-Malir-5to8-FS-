'use client'
import React, { useEffect } from 'react'

const User = () => {

  let fetchUsers = async () => {
    try {
      let res = await fetch('/api/users');
      res = await res.json()
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>User page</div>
  )
}

export default User