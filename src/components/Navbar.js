import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import Auth from '../services/storage'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/fontawesome-free-solid'

const Navigation = () => {

    const user = useSelector((state) => state.user.value.user);
    console.log(user)
    let navigate = useNavigate()
    const navigations = [
        { title: "Login", route: "/Login" },
        { title: "Supervisor Queue", route: "/Supervisor" },
        { title: "HR Queue", route: "/Hr" },
        { title: "Self Assessment", route: "/Assessment" },

    ];
    const Logout = () => {
        let Auth = {
            name: '',
            email: '',
            password: '',
            role: 0
        }
        localStorage.setItem('user', JSON.stringify(Auth))
        navigate("/Login")
    }
    return (
        <>
            <Navbar style={{ backgroundColor: "#4852B0" }} variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            style={{ width: "40px" }}
                            src="https://e-learn.cisateducation.com/wp-content/uploads/2020/04/f07_db.png"
                            alt="LOGO"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="text-white">
                        <Nav className="ms-auto" style={{ color: "white" }}>
                            <NavDropdown title={user.email} id="basic-nav-dropdown">
                                {navigations.map((nav, index) => (
                                    <NavDropdown.Item
                                        key={index}
                                        className=""
                                    >
                                        <Link key={index}
                                            className="text-decoration-none text-muted "
                                            to={nav.route}
                                        >
                                            {nav.title}
                                        </Link>
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>


                            <Button className="d-flex  align-items-center  border-0 text-decoration-none" onClick={Logout} to="/Login" style={{ background: "transparent" }}>
                                <FontAwesomeIcon icon={faSignOutAlt} />
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Navigation;
