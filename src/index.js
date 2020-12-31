import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "antd/dist/antd.css";
import {createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import './index.css';


import rootReducer from './reducer';

// store
const store = createStore(rootReducer,composeWithDevTools());


ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
    <App />
  
  </BrowserRouter>


  </Provider>
  ,
  document.getElementById('root')
);


