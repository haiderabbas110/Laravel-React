import { path_server } from "../../../Constants";
import { React, useState, useEffect } from "react"
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import './sidebar.scss';
import { Route, useParams } from "react-router-dom";


import { Navbar, Nav, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
//import useToken from '../../../useToken';
import UserService from "../../../services/user.service";
import { useSearchParams } from "react-router-dom";




function Sidebar() {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState("");
    const [data, setData] = useState("");
    let [searchParams, setSearchParams] = useSearchParams();

    
    function onChangeHandler(e) {
        const searchVal = e.target.value;
        setSearch(searchVal);
        UserService.getSearchUsers(searchVal).then(
            (response) => {
                setUsers(response.data.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                setData(_content);
            }
        );
    };

    if (window.location.pathname === "/login") {
        return null
    } else {
        return (
            <aside className="sideBarWrapper">

                <section className="search">
                    <Form.Control
                        autoFocus
                        type="text"
                        value={search}
                        placeholder="Search Employee"
                        onChange={(e) => onChangeHandler(e)}
                    />
                    <div className="searchResult">
                        {users && <ul>
                            {
                                Object.keys(users).map((anObjectMapped, index) => {
                                    const val = users[anObjectMapped];
                                    const id = val.id;
                                    return <Link to={`user/${id}`} >
                                        <li>
                                            <h3>{val.name}</h3>
                                            <span>{val.email}</span>
                                        </li>
                                    </Link>
                                })
                            }
                            <Link to={'/users'}>
                                <li>
                                    <h3><strong>Our Team</strong></h3>
                                    <span>Show all team members</span>
                                </li>
                            </Link>
                        </ul>
                        }
                    </div>

                </section>
                <section className="sidebarNav">
                    <div className="nav">
                        <Navbar>
                            <Nav className as="ul" className="">
                                <Nav.Item as="li">
                                    <Nav.Link href="#home">
                                        <Image src="../assets/sidebar/db_icon.jpg" />
                                        My Dashboard
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item as="li">
                                    <Nav.Link href="#features">
                                        <Image src="../assets/sidebar/emp_function_icon.jpg" />
                                        Employee Functions
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item as="li">

                                    <Nav.Link href="#pricing">
                                        <Image src="../assets/sidebar/education.jpg" />
                                        Education
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="#pricing">
                                        <Image src="../assets/sidebar/coding-standards.jpg" />
                                        Coding Sandards
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="#pricing">
                                        <Image src="../assets/sidebar/bookit.jpg" />
                                        Bookit
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="#pricing">
                                        <Image src="../assets/sidebar/standard-operating-procedure.jpg" />
                                        Standard Operating Procedures
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="#pricing">
                                        <Image src="../assets/sidebar/hr_stuff_icon.jpg" />
                                        HR Stuffs
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="#pricing">
                                        <Image src="../assets/sidebar/it_info_icon.jpg" />
                                        IT information
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="#pricing">
                                        <Image src="../assets/sidebar/webissues.jpg" />
                                        Webissues
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="#pricing">
                                        <Image src="../assets/sidebar/useful-links.jpg" />
                                        Useful Links
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href="#pricing">
                                        <Image src="../assets/sidebar/equipment-for-sale.jpg" />
                                        Equipment for Sale
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar>
                    </div>
                </section>

            </aside>
        )
    }

}
export default Sidebar;