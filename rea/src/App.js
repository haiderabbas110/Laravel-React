import React,{Component, useState} from "react"
import { Route, Routes } from "react-router";
import './App.css';
import Login from './components/Login/Login';
import User from './components/User/User';
import useToken from './useToken';

//import CusRoutes from './Route';
function App() {
  const { token, setToken } = useToken();
  if(!token) {
      return <Login setToken={setToken} />
  }

  const routeData = {
    "login":"Login",
    "user":"User"
  };
  Object.keys(routeData).map((anObjectMapped, index) => {
    const val = routeData[anObjectMapped];
    const key = anObjectMapped;
})
    return (
    <>
         <div className="App">
          <h1>Genetech Intranet!</h1>
        </div>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
        </Routes>
    </>

     
    );
  }
export default App;
