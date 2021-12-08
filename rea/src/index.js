import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import Header from './components/Sementics/Header/Header';
import Sidebar from './components/Sementics/Sidebar/Sidebar';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Sidebar />
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
