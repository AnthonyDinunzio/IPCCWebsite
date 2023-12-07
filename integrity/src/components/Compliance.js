import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import complianceImg from '../assets/images/compliance.png'; // Replace with your header image path
 // Import your custom CSS file for additional styling

function Compliance() {
  return (
    <div className="compliance-regulatory-container">
      {/* Header Section with Image */}
      <div className="header-section">
        <img src={complianceImg} alt="Compliance and Regulatory Support" className="img-fluid" />
      </div>

      {/* Content Section */}
      <Container className="content-section py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-4">Compliance and Regulatory Support</h1>

            {/* Introduction Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Adherence to Industry Regulations</h3>
                <p>
                  Our Compliance and Regulatory Support services focus on ensuring adherence to industry standards and regulations. We provide comprehensive support in implementing cutting-edge security technologies while facilitating compliance with legal requirements.
                </p>
              </Card.Body>
            </Card>

            {/* Comprehensive Compliance Solutions Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Comprehensive Compliance Solutions</h3>
                <p>
                  We offer tailored solutions to meet regulatory standards, including the integration of surveillance systems, access control, and cybersecurity measures. Our services encompass:
                </p>
                <ul>
                  <li>Implementation of Cutting-Edge Security Technologies</li>
                  <li>Facilitation in Obtaining Certifications</li>
                  <li>Adherence to Legal Requirements</li>
                  <li>Continuous Compliance Monitoring</li>
                </ul>
              </Card.Body>
            </Card>

            {/* Certification Support Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Certification Support</h3>
                <p>
                  We assist in obtaining industry certifications and support clients in meeting compliance requirements, ensuring their security infrastructure aligns with established regulatory frameworks.
                </p>
              </Card.Body>
            </Card>

            {/* Contact for Regulatory Support Section */}
            <Card className="card mb-4">
              <Card.Body>
                <h3>Ensure Regulatory Compliance Today</h3>
                <p>
                  Stay compliant with industry regulations and standards. Contact us to initiate comprehensive compliance and regulatory support services!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Compliance;
