import { path_server, request_delay } from "../../Constants";
import React,{Component,useState, useEffect} from "react"
import ReactDOM from "react-dom"
//import './Login.css';
import { withRouter } from "react-router";


function Login(){

      const axios = require('axios');

      // this.state = {
      //   value: 'Please write an essay about your favorite DOM element.'
      // };
  
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);

      // handleSubmit(event) {
      //   alert('An essay was submitted: ' + this.state.value);
      //   event.preventDefault();
      // }
      
          const handleSubmit= (e) => {
            e.preventDefault();
            // axios({
            //   method: "post",
            //   url: path_server+"/api/login",
            //   data: {"email":"haider.abbas@yopmail.com", "password":"haider555"},
            //   headers: { "Content-Type": "multipart/form-data" },
            // })
            // .then(function (response) {
            //   //handle success
            //   console.log(response);
            // })
            // .catch(function (response) {
            //   //handle error
            //   console.log(response);
            // });

            axios.post(path_server+"/api/login")
              .then(res => {
                console.log(res);
                console.log(res.data);
              });
              
          }

    
          return (
            <form onSubmit={handleSubmit}>
              <label>Email:</label>
              <input type="email" name="email" />
              <label>Password:</label>
              <input type="password" name="password" />
              <input type="submit" value="Submit" />
            </form>
          );
        }

        export default Login;