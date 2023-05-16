import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import api from '../helpers/api';
import React from 'react';
import './AlertMessage';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';



function Students() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [full_name , setFull_name ] = useState ('')
  const [ city , setCity ] = useState ('')
  const [email , setEmail ] = useState ('')
  const [state , setState ] = useState ('')
  const [phone_number , setPhone_number ] = useState ('')
  const [field_of_study_or_work , setField_of_study_or_work ] = useState ('')

  const [hourly_budget , setHourly_budget ] = useState ('')
  const [student_or_employed , setStudent_or_employed ] = useState ('')

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedCourses2, setSelectedCourses2] = useState([]);
  

////////////////////////////////////////////////////////



const handleSelect = (event) => {
  const selectedCourse = event.target.value;
  const isChecked = event.target.checked;

  if (isChecked) {
    setSelectedCourses((prevSelectedCourses) => [...prevSelectedCourses, selectedCourse]);
  } else {
    setSelectedCourses((prevSelectedCourses) =>
      prevSelectedCourses.filter((course) => course !== selectedCourse)
    );
  }
  console.log(selectedCourse);
};


  ////////////////////////////////////////////////////////////

  const handleSelect_availability = (event) => {
    const selectedCourse2 = event.target.value;
    const isChecked = event.target.checked;
  
    if (isChecked) {
      setSelectedCourses2((prevSelectedCourses2) => [...prevSelectedCourses2, selectedCourse2]);
    } else {
      setSelectedCourses2((prevSelectedCourses2) =>
        prevSelectedCourses2.filter((course) => course !== selectedCourse2)
      );
    }
    console.log(selectedCourse2);
  };

  //////////////////////////////////////////////////////

  const handle_Submit = (event) => {
    const form = event.currentTarget;
      event.preventDefault();
      console.log(full_name);
      api.post('/Forms-post',{
        full_name:full_name,
        city:city,
        email: email,
        student_or_employed:student_or_employed,
        hourly_budget:hourly_budget,
        availability:selectedCourses2,
        courses_to_study:selectedCourses,
        field_of_study_or_work:field_of_study_or_work,
        phone_number:phone_number,
        state:state
      })
      .then (res => {
        navigate('/AlertMessage');
        
      })
    };




  return (
    <>
    <Header/>
    <p>To apply as a student, fill out this form and we will link you with a teacher as soon as possible</p>
    <Form noValidate validated={validated} onSubmit={handle_Submit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Full name</Form.Label>
          <Form.Control onChange={(e) => setFull_name(e.target.value)}
            required
            type="text"
            placeholder="full name"
          />
          
        </Form.Group>



        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="email" 
          />
         
        </Form.Group>




        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Phone number</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">+216</InputGroup.Text>
            <Form.Control onChange={(e) => setPhone_number(e.target.value)}
              type="number"
              placeholder="phone number"
              aria-describedby="inputGroupPrepend"
              required
            />
            
          </InputGroup>
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={(e) => setCity(e.target.value)} type="text" placeholder="City" required />
          
        </Form.Group>



        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control onChange={(e) => setState(e.target.value)} type="text" placeholder="State" required />
          
        </Form.Group>

    <Form.Group >
          <p>Currently a student or an employer</p>
         
        <div key={`radio`} className="mb-3">
          <Form.Check
            type="radio"
            id={`Student`}
            label={`Student`}
            value={`Student`}
            onChange={(e) => setStudent_or_employed(e.target.value)}
          />
          <Form.Check
            type="radio"
            id={`Empolyed`}
            label={`Empolyed`}
            value={`Empolyed`}
            onChange={(e) => setStudent_or_employed(e.target.value)}
          />
          </div>
        
           </Form.Group>
          
          



          <Form.Label>Field of study or work</Form.Label>
          <Form.Control type="text" onChange={(e) => setField_of_study_or_work(e.target.value)} placeholder="ex: computer science" required />
        
        <Form.Group title="Select courses you want to study" >
          <p>Select the courses you want to study</p>
      
        <div key={`checkbox`} className="mb-3">
          <Form.Check
            type="checkbox"
            id={`Python`}
            label={`Python`}
            value={`Python`}
            onChange={handleSelect}
          />
          <Form.Check
            type="checkbox"
            id={`C/C++`}
            label={`C/C++`}
            value={`C/C++`}
            onChange={handleSelect}
          />
          <Form.Check
            type="checkbox"
            id={`Java`}
            label={`Java`}
            value={`Java`}
            onChange={handleSelect}
          />
          <Form.Check
            type="checkbox"
            id={`Algorithm`}
            label={`Algorithm`}
            value={`Algorithm`}
            onChange={handleSelect}
          />

        </div> 
    
        </Form.Group>
  <p>Select your availability</p>
  <div key={`checkbox`} className="mb-3" >
          <Form.Check
            type="checkbox"
            id={`on the weekends`}
            label={`on the weekends`}
            value={`on the weekends`}
            onChange={handleSelect_availability}
          />
          <Form.Check
            type="checkbox"
            id={`all sundays`}
            label={`all sundays`}
            value={`all sundays`}
            onChange={handleSelect_availability}
          />
          <Form.Check
            type="checkbox"
            id={`Saturday`}
            label={`Saturday`}
            value={`Saturday`}
            onChange={handleSelect_availability}
          />
          <Form.Check
            type="checkbox"
            id={`Wednesday afternoon`}
            label={`Wednesday afternoon`}
            value={`Wednesday afternoon`}
            onChange={handleSelect_availability}
          />
          </div>
          <Form.Label>Hourly budget</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text  id="inputGroupPrepend">DT</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="hourly budget"
              aria-describedby="inputGroupPrepend"
              onChange={(e) => setHourly_budget(e.target.value)}
              required
            />
             
          </InputGroup>


        
   
       
      </Row>
      <Form.Group className="mb-3">
        <p>I garantee that:</p>
        <p>the information I provided is valid.</p>
        <p>No verbal or physical form of abuse is allowed</p>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </>
  );
}

export default Students;