'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    render: function(){
        return (
            <section className="shelf">
                <div className="shelf-img shelf-img-1">
                    <img src="../img/prateleira-1.gif"/>
                    <div className="shelf-text">Lorem Ipsum</div>
                </div>
                <div className="shelf-img shelf-img-2">
                    <img src="../img/prateleira-2.gif"/>
                    <div className="shelf-text">Lorem Ipsum</div>
                </div>
                <div className="shelf-img shelf-img-3">
                    <img src="../img/prateleira-3.gif"/>
                    <div className="shelf-text">Lorem Ipsum</div>
                </div>
            </section>
        )
    }
})
