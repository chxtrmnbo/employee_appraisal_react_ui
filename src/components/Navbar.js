import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Navigation = () => {
    const navigations = [
        { title: "Login", route: "/Login" },
        { title: "Supervisor Queue", route: "/Supervisor" },
        { title: "HR Queue", route: "/Hr" },
        { title: "Self Assessment", route: "/Assessment" },
    ];

    return (
        <div>
            <Navbar style={{ backgroundColor: "#4852b0" }} variant="dark" expand="lg">
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
                            <NavDropdown title="Alden Recharge" id="basic-nav-dropdown">
                                {navigations.map((nav, index) => (

                                    <NavDropdown.Item
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

                            <Nav.Link href="#home">
                                <span className="ms-3">LOGOUT</span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
export default Navigation;
