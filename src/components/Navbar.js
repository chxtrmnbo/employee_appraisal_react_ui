
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, } from 'react-bootstrap'

const Navigation = () => {

    const navigations = [
        { title: 'Login', route: '/Login' },
        { title: 'Supervisor Queue', route: '/Supervisor' },
        { title: 'HR Queue', route: '/Hr' },
        { title: 'Self Assessment', route: '/Assessment' },
    ]

    return (
        <Navbar bg="white" variant="light" style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
            <Container>
                <Navbar.Brand href="/">Navigation</Navbar.Brand>
                <Nav className="me-auto">
                    {
                        navigations.map((nav, index) =>
                            <Link to={nav.route} className="text-decoration-none text-muted px-5">
                                {nav.title}
                            </Link>
                        )
                    }
                </Nav>
            </Container>
        </Navbar >
    );
}
export default Navigation;

