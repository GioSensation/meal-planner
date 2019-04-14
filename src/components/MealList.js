import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { GET_MEALS } from '../graphql/queries'
import Meal from './Meal';

const MealList = () => {
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
                <Meal key={meal.id} meal={meal} />
            ))}
        </ul>
    )
}

export default MealList