import React,{useState, useEffect} from "react"
import Alert from 'react-bootstrap/Alert'
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "./actions/message";

const AlertDismissible = ({props}) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const onClose = () => {
    setShow(false);
  }
  setTimeout(() => {
    dispatch(clearMessage()); // clear message when changing location
    setShow(false);
  }, 2000);
  useEffect(() => {
    !props.loading  && setShow(true);
  },[props])

  return (
    show &&  <Alert variant={props.type} onClose={onClose} dismissible className="position-fixed alertBox">
    {/* <Alert.Heading>Error</Alert.Heading> */}
    <p>
      {props.message}
    </p>
    </Alert>
  
  );
  
}
export default AlertDismissible;