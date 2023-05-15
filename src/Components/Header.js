import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <>
      
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="http://localhost:3000/Home"><Button>Home</Button></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000/Student">Students</Nav.Link>
            <Nav.Link href="http://localhost:3000/Teacher">Teachers</Nav.Link>
            <Nav.Link href="http://localhost:3000/Home">About</Nav.Link>
            <Nav.Link href="http://localhost:3000/Home">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />

     
        
     
    </>
  );
}

export default Header;