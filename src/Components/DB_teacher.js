import Table from 'react-bootstrap/Table';
import  api from '../helpers/api';
import { useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login';
import './Home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function DB ()  {

const [loading, setLoading] = useState (true)
const [ Rows , setRows ]  = useState ([{}])
const isLoggedin = localStorage.getItem("login")
const navigate= useNavigate()

  const handleLogout =(e) =>{
    e.preventDefault();
    localStorage.clear();
    navigate('/Home');
  }


  ///////////////////////////////////////////
  const fetchData = () => {
    fetch(`https://klar-back.onrender.com/Forms-get-teacher`)
    .then((response) => response.json())
    .then((actualData) => {
      setRows(actualData);
      setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  useEffect(() => {
    fetchData();
  }, []);
  
 


return (
    <div >
       <Navbar bg="primary" variant="dark">
    <Container className="me-auto justify-content-center">
      <Navbar.Brand href="https://klar.netlify.app/Home">Home</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="https://klar.netlify.app/DB_student">Students data</Nav.Link>
        <Nav.Link href="https://klar.netlify.app/DB_teacher">Teachers data base</Nav.Link>
        <Nav.Link href="https://klar.netlify.app/DB_contact">Contact data base</Nav.Link>

      </Nav>
    </Container>
  </Navbar>
      {!isLoggedin? (<p>you're not logged in</p>) : (
        <>
      <Button onClick={(e)=>{handleLogout(e)}}>Logout</Button>
     {loading ? (
         <p>Loading...</p>
      ) : (
        <>
    <Table striped bordered hover>
    <thead>
            <tr>
              <th>Full name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>City</th>
              <th>State</th>
              <th>Student/Employed</th>
              <th>Field of study or work</th>
              <th>Course to teach</th>
              <th>Avaiblity</th>
              <th>Hourly budget</th>
              </tr>
          </thead>
          <tbody>
          {Rows.map((item, index) => (
          <tr key={index}>
            <td>{item.full_name}</td>
            <td>{item.email}</td>
            <td>{item.phone_number}</td>
            <td>{item.city}</td>
            <td>{item.state}</td>
            <td>{item.student_or_employed}</td>
            <td>{item.field_of_study_or_work}</td>
            <td>{item.courses_to_teach}</td>
            <td>{item.availability}</td>
            <td>{item.hourly_budget}</td>
          </tr>
        ))}
          </tbody>
        </Table>
        </>
      )
      }
      </>
      )
    }
        </div>
   );
}
export default DB;
