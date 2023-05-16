import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import data from '../user.json';
import { useNavigate } from 'react-router-dom';
import './Header';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login =localStorage.getItem("login")
  const [isLoggedin , setIsLoggedin ] = useState('false')
const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    
    if ((email == data.username) && (password== data.password))
        {
            localStorage.setItem("login",true)
          setIsLoggedin(login)
          navigate('/DB_student')
    }


    else {
        navigate('./AlertLogin');
    }
  };

  return (
    <>
   

        
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
    </>
  );
};

export default Login;
