import React, {useState} from 'react'
import { useMutation } from 'react-apollo-hooks'
import {ADD_MEAL_TO_DAY, REMOVE_MEAL_FROM_DAY} from '../graphql/mutations'
import {GET_DAYS, GET_MEALS} from '../graphql/queries'
import Meal from './Meal';

const Day = ({day: {id, name, meals}}) => {
    const [isDragTarget, setIsDragTarget] = useState(false);
    const [addMealsToDay] = useMutation(ADD_MEAL_TO_DAY, {
        refetchQueries: [{ query: GET_MEALS }]
    })
    const [removeMealFromDay] = useMutation(REMOVE_MEAL_FROM_DAY, {
        refetchQueries: [{ query: GET_MEALS }, { query: GET_DAYS }]
    })

    const dragEnter = (e) => {
        e.preventDefault()
        setIsDragTarget(true)
    }
    const dragLeave = (e) => {
        e.preventDefault()
        setIsDragTarget(false)
    }
    const drop = (e) => {
        e.preventDefault()
        setIsDragTarget(false)
        addMealsToDay({ variables: {
            dayId: id,
            mealId: e.dataTransfer.getData('id')
        }})
    }

    return (
        <div
            className={`${isDragTarget ? 'drag-target' : ''}`}
            onDragOver={dragEnter}
            onDragLeave={dragLeave}
            onDrop={drop}
        >
            <h2>{name}</h2>
            <ul>
                {meals.map(meal => <Meal
                    key={meal.id}
                    meal={meal}
                    removeCallback={removeMealFromDay.bind(null, {
                        variables: {mealId: meal.id, dayId: id}
                    })}
                />)}
            </ul>
        </div>
    )
}

export default Day