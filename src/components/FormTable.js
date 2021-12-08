import React from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'
import Title from './Title'
export default function FormTable(props) {
    const metrics = [1, 2, 3, 4, 5]
    return (
        <>
            <Row className="py-2 mb-3">
                <Col>
                    <Title title="Yearly Performance Appraisal" subtitle="Self-Assessment" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>UserInfo here</h1>
                </Col>
            </Row>

            <Row className="text-white fw-bold p-2 g-0 header-background">
                <Col>
                    <h4>Employee Details:</h4>
                </Col>
            </Row>
            <Row className="g-0">
                <Col lg={{ order: 'first' }} className="p-3">
                    <div>
                        Employee Name:
                    </div>
                </Col>
                <Col className="border border-1 border-secondary border-start-0 border-top-0 border-bottom-0 p-3">
                    <div>
                        John Snow
                    </div>
                </Col>
                <Col className="p-3">
                    <div>
                        Job Title:
                    </div>
                </Col>
                <Col className="p-3">
                    <div>
                        King
                    </div>
                </Col>
            </Row>
            <Row className="g-0 ">
                <Col lg={{ order: 'first' }} className="p-3">
                    <div>
                        Supervisor/Reviewer:
                    </div>
                </Col>
                <Col className="border border-1 border-secondary border-start-0 border-top-0 border-bottom-0 p-3">
                    <div>
                        Lapu-lapu
                    </div>
                </Col>
                <Col className="p-3">
                    <div>
                        Review Period
                    </div>
                </Col>
                <Col lg={3} className="p-3">
                    <div>
                        King
                    </div>
                </Col>
            </Row>


            <Row >
                <Col style={{ width: '100' }}>
                    <Card className="border-0">
                                                
                        <Row className="g-0 p-2" style={{ backgroundColor: '#DDEDF5', color: 'gray' }}>
                            <Col>
                                <h4>II. Employee Assessment Form</h4>
                            </Col>
                        </Row> 
                        <Row
                            style={{
                                borderTop: "1px solid black",
                                borderLeft: "1px solid black",
                                borderBottom: "1px solid black",
                            }}
                            className="row-border text-center bg-primary text-white  g-0 fw-bold "
                        >
                            <Col className="  d-flex  align-items-center">
                                <div className="px-2 ">
                                    Performance Metrics
                                </div>
                            </Col>
                            <Col lg={1} className="d-flex justify-content-center ">
                                Weight <br /> (100%)
                            </Col>
                            <Col className="d-flex align-items-center ">
                                <div className="px-2">
                                    Output/Narrative
                                </div>
                            </Col>
                            <Col lg={2} className="d-flex justify-content-center ">
                                Rating <br /> (0 up tp 5)
                            </Col>
                            <Col lg={2} className="d-flex justify-content-center">
                                Weighted <br /> Rating
                            </Col>
                        </Row>

                        {
                            metrics.map((el, count) => (
                                <Row className="g-0">
                                    <Col className="d-flex align-items-center">
                                        <span className="px-3" >{count + 1}</span>
                                        <Form.Control
                                            style={{ resize: "none", overflow: 'hidden' }}
                                            as="textarea"
                                            rows={1}
                                            name="metric"
                                            maxLength={80}
                                        />
                                    </Col>
                                    <Col lg={1} className="column-border">
                                        <Form.Control
                                            style={{ resize: "none", overflow: 'hidden' }}
                                            as="textarea"
                                            rows={1}
                                            name="weight"
                                            maxLength={3}
                                            className="text-end"
                                        />
                                    </Col>
                                    <Col className="column-border">
                                        <Form.Control
                                            style={{ resize: "none", overflow: 'hidden' }}
                                            as="textarea"
                                            rows={1}
                                            name="output"
                                            maxLength={80}
                                        />
                                    </Col>
                                    <Col lg={2} className="column-border">
                                        <Form.Control
                                            style={{ resize: "none", overflow: 'hidden' }}
                                            as="textarea"
                                            rows={1}
                                            name="rating"
                                            maxLength={3}
                                            className="text-end"
                                        ></Form.Control>
                                    </Col>
                                    <Col lg={2}>
                                        <Form.Control
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
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <h1>CommentBox</h1>
                </Col>
            </Row>
        </>
    )
}
