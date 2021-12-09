import React from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'

<<<<<<< Updated upstream
export default function UserInfo() {
=======
export default function UserInfo(props) {
    const handleChange = (evt) => {
        props.userCallback(evt.target.value);
    };

    const Input = () => {
        if (!props.year) {
            return <Form.Control
                className="border-top-0 border-end-0 border-start-0"
                onChange={handleChange}
                style={{ width: "200px", height: "26px", borderRadius: 0 }}
            ></Form.Control>
        }
        else {
            return <p style={{ padding: 0, margin: 0 }}>{props.year}</p>
        }
    }

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                                <span> Employee Name:</span>
                            </Col>
                            <Col>
                                <span> Employee Name:</span>
=======
                                <span className="fw-bold"> Appraisal year </span>
                                <Input />
>>>>>>> Stashed changes
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
