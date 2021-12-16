import React,{useState, useEffect} from "react";
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import UserService from "../../../../services/user.service";
import { LoggedInUser } from "../../../../actions/auth";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { userData: currentUserData } = useSelector((state) => state.auth);
console.log(currentUserData)
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
 /*  
  useEffect(() => {
    nowUser();
  },[]) */;

  /* if (!currentUser) {
    return <Navigate to="/login" />;
  }
 */

  return (
    <div>
      <header>
        <h3>
          Hi, <strong>{user.name}</strong>
        </h3>
      </header>
      <p>
        <strong>Id:</strong> {user.id}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      
    </div>
  );
};

export default Profile;