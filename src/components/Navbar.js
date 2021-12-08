
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, } from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar bg="white" variant="light" style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
            <Container>
                <Navbar.Brand href="/">Navigation</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/Login" className="text-decoration-none text-muted px-5">
                        Login
                    </Link>
                </Nav>
            </Container>
        </Navbar >
    );
}
export default Navigation;

