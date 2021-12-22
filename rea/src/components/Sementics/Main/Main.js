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
import  AlertDismissible  from "../../../AlertDismissible";
function Main({setToken}){
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
    const props = {
      message : message,
      display : true,
    }
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
      }

    return (
        <main className="main">
          {/* <div className="form-group alertBox">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div> */}
          {message && 

                <AlertDismissible props={props} />
              }

            <Outlet />
        </main>
    );
}

export default Main;