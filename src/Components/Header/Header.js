import React, { useState } from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded); 
  };

  const handleClose = () => {
    setExpanded(false); 
  };

  const handleLinkClick = () => {
    setExpanded(false); 
  };

  return (
    <>
      {['md'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          expanded={expanded}
          className="bg-body-tertiary mb-0 navbar-cont my-navbar"
        >
          <Container fluid>
            <Navbar.Brand href="#">Polins_pl</Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="your-custom-class"
              onClick={handleToggle} 
            />
            <Navbar.Offcanvas
              show={expanded} 
              onHide={handleClose} 
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
                  <Link
                    to="about-section"
                    className="nav-link"
                    smooth={true}
                    duration={500}
                    onClick={handleLinkClick}
                  >
                    О курсе
                  </Link>
                  <Link
                    to="feedbacks-section"
                    className="nav-link"
                    smooth={true}
                    duration={500}
                    onClick={handleLinkClick}
                  >
                    Отзывы
                  </Link>
                  <Link
                    to="packages-section"
                    className="nav-link"
                    smooth={true}
                    duration={500}
                    onClick={handleLinkClick}
                  >
                    Приобрести
                  </Link>
                  <Link
                    to="contacts-section"
                    className="nav-link"
                    smooth={true}
                    duration={500}
                    onClick={handleLinkClick}
                  >
                    Контакты
                  </Link>
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
