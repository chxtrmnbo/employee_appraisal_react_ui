import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/fontawesome-free-solid";
import { Card, Row, Col } from "react-bootstrap";
import Title from "../components/Title";
import Redirect from "../components/Redirect";
import Contents from "../components/Contents";

export default function Error404() {
  return (
    <div className="mb-2 ">
      <Row>
        <Col className=" mt-5 v-right item">
          <FontAwesomeIcon icon={faFrown} size="10x" />
        </Col>
        <Col className=" mt-5 h-center text-left">
          <Title title="404 - PAGE NOT FOUND" />
          <br></br>
          <Contents content="The Page you are looking for might have been removed or had it's name changed" />
          <Contents subContent="or is temporary unavailable." />
          <Redirect buttonName="HOME PAGE" className="rounded-pill" />
        </Col>
      </Row>
    </div>
  );
}
