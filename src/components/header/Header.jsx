import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import '../header/header.css';

import logoImage from '../../assets/img/Avida.png';

import Login from './Login';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand='lg' className='bg-green fixed-top'>
        <Container>
          <Navbar.Brand href='#home'>
            <img src={logoImage} alt='Logo' style={{ maxWidth: '100px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mx-auto align-items-center'>
              <Nav.Link href='#home'>Inicio</Nav.Link>
              <Nav.Link href='#about'>Comunidad</Nav.Link>
              <Nav.Link href='#mapa'>Mapa</Nav.Link>
              <Nav.Link href='#guía'>Guía</Nav.Link>
              <Nav.Link href='#tienda'>Tienda</Nav.Link>
            </Nav>
            <Nav className='ml-auto'>
              <Nav.Link onClick={handleShowLoginModal}>Mi Cuenta</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <Login />
      </Modal>
    </div>
  );
};

export default Header;
