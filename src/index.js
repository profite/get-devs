import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import '../node_modules/font-awesome/css/font-awesome.min.css';

import Routes from './routes/routes';
import './style.css';

import reducers from './reducers/reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById('root')
);
