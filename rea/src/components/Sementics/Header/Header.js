import React from "react"
import Image from "react-bootstrap/Image";
import './header.scss';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,Container } from 'react-bootstrap'




function Header(){
    const axios = require('axios');
    
    if(window.location.pathname === "/login"){
        return null
    }else{
        return (
            <header className="geneHeader">
                
                <section className="leftHeadingSection">
                    <Image src="http://intranet.genetech.pk/intranet/assets/images/red_logo.jpg" fluid />
      
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
                            <span></span>

                        </div>

                    </div>
      
      
                </section>
                
            </header>
        )
    }

}
export default Header;