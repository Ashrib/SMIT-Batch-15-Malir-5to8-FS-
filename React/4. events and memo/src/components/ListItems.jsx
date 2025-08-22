import React, { useEffect ,memo} from 'react'

const ListItems = memo(({todo}) => {  /// memo to skip re-render the component

    
    console.log('list component')

  return (
    <div className='w-[60%] flex border-2 rounded-1 bg-gray-300 p-2'>
        <span className='text-2xl'>{todo}</span>
    </div>
  )
})

export default ListItems