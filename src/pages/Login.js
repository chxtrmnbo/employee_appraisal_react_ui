import React from 'react'

import { Container, Col, Row, Form, Button, Card } from 'react-bootstrap';
//import Title from '../components/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown, faEnvelope, faLock } from '@fortawesome/fontawesome-free-solid'


export default function Loginform() {
    let show = false;


    return (
        <div Align="center" class="BackGround">
            <FontAwesomeIcon style={{ marginTop: '10vh' }} icon={faFrown} size="5x" />
            <Card className="pb-5" style={{ width: '480px', marginTop: '3vh' }}>
                <Container>
                    <Card.Body>
                        <Form className="mt-2">
                            <Row>
                                <Col className="text-center">
                                    <h2>Welcome Back</h2>
                                    <h5 className="text-secondary" >Enter your credentials to access your account</h5>
                                </Col>
                            </Row>
                            <Row className="mt-4 mb-3">
                                <Col xl={12} className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                    <Form.Control type="text" id="username" placeholder="Username" required />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col xl={12} className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faLock} className="me-2" />
                                    <Form.Control className="" id="password" type={show ? "text" : "password"} placeholder="Password" required />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Show Password ?" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} className="pt-3"><Button size="lg" className="bg-primary w-100 text-white" onClick="">Sign in</Button></Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Container>
            </Card>
        </div >

    )
}
