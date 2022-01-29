import {React, useState, useEffect} from "react"
import Image from "react-bootstrap/Image";
import './header.scss';
import { Navbar,Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { logout } from "../../../actions/auth";
import { useDispatch, useSelector } from "react-redux";

function Header(){
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(false);
    const settingHandle = () => show ? setShow(false) : setShow(true);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const state = useSelector((state) => state.auth);
    const logOut = (e) => {
        e.preventDefault()
        dispatch(logout());
        navigate('/login')
    }

    useEffect(() => {
        setTitle(document.title);
    },[navigate])
   
    if(window.location.pathname === "/login"){
        return null
    }else{
        return (
            <header className="geneHeader">
                <section className="leftHeadingSection">
                    <Image src="../assets/header/logo.jpg" fluid />
                </section>
                <section className="rightHeadingSection">
                    <div className="heading">
                        <h1>{document.title}</h1>
                    </div>
                    <div className="nav">
                        <Navbar>
                            <Nav className as="ul" className="justify-content-center">
                                <Nav.Item as="li" className="annoucements"> 
                                    
                                    <Nav.Link href="#home">
                                        <Image src="../assets/header/announceIcon.png" />
                                        Annoucements
                                    </Nav.Link>
                                </Nav.Item>
                                
                                <Nav.Item as="li" className="discussions">
                                    <Nav.Link href="#features">
                                        <Image src="../assets/header/discussionIcon.png" />
                                        Discussions
                                    </Nav.Link>
                                </Nav.Item>
                                
                                <Nav.Item as="li" className="jobs">
                                    
                                    <Nav.Link href="#pricing">
                                        <Image src="../assets/header/jobsIcon.png" />
                                        Jobs
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="leaveTools">
                                    <Nav.Link href="#pricing">
                                        <Image src="../assets/header/leaveIcon.png" />
                                        Leave Tool
                                        </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="supportTicket">
                                    <Nav.Link href="#pricing">
                                        <Image src="../assets/header/supportIcon.png" />
                                        Support Ticket
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar>
                    </div>
                    <div className="profile">
                        <div className="icon">
                            <Image src="https://via.placeholder.com/150" className="rounded float-left" alt="..." />
                        </div>
                        <div className="text">
                            <span className="welcome">Welcome</span>
                            <span className="userName">{state.userData && state.userData.name.toUpperCase()}</span>
                        </div>
                        <div className="setting">
                            <span onClick={settingHandle}><Image src="../assets/header/settingIcon2.png" className="rounded float-left" alt="..." /></span>

                        </div>

                       { show && <div className="dropdown">
                            <ul>
                                <li> 
                                    <Link to={'/profile'}>Edit Profile</Link>
                                </li>
                                <li> 
                                    <Link to={'/'}>Change password</Link>
                                </li>
                                <li> 
                                    <Link to={'/'} onClick={logOut}>Logout</Link>
                                </li>
                            </ul>
                        </div>
                        }
                    </div>
                </section>
            </header>
        )
    }
}
export default Header;