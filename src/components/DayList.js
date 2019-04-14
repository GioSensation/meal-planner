import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { GET_DAYS } from '../graphql/queries'
import Day from './Day';

const DayList = () => {
    const { data, error, loading } = useQuery(GET_DAYS)
    // const { data, error, loading } = useSubscription(SUBSCRIBE_TO_DAY, { variables: { id: 'cjugme1axtwyh0b26n6bh57x1'}});
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error! {error.message}</div>
    }

    return (
        <ul>
            {data.days.map(day => <Day key={day.id} day={day} />)}
        </ul>
    )
}

export default DayList