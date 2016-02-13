'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    render: function(){
        return (
            <section>
                <div className="registration-form">
                    <div className="form-img">
                        <img src="../img/desconto.gif" />
                    </div>

                    <div className="form-inputs">
                        <div className="form-name">
                            <a>Nome</a><br/>
                            <input type="text" name="name"/>
                        </div>
                        <div className="form-email">
                            <a>E-mail</a><br/>
                        <input type="email" name="email"/>
                        </div>
                        <button className="form-btn">Cadastrar</button>
                    </div>
                </div>
            </section>
        )
    }
})
