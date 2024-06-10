import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Container, Form, Button, Image } from 'react-bootstrap'
import googleLogo from '../assets/Images/google.png';
import facebookLogo from '../assets/Images/facebook.png';

function Login() {
  return (
    <Container className='myContainer signup'>
      <Row>
        <h1>Login<span>.</span></h1>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center'>
          <Form className='formContainer'>
            <Form.Group className='w-100'>
              <Form.Control type="email" placeholder="Email Here" required />
            </Form.Group>
            <Form.Group className='w-100'>
              <Form.Control type="password" placeholder="Password Here" required />
            </Form.Group>
            <div className="buttonContainer">
            <Button type="submit" className='myBtn tertaryBtn w-100'>
              Login
            </Button>
            <Button className='login-logo d-flex justify-content-center align-items-center gap-2 w-100'>
            <Image src={googleLogo} className='logo'/> Login with Google
            </Button>
            <Button className='login-logo d-flex justify-content-center align-items-center gap-2 w-100'>
            <Image src={facebookLogo} className='logo'/> Login with Facebook 
            </Button>
            </div>
            <p>New user?<span><Link to='/signup'>Create an Account</Link></span></p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
