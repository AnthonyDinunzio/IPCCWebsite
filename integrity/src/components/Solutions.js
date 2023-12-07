import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import proactiveImg from '../assets/images/solutions.png'; // Replace with your header image path

function Solutions() {
  return (
    <div className="proactive-security-container">
      {/* Header Section with Image */}
      <div className="header-section">
        <img src={proactiveImg} alt="Proactive Security Solutions" className="img-fluid" />
      </div>

      {/* Content Section */}
      <Container className="content-section py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-4">Proactive Security Solutions</h1>

            {/* Introduction Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Preventing Threats Before They Occur</h3>
                <p>
                  Our Proactive Security Solutions leverage intelligence and predictive analysis to implement advanced measures that prevent security breaches before they occur.
                </p>
              </Card.Body>
            </Card>

            {/* Intelligent Security Measures Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Intelligent and Predictive Analysis</h3>
                <p>
                  We utilize intelligence-driven strategies and predictive analysis to identify potential threats in advance. Our proactive approach involves:
                </p>
                <ul>
                  <li>Constant Monitoring and Analysis</li>
                  <li>Identifying Vulnerabilities in Real-Time</li>
                  <li>Implementing Measures to Prevent Threats</li>
                  <li>Utilizing Cutting-Edge Predictive Tools</li>
                </ul>
              </Card.Body>
            </Card>

            {/* Breach Prevention Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Preventing Security Breaches</h3>
                <p>
                  Our solutions aim to preemptively neutralize threats, ensuring your security infrastructure remains fortified against potential breaches. We focus on proactively addressing vulnerabilities to prevent security incidents.
                </p>
              </Card.Body>
            </Card>

            {/* Contact for Proactive Solutions Section */}
            <Card className="card mb-4">
              <Card.Body>
                <h3>Implement Proactive Security Measures Today</h3>
                <p>
                  Enhance your security posture with proactive solutions. Contact us to implement intelligent and predictive security measures for your organization.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Solutions;
