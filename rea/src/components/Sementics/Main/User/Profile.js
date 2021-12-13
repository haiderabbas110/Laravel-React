import React,{useState, useEffect} from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";


import UserService from "../../../../services/user.service";
const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [user, setUser] = useState("");
  
  
  useEffect(() => {
    nowUser();
  },[]);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }


  const nowUser = () => {
    UserService.getUserProfile().then(
      (response) => {
        setUser(response.data.user);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
          setUser(_content);
      }
    );
    
  }

  return (
    <div className="container">
      <header className="jumbotron">
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