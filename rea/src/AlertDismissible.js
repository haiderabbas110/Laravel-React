import React,{useState} from "react"
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

const AlertDismissible = ({props}) => {
  const [show, setShow] = useState(props.display);
  
  return (
    <ToastContainer className="alertBox" position="top-end">
        <Toast onClose={() => setShow(false)} bg={props.type} show={show} bg={props.type}>
          <Toast.Header>
            { 
                  <strong className="">{props.message}</strong>
            }
          
          </Toast.Header>
          <Toast.Body>{props.description}</Toast.Body>
        </Toast>
      </ToastContainer>
    
  );
}
export default AlertDismissible;