'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

var products = require('./products.json');
var AppDispatcher = require('./AppDispatcher');

///
var AddToCart = React.createClass({
    addToCart: function() {
        AppDispatcher.dispatch({
            eventName: 'product-added',
            product: this.props.product
        });
    },
    render: function() {
        return (
            <button className="product-add-cart" onClick={this.addToCart}>
                Adicionar ao Carrinho <i className="fa fa-shopping-cart fa-lg cart"></i>
            </button>
        )
    }
})

var Product = React.createClass({
    render: function(){
        var freeShipping = this.props.product.isFreeShipping ? <span className="product-shipping">Frete Grátis</span> : null;
        var newProduct = this.props.product.isNew ? <span className="product-new">Novidade</span> : null;
        var price = this.props.product.priceWithDiscount ? <span className="product-price-old">R$ {this.props.product.price} </span>
                    : <span className="product-price">R$ {this.props.product.price} </span>;
        var withDiscount = this.props.product.priceWithDiscount ? <span className="product-discount"> | R$ {this.props.product.priceWithDiscount}</span> : null;
        var withInstallments = this.props.product.qtyInstallments ?
                                <span className="product-installment">ou
                                    <span className="product-discount"> {this.props.product.qtyInstallments}x </span>
                                    de <span className="product-discount"> R$ {this.props.product.installments.toFixed(2)}</span>
                                </span> : null;
        var stars = this.props.product.stars;
        return (
                <div className="product">
                    {freeShipping} <br/>
                    {newProduct}
                    <img src={this.props.product.image} className="product-img"/>
                    <div className="product-stars">
                        {Array.apply(1, Array(5)).map(function (x, i) {
                            return i < stars ? <span key={i} className="fa fa-star yellow"></span> : <span key={i} className="fa fa-star gray"></span>;
                        })}
                    </div>
                    <p className="product-info">
                        {this.props.product.name}<br/>
                        {price}
                        {withDiscount}<br/>
                        {withInstallments}
                    </p>
                    <AddToCart product={this.props.product} />
                </div>
        )
    }
})

module.exports = React.createClass({
    getInitialState: function(){
        return {
            products: products.data
        }
    },
    render: function(){
        return (
            <section className="top-products">
                <h3>Mais comprados</h3>
                <div className="products">
                    {this.state.products.map(function(product){
                        return (
                            <Product key={product.id} product={product}>
                            </Product>
                        )
                    })}
                </div>
            </section>
        )
    }
})
