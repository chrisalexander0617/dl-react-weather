import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import CurrentWeather from './CurrentWeather';
import Forcast from './Forcast';

function Nav(){
    return (
        <>
         
        <Route>
            <nav>
                <li>
                    <Link to="/">Current</Link>
                </li>
                <li>
                    <Link to="/forcast">Forcast</Link>
                </li>
            </nav>
        </Route>

        <Switch>
            <Route exact path="/">
                 <CurrentWeather />
            </Route>
            <Route path="/forcast">
                <Forcast />
            </Route>
        </Switch>
        </>
    )
}

export default Nav