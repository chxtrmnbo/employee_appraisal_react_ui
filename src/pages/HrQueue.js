import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAppraisals, appraisalsState } from "../features/appraisals";
import Overlay from '../components/Overlay';

import { Row, Col, ListGroup, Stack, Pagination } from 'react-bootstrap'

import Title from '../components/Title'
import GroupList from '../components/GroupList'
import TableError from '../components/TableError'
import Instance from '../services/axios'
import { userFetch } from "../features/user";

export default function HrQueue() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userFetch())
    }, []);
    const appraisalsState = useSelector((state) => state.appraisals.value);


    const [show, setShow] = useState(true)
    useEffect(() => {
        dispatch(fetchAppraisals());
    }, []);
    const appraisals = useSelector((state) => state.appraisals.value.appraisals);


    const Loader = () => {
        if (appraisalsState.isLoading) {
            return (<Overlay />
                // <FontAwesomeIcon className="my-5" icon={faCircleNotch} spin size="8x" />
            )
        } else {
            return null
        }
    }
    const Error = () => {
        if (appraisalsState.isError) {
            return (<TableError />
            )
        } else {
            return null
        }
    }


    return (
        <>
            <Row className="mt-5">
                <Col>
                    <Title title="Yearly Performance Appraisal" subtitle="Submissions" />
                </Col>
            </Row>
            <GroupList appraisals={appraisals} />
            <Loader />
            <Error />
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
