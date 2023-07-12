"use client"
import React, { useState } from 'react';
import { Navbar, Offcanvas } from 'react-bootstrap';
import { HiMenu } from 'react-icons/hi';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  return (
    <>
      <Navbar expand="sm" fixed="top" style={{ backgroundColor: 'transparent' }}>
        <Navbar.Brand className='mx-4' aria-controls="sidebar-nav" onClick={handleShow}>
          <HiMenu className='text-white fs-3'/>
        </Navbar.Brand>
      </Navbar>

      <Offcanvas show={showSidebar} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Barra lateral</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
