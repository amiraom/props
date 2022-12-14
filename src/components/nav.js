import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css';

function BasicExample() {
  return (
    <Navbar  expand="lg" style={{backgroundColor:'#212529'}}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:'700px'}}>
          <Nav className="me-auto">
            <Nav.Link className="me" href="#home" style={{color:'white'}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color:'white'}}>Services</Nav.Link>
            <Nav.Link href="#home" style={{color:'white'}}>About</Nav.Link>
            <Nav.Link href="#home" style={{color:'white'}}>Skills</Nav.Link>
            <Nav.Link href="#home" style={{color:'white'}}>Portfolio</Nav.Link>
            <Nav.Link href="#home" style={{color:'white'}}>Blog</Nav.Link>

            <Nav.Link href="#home" style={{color:'white'}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;