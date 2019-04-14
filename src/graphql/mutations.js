import gql from 'graphql-tag'

export const ADD_MEAL = gql`mutation AddMeals($name: String!) {
  createMeal(data: { name: $name }) {
    id
    name
  }
}`

export const DELETE_MEAL = gql`mutation DeleteMeal($id: ID!) {
  deleteMeal(where: { id: $id }) {
    id
  }
}`