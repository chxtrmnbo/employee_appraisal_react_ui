import React from 'react'
import { Card, Container, Image } from 'react-bootstrap'

export default function TableError(props) {
    return (
        <>
            <Container fluid className="text-center w-50 my-5 justify-content-center">
                <Card className=" bg-transparent border-0 shadow-none">
                    <Card.Title className="pt-3">
                        <Image src="https://cdn-icons.flaticon.com/png/512/5361/premium/5361236.png?token=exp=1639072819~hmac=e00a059e924204310ee2c5c32cd012d5" className="w-25 justify-content-center">
                        </Image>
                    </Card.Title>
                    <div className="mt-4 p-2" >
                        <h4 style={{ color: '#004C82' }}>{props.title}</h4>
                        <p>{props.subtitle}</p>
                    </div>
                </Card>
            </Container>
        </>
    )
}