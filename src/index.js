import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reducer from './redux-stuff/reducers';

import './index.css';
import App from './App';

const store = createStore(reducer(applyMiddleware(thunk)));

ReactDOM.render(
 <Provider store={store}>
   <App/>
 </Provider>,
 document.getElementById('root'));