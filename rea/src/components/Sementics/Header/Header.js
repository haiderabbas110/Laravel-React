import {React, useState, useEffect} from "react"
import Image from "react-bootstrap/Image";
import './header.scss';
import { Navbar,Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import useToken from '../../../useToken';



function Header(){
    const [show, setShow] = useState(false);
    const settingHandle = () => show ? setShow(false) : setShow(true);
    const { token, setToken } = useToken();
    let navigate = useNavigate();

    const logOut = () => {
        setToken("");
        navigate('/login');
    }
        
   
    
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
                        <h1>Heading</h1>
                    </div>
                    <div className="nav">
                        <Navbar>
                            <Nav className as="ul" className="justify-content-center">
                                <Nav.Item as="li" className="annoucements"> 
                                    
                                    <Nav.Link href="#home">
                                        <Image src="http://intranet.genetech.pk/intranet/assets/images/announceIcon.png" />
                                        Annoucements
                                    </Nav.Link>
                                </Nav.Item>
                                
                                <Nav.Item as="li" className="discussions">
                                    <Nav.Link href="#features">
                                        <Image src="http://intranet.genetech.pk/intranet/assets/images/discussionIcon.png" />
                                        Discussions
                                    </Nav.Link>
                                </Nav.Item>
                                
                                <Nav.Item as="li" className="jobs">
                                    
                                    <Nav.Link href="#pricing">
                                        <Image src="http://intranet.genetech.pk/intranet/assets/images/jobsIcon.png" />
                                        Jobs
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="leaveTools">
                                    <Nav.Link href="#pricing">
                                        <Image src="http://intranet.genetech.pk/intranet/assets/images/leaveIcon.png" />
                                        Leave Tool
                                        </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="supportTicket">
                                    <Nav.Link href="#pricing">
                                        <Image src="http://intranet.genetech.pk/intranet/assets/images/supportIcon.png" />
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
                            <span className="welcome">Welcom</span>
                            <span className="userName">Haider Abbas</span>
                        </div>
                        <div className="setting">
                            <span onClick={settingHandle}></span>

                        </div>

                        

                       { show && <div className="dropdown">
                            <ul>
                                <li> 
                                    <a href="#">Edit Profile</a>
                                </li>
                                <li> 
                                    <a href="#">Change Password</a>
                                </li>
                                <li> 
                                    <a href="#" onClick={logOut}>Logout</a>
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