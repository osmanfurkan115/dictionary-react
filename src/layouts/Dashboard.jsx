import React from 'react'
import Title from './Title'
import Search from './Search'
import { Route } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className="background">
            <Title></Title>
            <Route exact path="/" component={Search} />
        </div>
    )
}
