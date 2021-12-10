import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown } from '@fortawesome/fontawesome-free-solid'
import { Card, Row, Col } from 'react-bootstrap';
import Title from '../components/Title'
import Redirect from '../components/Redirect'
import Contents from '../components/Contents'

export default function Error404() {
    return (
        <>
            <Row className="m-auto g-0">
                <Col className="d-flex flex-row-reverse  mt-5 ">
                    <FontAwesomeIcon icon={faFrown} size="10x" className="justify-content-center" />
                </Col>
                <Col className=" mt-5  justify-content-center text-start " >
                    <Title title="404 - PAGE NOT FOUND" className="" style={{ textAlignment: "left !important" }} />
                    <br></br>
                    <Contents content="The Page you are looking for might have been removed or had it's name changed" />
                    <Contents subContent="or is temporary unavailable." />
                    <Redirect buttonName="HOME PAGE" />
                </Col>
            </Row>

        </>
    )
}
