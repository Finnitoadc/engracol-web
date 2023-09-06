"use client"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CardImages from '../components/cardImages';
import Image from 'next/image';

const CardComponent = () => {
  const cardData = [
    {
      imageSrc: '/CAD.jpg', // Ruta de la imagen 1
      title: 'Diseño industrial',
      text: 'Nuestro equipo cuenta con amplia experiencia en diseño industrial, lo que nos permite ofrecer soluciones personalizadas y adaptadas a la necesidad de cada cliente',
    },
    {
      imageSrc: '/disenoindustrial.jpg', // Ruta de la imagen 2
      title: 'Dibujo CAD',
      text: 'Utilizamos software de diseño asistido por computadora para la creacion de planos y modelos 3D. Esto nos permite visualizar y simular el resultado final.',
    },
    {
      imageSrc: '/acabado.jpg', // Ruta de la imagen 2
      title: 'Dibujo CAD',
      text: 'Nuestros equipo se es esfuerza por encontrar soluciones para los problemas de diseño teninendo en cuenta la eficiencia de fabricacion y satisfaccion del cliente.',
    }
  ];

  return (
    <>
      <Navbar />
      <Container className="d-flex justify-content-center mt-5 py-5">
        <Row xs={1} md={3} className="flex-lg-row-reverse align-items-center">
          {cardData.map((card, idx) => (
            <Col key={idx}>
              <CardImages
                imageUrl={card.imageSrc}
                title={card.title}
                text={card.text}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CardComponent;
