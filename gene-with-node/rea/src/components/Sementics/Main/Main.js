import React,{useState, useEffect} from "react"
import { Outlet } from 'react-router-dom';
import { LoggedInUser } from "../../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import  AlertDismissible  from "../../../AlertDismissible";

const Main = () => {
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message, variant } = useSelector(state => state.message);
    const [loading, setLoading] = useState(false);
    
    const props = {
      message : message,
      display : true,
      type:variant,
      loading:loading
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
      }
    return (
        <main className="main">
          {message && <AlertDismissible props={props} /> }
          <Outlet />
        </main>
    );
}

export default Main;