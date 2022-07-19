import React from 'react'

const TodoCard = ({ id, todo }) => {
    return (
        <li id={id} className="list-group-item">{todo}</li>
    )
}

export default TodoCard