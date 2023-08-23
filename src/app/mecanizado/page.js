"use client"
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Sinfin from '../components/sinfin'
import Generadora from '../components/generadora'
import Fresadora from '../components/fresadora'
import CardItem from '../components/cardItem'

const CardComponent = () => {
  const cardData = [
    {
      customComponent: <Sinfin />,
      title: 'Torno',
      text: 'Ofrecemos servicios de mecanizado en torno para piezas de hasta 1 m de diámetro y 3 m de longitud. Utilizamos maquinaria de última generación para garantizar una alta precisión en el acabado final',
    },
    {
      customComponent: <Generadora />,
      title: 'Generadora',
      text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
      customComponent: <Fresadora />,
      title: 'Fresadora',
      text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    }
    // Agrega más datos de tarjetas según sea necesario
  ];

  return (
    <>
      <Navbar />
      <Container className="d-flex justify-content-center mt-5 py-5">
        <Row xs={1} md={3} className="flex-lg-row-reverse align-items-center">
          {cardData.map((card, idx) => (
            <Col key={idx}>
              <CardItem customComponent={card.customComponent} title={card.title} text={card.text} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default CardComponent;
