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

export const ADD_MEAL_TO_DAY = gql`mutation AddMealsToDay($mealId: ID!, $dayId: ID!) {
  updateDay(
    where: {id: $dayId}
    data: {meals: {connect: {id: $mealId}}}
  ) {
    id
    name
    meals {id name}
  }
}`

export const REMOVE_MEAL_FROM_DAY = gql`mutation removeMealFromDay($mealId: ID!, $dayId: ID!) {
  updateDay(
    where: {id: $dayId}
    data: {meals: {disconnect: {id: $mealId}}}
  ) {
    id
    name
    meals {id name}
  }
}`