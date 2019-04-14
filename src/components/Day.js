import React from 'react'
import { useSubscription } from 'react-apollo-hooks'
import { SUBSCRIBE_TO_DAY } from '../graphql/subscriptions';

const Day = ({day: {id, name, meals}}) => {
    const { data, error, loading } = useSubscription(SUBSCRIBE_TO_DAY, {
        variables: { id },
        onSubscriptionData: ({ client, subscriptionData }) => {
            // Optional callback which provides you access to the new subscription
            // data and the Apollo client. You can use methods of the client to update
            // the Apollo cache:
            // https://www.apollographql.com/docs/react/advanced/caching.html#direct
            console.log(subscriptionData);
        }});
    // if (loading) {
    //     return <div>Loading...</div>
    // }
    // if (error) {
    //     return <div>Error! {error.message}</div>
    // }

    console.log(data, error, loading)

    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {meals.map(meal => <li key={meal.id}>{meal.name}</li>)}
            </ul>
        </div>
    )
}

export default Day