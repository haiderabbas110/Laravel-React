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
    const userData = UserService.getUserProfile();

    console.log(UserService.getUserProfile());
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