import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { GET_DAYS } from '../graphql/queries'
import Day from './Day';

const DayList = () => {
    const { data, error, loading } = useQuery(GET_DAYS)
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error! {error.message}</div>
    }

    return (
        <ul className="day-list">
            {data.days.map(day => <Day key={day.id} day={day} />)}
        </ul>
    )
}

export default DayList