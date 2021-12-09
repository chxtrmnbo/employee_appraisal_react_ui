import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../services/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/fontawesome-free-solid";

const Navigation = () => {
  let navigate = useNavigate();
  const navigations = [
    { title: "Login", route: "/Login" },
    { title: "Supervisor Queue", route: "/Supervisor" },
    { title: "HR Queue", route: "/Hr" },
    { title: "Self Assessment", route: "/Assessment" },
    { title: "Supervisor Review", route: "/SupervisorReview" },
  ];
  const Logout = () => {
    let Auth = {
      name: "",
      email: "",
      password: "",
      role: 0,
    };
    localStorage.setItem("user", JSON.stringify(Auth));
    navigate("/Login");
  };
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
              <NavDropdown title={Auth.email} id="basic-nav-dropdown">
                {navigations.map((nav, index) => (
                  <NavDropdown.Item className="">
                    <Link
                      key={index}
                      className="text-decoration-none text-muted "
                      to={nav.route}
                    >
                      {nav.title}
                    </Link>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <button
                onClick={Logout}
                className="d-flex  align-items-center text-decoration-none"
                to="/Login"
                style={{ color: "#e1e1e1" }}
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
