import { Button } from '@/components/Button';
import React from 'react'

const Post = async({params}) => {

    let {id} = await params;
    

  return (
    <>
    <div>Specific Post {id}</div>
    <Button/>
    </>
  )
}

export default Post