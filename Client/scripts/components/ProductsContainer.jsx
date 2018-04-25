'use strict';

var React = require('react');
var ProductItem = require('./ProductItem.jsx');
var ProductsList = require('./ProductsList.jsx');
var ProductStore = require('../stores/ProductStore');
var ActionCreators = require('../actions/ActionCreators');


function _getStateFromStores () {
    return {
        products: ProductStore.getAllProducts()
    };
}

var ProductItemContainer = React.createClass({
    onAddToCartClicked: function () {
        ActionCreators.addToCart(this.props.product);
    },

    render: function () {
        return (
            <ProductItem product={this.props.product} onAddToCartClicked={this.onAddToCartClicked} />
        );
    }
});

var ProductsListContainer = React.createClass({
    getInitialState: function () {
        return _getStateFromStores();
    },

    componentDidMount: function () {
        ProductStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        ProductStore.removeChangeListener(this._onChange);
    },

    render: function () {
        var nodes = this.state.products.map(function (product) {
            return <ProductItemContainer key={product.id} product={product} />;
        });

        return (
            <ProductsList>
                {nodes}
            </ProductsList>
        );
    },

    _onChange: function () {
        this.setState(_getStateFromStores());
    }
});

module.exports = ProductsListContainer;
