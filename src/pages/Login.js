import React from 'react'
import { Container, Col, Row, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown, faEnvelope, faLock } from '@fortawesome/fontawesome-free-solid'

export default function Loginform() {
    let show = false;


    return (
        <div className="d-flex flex-column align-items-center" style={{ backgroundColor: '#EFF1FD' }}>

            <FontAwesomeIcon style={{ marginTop: '10vh' }} icon={faFrown} size="5x" />

            <Card className="m-auto my-5 p-5" style={{ width: '500px' }}>
                <Form>

                    <Row className="pb-5">
                        <Col className="text-center">
                            <h3>Welcome Back</h3>
                            <p className="text-secondary">Enter your credentials to access your account</p>
                        </Col>
                    </Row>
                    <Row className="pb-3">
                        <Col xl={12} className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                            <Form.Control type="text" id="username" placeholder="Username" required />
                        </Col>
                    </Row>

                    <Row className="pb-3">
                        <Col xl={12} className="d-flex align-items-center ">
                            <FontAwesomeIcon icon={faLock} className="me-2" />
                            <Form.Control className="" id="password" type={show ? "text" : "password"} placeholder="Password" required />
                        </Col>
                    </Row>



                    <Row className="py-4">
                        <Col xl={12} ><Button size="lg" className="bg-primary w-100 text-white" onClick="">Sign in</Button></Col>
                    </Row>

                </Form>
            </Card>

            <h5 style={{ marginTop: '2vh' }}> Forgot your Password? <span className="text-primary">Reset Password</span></h5>

        </div >

    )
}
