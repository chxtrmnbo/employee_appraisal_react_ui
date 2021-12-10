import React from 'react'
import { Row, Col, ListGroup, Stack, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function GroupList(props) {
    let groupAppraisal = []
    // let groupAppraisal = props.appraisals.filter(el => el.appraisalYear)
    let years = props.appraisals.map((el) => el.appraisalYear)
    let departments = props.appraisals.map(el => el.departmentId)

    console.log("years", years)
    var unique = years.filter((v, i, a) => a.indexOf(v) === i);

    unique.forEach(year => {
        let users = props.appraisals.filter(el => el.appraisalYear == year)
        let yearIndex = groupAppraisal.map(el => el.appraisalYear).indexOf(year)
        if (yearIndex == -1) {
            groupAppraisal.push({
                appraisalYear: year,
                users: users
            })
        } else {
            groupAppraisal[yearIndex].users.push(users)
        }

    });
    const Department = (dep) => {
        return <h5>{dep}</h5>
    }
    return (
        <div>
            {
                groupAppraisal.map((appraisal, index) => (
                    <>
                        <Row className="mt-5" key={index}>
                            <Col>
                                <h4>{appraisal.appraisalYear} <span className="text-muted" style={{ fontSize: '20px' }}>({appraisal.users.length})</span> </h4>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col>
                                <ListGroup>
                                    {
                                        appraisal.users.map((user, index) =>
                                            <Link to={`/SupervisorReview/${user._id}`} style={{ textDecoration: "none" }} key={index}>
                                                <ListGroup.Item className="py-3 px-4" action >
                                                    <Stack gap={0} >
                                                        <h5>{user.employeeId}</h5>
                                                        <span className="text-muted" style={{ marginTop: '-8px' }}>Employee</span>
                                                    </Stack>
                                                </ListGroup.Item>
                                            </Link>
                                        )}
                                </ListGroup>
                            </Col>
                        </Row>

                    </>
                ))
            }
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
        </div>
    )
}
