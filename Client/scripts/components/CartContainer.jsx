'use strict';

var React = require('react');
var Cart = require('./Cart.jsx');
var CartStore = require('../stores/CartStore');
var ActionCreators = require('../actions/ActionCreators');

function _getStateFromStores () {
    return {
        products: CartStore.getAddedProducts(),
        total: CartStore.getTotal(),
        totalItens: CartStore.getTotalItens()
    };
}

var CartContainer = React.createClass({
    getInitialState: function () {
        return _getStateFromStores();
    },

    componentDidMount: function () {
        CartStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        CartStore.removeChangeListener(this._onChange);
    },

    onCheckoutClicked: function () {
        if (!this.state.products.length) {
            return;
        }
        ActionCreators.cartCheckout(this.state.products);
    },

    render: function () {
        return (
            <Cart products={this.state.products} total={this.state.total} totalItens={this.state.totalItens} onCheckoutClicked={this.onCheckoutClicked} />
        );
    },

    _onChange: function () {
        this.setState(_getStateFromStores());
    }
});

module.exports = CartContainer;
