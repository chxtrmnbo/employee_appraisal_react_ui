import React, { useState } from 'react'
import { Row, Col, Card, Form } from 'react-bootstrap'
import Title from './Title'
export default function FormTable(props) {
    let weightTotal = props.metrics
        .map((el) => parseFloat(el.weighted.value))
        .reduce((a, b) => a + b, 0);

    const [total, setTotal] = useState(weightTotal);
    const [metrics, setMetrics] = useState(props.metrics);

    const handleChange = (evt, index) => {
        let met = [...metrics];

        if (evt.target.name === "metric") {
            met[index].metric = evt.target.value;
        }
        if (evt.target.name === "weight") {
            met[index].weight.value = parseFloat(evt.target.value);
            met[index].weighted.value = evt.target.value * met[index].rating.value;
        }
        if (evt.target.name === "output") {
            met[index].output.value = evt.target.value;
        }
        if (evt.target.name === "rating") {
            met[index].rating.value = parseInt(evt.target.value);
            met[index].weighted.value = evt.target.value * met[index].weight.value;
        }
        if (evt.target.name === "weighted") {
            met[index].weighted.value = evt.target.value;
        }
        let totalWeighted = metrics
            .map((el) => el.weighted.value)
            .reduce((a, b) => a + b, 0);
        setMetrics(met);
        setTotal(totalWeighted);
        console.log(totalWeighted);
        props.parentCallback(met);
    };
    return (
        <>

            <Row className="row-border text-center g-0">
                <Col className="d-flex align-items-center border border-1  py-2">
                    <div className="px-2 ">
                        Performance Metrics
                    </div>
                </Col>
                <Col lg={1} className="d-flex justify-content-center border border-1  py-1">
                    Weight <br /> (100%)
                </Col>
                <Col className="d-flex align-items-center border border-1">
                    <div className="px-2">
                        Output/Narrative
                    </div>
                </Col>
                <Col lg={2} className="d-flex justify-content-center border border-1">
                    Rating <br /> (0 up tp 5)
                </Col>
                <Col lg={2} className="d-flex justify-content-center">
                    Weighted <br /> Rating
                </Col>
            </Row>

            {
                metrics.map((el, index) => (
                    <Row className="g-0">
                        <Col className="d-flex align-items-center border border-1" >
                            <span className="px-3" >{index + 1}</span>
                            <Form.Control
                                as="textarea"
                                rows={1}
                                onBlur={(evt) => handleChange(evt, index)}
                                name="metric"
                                maxLength={80}
                                defaultValue={props.type === "supervisor" ? el.metric : null}
                            />
                        </Col>
                        <Col lg={1} className="column-border  border border-1">
                            <Form.Control
                                as="textarea"
                                rows={1}
                                onBlur={(evt) => handleChange(evt, index)}
                                name="weight"
                                onKeyPress={() => (el.weight.isValid = true)}
                                style={
                                    el.weight.isValid
                                        ? { background: "white" }
                                        : { background: "#FED6D6" }
                                }
                                defaultValue={props.type === "supervisor" ? el.weight.value : 0}
                            />
                        </Col>
                        <Col className="column-border  border border-1">
                            <Form.Control
                                as="textarea"
                                rows={1}
                                onBlur={(evt) => handleChange(evt, index)}
                                name="output"
                                maxLength={80}
                                onKeyPress={() => (el.output.isValid = true)}
                                style={
                                    el.output.isValid
                                        ? { background: "white" }
                                        : { background: "#FED6D6" }
                                }
                                defaultValue={props.type === "supervisor" ? el.output.value : ""}
                            />
                        </Col>
                        <Col lg={2} className="column-border  border border-1">
                            <Form.Control
                                as="textarea"
                                rows={1}
                                onBlur={(evt) => handleChange(evt, index)}
                                name="rating"
                                onKeyPress={() => (el.rating.isValid = true)}
                                style={
                                    el.rating.isValid ? { background: "white" } : { background: "#FED6D6" }
                                }
                                defaultValue={props.type === "supervisor" ? el.rating.value : 0}
                            ></Form.Control>
                        </Col>
                        <Col lg={2} className="column-border  border border-1">
                            <Form.Control
                                as="textarea"
                                rows={1}
                                onChange={(evt) => handleChange(evt, index)}
                                readOnly
                                value={el.weighted.value.toFixed(1)}
                                name="weighted"
                            ></Form.Control>
                        </Col>
                    </Row>

                ))
            }
            <Row className="g-0">
                <Col
                    lg="2 offset-8"
                    style={{ background: "#0052A0" }}
                    className="column-border d-flex justify-content-center align-items-center text-white"

                >
                    Total Rating
                </Col>
                <Col lg={2} className="column-border row-border">
                    <Form.Control as="textarea" rows={1} defaultValue={total} readOnly />

                </Col>
            </Row>
        </>
    )
}
