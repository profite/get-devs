'use strict';

var React = require('react');

var ProductsList = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function () {
        return (
            <div>
                <div className="wrap-container clearfix">{this.props.children}</div>
            </div>
        );
    }
});

module.exports = ProductsList;
