import React,{useState, useEffect} from "react"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router';
import Image from "react-bootstrap/Image";
import './login.scss';
import  AlertDismissible  from "../../../../AlertDismissible";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../../actions/auth";
import UserService from "../../../../services/user.service";
import { LoggedInUser } from "../../../../actions/auth";


function Login(){
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState("");
    const [submitted, setSubmitted] = useState("");
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

  

    const props = {
      data:data,
      description:"",
      display:true,
      setShow:true,
      type:"danger"
    }

    function validateForm() {
      return email.length > 0 && password.length > 0;
     // return true;
    }

    async function handleSubmit(event) {
      event.preventDefault();
      setLoading(true);

    
        dispatch(login(email, password))
          .then(() => {
            navigate('/profile');
          })
          .catch(() => {
            setLoading(false);
        });
    }

    return (
      <section>
        {/* {submitted && <AlertDismissible props={props} />} */}
        {message && (
                <div className="form-group alertBox">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
      <div className="headerBackground">
        
        <div className="loginLeft">
        <Image src="../assets/login/white_logo.png" fluid />

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
              <Button block size="lg" type="submit" disabled={!validateForm()}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              </Button>
            </Form.Group>
          
          </Form>
        </div>
        </div>
      </section>
    );
}

export default Login;