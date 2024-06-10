import { React, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { IoArrowForwardOutline } from "react-icons/io5";
import { submitContactForm } from '../Redux/Actions/contactActions';
import { Link } from 'react-router-dom';


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const redirection = useNavigate()

    const handleSubmit = (e) => {
        {
            e.preventDefault();
            const formData = { name, email, message };
            dispatch(submitContactForm(formData));
            redirection('/thanks');
        }
    }



    return (
        <Container className='mt-5 pt-5 contact'>
            <Row>
                <Row className='w-100 p-0 mb-2'>
                    <p>Contact Us</p>
                    <h2>Get Answers to your questions</h2>
                </Row>
                <Col className='p-4 d-flex justify-content-start bg-dark text-light'>
                    <Form className='formContainer' onSubmit={handleSubmit}>
                        <Form.Group className='w-100'>
                            <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                        </Form.Group>
                        <Form.Group className='w-100'>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                        </Form.Group>
                        <Form.Group className='w-100'>
                            <Form.Control type="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
                        </Form.Group>
                        <div className="buttonContainer">
                            <Button type="submit" className='myBtn tertaryBtn w-50'>
                                Submit <IoArrowForwardOutline />
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col className='contact-side p-4'>
                    <div className="location mt-5">
                        <h2>Meet Us!</h2>
                        <p>Halifax Bay West Centre, 6940 Mumford Road, Suite 210, Halifax, Nova Scotia, B3L 0B7</p>
                        <Link className='d-block mb-4'>inquiry@cognizant.com</Link>
                        <button className='myBtn secondaryBtn'> Get Location <LuArrowUpRightFromCircle className='location-icon' /></button>
                    </div>
                    <div className="connect-icons mt-4">
                       <Link><FaInstagram className='icon' /></Link> 
                       <Link><CiFacebook className='icon' /></Link>
                       <Link><FaYoutube className='icon' /></Link>
                       <Link><FaXTwitter className='icon' /></Link>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default Contact