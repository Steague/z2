'use strict';

import React from 'react';
import NavLink from './Axis/NavLink';

export default React.createClass({
    propTypes: {
        children: React.PropTypes.object.isRequired
    },

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

                {this.props.children}

            </div>
        );
    }
});
