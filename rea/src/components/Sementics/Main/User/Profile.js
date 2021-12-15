import React,{useState, useEffect} from "react";
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import UserService from "../../../../services/user.service";
import { LoggedInUser } from "../../../../actions/auth";

const Profile = () => {
  /* const { user: currentUser } = useSelector((state) => state.auth);
  const { userData: currentUserData } = useSelector((state) => state.auth); */

  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  
  useEffect(() => {
    nowUser();
  },[]);

  /* if (!currentUser) {
    return <Navigate to="/login" />;
  }
 */

  const nowUser = () => {
    UserService.getUserProfile().then(
      (response) => {
        setUser(response.data.user);
       /*  dispatch(LoggedInUser(response.data.user))
        .then(() => {
        })
        .catch(() => {
        }); */
        return response;
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
          setUser(_content);
          return _content;
      }
    );
  }

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