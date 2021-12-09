import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Form } from 'react-bootstrap'
import Title from '../components/Title'

import CommentBox from '../components/CommentBox'
import UserInfo from "../components/UserInfo";
import FormTable from "../components/FormTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Validation from "../components/Validation";
import Success from '../components/Success'

import Instance from "../services/axios";
import Auth from "../services/storage";


export default function RateeAssessment() {
    const [success, setSuccess] = useState(false);

    const [userInfo, setUserInfo] = useState("");
    const [comment, setComment] = useState("");
    const [year, setYear] = useState(0);
    let [temp, setTemp] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [metrics, setMetrics] = useState([
        {
            metric: "",
            weight: {
                value: 0,
                isValid: true,
            },
            output: {
                value: "",
                isValid: true,
            },
            rating: {
                value: 0,
                isValid: true,
            },
            weighted: {
                value: 0,
                isValid: true,
            },
        },
        {
            metric: "",
            weight: {
                value: 0,
                isValid: true,
            },
            output: {
                value: "",
                isValid: true,
            },



            rating: {
                value: 0,
                isValid: true,
            },
            weighted: {
                value: 0,
                isValid: true,
            },
        },
        {
            metric: "",
            weight: {
                value: 0,
                isValid: true,
            },
            output: {
                value: "",
                isValid: true,
            },



            rating: {
                value: 0,
                isValid: true,
            },
            weighted: {
                value: 0,
                isValid: true,
            },
        },
        {
            metric: "",
            weight: {
                value: 0,
                isValid: true,
            },
            output: {
                value: "",
                isValid: true,
            },
            rating: {
                value: 0,
                isValid: true,
            },
            weighted: {
                value: 0,
                isValid: true,
            },
        },
        {
            metric: "",
            weight: {
                value: 0,
                isValid: true,
            },
            output: {
                value: "",
                isValid: true,
            },



            rating: {
                value: 0,
                isValid: true,
            },
            weighted: {
                value: 0,
                isValid: true,
            },
        },
    ]);
    const SubmitButton = () => {
        if (loading) {
            return (
                <Button type="submit" >
                    <FontAwesomeIcon icon={faCircleNotch} spin />
                </Button>
            );
        } else {
            return <Button type="submit">Submit</Button>;
        }
    };
    const Validations = () => {
        if (temp.length) {
            return <Validation errors={temp} />;
        } else {
            return null;
        }
    };
    const addError = (errors) => {
        let errr = [...errors];

        var unique = errr.filter((v, i, a) => a.indexOf(v) === i);
        // console.log(unique)
        // console.log('temp:', errr)
        setErrors([]);
        setTemp(unique);

        // let checkError = errors.map(el => el).indexOf(error)
        // if (checkError == -1) {
        //   errors.push(error)
        // }
        // errors.push(error)
    };
    const handleChange = (props) => {
        setMetrics(props);
    };
    const handleUserChanges = (props) => {
        setYear(parseInt(props));
    };
    const handleCommentChanges = (props) => {
        setComment(props);
    };
    const Validate = (evt) => {
        let met = [...metrics];

        let mt = metrics.filter((el) => el.metric != "");

        let weightedTotal = mt
            .map((el) => el.weighted.value)
            .reduce((a, b) => a + b, 0);

        let weightTotal = met
            .map((el) => parseFloat(el.weight.value))
            .reduce((a, b) => a + b, 0);

        if (mt.length < 3) {
            errors.push("Please add atleast 3 metrics");
            addError(errors);
            return false;
        }
        else {
            mt.forEach((element, index) => {
                // If weight is not present
                if (element.weight.value === 0) {
                    met[index].weight.isValid = false;
                    errors.push("Weight is required");
                    // alert('Weight is required')
                }
                // else if (parseFloat(element.weight.value) % 1 == 0) {
                //   met[index].weight.isValid = false
                // }
                // Weight should not be lower than 0.1 and not be higher than 1
                else if (parseFloat(element.weight.value) > 1) {
                    met[index].weight.isValid = false;
                    errors.push("Weight must be greater than 1");
                    // alert('Weight must be less than 5')
                } else if (parseFloat(element.weight.value) < 0.1) {
                    met[index].weight.isValid = false;
                    errors.push("Weight must be more than 0");
                }
                // else if (totalWeight != 1) {
                //   met[index].weight.isValid = false
                //   errors.push('Sum of all weight should be 1')
                // }
                else {
                    met[index].weight.isValid = true;
                }
                // Output validation
                if (element.output.value === "") {
                    met[index].output.isValid = false;
                    errors.push("Output is required");
                    // alert('Output is required')
                }
                if (element.rating.value === "") {
                    met[index].rating.isValid = false;
                    errors.push("Rating is required");
                    // alert('Rating is required')
                }
                // If weight is not present
                if (isNaN(element.rating.value)) {
                    met[index].rating.isValid = false;
                    errors.push("Rating must be a number");
                } else if (element.rating.value > 5) {
                    met[index].rating.isValid = false;
                    errors.push("Rating must be less than 5");
                    // alert('Total rating must be less than 5')
                } else if (element.rating.value < 0) {
                    met[index].rating.isValid = false;
                    errors.push("Rating must be more than 0");
                    // alert('Total rating must be more than 0')
                }
                // else {
                //   met[index].rating.isValid = true
                // }
                // console.log("total:", totalWeight)
                // Rating validation 0-5 only

                if (weightTotal != 1) {
                    element.weight.isValid = false;
                    errors.push("Sum of all weight should be 1");
                }
                addError(errors)
                setMetrics(met)
            });
        }
        let formData = {
            employeeId: Auth.name,
            appraisalYear: year,
            departmentId: Auth.role,
            supervisorId: Auth.role,
            totalWeightedRating: weightedTotal,
            rateeComments: comment.comments,
            supervisorComments: "",
            metrics: errors.length == 0 && mt.length > 0 ? mt : [],
        };
        return formData
    }
    const formSubmit = async (evt) => {
        evt.preventDefault();
        await Validate(evt)

        // let formData = Validate(evt)
        console.log(Validate(evt))
        if (temp.length == 0) {
            console.log('Form Submit')
            // Instance.post("/appraisals", Validate(evt))
            //     .then((res) => {
            //         console.log('Submitted:')
            //         console.log(res);
            //     })
            //     .catch((err) => {
            //         console.error(err);
            //     });
        }
        else {
            console.log('Form cannot Submit')
        }

        // // mt.forEach(element => {
        // //   console.log(typeof element)

        // // });



        // // addError(errors)

        // // console.log(temp)
        // // met.weight.isValid = false

        // let formData = {
        //   employeeId: userInfo.name,
        //   appraisalYear: /*parseInt(userInfo.year)*/ 1,
        //   departmentId: /*parseInt(userInfo.department)*/ 2,
        //   supervisorId: /*parseInt("Dummy")*/ 3,
        //   totalWeightedRating: weightedTotal,
        //   rateeComments: comment.comments,
        //   supervisorComments: "",
        //   metrics: mt,
        // };

        // // console.log(formData)
        // if (temp.length == 0) {
        //   // Instance.post("/appraisals", formData)
        //   //   .then((res) => {
        //   //     console.log('Submitted:')
        //   //     console.log(res);
        //   //   })
        //   //   .catch((err) => {
        //   //     console.error(err);
        //   //   });
        // }


        // setTimeout(() => {
        //   setLoading(false);
        // }, 2000);

    };
    return (
        <>
            <Row Row className="mt-5 text-center" >
                <Col>
                    <Title title="Yearly Performance Appraisal" subtitle="For Review" />
                </Col>
            </Row>

            <Form onSubmit={formSubmit} >
                <Row className="my-5">
                    <Col>
                        <UserInfo name={Auth.name} department={Auth.role} userCallback={handleUserChanges} />
                    </Col>
                </Row>
                <Row className="g-0 p-2">
                    <Col>
                        <Card>
                            <Card.Header className="text-white py-3">
                                <span>Employee Assessment Form</span>
                            </Card.Header>
                            <FormTable metrics={metrics} parentCallback={handleChange} />
                        </Card>
                    </Col>
                </Row>
                <Row className="my-5 g-0 p-2">
                    <Col>
                        <CommentBox
                            title="Ratee's Comments"
                            comment={comment}
                            commentCallback={handleCommentChanges}
                        />
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <Validations errors={temp} />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xl="2 offset-10" className="d-grid">
                        <SubmitButton />
                        {/* <Button className="text-white px-5" type="submit">Submit</Button> */}
                    </Col>
                </Row>
            </Form>
        </>
    );
}
