import Logo from './logo/logo';
import { Navbar,Container,Nav } from 'react-bootstrap';

import './header.scss'

 function Header() {
  return (
    <div >
  <Navbar fixed='top' className='header-container' collapseOnSelect expand="md">
  <Container>
  <Navbar.Brand href="#home">
    <Logo />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className='collapsed-menu' id="responsive-navbar-nav">
      <Nav className='me-auto'>
          <Nav.Link className='header-links' href="#home">Home</Nav.Link>
          </Nav>
        <Nav className="me-end">
          <Nav.Link className='header-links' href="#features">Sign Up</Nav.Link>
          <Nav.Link className='header-links' href="#pricing">Login</Nav.Link>
        </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}
export default Header;