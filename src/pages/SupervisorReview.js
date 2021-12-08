import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import Title from '../components/Title'
import FormTable from '../components/FormTable'
import UserInfo from '../components/UserInfo'
import CommentBox from '../components/CommentBox'
export default function SupervisorReview() {
    return (
        <>
            <Row className="py-2 mb-3 mt-5">
                <Col className="text-center">
                    <Title title="Yearly Performance Appraisal" subtitle="For Review" />
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
            <Row>
                <Col className="mt-5 mb-5">
                    <CommentBox title="Ratee's Comment" />
                </Col>
            </Row>
            <Row>
                <Col className="mb-5">
                    <CommentBox title="Supervisor's Comment" />
                </Col>
            </Row>
            <Row>
                <Col xl="2 offset-10" className="d-grid">
                    <Button className="bg-primary text-white px-5" type="submit">Submit</Button>
                </Col>
            </Row>
        </>
    )
}
