import React from 'react';

export default React.createClass({
    propTypes: {
        params: React.PropTypes.object.isRequired
    },

    render() {
        return (
            <div>
                <h2>{this.props.params.userName}</h2>
                <h2>{this.props.params.repoName}</h2>
            </div>
        );
    }
});
