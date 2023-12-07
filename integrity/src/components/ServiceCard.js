import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/ServiceCard.css'; // Import the CSS file for styling

const ServiceCard = ({ title, description, imageUrl, link}) => {
  return (
    <a href={link}>
      <Card className="service-card border-0 shadow mb-4">
        {/* Add the hover animation to the Card component */}
        <div className="hover-effect">
          <Card.Img variant="top" src={imageUrl} className="card-img-top rounded-top" />
          <Card.Body className="bg-white rounded-bottom">
            <Card.Title className="text-primary mb-3">{title}</Card.Title>
            <Card.Text className="text-muted">{description}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    </a>
  );
};

export default ServiceCard;
