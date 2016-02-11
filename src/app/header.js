'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    render: function(){
        return <header>
                    <nav>
                        <div>
                            <input type="text" name="search"></input>
                        </div>
                        <div>
                            <img src="../img/profite-logo.png"/>
                        </div>
                        <div>
                            <a href="#">Login / Cadastre-se</a>
                        </div>
                        <div>
                            <i className="fa fa-shopping-cart"></i>
                            <span>R$ </span>
                        </div>
                    </nav>
                    <nav>
                        <ul>
                            <li>Novidades</li>
                            <li>Masculino</li>
                            <li>Feminino</li>
                            <li>Marcas</li>
                            <li>Ofertas</li>
                        </ul>
                    </nav>
                </header>
    }
})
