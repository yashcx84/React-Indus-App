import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    navigate('/home');
  };

  return (
    <Container className='myContainer signup'>
      <Row>
        <h1>SignUp<span>.</span></h1>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center'>
          <Form className='formContainer' onSubmit={handleSubmit}>
            <Form.Group className='w-100'>
              <Form.Control
                type="email"
                placeholder="Email Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='w-100'>
              <Form.Control
                type="text"
                placeholder="Username Here"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className='w-100'>
              <Form.Control
                type="password"
                placeholder="Password Here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" className='myBtn tertaryBtn w-100'>
              Signup
            </Button>
            <p>Already a user?<span><Link to='/login'>Login</Link></span></p>
          </Form>
        </Col>
        <p className='text-center mt-4'>By Signing Up, make sure you accept the <Link to='/terms'>Terms & Conditions</Link> and <Link to='/privacy'>Privacy Policy</Link>.</p>
      </Row>
    </Container>
  );
}

export default SignUp;
