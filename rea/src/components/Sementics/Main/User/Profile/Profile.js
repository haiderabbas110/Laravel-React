import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Modal from 'react-bootstrap/Modal'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import './profile.scss';
const Profile = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const { userData: currentUserData } = useSelector((state) => state.auth);
  const [user, setUser] = useState("");
  /* const [email, setEmail] = useState(currentUserData && currentUserData.email);
  const [phone, setPhone] = useState(currentUserData && currentUserData.phone_number); */


//  console.log(currentUserData.email);
    // const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow() {
      setShow(true);
    }

    async function handleSubmit(event) {
     
    }

  return (
    <section className="profileSection">
      <div className="profileImage">
        <Image src="https://via.placeholder.com/150" className="rounded float-left" alt="..." />
      </div>
      {currentUserData && 
      <div className="profileMeta">
        <h3>
          <strong>{currentUserData.name}</strong>
          <i className="fa fa-edit fa-edit" onClick={() => handleShow()}></i>
        </h3>
         <p>
          {currentUserData.designation}
        </p>
        <ul>
          <li>
            <strong>Email:</strong> {currentUserData.email}
          </li>
          <li>
            <strong>Cell Phone:</strong> {currentUserData.phone_number}
          </li>
          <li>
            <strong>Emergency Contact:</strong> {currentUserData.emergency_number}
          </li>
          <li>
            <strong>Skills:</strong> {currentUserData.skills}
          </li>
        </ul>
      </div>
      }

    {currentUserData && 
      <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit} className="editProfile">
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={currentUserData.email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="phone">
              <Form.Label>Cell Phone</Form.Label>
              <Form.Control
                type="text"
                value={currentUserData.phone_number}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="phone">
              <Form.Label>Emergency Phone</Form.Label>
              <Form.Control
                type="text"
                value={currentUserData.emergency_number}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="phone">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                type="text"
                value={currentUserData.skills}
              />
            </Form.Group>

            <Button block size="sm" type="submit" className="">
                Update
              </Button>

            
          
          </Form>
        </Modal.Body>
      </Modal>
    </>
  }
    </section>
  );
};

export default Profile;