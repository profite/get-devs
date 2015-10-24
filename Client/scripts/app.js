'use strict';

require('es5-shim');
require('es5-shim/es5-sham');

var React = require('react');
var ProductsMainView = require('./components/ProductsMainView.jsx');
var CartMainView = require('./components/CartMainView.jsx');

var WebAPIUtils = require('./utils/WebAPIUtils');

WebAPIUtils.getAllProducts();

React.render(
    React.createElement(CartMainView, null),
    document.getElementById('reactCar')
);

React.render(
    React.createElement(ProductsMainView, null),
    document.getElementById('reactProdutos')
);
