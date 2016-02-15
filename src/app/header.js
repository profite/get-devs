'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

var HeaderDesktop = React.createClass({
    render: function(){
        return (
            <header id="header" className="header-desktop">
                <nav className="header-main">
                    <div className="header-search">
                        <span className="fa fa-search"></span>
                        <input type="text" name="search"></input>
                    </div>
                    <div className="header-logo">
                        <img src="../img/profite-logo.png"/>
                    </div>
                    <div className="header-user">
                        <div className="header-login">
                            <a href="#">Login / Cadastre-se</a>
                        </div>
                        <div className="header-cart">
                            <span className="cart-qty">0</span>
                            <img src="../img/carrinho.png"/>
                        </div>
                        <div className="header-price">
                            <strong>R$ 0,00</strong>
                        </div>
                    </div>
                </nav>
                <nav className="header-menu">
                    <div className="header-links">
                        <a>Novidades</a>
                        <a>Masculino</a>
                        <a>Feminino</a>
                        <a>Marcas</a>
                        <a>Ofertas</a>
                    </div>
                </nav>
            </header>
        )
    }
})

var HeaderMobile = React.createClass({
    render: function(){
        return (
            <header id="header" className="header-mobile">
                <div className="mobile-logo">
                    <img src="../img/profite-logo.png"/>
                </div>
                <input type="checkbox" id="control-nav" />
                <label htmlFor="control-nav" className="control-nav"></label>
                <label htmlFor="control-nav" className="control-nav-close"></label>

                <nav className="mobile-menu">
                    <div className="mobile-user">
                        <div className="mobile-login">
                            <a href="#">Login / Cadastre-se</a>
                        </div>
                        <div className="mobile-cart">
                            <span className="cart-qty">0</span>
                            <img src="../img/carrinho.png"/>
                        </div>
                        <div className="mobile-price">
                            <strong>R$ 0,00</strong>
                        </div>
                    </div>
                    <div className="mobile-search">
                        <span className="fa fa-search"></span>
                        <input type="text" name="search"></input>
                    </div>
                    <div className="mobile-links">
                        <a>Novidades</a>
                        <a>Masculino</a>
                        <a>Feminino</a>
                        <a>Marcas</a>
                        <a>Ofertas</a>
                    </div>
                </nav>


            </header>
        )
    }
})




module.exports = React.createClass({
    render: function(){
        return (
            <div>
                <HeaderDesktop/>
                <HeaderMobile/>
            </div>
        )
    }
})
