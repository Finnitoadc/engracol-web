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
      text: 'En nuestra empresa ofrecemos servicios de mecanizado en generadora para la producción de engranajes y piezas dentadas. Utilizamos tecnología avanzada para asegurar la máxima precisión y calidad en el resultado final',
    },
    {
      customComponent: <Fresadora />,
      title: 'Fresadora',
      text: 'Nuestros servicios de mecanizado en fresadora incluyen la producción de piezas con geometrías complejas y tolerancias muy ajustadas. Contamos con máquinas de control numérico (CNC) que nos permiten trabajar con una amplia variedad de materiales',
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
