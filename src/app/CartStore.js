var AppDispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _productsInCart = [];

var CartStore = assign({}, EventEmitter.prototype, {
    getTotalPrice: function(){
        var sum = 0;
        _productsInCart.forEach(function(product){
            sum += (product.priceWithDiscount) ? product.priceWithDiscount : product.price;
        });
        return sum;
    },
    getProductsQty: function(){
        return _productsInCart.length;
    },
    addProductToCart: function(product){
        _productsInCart.push(product);
    },
    emitChange: function() {
        this.emit('change');
    },
    addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
     this.removeListener('change', callback);
   }
});


AppDispatcher.register(function(action) {
    switch(action.eventName) {
        case 'product-added':
            CartStore.addProductToCart(action.product);
            CartStore.emitChange();
            break;
        default:
            break;
    }
});

module.exports = CartStore;
