import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <>
      
      <br />
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
      <br />

     
        
     
    </>
  );
}

export default Header;