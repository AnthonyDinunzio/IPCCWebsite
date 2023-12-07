import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import techImg from '../assets/images/tech.png'; // Replace with your header image path
// Import your custom CSS file for additional styling

function Tech() {
  return (
    <div className="technological-integration-container">
      {/* Header Section with Image */}
      <div className="header-section">
        <img src={techImg} alt="Technology" className="img-fluid" />
      </div>

      {/* Content Section */}
      <Container className="content-section py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-4">Technological Integration for Enhanced Security</h1>

            {/* Introduction Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Implementing Cutting-Edge Security Technologies</h3>
                <p>
                  Our Technological Integration services focus on deploying and amalgamating the latest security technologies to fortify your infrastructure. We specialize in integrating surveillance systems, access control mechanisms, and robust cybersecurity measures tailored to your security needs.
                </p>
              </Card.Body>
            </Card>

            {/* Integrated Technologies Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Integrated Technologies</h3>
                <ul>
                  <li>Surveillance Systems: Implementation of advanced surveillance solutions for real-time monitoring.</li>
                  <li>Access Control Mechanisms: Installation of access control systems to secure sensitive areas.</li>
                  <li>Cybersecurity Measures: Integration of robust cybersecurity protocols to safeguard digital assets.</li>
                  <li>Integration Solutions: Seamless integration of diverse security technologies for comprehensive protection.</li>
                </ul>
              </Card.Body>
            </Card>

            {/* Advantages of Integration Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Advantages of Technological Integration</h3>
                <ul>
                  <li>Enhanced Security: Strengthened protection through integrated and synchronized security measures.</li>
                  <li>Efficiency and Accessibility: Streamlined systems for efficient security monitoring and access management.</li>
                  <li>Adaptability: Scalable solutions that adapt to evolving security needs and technological advancements.</li>
                  <li>Comprehensive Protection: Holistic security coverage across physical and digital domains.</li>
                </ul>
              </Card.Body>
            </Card>

            {/* Ready to Implement Technologies Section */}
            <Card className="card mb-4">
              <Card.Body>
                <h3>Ready to Implement Cutting-Edge Technologies?</h3>
                <p>
                  Secure your premises and digital assets with our comprehensive technological integration services. Implement the latest security technologies tailored to your specific needs.
                </p>
                <p>
                  Ready to fortify your security infrastructure? Contact us today to initiate technological integration!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tech;
