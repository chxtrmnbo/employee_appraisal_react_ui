import React, { useState } from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'

export default function UserInfo(props) {
    const handleChange = (evt) => {
        props.userCallback(evt.target.value);
    };
    return (
        <>
            <Card >
                <Card.Header className="text-white py-3">
                    Employee Details
                </Card.Header>
                <Row className="g-0">
                    <Col xl="6" xs="12" className="p-3 border border-1">
                        <Row>
                            <Col>
                                <span className="fw-bold"> Employee name </span>
                                <p style={{ padding: 0, margin: 0 }}>{props.name}</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col xl="6" xs="12" className="p-3 border border-1">
                        <Row>
                            <Col>
                                <span className="fw-bold"> Department </span>
                                <p style={{ padding: 0, margin: 0 }}>{props.department}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="g-0">
                    <Col xl="6" xs="12" className="p-3 border border-1">
                        <Row>
                            <Col className="">
                                <span className="fw-bold"> Supervisor/Reviewer </span>
                                <p style={{ padding: 0, margin: 0 }}>{props.supervisor}Someone</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col xl="6" xs="12" className="p-3  border border-1">
                        <Row>
                            <Col>
                                <span className="fw-bold"> Appraisal year </span>
                                <Form.Control
                                    className="border-top-0 border-end-0 border-start-0"
                                    onChange={handleChange}
                                    style={{ width: "200px", height: "26px", borderRadius: 0 }}
                                ></Form.Control>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
