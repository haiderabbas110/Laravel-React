import { path_server, request_delay } from "../../Constants";
import React,{Component,useState, useEffect} from "react"
import ReactDOM from "react-dom"
import Form from "react-bootstrap/Form";
import history from '../../history'
import Button from "react-bootstrap/Button";

function User(){
    const axios = require('axios');
    const token =   localStorage.getItem("userToken");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
      if(!token){
        history.push('/login');
      }
      
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      
      axios.get(path_server+"/api/users", config)
      .then(res => {
        if(res){
          //setItems(res.data.users);

          res.data.users.map((anObjectMapped, index) => {
            //return (
                // <p key={`${anObjectMapped.name}_{anObjectMapped.email}`}>
                //     {anObjectMapped.name} - {anObjectMapped.email}
                // </p>

                setName(anObjectMapped.name);
                setEmail(anObjectMapped.email);
           // );
        })
          

        }

      });

    return (
      <div className="Users">

          All Users

      <div>
        {name} - {email}
      </div>
           
      </div>
    );
    }
export default User;