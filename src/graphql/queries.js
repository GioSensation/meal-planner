import gql from 'graphql-tag'

export const GET_MEALS = gql`{
    meals {
        id
        name
    }
}`

export const GET_DAYS = gql`{
    days {
        id
        name
        meals {
            id
            name
        }
    }
}`