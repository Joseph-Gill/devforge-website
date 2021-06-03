import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Header from '../components/Header'


const Routes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <div />
            </Switch>
        </Router>
    )
}

export default Routes
