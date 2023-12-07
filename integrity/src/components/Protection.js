import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import executiveImg from '../assets/images/ep.png'; // Replace with your header image path
// Import your custom CSS file for additional styling

function Protection() {
  return (
    <div className="executive-protection-container">
      {/* Header Section with Image */}
      <div className="header-section">
        <img src={executiveImg} alt="Executive Protection" className="img-fluid" />
      </div>

      {/* Content Section */}
      <Container className="content-section py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-4">Executive Protection Services</h1>

            {/* Introduction Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>High-Level Security for Executives and VIPs</h3>
                <p>
                  Our Executive Protection services provide unparalleled security and protection for high-profile individuals, executives, and VIPs. We offer a comprehensive suite of security measures tailored to safeguard individuals and mitigate potential threats.
                </p>
              </Card.Body>
            </Card>

            {/* Tailored Protection Plans Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Tailored Protection Plans</h3>
                <p>
                  We craft customized protection plans to suit the unique needs and schedules of our clients. Our services encompass personal security details, secure transport arrangements, and meticulous threat assessments to ensure comprehensive protection.
                </p>
              </Card.Body>
            </Card>

            {/* Specialized Security Measures Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Specialized Security Measures</h3>
                <ul>
                  <li>Personal Security Details: Trained personnel dedicated to the safety of high-profile individuals.</li>
                  <li>Secure Transport: Ensured safety during travel through secure and vigilant transport arrangements.</li>
                  <li>Threat Assessments: Meticulous analysis to identify and mitigate potential risks proactively.</li>
                  <li>24/7 Surveillance: Continuous monitoring for rapid response to emerging threats.</li>
                </ul>
              </Card.Body>
            </Card>

            {/* Contact for Executive Protection Section */}
            <Card className="card mb-4">
              <Card.Body>
                <h3>Secure Your Executives Today</h3>
                <p>
                  Ensure the safety and security of your executives and high-profile individuals with our specialized protection services.
                </p>
                <p>
                  Ready to secure your key personnel? Contact us now to initiate executive protection services!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Protection;
