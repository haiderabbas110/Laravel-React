import React,{useEffect} from "react"
import { Route, Routes } from "react-router";
import Login from './components/Sementics/Main/Login/Login';
import User from './components/Sementics/Main/User/User';
import Main from './components/Sementics/Main/Main';
import Profile from './components/Sementics/Main/User/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import './App.scss';
import { clearMessage } from "./actions/message";
import UserService from "./services/user.service";
import { LoggedInUser } from "./actions/auth";
import Header from './components/Sementics/Header/Header';
import Sidebar from './components/Sementics/Sidebar/Sidebar';


function App() {

  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.auth);
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
  }, [isLoggedIn]);

  

    return (
    <>
        {isLoggedIn && 
          <>
            <Header />
            <Sidebar />
          </> 
        }
        <Routes>
            {!isLoggedIn && 
              <> 
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
              </>
            }
            
              <Route element={<Main />}>
                <Route path="/user" element={<User />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            
        </Routes>
    </>

     
    );
  }
export default App;
