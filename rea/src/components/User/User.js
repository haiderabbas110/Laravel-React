import { path_server, request_delay } from "../../Constants";
import React,{Component,useState, useEffect} from "react"
import useToken from '../../useToken';
import { useNavigate } from 'react-router';

function User(){
    const axios = require('axios');
    const { token, setToken } = useToken();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState("");
    let navigate = useNavigate();
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      useEffect(() => {
        allUsers();
      },[]);

      const allUsers = () => {

        axios.get(path_server+"/api/users", config)
        .then(res => {
            const users = res.data.users;
            setData(users);
        }).catch(error => { 
          navigate('/login');
          /* console.log(error); 
          return Promise.reject(error);  */
        });;
      }


    return (
      <div className="Users">

          All Users

          <ul>
             { 
               Object.keys(data).map((anObjectMapped, index) => {
                 const val = data[anObjectMapped];

                 return <li>
                          <h3>{val.name}</h3>
                          <span>{val.email}</span>
                        </li>
            })

              }
          </ul>

      <div>
       
    
      </div>
           
      </div>
    );
    }
export default User;