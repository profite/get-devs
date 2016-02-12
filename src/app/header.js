'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    render: function(){
        return (
            <header>
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
