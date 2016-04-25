import React          from 'react';
import { Route,
         IndexRoute } from 'react-router';
import App            from './App';
import About          from './Axis/About';
import Repos          from './Axis/Repos';
import Repo           from './Axis/Repo';
import Home           from './Axis/Home';

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/repos" component={Repos}>
            <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/about" component={About} />
    </Route>
);
