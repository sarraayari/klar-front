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
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';

function Teachers() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [full_name , setFull_name ] = useState ('')
  const [ city , setCity ] = useState ('')
  const [email , setEmail ] = useState ('')
  const [state , setState ] = useState ('')
  const [phone_number , setPhone_number ] = useState ('')
  const [field_of_study_or_work , setField_of_study_or_work ] = useState ('')
  const [courses_to_teach , setCourses_to_teach ] = useState ([])
  const [availability , setAvailability ] = useState ([])
  const [hourly_budget , setHourly_budget ] = useState ('')
  const [student_or_employed , setStudent_or_employed ] = useState ('')


  const [selectedCourses, setSelectedCourses] = useState([]);
  const [select_availability, setSelect_availability ] = useState([]);

  //////////////////////////////////////////////////////
  const handleSelect = (event) => {
    const courseId = event.target.id;
    const isChecked = event.target.checked;

    if (isChecked) {
      
      setSelectedCourses((prevSelectedCourses) => [
        ...prevSelectedCourses,
        courseId,
      ]);
    } else {
      setSelectedCourses((prevSelectedCourses) =>
        prevSelectedCourses.filter((course) => course !== courseId)
      );
    }
    console.log(courses_to_teach)
    setCourses_to_teach(selectedCourses);
  };

//////////////////////////////////////////////////////


const handleSelect_availability = (event) => {
  const avId = event.target.id;
  const isChecked = event.target.checked;

  if (isChecked) {
    setSelect_availability((prevSelect_availability) => [
      ...prevSelect_availability,
      avId,
    ]);
  } else {
    setSelect_availability((prevSelect_availability) =>
      prevSelect_availability.filter((availability) => availability !== avId)
    );
  }
  console.log(select_availability)
  setAvailability(select_availability);
  console.log(full_name)
  console.log(email)
  console.log(phone_number)
  console.log(state)
  console.log(city)
  console.log(hourly_budget)
  
};
   



//////////////////////////////////////////////////////



    const handleSelect_Status = (event) => {
      const selectedStatus = event.target.id;

      console.log(`Selected status: ${selectedStatus}`);
      setStudent_or_employed(selectedStatus);
      
      if (selectedStatus === 'Student') {
       
        console.log('You selected Student');
       
      } else if (selectedStatus === 'Employed') {
       
        console.log('You selected Employed');
       
      }
      console.log(student_or_employed)
    }
    


//////////////////////////////////////////////////////

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      console.log(full_name);
      api.post('/Forms-post-teacher',{
        full_name:full_name,
        city:city,
        email: email,
        student_or_employed:student_or_employed,
        hourly_budget:hourly_budget,
        availability:availability,
        courses_to_teach:courses_to_teach,
        field_of_study_or_work:field_of_study_or_work,
        phone_number:phone_number,
        state:state
      })
      .then (res => {
        navigate('/AlertMessage')
        console.log(form)
      })
    }}

 

 //////////////////////////////////////////////////////

  return (
    <div >
      <Header/>
      <p>To apply as a teacher, fill out this form and we will contact you as soon as possible</p>
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">

        {/* /////////////////////////////////////////////////////////// */}
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Full name</Form.Label>
          <Form.Control onChange={(e) => setFull_name(e.target.value)}
            required
            type="text"
            placeholder="full name"
          />
          
        </Form.Group>
  {/* /////////////////////////////////////////////////////////// */}


        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="email" 
          />
         
        </Form.Group>
  {/* /////////////////////////////////////////////////////////// */}



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

  {/* /////////////////////////////////////////////////////////// */}


      </Row>
      <Row className="mb-3">

          {/* /////////////////////////////////////////////////////////// */}

        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={(e) => setCity(e.target.value)} type="text" placeholder="City" required />
         
        </Form.Group>
          {/* /////////////////////////////////////////////////////////// */}
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control onChange={(e) => setState(e.target.value)} type="text" placeholder="State" required />
         
        </Form.Group>
  {/* /////////////////////////////////////////////////////////// */}



    <Form.Group onSelect={handleSelect_Status}>
          <p>Currently a student or an employer</p>
          {['radio'].map(() => (
        <div key={`radio`} className="mb-3">
          <Form.Check
            type="radio"
            aria-label="radio 1"
            id={`Student`}
            label={`Student`}
            onSelect={handleSelect_Status}
          />
          <Form.Check
            type="radio"
            aria-label="radio 1"
            id={`Empolyed`}
            label={`Empolyed`}
            onSelect={handleSelect_Status}
          />
          </div>
           ) ) }

           </Form.Group>
             {/* /////////////////////////////////////////////////////////// */}


           </Row>
          
          
  {/* /////////////////////////////////////////////////////////// */}
              <Form.Group>

          <Form.Label>Field of study or work</Form.Label>
          <Form.Control onChange={(e) => setField_of_study_or_work(e.target.value)} type="text" placeholder="ex: computer science" required />
        
          </Form.Group>

  {/* /////////////////////////////////////////////////////////// */}



        <Form.Group title="Select courses you want to teach" onSelect={handleSelect}>
          <p>Select the courses you want to teach</p>
    
        <div key={`checkbox`} className="mb-3">
          <Form.Check
            type="checkbox"
            id={`Python`}
            label={`Python`}
            onSelect={handleSelect}
          />
          <Form.Check
            type="checkbox"
            id={`C/C++`}
            label={`C/C++`}
            onSelect={handleSelect}
          />
          <Form.Check
            type="checkbox"
            id={`Java`}
            label={`Java`}
            onSelect={handleSelect}
          />
          <Form.Check
            type="checkbox"
            id={`Algorithm`}
            label={`Algorithm`}
            onSelect={handleSelect}
          />

          </div>
</Form.Group>
  {/* /////////////////////////////////////////////////////////// */}




<Form.Group>
  <p>Select your availability</p>
  <div key={`checkbox`} className="mb-3" onSelect={handleSelect_availability}>
          <Form.Check 
            type="checkbox"
            id={`on the weekends`}
            label={`on the weekends`}
            onSelect={handleSelect_availability}
          />
          <Form.Check
            type="checkbox"
            id={`all sundays`}
            label={`all sundays`}
            onSelect={handleSelect_availability}
          />
          <Form.Check
            type="checkbox"
            id={`Saturday`}
            label={`Saturday`}
            onSelect={handleSelect_availability}
          />
          <Form.Check
            type="checkbox"
            id={`Wednesday afternoon`}
            label={`Wednesday afternoon`}
            onSelect={handleSelect_availability}
          />
          </div>
          </Form.Group>



  {/* /////////////////////////////////////////////////////////// */}


          <Form.Group>
          <Form.Label>Hourly budget</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text onChange={(e) => setHourly_budget(e.target.value)} id="inputGroupPrepend">DT</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="hourly budget"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
</Form.Group>
  {/* /////////////////////////////////////////////////////////// */}

          

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

  {/* /////////////////////////////////////////////////////////// */}

    </Form>
    </div>
  );
      }
    

export default Teachers;