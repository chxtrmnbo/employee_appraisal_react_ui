
import React, { useEffect, useState } from 'react'

import { Row, Col, ListGroup, Stack, Pagination, Card } from 'react-bootstrap'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { fetchAppraisals } from "../features/appraisals";

import TableError from '../components/TableError'
import Title from '../components/Title'
import Overlay from '../components/Overlay'
import GroupList from '../components/GroupList'

import { userFetch } from "../features/user";
export default function SupervisorQueue() {

    // Redux
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userFetch())
        dispatch(fetchAppraisals());
    }, []);
    const appraisals = useSelector((state) => state.appraisals.value.appraisals);
    const appraisalsState = useSelector((state) => state.appraisals.value);

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
                    <Title title="Yearly Performance Appraisal" subtitle="For Review" />
                </Col>
            </Row>
            <Loader />
            <Error />
            <GroupList appraisals={appraisals} />

        </>
    )
}
