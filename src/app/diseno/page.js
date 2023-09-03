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
      imageSrc: '/soldadura1.jpg', // Ruta de la imagen 1
      title: 'Soldadura TIG',
      text: 'Realizamos soldadura TIG en acero inoxidable, aluminio y otros materiales. Este proceso es ideal para trabajos que requieran una alta precision y un acabado estetico.',
    },
    {
      imageSrc: '/soldadura2.jpg', // Ruta de la imagen 2
      title: 'Soldadura MIG/MAG',
      text: 'Ofrecemos servicios de soldadura MIG/MAG para la produccion en serie de piezas metalicas. Este proceso es rapido y eficiente, y permite obtener resultados homogeneos y resistentes.',
    }
  ];

  return (
    <>
      <Navbar />
      <Container className="d-flex justify-content-center mt-5 py-5">
        <Row xs={2} md={2} className="flex-lg-row-reverse align-items-center">
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
