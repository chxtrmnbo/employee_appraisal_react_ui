import React, { useState } from "react";
import { Container, Col, Row, Form, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFrown,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/fontawesome-free-solid";
import { useNavigate } from "react-router-dom";

import Notification from "../components/Notification";

export default function Loginform() {
  const [show, setShow] = useState(false);
  const [validate, setValidate] = useState([]);
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  const onLogin = (evt) => {
    evt.preventDefault();
    let dummy = [
      {
        name: "Juan Ted",
        email: "juan@gmail.com",
        password: "1234",
        role: 1,
      },
      {
        name: "Alden Richards",
        email: "alden@gmail.com",
        password: "1234",
        role: 2,
      },
      {
        name: "Maine Mendoza",
        email: "maine@gmail.com",
        password: "1234",
        role: 3,
      },
    ];
    const index = dummy.map((el) => el.email).indexOf(evt.target.email.value);

    if (index === -1) {
      setError(true);
    } else {
      if (
        dummy[index].email === evt.target.email.value &&
        dummy[index].password === evt.target.password.value
      ) {
        let wew = JSON.stringify(dummy[index]);
        localStorage.setItem("user", wew);
        if (dummy[index].role === 1) {
          navigate("/Assessment");
        } else if (dummy[index].role === 2) {
          navigate("/Supervisor");
        } else {
          navigate("/Hr");
        }
      }
    }

    // if (dummy[index].email == evt.target.email.value && dummy[index].password == evt.target.password.value) {
    //     let wew = JSON.stringify(dummy[index])
    //     localStorage.setItem('user', wew);
    //     if (dummy[index].role === 1) {
    //         navigate("/Assessment")
    //     }
    //     else if (dummy[index].role === 2) {
    //         navigate("/Supervisor")
    //     }
    //     else {
    //         navigate("/Hr")
    //     }
    // } else {
    //     setError(true)
    //     console.log(dummy[index])
    //     console.log('wew')
    // }
  };

  const Validation = () => {
    if (validate.length !== 0) {
      return (
        <p className="text-center text-muted" style={{ fontSize: ".8em" }}>
          {validate}
        </p>
      );
    } else {
      return null;
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center mt-5"
      style={{ backgroundColor: "#EFF1FD" }}
    >
      <img
        src="https://logodix.com/logo/1799112.png"
        alt=""
        style={{ width: "15%" }}
      />
      <Card className="m-auto my-5 p-5" style={{ width: "500px", border: 0 }}>
        <Form onSubmit={onLogin}>
          <Row className="pb-4">
            <Col className="text-center">
              <h4>Employee Appraisal</h4>
              <p style={{ fontSize: ".9em" }} className="text-secondary">
                Enter your credentials to access your account
              </p>
            </Col>
          </Row>
          <Row className="pb-4">
            <Col xl={12} className="d-flex align-items-center">
              <FontAwesomeIcon
                style={{ color: "#0052A0" }}
                icon={faEnvelope}
                className="me-3 "
              />
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </Col>
          </Row>
          <Row className="pb-2">
            <Col xl={12} className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faLock}
                className="me-3 "
                style={{ color: "#0052A0" }}
              />
              <Form.Control
                name="password"
                type={show ? "text" : "password"}
                placeholder="Password"
                required
              />

              <FontAwesomeIcon
                size="lg"
                icon={!show ? faEye : faEyeSlash}
                onClick={() => setShow(!show)}
                style={{ position: "absolute", right: 55, color: "#b1b1b1" }}
              />
            </Col>
          </Row>

          <Validation />

          <Row className="py-4">
            <Col xl={12}>
              <Button
                type="submit"
                size="md"
                className=" w-100 text-white"
                style={{ background: "#0052A0" }}
              >
                Log In
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
      <span className="text-muted"> Copyright ©2021 </span>
      <Notification
        show={error}
        status="error"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        //change message if  error = "There is something wrong with the inputs. Please Check the fields"
        position="bottom-center"
        width="400px"
      />
    </div>
  );
}
