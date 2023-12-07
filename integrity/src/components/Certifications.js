import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import certification1Image from '../assets/images/certification1.png';
import certification2Image from '../assets/images/certification2.png';

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: 'Certification Title 1',
      organization: 'Certification Organization 1',
      date: 'Date 1',
      image: certification1Image,
    },
    {
      id: 2,
      title: 'Certification Title 2',
      organization: 'Certification Organization 2',
      date: 'Date 2',
      image: certification2Image,
    },
  ];

  return (
    <section className="certifications-section bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Certifications</h2>
        <Row>
          {certifications.map(certification => (
            <Col key={certification.id} md={6} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={certification.image}
                  alt={certification.title}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>{certification.title}</Card.Title>
                  <Card.Text>Organization: {certification.organization}</Card.Text>
                  <Card.Text>Date: {certification.date}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default Certifications;
