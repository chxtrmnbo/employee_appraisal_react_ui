import React from 'react'
import { Card, Container, Image } from 'react-bootstrap'

export default function TableError() {
    return (
        <>
            <Container fluid className="text-center w-50 my-5 justify-content-center">
                <Card className=" bg-transparent border-0 shadow-none">
                    <Card.Title className="pt-3">
                        <Image src="https://cdn-icons.flaticon.com/png/512/5361/premium/5361236.png?token=exp=1639072819~hmac=e00a059e924204310ee2c5c32cd012d5" className="w-25 justify-content-center">
                        </Image>
                    </Card.Title>
                    <Card.Subtitle className="mt-4 p-2 ">
                        <h3 style={{ color: '#004C82' }}>NETWORK ERROR</h3>
                    </Card.Subtitle>
                    <Card.Text className=" text-muted W-25">
                        Some quick example text to build on the card title and make up the
                    </Card.Text>
                </Card>
            </Container>
        </>
    )
}