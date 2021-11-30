import { path_server, request_delay } from "../../Constants";
import React,{Component,useState, useEffect} from "react"
import ReactDOM from "react-dom"
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";

import Button from "react-bootstrap/Button";

function User(){
    const axios = require('axios');
    const userToke =   localStorage.getItem("userToken");
    const history = useHistory();

    if(!userToke){
      this.history.pushState(null, 'login');


    }
      axios.get(path_server+"/api/users")
      .then(res => {
        if(res){
     
        }

      });

    return (
      <div className="Users">
All Users
      </div>
    );
    }
export default User;