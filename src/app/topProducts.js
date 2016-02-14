'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

var products = require('./products.json');

///

var Products = React.createClass({
    render: function(){
        var freeShipping = this.props.isFreeShipping ? <span className="product-shipping">Frete Grátis</span> : null;
        var newProduct = this.props.isNew ? <span className="product-new">Novidade</span> : null;
        var price = this.props.priceWithDiscount ? <span className="product-price-old">R$ {this.props.price} </span>
                    : <span className="product-price">R$ {this.props.price} </span>;
        var withDiscount = this.props.priceWithDiscount ? <span className="product-discount">| R$ {this.props.priceWithDiscount}</span> : null;
        var withInstallments = this.props.qtyInstallments ?
                                <p className="product-installment">ou {this.props.qtyInstallments}x de {this.props.installments.toFixed(2)}</p> : null;

        return (
            <div className="product">
                <div className="product-view">
                    {freeShipping}
                    {newProduct}
                    <img src={this.props.image} className="product-img"/>
                </div>
                <div className="product-stars">
                    <span className="fa fa-star"></span>
                </div>
                <p className="product-name">{this.props.name}</p>
                <p className="product-value">
                    {price}
                    {withDiscount}
                </p>
                {withInstallments}
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
                <div>
                    {this.state.products.map(function(product){
                        return (
                            <Products isFreeShipping={product.isFreeShipping} isNew={product.isNew} image={product.image} stars={product.stars}
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
