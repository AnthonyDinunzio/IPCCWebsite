import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import trainingImg from '../assets/images/education.png'; // Replace with your header image path
// Import your custom CSS file for additional styling

function EducationTraining() {
  return (
    <div className="education-training-container">
      {/* Header Section with Image */}
      <div className="header-section">
        <img src={trainingImg} alt="Training" className="img-fluid" />
      </div>

      {/* Content Section */}
      <Container className="content-section py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-4">Education and Training Programs</h1>

            {/* Introduction Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Specialized Training for Enhanced Security Expertise</h3>
                <p>
                  Our Education and Training programs cater to security personnel seeking specialized knowledge and skills in threat detection, emergency response, conflict resolution, and more. Designed and led by seasoned industry professionals, our programs ensure comprehensive training for security professionals.
                </p>
              </Card.Body>
            </Card>

            {/* Training Offerings Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Training Offerings</h3>
                <ul>
                  <li>Threat Detection Techniques: Comprehensive training in identifying and analyzing potential threats.</li>
                  <li>Emergency Response Protocols: Hands-on sessions to effectively handle emergency situations.</li>
                  <li>Conflict Resolution Strategies: Training modules focusing on resolving conflicts peacefully and efficiently.</li>
                  <li>Advanced Security Technologies: Education on utilizing cutting-edge security technologies for improved protection.</li>
                  <li>Continual Professional Development: Ongoing programs to keep security personnel updated with industry trends.</li>
                </ul>
              </Card.Body>
            </Card>

            {/* Why Choose Our Programs Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Why Choose Our Training Programs?</h3>
                <p>
                  <ul>
                    <li>Industry Expertise: Our programs are curated and instructed by industry experts with extensive experience.</li>
                    <li>Practical Learning: Emphasis on hands-on training to ensure practical understanding and application of skills.</li>
                    <li>Customized Curriculum: Tailored programs catering to different skill levels and specific security domains.</li>
                    <li>Continuous Support: We offer post-training guidance and resources to reinforce learned skills.</li>
                  </ul>
                </p>
              </Card.Body>
            </Card>

            {/* Ready to Enhance Skills Section */}
            <Card className="card mb-4">
              <Card.Body>
                <h3>Ready to Enhance Security Skills?</h3>
                <p>
                  Elevate the expertise of your security personnel with our specialized training programs. Equip them with the necessary skills to handle threats and emergencies effectively.
                </p>
                <p>
                  Ready to enhance your security skills? Contact us today to enroll in our training programs!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EducationTraining;
