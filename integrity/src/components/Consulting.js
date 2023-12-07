import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import securityImg from '../assets/images/security.png'; // Replace with your header image path
// Import your custom CSS file for additional styling

function SecurityConsulting() {
  return (
    <div className="security-consulting-container">
      {/* Header Section with Image */}
      <div className="header-section">
        <img src={securityImg} alt="Security" className="img-fluid" />
      </div>

      {/* Content Section */}
      <Container className="content-section py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-4">Security Consulting Services</h1>

            {/* Introduction Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Expert Security Consultancy for Enhanced Protection</h3>
                <p>
                  Our Security Consulting services are designed to provide expert guidance and strategic solutions for both private and public security firms. With a team of seasoned professionals versed in the latest security trends and technologies, we offer comprehensive consultancy to fortify your security infrastructure, policies, and protocols.
                </p>
              </Card.Body>
            </Card>

            {/* Our Approach Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Our Approach</h3>
                <p>
                  We take a meticulous approach to assess and enhance your security systems. Our consultants conduct thorough evaluations to identify vulnerabilities and gaps within your existing infrastructure. Subsequently, we craft tailored strategies and recommendations aimed at fortifying your security measures.
                </p>
                <p>
                  Our approach doesn’t stop at mere assessments. We work collaboratively with your team, ensuring seamless implementation of recommended solutions and providing continuous support and guidance throughout the process.
                </p>
              </Card.Body>
            </Card>

            {/* Key Services Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Key Services Offered</h3>
                <ul>
                  <li>Security Infrastructure Analysis: Detailed assessment of your current security setup to identify weaknesses.</li>
                  <li>Policy and Protocol Development: Crafting robust security policies aligned with industry standards.</li>
                  <li>Technology Integration: Advising on and implementing cutting-edge security technologies for enhanced protection.</li>
                  <li>Training and Education: Empowering your team with the knowledge and skills to manage security effectively.</li>
                  <li>Continuous Monitoring: Implementing systems for real-time threat detection and response.</li>
                </ul>
              </Card.Body>
            </Card>

            {/* Why Choose Us Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Why Choose Our Consulting Services?</h3>
                <p>
                  <ul>
                    <li>Seasoned Experts: Our consultants bring in-depth expertise across various security domains.</li>
                    <li>Tailored Solutions: We understand the uniqueness of each firm and provide customized solutions.</li>
                    <li>Continuous Support: Beyond consultancy, we offer ongoing guidance to ensure sustained security enhancement.</li>
                    <li>Adaptive Approach: We stay abreast of evolving threats and technologies to offer innovative solutions.</li>
                  </ul>
                </p>
              </Card.Body>
            </Card>

            {/* Ready to Elevate Section */}
            <Card className="card mb-4">
              <Card.Body>
                <h3>Ready to Elevate Your Security Measures?</h3>
                <p>
                  Empower your security infrastructure with our expert consultancy services. Partner with us to fortify your defenses and navigate the dynamic landscape of security threats.
                </p>
                <p>
                  Ready to elevate your security measures? Contact us today to schedule a consultation!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecurityConsulting;
