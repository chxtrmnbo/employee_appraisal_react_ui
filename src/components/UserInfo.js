import React from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'

export default function UserInfo() {
    return (
        <>
            <Card >
                <Card.Header className="bg-primary text-white">
                    Employee Details:
                </Card.Header>
                <Row className="g-0">
                    <Col className="p-3 border border-1">
                        <Row>
                            <Col>
                                <span> Employee Name:</span>
                            </Col>
                            <Col>
                                <span> Employee Name:</span>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="p-3 border border-1">
                        <Row>
                            <Col>
                                <span> Employee Name:</span>
                            </Col>
                            <Col>
                                <span> Employee Name:</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="g-0">
                    <Col className="p-3 border border-1">
                        <Row>
                            <Col className="">
                                <span> Employee Name:</span>
                            </Col>
                            <Col>
                                <span> Employee Name:</span>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="p-3  border border-1">
                        <Row>
                            <Col>
                                <span> Employee Name:</span>
                            </Col>
                            <Col>
                                <span> Employee Name:</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
