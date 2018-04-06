import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../templates/header';
import Footer from '../templates/footer';
import Index from '../pages/index';

export default props => (
  <Router>
    <div className="wrapper">
      <Header />
      <Route exact path='/' component={Index} />
      <Footer />
    </div>
  </Router>
)