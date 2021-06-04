import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from '../pages/About'
import Areas from '../pages/Areas'
import Landing from '../pages/Landing'
import Header from '../components/Header'
import {ABOUT, AREAS, LANDING} from './paths'


const Routes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route component={Landing} exact path={LANDING} />
                <Route component={About} exact path={ABOUT} />
                <Route component={Areas} exact path={AREAS} />
            </Switch>
        </Router>
    )
}

export default Routes
