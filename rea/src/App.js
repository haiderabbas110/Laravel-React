import React,{Component, useState} from "react"
import { Route, Routes } from "react-router";
import './App.css';
import Login from './components/Login/Login';
import User from './components/User/User';
import useToken from './useToken';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const { token, setToken } = useToken();
  
  if(!token) {
      return <Login setToken={setToken} />
  }

    return (
    <>
       
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
        </Routes>
    </>

     
    );
  }
export default App;
