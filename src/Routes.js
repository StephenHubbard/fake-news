import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/form' component={Form} />
    </Switch>
)