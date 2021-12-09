
import React, { useEffect, useState } from 'react'

import { Row, Col, ListGroup, Stack, Pagination, Card } from 'react-bootstrap'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";


import Title from '../components/Title'
import GroupList from '../components/GroupList'

import Instance from '../services/axios'

export default function SupervisorQueue() {
    const [show, setShow] = useState(true)
    const [appraisals, setAppraisals] = useState([])

    useEffect(() => {
        Instance.get('/appraisals')
            .then(res => {
                console.log(res.data)
                setAppraisals(res.data)
            })
            .catch(err => {
                console.error(err);
                setShow(false)
            })
    }, []);

    const Loader = () => {
        if (appraisals.length == 0) {
            return (
                <FontAwesomeIcon className="my-5" icon={faCircleNotch} spin size="8x" />
            )
        }
        else {
            return null
        }
    }


    return (
        <>
            <Row className="mt-5">
                <Col>
                    <Title title="Yearly Performance Appraisal" subtitle="For Review" />
                </Col>
            </Row>
            <GroupList appraisals={appraisals} />
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
