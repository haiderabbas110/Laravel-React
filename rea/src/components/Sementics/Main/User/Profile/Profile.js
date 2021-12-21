import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Modal from 'react-bootstrap/Modal'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import './profile.scss';
import UserService from "../../../../../services/user.service";

const Profile = () => {
  const { userData: currentUserData } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);

    function handleShow() {
      setShow(true);
    }

    async function handleSubmit() {
      UserService.setUserProfile().then(
        (response) => {
          //dispatch(LoggedInUser(response.data.user));
        },
        (error) => {
          const _content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
            return _content;
        }
      );

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
        <Form onClick={() => handleSubmit(currentUserData.id)  }  className="editProfile">
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                disabled
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

            <Button block size="sm" type="button" className="">
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