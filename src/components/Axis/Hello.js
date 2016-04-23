'use strict'

import React from 'react';
import NavLink from './NavLink'

export default React.createClass({
    displayName: 'HelloReact',

    render: function() {
        return (
            <div>
                <h1>Ghettohub Issues</h1>
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                </ul>

                {/* add this */}
                {this.props.children}

            </div>
        )
    }
});
