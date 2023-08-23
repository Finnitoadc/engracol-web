"use client"
import React from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Link from 'next/link';

const Homepage = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <Row className="flex-lg-row-reverse align-items-center g-3 mt-5">
          <Col sm={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 1 }}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src="/logo-engracol.png"
                alt="Bootstrap Themes"
                width={300}
                height={600}
                className="img-fluid"
                priority
              />
            </motion.div>
          </Col>
          <Col className='mt-4'>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 1.5, delay: 1 }}
              className="display-5 fw-bold lh-1 mb-3 text-white"
            >
              Reparación y mantenimiento de maquinaria industrial
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 1.5, delay: 1 }}
              className="lead text-white"
            >
              En <strong className='fw-bold'>ENGRACOL S.A.S</strong> nos dedicamos a la fabricación
              de piñoneria, transmisiones mecánicas y mecanizado
              industrial, ofreciendo soluciones de calidad para las
              necesidades específicas de cada cliente.
            </motion.p>
          </Col>
        </Row>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
          <Link href="/mecanizado">
            <Button variant="light" size="lg" className="px-4 gap-3 button-text-color">
              Servicio de Mecanizado
            </Button>
          </Link>
          <Link href="/servicio-soldadura">
            <Button variant="light" size="lg" className="px-4 button-text-color">
              Servicio de Soldadura
            </Button>
          </Link>
          <Link href="/servicio-diseño">
            <Button variant="light" size="lg" className="px-4 button-text-color">
              Servicio de Diseño
            </Button>
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Homepage;
