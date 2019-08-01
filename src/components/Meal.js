import React from 'react'

const Meal = ({ meal: { id, name }, removeCallback }) => (
    <li draggable onDragStart={e => {e.dataTransfer.setData('id', id)}}>
        {name} <button onClick={removeCallback}>Remove</button>
    </li>
)

export default Meal