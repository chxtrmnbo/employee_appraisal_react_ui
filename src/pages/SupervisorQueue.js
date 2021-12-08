import React from 'react'
import { Row, Col, ListGroup, Stack, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Title from '../components/Title'

export default function SupervisorQueue() {
    const test = [1, 2, 3, 4]

    return (
        <>
            <Row className="mt-5">
                <Col>
                    <Title title="Performance Appraisal" subtitle="Lorem Ipsum dolor" />
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <h4>2020 <span className="text-muted" style={{ fontSize: '20px' }}>(2)</span> </h4>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <ListGroup>
                        {
                            test.map(el => (
                                <Link to="/SupervisorReview" style={{ textDecoration: "none" }}>
                                    <ListGroup.Item className="py-3 px-4" action>
                                        <Stack gap={0} >
                                            <h5>Juan dela Cruz</h5>
                                            <span className="text-muted" style={{ marginTop: '-8px' }}>Employee</span>
                                        </Stack>
                                    </ListGroup.Item>
                                </Link>
                            ))
                        }
                    </ListGroup>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <h4>2020 <span className="text-muted" style={{ fontSize: '20px' }}>(2)</span> </h4>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <ListGroup>
                        {
                            test.map(el => (
                                <ListGroup.Item className="py-3 px-4" action>
                                    <Stack gap={0}>
                                        <h5>Juan dela Cruz</h5>
                                        <span className="text-muted" style={{ marginTop: '-8px' }}>Employee</span>
                                    </Stack>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </Col>
            </Row>
            <Row className="mt-5 px-5">
                <Col className="d-flex justify-content-center">
                    <Pagination style={{ fontSize: '22px' }}>
                        <Pagination.First>First</Pagination.First>
                        <Pagination.Prev>Prev</Pagination.Prev>
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{8}</Pagination.Item>
                        <Pagination.Next>Next</Pagination.Next>
                        <Pagination.Last>Last</Pagination.Last>
                    </Pagination>
                </Col>
            </Row>
        </>
    )
}
