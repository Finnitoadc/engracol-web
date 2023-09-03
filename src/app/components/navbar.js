import React, { useState } from 'react';
import { Navbar, Offcanvas, Button } from 'react-bootstrap';
import { HiMenu } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClose = () => setShowSidebar(false);
  const handleShow = () => setShowSidebar(true);

  return (
    <>
      <Navbar expand="sm" fixed="top">
        <Navbar.Brand className='mx-4' aria-controls="sidebar-nav" onClick={handleShow}>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%"
            }}
          >
            <HiMenu className='text-white fs-3'/>
          </motion.div>
        </Navbar.Brand>
        <Button variant="outline-light" className="ms-auto me-4">Contacto</Button>
      </Navbar>

      <Offcanvas show={showSidebar} onHide={handleClose} placement="start" className="transparent-offcanvas">
        <Offcanvas.Header closeButton closeVariant='white'>
          <Offcanvas.Title className='text-white'>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link className='text-white link-underline-dark' href="/mecanizado">
                  Mecanizado
              </Link>
            </li>
            <li>
              <Link className='text-white link-underline-dark' href="/soldadura">
                 Soldadura
              </Link>
            </li>
            <li>
              <Link className='text-white link-underline-dark' href="/diseno">
                  Diseño
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;