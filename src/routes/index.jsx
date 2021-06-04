import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'
import Landing from '../pages/Landing'
import Areas from '../pages/Areas'
import {AREAS, LANDING} from './paths'


const Routes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route component={Landing} exact path={LANDING} />
                <Route component={Areas} exact path={AREAS} />
            </Switch>
        </Router>
    )
}

export default Routes
