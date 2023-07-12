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
                priority // Prefetching de imagen
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
              Responsive left-aligned hero with image
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lead text-white"
            >
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </motion.p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ExampleComponent;
