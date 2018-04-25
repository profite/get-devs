'use strict';

var React = require('react');
var ProductsContainer = require('./ProductsContainer.jsx');

var ProductsMainView = React.createClass({
    render: function () {
        return (
            <div>
                <ProductsContainer />
            </div>
        );
    }
});

module.exports = ProductsMainView;
