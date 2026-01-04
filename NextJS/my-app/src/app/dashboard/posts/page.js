import Link from 'next/link'
import React from 'react'

const Posts = () => {
  return (
    <div>
      <div> All Posts page</div>
      <Link className='block p-2 border-2 m-2' href={`/dashboard/posts/${1}`}>post 1</Link>
      <Link className='block p-2 border-2 m-2' href={`/dashboard/posts/${2}`}>post 2</Link>
      <Link className='block p-2 border-2 m-2' href={`/dashboard/posts/${3}`}>post 3</Link>
    </div>
  )
}

export default Posts