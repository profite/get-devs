'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    render: function(){
        return (
            <footer>
                <div className="footer">
                    <div className="footer-logo">
                        <img src="../img/profite-logo.png" />
                    </div>
                    <div className="footer-menu">
                        <h4>Navegue</h4>
                        <p><a href="#">Novidades</a></p>
                        <p><a href="#">Masculino</a></p>
                        <p><a href="#">Feminino</a></p>
                        <p><a href="#">Marcas</a></p>
                        <p><a href="#">Ofertas</a></p>
                    </div>
                    <div className="footer-menu-mobile">
                        <h4>Navegue</h4>
                        <p><a href="#">Novidades</a><br/>
                        <a href="#">Masculino</a><br/>
                        <a href="#">Feminino</a><br/>
                        <a href="#">Marcas</a><br/>
                        <a href="#">Ofertas</a></p>
                    </div>
                    <div className="footer-info">
                        <h4>Institucional</h4>
                        <p><a href="#">Lorem</a></p>
                        <p><a href="#">Ipsum</a></p>
                        <p><a href="#">Solor</a></p>
                        <p><a href="#">Sit</a></p>
                        <p><a href="#">Amet</a></p>
                    </div>
                    <div className="footer-info">
                        <h4>Lorem Ipsum</h4>
                        <p><a href="#">Lorem</a></p>
                        <p><a href="#">Ipsum</a></p>
                        <p><a href="#">Solor</a></p>
                        <p><a href="#">Sit</a></p>
                        <p><a href="#">Amet</a></p>
                    </div>
                    <div className="footer-payment">
                        <h4>Formas de Pagamento</h4>
                        <div>
                            <img src="../img/visa.png" />
                            <img src="../img/master.png" />
                            <img src="../img/hipercard.png" />
                            <img src="../img/hiper.png" />
                            <img src="../img/diners.png" />
                            <img src="../img/boleto.png" />
                        </div>
                    </div>
                </div>
                <p className="copyright">© 2015  Profite.  Todos os direitos reservados.</p>
            </footer>
        )
    }
})
