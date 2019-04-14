import React from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { GET_MEALS } from '../graphql/queries'
import { DELETE_MEAL } from '../graphql/mutations'

const MealList = () => {
    const { data, error, loading } = useQuery(GET_MEALS)
    const deleteMeal = useMutation(DELETE_MEAL, { refetchQueries: [{ query: GET_MEALS }] })
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error! {error.message}</div>
    }

    return (
        <ul>
            {data.meals.map(meal => (
                <li key={meal.id}>{meal.name} <button onClick={() => deleteMeal({variables: {id: meal.id}})}>Remove</button></li>
            ))}
        </ul>
    )
}

export default MealList