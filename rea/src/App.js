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


function App() {

  // const { user: currentUser } = useSelector((state) => state.auth);
/*   const { 
    user: currentUser, 
    userData: currentUserData,
  } = useSelector((state) => state.auth); */

  // console.log(useSelector((state) => state.auth));
  const dispatch = useDispatch();

  useEffect(() => {
    //history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    //});
  }, [dispatch]);

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
