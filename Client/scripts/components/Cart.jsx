'use strict';

var React = require('react');

var Product = React.createClass({
    render: function () {
        return <div>{this.props.children}</div>;
    }
});

var Cart = React.createClass({
    propTypes: {
        products: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            title: React.PropTypes.string.isRequired,
            price: React.PropTypes.number.isRequired,
            quantity: React.PropTypes.number.isRequired,
        })).isRequired,
        total: React.PropTypes.string.isRequired,
        totalItens: React.PropTypes.number.isRequired,
        onCheckoutClicked: React.PropTypes.func.isRequired
    },

    render: function () {
        var products = this.props.products;
        var hasProducts = products.length > 0;
        

        return (
            <div id="cart">
                <div id="cart-items">{this.props.totalItens}</div>
                <div id="cart-total">R$ {this.props.total}</div>
            </div>
        );
    },
});

module.exports = Cart;