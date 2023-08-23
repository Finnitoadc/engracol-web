import React from 'react';
import { Card } from 'react-bootstrap';

const CardItem = ({ customComponent, title, text }) => {
  return (
    <Card className='transparent-card'>
      <Card.Body>
        {customComponent}
        <Card.Title className='text-white'>{title}</Card.Title>
        <Card.Text className='text-white'>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
