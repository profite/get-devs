'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

var products = require('./products.json');

///
var AddToCart = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    increment: function() {
        this.setState(
            {
                counter: this.state.counter + 1
            }
        );
    },
    render: function() {
        return (
            <button className="product-add-cart" onClick={this.increment}>
                Adicionar ao Carrinho <i className="fa fa-shopping-cart fa-lg cart"></i>
            </button>
        )
    }
})

var Products = React.createClass({
    render: function(){
        var freeShipping = this.props.isFreeShipping ? <span className="product-shipping">Frete Grátis</span> : null;
        var newProduct = this.props.isNew ? <span className="product-new">Novidade</span> : null;
        var price = this.props.priceWithDiscount ? <span className="product-price-old">R$ {this.props.price} </span>
                    : <span className="product-price">R$ {this.props.price} </span>;
        var withDiscount = this.props.priceWithDiscount ? <span className="product-discount"> | R$ {this.props.priceWithDiscount}</span> : null;
        var withInstallments = this.props.qtyInstallments ?
                                <span className="product-installment">ou
                                    <span className="product-discount"> {this.props.qtyInstallments}x </span>
                                    de <span className="product-discount"> R$ {this.props.installments.toFixed(2)}</span>
                                </span> : null;
        var stars = this.props.stars;
        return (
                <div className="product">
                    {freeShipping} <br/>
                    {newProduct}
                    <img src={this.props.image} className="product-img"/>
                    <div className="product-stars">
                        {Array.apply(1, Array(5)).map(function (x, i) {
                            return i < stars ? <span key={i} className="fa fa-star yellow"></span> : <span key={i} className="fa fa-star gray"></span>;
                        })}
                    </div>
                    <p className="product-info">
                        {this.props.name}<br/>
                        {price}
                        {withDiscount}<br/>
                        {withInstallments}
                    </p>
                    <AddToCart />
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
                            <Products key={product.id} isFreeShipping={product.isFreeShipping} isNew={product.isNew} image={product.image} stars={product.stars}
                                    name={product.name} price={product.price} priceWithDiscount={product.priceWithDiscount}
                                    qtyInstallments={product.qtyInstallments} installments={product.installments}>
                            </Products>
                        )
                    })}
                </div>
            </section>
        )
    }
})
