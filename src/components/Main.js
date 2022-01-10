import React from 'react';

import Homepage from './Homepage';
import CV from './CV';
import Projects from './Projects';
import Contact from './Contact';

import {Switch, Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/CV' component={CV} />
        <Route path='/Projects' component={Projects} />
        <Route path='/Contact' component={Contact} />
    </Switch>
)

export default Main;