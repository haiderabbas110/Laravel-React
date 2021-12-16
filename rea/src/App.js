import React,{useEffect} from "react"
import { Route, Routes } from "react-router";
import './App.css';
import Login from './components/Sementics/Main/Login/Login';
import User from './components/Sementics/Main/User/User';
import Main from './components/Sementics/Main/Main';
import Profile from './components/Sementics/Main/User/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import { clearMessage } from "./actions/message";
import UserService from "./services/user.service";
import { LoggedInUser } from "./actions/auth";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    UserService.getUserProfile().then(
      (response) => {
        dispatch(LoggedInUser(response.data.user));
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
          return _content;
      }
    );
  }, []);

  

    return (
    <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Main />}>
              <Route path="/user" element={<User />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    </>

     
    );
  }
export default App;
