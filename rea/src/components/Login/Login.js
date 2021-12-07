import { path_server} from "../../Constants";
import React,{useState, useEffect} from "react"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import Image from "react-bootstrap/Image";
import './login.scss';


function Login({setToken}){
  let navigate = useNavigate();

    const axios = require('axios');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
      //return email.length > 0 && password.length > 0;
      return true;
    }

    function handleSubmit(event) {
      event.preventDefault();
      const userData = {
        email: email,
        password:password
      }

      axios.post(path_server+"/api/login", userData)
      .then(res => {
        console.log(res.length);
        if (res.length === 0) {
          return Promise.reject(new Error("Empty list!"));
        }
        if(res){
          setToken(res.data.token);
          navigate('/user')
        }

      }).catch(error => { 
        
        console.log(error); 
        return Promise.reject(error); 
      });

    }

    return (
      <section className="headerBackground">
        <div className="loginLeft">

        <Image src="http://intranet.genetech.pk/intranet/assets/images/white_logo.png" fluid />

        </div>
        <div className="loginRight">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button block size="lg" type="submit" disabled={!validateForm()}></Button>
            </Form.Group>
            
          </Form>
        </div>
      </section>
    );
}

export default Login;
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};