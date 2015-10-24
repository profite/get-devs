'use strict';

var React = require('react');
var CartContainer = require('./CartContainer.jsx');

var CartMainView = React.createClass({
    render: function () {
        return (
            <div>
                <CartContainer />
            </div>
        );
    }
});

module.exports = CartMainView;
