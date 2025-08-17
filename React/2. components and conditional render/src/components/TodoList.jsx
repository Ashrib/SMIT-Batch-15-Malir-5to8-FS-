import React from 'react'
import ListItem from './ListItem.jsx'

const TodoList = () => {
    let data = [
        { task: 'speech', isCompleted: true },
        { task: 'go to market', isCompleted: false },
        { task: 'assignment', isCompleted: false },
        { task: 'dinner', isCompleted: false },
    ]

    return (
        <div>
            <h2>Todo List</h2>
            <div style={{
                display: 'flex',
                gap: '10px',
                flexDirection: 'column'
            }}>
                {data.map((todo,i) => (
                    <ListItem key={i} taskName={todo.task} isCompleted={todo.isCompleted}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList