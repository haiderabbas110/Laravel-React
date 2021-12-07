import React,{useState, useEffect} from "react"
import Toast from 'react-bootstrap/Toast'
import Button from "react-bootstrap/Button";
import { Col, Row, Form } from "react-bootstrap";


function AlertDismissible({props}) {
  const [show, setShow] = useState(props.display.show);
  
  return (
      <Col className="alertBox">
        <Toast onClose={() => setShow(false)} bg={props.type} show={show}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{props.title}</strong>
          </Toast.Header>
          <Toast.Body>{props.description}</Toast.Body>
        </Toast>
      </Col>
    
  );
}
export default AlertDismissible;