import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './Js/reducer/reducer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Link, Route} from 'react-router-dom'
 


const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(reducer)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       
      <App />
      
    
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
