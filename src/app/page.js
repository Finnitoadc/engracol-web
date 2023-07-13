"use client"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from './components/navbar';
import Footer from './components/footer';

const ExampleComponent = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <Navbar />
      <Container>
        <Row className="flex-lg-row-reverse align-items-center g-5 mt-3">
          <Col sm={6} lg={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 0.5 }}
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src="/ejemplo.webp"
                alt="Bootstrap Themes"
                width={300}
                height={300}
                className="img-fluid"
                priority
              />
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="display-5 fw-bold lh-1 mb-3 text-white"
            >
              Reparación y mantenimiento de maquinaria industrial
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lead text-white"
            >
              En <strong className='fw-bold'>ENGRACOL S.A.S</strong> nos dedicamos a la fabricación de piñoneria, 
              transmisiones mecánicas y mecanizado industrial, 
              ofreciendo soluciones de calidad para las necesidades específicas de cada cliente. 
              Contamos con un equipo altamente capacitado en el diseño y producción de piezas y sistemas mecánicos,
              utilizando tecnología avanzada y materiales de primera calidad. nuestra experiencia en el sector nos permite ofrecer un servicio personalizado y eficiente garantizando la satisfacción de nuestros clientes.
            </motion.p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ExampleComponent;
