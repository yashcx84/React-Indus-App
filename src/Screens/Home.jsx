import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

function Home() {
    return (
        <Container className='myContainer spec'>
            <Row className='boards'>
                <Col className='dashBoard'>
                    <Row >
                        <h1 className='opacity-25'>Profile</h1>
                        <h2>Welcome, User</h2>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
