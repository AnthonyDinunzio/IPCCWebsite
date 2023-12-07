import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import secImg from '../assets/images/security.png'; // Replace with your header image path
import '../styles/learn.css'; // Import your custom CSS file for additional styling

function LearnThree() {
  return (
    <div className="learn-three-container">
      {/* Header Section with Image */}
      <div className="header-section">
        <img src={secImg} alt="Header" className="img-fluid" />
      </div>

      {/* Content Section */}
      <Container className="content-section py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-4">Elevating Security with Integrity</h1>

            {/* Summary Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Summary</h3>
                <p>
                  At Integrity Protection and Consulting Corp, we believe that true security goes beyond just safeguarding assets—it's about upholding values. Our name is a testament to our core principle: Integrity!
                </p>
              </Card.Body>
            </Card>

            {/* Core Values Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Core Values</h3>
                <p>
                  We prioritize integrity as the foundation of our operations. Our commitment to upholding ethical standards and principled conduct permeates every facet of our services, ensuring security solutions deeply rooted in trust and reliability.
                </p>
              </Card.Body>
            </Card>

            {/* Holistic Approach Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Holistic Approach</h3>
                <p>
                  Our approach to security is holistic, transcending mere asset protection. We intertwine security measures with ethical values, safeguarding not only physical assets but also the integrity and reputation of our clients.
                </p>
              </Card.Body>
            </Card>

            {/* Commitment to Excellence Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Commitment to Excellence</h3>
                <p>
                  We are unwavering in our commitment to excellence. Our pursuit of providing top-tier security solutions is underpinned by a dedication to adhering to the highest ethical standards and delivering unmatched client satisfaction.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LearnThree;
