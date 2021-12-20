import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
  } from 'react-router-dom';
import { LoggedInUser } from "../../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
function Main({setToken}){
    const { isLoggedIn } = useSelector(state => state.auth);

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
      }

    return (
        <main className="main">
            <Outlet />
        </main>
    );
}

export default Main;