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
      <Navbar expand="sm" fixed="top" style={{ backgroundColor: 'transparent' }}>
        <Navbar.Brand className='mx-4' aria-controls="sidebar-nav" onClick={handleShow}>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%"
            }}
          >
            <HiMenu className='text-white fs-3' />
          </motion.div>
        </Navbar.Brand>
        <Button variant="outline-light" className="ms-auto me-4">Contacto</Button>
      </Navbar>

      <Offcanvas show={showSidebar} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link href="/torno">
                  <i className="bi bi-cassette icon-lg">Torno</i>
              </Link>
            </li>
            <li>
              <Link href="/ruta-del-icono-2">
                  <i className="bi bi-cassette icon-lg">Fresadora</i>
              </Link>
            </li>
            <li>
              <Link href="/ruta-del-icono-3">
                  <i className="bi bi-cassette icon-lg">Generadora</i>
              </Link>
            </li>
            <li>
              <Link href="/ruta-del-icono-4">
                  <i className="bi bi-cassette icon-lg"></i>
              </Link>
            </li>
            <li>
              <Link href="/ruta-del-icono-5">
                  <i className="bi bi-cassette icon-lg"></i>
              </Link>
            </li>
            <li>
              <Link href="/ruta-del-icono-6">
                  <i className="bi bi-cassette icon-lg"></i>
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;