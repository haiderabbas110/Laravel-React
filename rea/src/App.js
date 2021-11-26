import React,{Component} from "react"
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
 import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to React Router!</h1>
      </div>
     
    );
  }
}

export default App;
