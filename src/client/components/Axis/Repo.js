import React from 'react';

export default React.createClass({
    propTypes: {
        params: React.PropTypes.object.isRequired
    },

    render() {
        return (
            <div>
                <h2>Username: {this.props.params.userName}</h2>
                <h2>Repo: {this.props.params.repoName}</h2>
            </div>
        );
    }
});
