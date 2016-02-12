'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    render: function(){
        return (
            <main>
                <div className="carousel">
                    <div className="carousel-icons">
                        <div className="left-arrow">
                            <span className="fa fa-angle-left"></span>
                        </div>
                        <div className="dots">
                            <span className="fa fa-circle-o"></span>
                            <span className="fa fa-circle"></span>
                            <span className="fa fa-circle-o"></span>
                        </div>
                        <div className="right-arrow">
                            <span className="fa fa-angle-right"></span>
                        </div>
                    </div>
                    <div className="carousel-text">
                        <p>Coleção</p>
                        <p>Lorem Ipsum Dolor</p>
                        <button>Conferir</button>
                    </div>
                </div>
            </main>
        )
    }
})
