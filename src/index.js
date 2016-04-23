'use strict';

import React          from 'react';
import { render }     from 'react-dom';
import { Router,
         Route,
         browserHistory,
         IndexRoute } from 'react-router';
import Hello          from './components/Axis/Hello';
import About          from './components/Axis/About';
import Repos          from './components/Axis/Repos';
import Repo           from './components/Axis/Repo';
import Home           from './components/Axis/Home';

render((
    <Router history={browserHistory}>
        <Route path="/" component={Hello}>
            <IndexRoute component={Home} />
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About} />
        </Route>
    </Router>
), document.getElementById('content'));
