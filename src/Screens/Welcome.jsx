import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import slide1 from '../assets/Images/home-banner.jpg';
import slide2 from '../assets/Images/home-banner2.jpg';
import slide3 from '../assets/Images/home-banner3.jpg';
import { MdArrowOutward } from "react-icons/md";

function Welcome() {
    return (
        <Container>
            <div className="container-fluid bg-image d-flex justify-content-left align-items-end text-light">
                <Row className='d-flex justify-content-left align-items-center bg-row p-5'>
                    <h1 className='p-0'>Welcome! To WebLock</h1>
                    <p>Explore Your Journey Today With Us!</p>
                    <button className='myBtn tertaryBtn w-auto hoverBtn shadowBtn'>Get Started</button>
                </Row>
            </div>
            <Row className='mt-5'>
                <Row>
                    <h2 className='p-0'>Featured</h2>
                    <p className='capitalized'>Meet some of our amazing members!</p>
                </Row>
                <Row className='p-0'>
                    <Col md={4} sm={6} xs={12} className='profile-card'>
                        <Card className="text-white profile-card">
                            <Card.Img src={slide1} alt="Card image" />
                            <Card.ImgOverlay>
                                <MdArrowOutward className='profile-icon radius-md' />
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} sm={6} xs={12} className='profile-card'>
                        <Card className="text-white profile-card">
                            <Card.Img src={slide2} alt="Card image" />
                            <Card.ImgOverlay>
                                <MdArrowOutward className='profile-icon radius-md' />
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} sm={6} xs={12} className='profile-card' >
                        <Card className="text-white profile-card">
                            <Card.Img src={slide3} alt="Card image" />
                            <Card.ImgOverlay>
                                <MdArrowOutward className='profile-icon radius-md' />
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} sm={6} xs={12} className='profile-card'>
                        <Card className="text-white profile-card">
                            <Card.Img src={slide1} alt="Card image" />
                            <Card.ImgOverlay>
                                <MdArrowOutward className='profile-icon radius-md' />
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} sm={6} xs={12} className='profile-card'>
                        <Card className="text-white profile-card">
                            <Card.Img src={slide1} alt="Card image" />
                            <Card.ImgOverlay>
                                <MdArrowOutward className='profile-icon radius-md' />
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col md={4} sm={6} xs={12} className='profile-card'>
                        <Card className="text-white profile-card">
                            <Card.Img src={slide1} alt="Card image" />
                            <Card.ImgOverlay>
                                <MdArrowOutward className='profile-icon radius-md' />
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Row>
        </Container>

    )
}

export default Welcome
