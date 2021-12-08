import React from 'react'
import { Container, Col, Row, Form, Button, Card } from 'react-bootstrap';
//import Title from '../git/employee_appraisal_react/src/components/Title';

export default function Loginform() {
    return (
        <div Align="center" class="BackGround">
            <Card className="pb-5" style={{ width: '480px', marginTop: '15vh' }}>
              
                <Container>
                    <Card.Body>
                        <Form className="mt-2">
                            <Row>
                                <Col className="text-center">
                                    <h2 className="text-primary">Performance Appraisal</h2>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col xl={12}>
                                    <i class="fa fa-envelope"></i>
                                    <Form.Control className="lg border-top-0 border-end-0 border-start-0 mb-3" type="text" id="username" placeholder="Username" required />
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12}>
                                    <i class="fa fa-envelope"></i>
                                    <Form.Control className="border-top-0 border-end-0 border-start-0 mb-3" id="password" type ="password" placeholder="Password" required />
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} className="pt-3"><Button size="lg" className="bg-secondary w-100 text-dark" onClick="">LOGIN</Button>{' '}</Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Container>
            </Card>
        </div >
    )
}
