'use strict';

var shop = require('../api/shop');
var ActionCreators = require('../actions/ActionCreators');

module.exports = {
    getAllProducts: function () {
        shop.getProducts(function (products) {
            ActionCreators.receiveProducts(products);
        });
    },

    checkoutProducts: function (products) {
        shop.buyProducts(products, function () {
            ActionCreators.finishCheckout(products);
        });
    }
};
