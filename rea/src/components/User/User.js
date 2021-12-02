import { path_server, request_delay } from "../../Constants";
import React,{Component,useState, useEffect} from "react"
import ReactDOM from "react-dom"
import Form from "react-bootstrap/Form";
import history from '../../history'
import Button from "react-bootstrap/Button";
import useToken from '../../useToken';
function User(){
    const axios = require('axios');
    const { token, setToken } = useToken();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
      
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      useEffect(() => {
      
        axios.get(path_server+"/api/users", config)
        .then(res => {
          if(res){
            res.data.users.map((anObjectMapped, index) => {
                  setName(anObjectMapped.name);
                  setEmail(anObjectMapped.email);
            })
            
          }
        });

      },[]);

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