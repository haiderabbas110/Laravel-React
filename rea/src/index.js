import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login/Login';
import User from './components/User/User';
import reportWebVitals from './reportWebVitals';
import history from './history'


ReactDOM.render(
  <BrowserRouter history={history}>
    <App />
    <Login />
    <User />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
