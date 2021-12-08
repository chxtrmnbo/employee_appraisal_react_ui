import React from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'
import Title from './Title'
export default function FormTable(props) {
    const metrics = [1, 2, 3, 4, 5]
    return (
        <>

            <Row className="row-border text-center g-0">
                <Col className="d-flex align-items-center border border-1  py-2">
                    <div className="px-2 ">
                        Performance Metrics
                    </div>
                </Col>
                <Col lg={1} className="d-flex justify-content-center border border-1  py-1">
                    Weight <br /> (100%)
                </Col>
                <Col className="d-flex align-items-center border border-1">
                    <div className="px-2">
                        Output/Narrative
                    </div>
                </Col>
                <Col lg={2} className="d-flex justify-content-center border border-1">
                    Rating <br /> (0 up tp 5)
                </Col>
                <Col lg={2} className="d-flex justify-content-center">
                    Weighted <br /> Rating
                </Col>
            </Row>

            {
                metrics.map((el, count) => (
                    <Row className="g-0">
                        <Col className="d-flex align-items-center border border-1" >
                            <span className="px-3" >{count + 1}</span>
                            <Form.Control
                                style={{ resize: "none", overflow: 'hidden', border: 0 }}
                                as="textarea"
                                rows={1}
                                name="metric"
                                maxLength={80}
                            />
                        </Col>
                        <Col lg={1} className="column-border  border border-1">
                            <Form.Control
                                style={{ resize: "none", overflow: 'hidden', border: 0 }}

                                as="textarea"
                                rows={1}
                                name="weight"
                                maxLength={3}
                                className="text-end"
                            />
                        </Col>
                        <Col className="column-border  border border-1">
                            <Form.Control
                                style={{ resize: "none", overflow: 'hidden', border: 0 }}

                                as="textarea"
                                rows={1}
                                name="output"
                                maxLength={80}
                            />
                        </Col>
                        <Col lg={2} className="column-border  border border-1">
                            <Form.Control
                                style={{ resize: "none", overflow: 'hidden', border: 0 }}

                                as="textarea"
                                rows={1}
                                name="rating"
                                maxLength={3}
                                className="text-end"
                            ></Form.Control>
                        </Col>
                        <Col lg={2} className="column-border  border border-1">
                            <Form.Control
                                style={{ resize: "none", overflow: 'hidden', border: 0 }}

                                as="textarea"
                                rows={1}
                                name="rating"
                                maxLength={3}
                                className="text-end"
                            ></Form.Control>
                        </Col>
                    </Row>

                ))
            }
            <Row className="g-0">
                <Col
                    lg="2 offset-8"
                    className="column-border bg-primary d-flex justify-content-center align-items-center text-white"

                >
                    Total Rating
                </Col>
                <Col lg={2} className="column-border row-border">
                    <Form.Control as="textarea" rows={1} readOnly />
                </Col>
            </Row>
        </>
    )
}
