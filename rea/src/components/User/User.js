import { path_server, request_delay } from "../../Constants";
import React,{Component,useState, useEffect} from "react"
import ReactDOM from "react-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function User(){
    const axios = require('axios');

      axios.get(path_server+"/api/users")
      .then(res => {
        if(res){
            debugger
        }

      });

    return (
      <div className="Users">
All Users
      </div>
    );
    }
export default User;