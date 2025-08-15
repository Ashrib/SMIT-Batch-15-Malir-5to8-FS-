import React from 'react'

const ListItem = ({taskName,isCompleted}) => {
    
    return (
        <div style={{
            backgroundColor: `${isCompleted? 'green':'red'}`,
            border: '1px solid white',
            padding: '5px 10px'
        }}>
            <span>{taskName}</span>
        </div>
    )
}

export default ListItem