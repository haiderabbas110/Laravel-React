import React,{Component, useState} from "react"
import { Route, Routes } from "react-router";
import './App.css';
import Login from './components/Sementics/Main/Login/Login';
import User from './components/Sementics/Main/User/User';
import Main from './components/Sementics/Main/Main';
import Profile from './components/Sementics/Main/User/Profile';
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
            <Route element={<Main />}>
              <Route path="/user" element={<User />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    </>

     
    );
  }
export default App;
