import React from "react";
import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import { ToastContainer, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/fontawesome-free-solid";
import { faCheckCircle } from "@fortawesome/fontawesome-free-solid";

export default function Notification(props) {
  const [show, setShow] = useState(props.show);

  return (
    <ToastContainer className="p-3" position={props.position}>
      <Toast
        style={{ width: props.width }}
        bg={props.status === "success" ? "success" : "danger"}
        show={props.show}
        delay={1000}
        autohide
      >
        <Toast.Body className="d-flex px-4 py-3 align-items-center text-white ">
          <FontAwesomeIcon
            icon={
              props.status === "success" ? faCheckCircle : faExclamationCircle
            }
            size="4x"
          />
          <div className="px-3">
            <h5 style={{ textTransform: "capitalize" }}>{props.status}</h5>
            <p style={{ marginTop: "-8px", fontSize: ".8em" }}>
              {props.message}
            </p>
          </div>
          <Button
            className="ms-auto"
            variant={props.status === "success" ? "success" : "danger"}
            style={{ borderRadius: "50%" }}
            onClick={() => setShow(false)}
          >
            X
          </Button>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
