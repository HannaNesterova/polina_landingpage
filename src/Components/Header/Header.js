import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-0 navbar-cont my-navbar">
          <Container fluid>
            <Navbar.Brand href="#">Polins_pl</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="your-custom-class" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Меню
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="about-section" className="nav-link" smooth={true} duration={500}>О курсе</Link>
                  <Link to="feedbacks-section" className="nav-link" smooth={true} duration={500}>Отзывы</Link>
                  <Link to="packages-section" className="nav-link" smooth={true} duration={500}>Преобрести</Link>
                  <Link to="contacts-section" className="nav-link" smooth={true} duration={500}>Контакты</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;