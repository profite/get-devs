'use strict'

require('../styles/style.scss');

var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./header');
var Carousel = require('./carousel');
var Shelf = require('./shelf');
var TopProducts = require('./topProducts');
var RegistrationForm = require('./registrationForm');
var Footer = require('./footer');

ReactDOM.render(<div>
                    <Header></Header>
                    <Carousel></Carousel>
                    <Shelf></Shelf>
                    <TopProducts></TopProducts>
                    <RegistrationForm></RegistrationForm>
                    <Footer></Footer>
                </div>, document.getElementById('app'))
