import React from 'react'
import {useMutation, useQuery} from 'react-apollo-hooks'
import {GET_DAYS, GET_MEALS} from '../graphql/queries'
import Meal from './Meal';
import {DELETE_MEAL} from "../graphql/mutations";

const MealList = () => {
    const [deleteMeal] = useMutation(DELETE_MEAL, { refetchQueries: [{ query: GET_MEALS }, { query: GET_DAYS }] })
    const { data, error, loading } = useQuery(GET_MEALS)
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error! {error.message}</div>
    }

    return (
        <ul className="meal-list">
            {data.meals.map(meal => (
                <Meal
                    key={meal.id}
                    meal={meal}
                    removeCallback={deleteMeal.bind(null, {
                        variables: {id: meal.id}
                    })}
                />
            ))}
        </ul>
    )
}

export default MealList