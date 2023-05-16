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
          <Navbar.Brand action href="/Home"><Button>Home</Button></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  href="https://klar.netlify.app/Student">Students</Nav.Link>
            <Nav.Link  href="/Teacher">Teachers</Nav.Link>
            <Nav.Link  href="/Home">About</Nav.Link>
            <Nav.Link  href="/Home">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />

     
        
     
    </>
  );
}

export default Header;

// import ListGroup from 'react-bootstrap/ListGroup';
// function Header() {
//   return (
//     <div className="SideBar">
//     <ListGroup>
//       <ListGroup.Item action href='/Home' >Home</ListGroup.Item>
//       <ListGroup.Item action href='/Student'> Students</ListGroup.Item>
//       <ListGroup.Item action href='/Teacher'> Teachers</ListGroup.Item>
//       <ListGroup.Item action href='/Home'>About</ListGroup.Item>
//       <ListGroup.Item action href='/Home'>Contact</ListGroup.Item>
   

//     </ListGroup>
//     </div>
//   );
// }
// export default Header;



