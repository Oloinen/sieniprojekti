import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Main from '../Main.jsx'
import ScreenMain from '../scomponents/ScreenMain.jsx'

const Routings = props => (
    <Router>
        <div>
        <Navigation />
        <div className="content">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/mushrooms" component={ScreenMain} />
            </Switch>
            </div>
        </div>
    </Router>
    )

export default Routings;