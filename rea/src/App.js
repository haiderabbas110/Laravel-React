import React,{Component, useState} from "react"
import { Route, Routes } from "react-router";
import './App.css';
import Login from './components/Login/Login';
import User from './components/User/User';
import Profile from './components/User/Profile';
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
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/user" element={<User />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </>

     
    );
  }
export default App;
