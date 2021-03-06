import React, { useState, useEffect,useRef  } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-bootstrap/Modal'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import './profile.scss';
import { path_server, request_delay } from "../../../../../Constants";
import { UpdateUser, UpdateUserImage } from "../../../../../actions/auth";

const Profile = () => {
  const { userData: user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [phone, setPhone] = useState();
  const [emergency, setEmergency] = useState();
  const [skills, setSkills] = useState();
  const [profileImage, setProfileImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  

  useEffect(() => {
    setPhone(user && user.phone_number);
    setEmergency(user && user.emergency_number)
    setSkills(user && user.skills)
    setProfileImage(path_server+"/asset/"+ (user && user.profile_image))
    document.title = "Edit Profile";
  }, [user]);

  function handleShow() {
    setShow(true);
  }


  const handleFileSelect = (event) => {
    event.preventDefault();
    setSelectedFile(event.target.files[0])
    // setProfileImage(true);
  }

  const handleSubmitImage = (event) => {
  }



  const data = {
    id: user && user.id,
    phone: phone,
    emergency: emergency,
    skills: skills,
    profile: null,
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    dispatch(UpdateUser(data))
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
      });
  }

  return (
    <section className="profileSection">
      <div className="profileImage">
      <Form>
        <input type="submit" value="submit" onClick={handleSubmitImage} />
          <Form.Control
            required
            type="file"
            id="image"
            name="profile_image"
            onChange={handleFileSelect}
          />
        </Form>


        <Image src={profileImage} className="rounded float-left" alt="..." />
      </div>

      {user &&
        <div className="profileMeta">
          <h3>
            <strong>{user.name}</strong>
            <i className="fa fa-edit fa-edit" onClick={() => handleShow()}></i>
          </h3>
          <p>
            {user.designation}
          </p>
          <ul>
            <li>
              <strong>Email:</strong> {user.email}
            </li>
            <li>
              <strong>Cell Phone:</strong> {phone}
            </li>
            <li>
              <strong>Emergency Contact:</strong> {emergency}
            </li>
            <li>
              <strong>Skills:</strong> {skills}
            </li>
          </ul>
        </div>
      }

      {user &&
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
                    disabled
                    type="email"
                    value={user.email}
                  />
                </Form.Group>
                <Form.Group size="lg" controlId="phone">
                  <Form.Label>Cell Phone</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>

                <Form.Group size="lg" controlId="emergency_phone">
                  <Form.Label>Emergency Phone</Form.Label>
                  <Form.Control
                    type="text"
                    value={emergency}
                    onChange={(e) => setEmergency(e.target.value)}
                  />
                </Form.Group>

                <Form.Group size="lg" controlId="phone">
                  <Form.Label>Skills</Form.Label>
                  <Form.Control
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                  />
                </Form.Group>

                <Button block size="sm" type="submit" className="">
                  {!loading && "Update"}
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
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