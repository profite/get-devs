'use strict';

var React = require('react');

var ProductItem = React.createClass({
    propTypes: {
        product: React.PropTypes.shape({
            image: React.PropTypes.string.isRequired,
            title: React.PropTypes.string.isRequired,
            price: React.PropTypes.number.isRequired,
            inventory: React.PropTypes.number.isRequired
        }).isRequired,
        onAddToCartClicked: React.PropTypes.func.isRequired
    },

    render: function () {
        var product = this.props.product;
        if(product.realPrice > 0){
            var _price = <div><div className="float-left line-through discount">R$ {product.realPrice}</div><div className="float-left"> | R$ {product.price}</div><div className="clear"></div></div>;            
        }
        else{
            var _price = <div><div className="float-left">R$ {product.price}</div><div className="clear"></div></div>;
        }

        if(product.parcelaX > 0){
            var _c = product.price / product.parcelaX; 
            var _parcelaX = <div><div className="parcelas"><span>ou</span> {product.parcelaX} x  <span>de</span> R$ {_c}</div></div>;            
        }

        if(product.freteGratis){
           var _frete = <div className="alertas">frete grátis</div>;        
        }

        if(product.novidade){
            var _novidade = <div className="alertas">novidade</div>;            
        }
      
        return (


            <div className="item float-left">
                {_frete}
                {_novidade}
                <div className="thumbnail align-center">
                    <img src={product.image} alt="product image" />
                </div>
                
                <div className="ranking">
                    <div className="">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star off"></i>
                        <i className="fa fa-star off"></i>
                        <i className="fa fa-star off"></i>
                    </div>
                </div>
                
                <div className="name">
                    <div className=""> {product.title}</div>
                </div>

                <div className="price">
                    {_price}
                    {_parcelaX}
                </div>
                <button className='add-to-cart' id="addToCart"
                   onClick={this.props.onAddToCartClicked}
                    disabled={product.inventory > 0 ? '' : 'disabled'}>
                    {product.inventory > 0 ? 'Adicionar ao carrinho' : 'Fora de estoque'}<i className="icon-add-car"></i>
                </button>
            </div>

        );
    }
});

module.exports = ProductItem;

/*
 <div className="uk-panel uk-panel-box uk-margin-bottom">
                <img className="uk-thumbnail uk-thumbnail-mini uk-align-left" src={product.image} />
                <h4 className="uk-h4">{product.title} - R$ {product.price}</h4>
                <button className="uk-button uk-button-small uk-button-primary"
                    onClick={this.props.onAddToCartClicked}
                    disabled={product.inventory > 0 ? '' : 'disabled'}>
                    {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
                </button>
            </div>
*/