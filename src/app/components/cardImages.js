import React from 'react';
import { Card } from 'react-bootstrap';

const CardItem = ({ title, text, imageUrl }) => {
  return (
    <Card className='transparent-card'>
      <Card.Img variant="top" src={imageUrl} className='img-fluid'/>
      <Card.Body>
        <Card.Title className='text-white'>{title}</Card.Title>
        <Card.Text className='text-white'>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardItem;

