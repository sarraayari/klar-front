import React from 'react';
import { useState } from 'react';
import api from '../helpers/api';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './AlertMessage'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
function Home  ()  {

  const [full_name , setFull_name ] = useState ('')
  const [ message , setMessage ] = useState ('')
  const [email , setEmail ] = useState ('')
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
      api.post('/Forms-post-contact',{
        full_name:full_name,
        message:message,
        email: email
      })
      .then (res => {
        navigate('/AlertMessage')
        console.log(form)
      })
    }



  return (


    <>
    <Header/>
    <Container>
      <Row>
      
        <Col>
        <div id="about">
          <h1>About</h1>
          <p>Welcome to our website! We are a company dedicated to providing high-quality products and services.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div id="contact">
          <h1>Contact</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setFull_name(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" onChange={(e) => setMessage(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Home;
