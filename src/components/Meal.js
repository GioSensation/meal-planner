import React from 'react'
import { useMutation } from 'react-apollo-hooks'
import { GET_MEALS, GET_DAYS } from '../graphql/queries'
import { DELETE_MEAL, REMOVE_MEAL_FROM_DAY } from '../graphql/mutations'

const Meal = ({ meal: { id, name }, removeAction = 'delete', dayId }) => {
    const deleteMeal = useMutation(DELETE_MEAL, { refetchQueries: [{ query: GET_MEALS }, { query: GET_DAYS }] })
    const removeMealFromDay = useMutation(REMOVE_MEAL_FROM_DAY, { refetchQueries: [{ query: GET_MEALS }, { query: GET_DAYS }] })
    const removeCallback = () => {
        if (removeAction === 'delete') {
            deleteMeal({variables: { id }})
        } else {
            removeMealFromDay({variables: {mealId: id, dayId}})
        }
    }

    return (
        <li draggable onDragStart={e => {e.dataTransfer.setData('id', id)}}>
            {name} <button onClick={removeCallback}>Remove</button>
        </li>
    )
}

export default Meal