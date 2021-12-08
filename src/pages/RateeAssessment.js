import React from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'
import Title from '../components/Title'
import FormTable from '../components/FormTable'
import UserInfo from '../components/UserInfo'
export default function RateeAssessment() {
    return (
        <>
            <Row className="py-2 mb-3 mt-5">
                <Col className="text-center">
                    <Title title="Yearly Performance Appraisal" subtitle="Self-Assessment" />
                </Col>
            </Row>
            <Row className="g-0 p-2 " >
                <Col>
                    <UserInfo />
                </Col>
            </Row>

            <Row className="g-0 p-2 " >
                <Col>
                    <Card>
                        <Card.Header className="bg-primary text-white">
                            <span>II.Employee Assessment Form</span>
                        </Card.Header>
                        <FormTable />

                    </Card>
                </Col>
            </Row>

        </>
    )
}
