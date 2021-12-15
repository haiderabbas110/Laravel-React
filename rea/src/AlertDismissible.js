import React,{useState} from "react"
import Toast from 'react-bootstrap/Toast'
// import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";


function AlertDismissible({props}) {
  const [show, setShow] = useState(props.display.show);
  
  return (
      <Col className="alertBox">
        <Toast onClose={() => setShow(false)} bg={props.type} show={show}>
          <Toast.Header>
            { 
              Object.keys(props.data).map((anObjectMapped, index) => {
                const val = props.data[anObjectMapped];
  
                 return  <strong className="">{val}</strong>
            })
            }
          
          </Toast.Header>
          <Toast.Body>{props.description}</Toast.Body>
        </Toast>
      </Col>
    
  );
}
export default AlertDismissible;