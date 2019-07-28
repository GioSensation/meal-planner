import React from 'react'
import { useMutation } from 'react-apollo-hooks'
import { ADD_MEAL } from '../graphql/mutations'
import { GET_MEALS } from '../graphql/queries'

const AddMeal = () => {
    const [addMeal] = useMutation(ADD_MEAL, {refetchQueries: [{query: GET_MEALS}]})

    return (
        <form onSubmit={event => {
                event.preventDefault()
                addMeal({ variables: { name: event.target.elements[0].value } })
                event.currentTarget.reset()
            }}>
            <input type="text" />
            <button>Add meal</button>
        </form>
    )
}

export default AddMeal