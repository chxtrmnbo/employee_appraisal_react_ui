import React, { useState } from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SET_YEAR } from "../features/appraisals";

export default function UserInfo(props) {

    const dispatch = useDispatch();
    const year = useSelector((state) => state.appraisals.value.formData.appraisalYear);
    const handleChange = (evt) => {
        dispatch(SET_YEAR({ appraisalYear: evt.target.value }))
    };
    const Input = () => {
        if (!props.year) {
            return <Form.Control
                className="border-top-0 border-end-0 border-start-0"
                onBlur={(e) => handleChange(e)}
                key="213213213213"
                maxLength={4}
                defaultValue={year}
                style={{ width: "200px", height: "26px", borderRadius: 0, paddingLeft: 0 }}
                required
            ></Form.Control>
        }
        else {
            return <p style={{ padding: 0, margin: 0 }}>{props.year}</p>
        }
    }
    return (
        <>
            <Form>
                <Card >
                    <Card.Header className="text-white py-3">
                        Employee Details
                    </Card.Header>
                    <Row className="g-0">
                        <Col xl="6" xs="12" className="p-3 border border-1">
                            <Row>
                                <Col>
                                    <span className="fw-bold"> Employee name </span>
                                    <p style={{ padding: 0, margin: 0 }}>{props.name}</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col xl="6" xs="12" className="p-3 border border-1">
                            <Row>
                                <Col>
                                    <span className="fw-bold"> Department </span>
                                    <p style={{ padding: 0, margin: 0 }}>{props.department}</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="g-0">
                        <Col xl="6" xs="12" className="p-3 border border-1">
                            <Row>
                                <Col className="">
                                    <span className="fw-bold"> Supervisor/Reviewer </span>
                                    <p style={{ padding: 0, margin: 0 }}>{props.supervisor}Someone</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col xl="6" xs="12" className="p-3  border border-1">
                            <Row>

                                <Col>
                                    <span className="fw-bold"> Appraisal year </span>
                                    <Input />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Form>
        </>
    )
}
