import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import businessDevImg from '../assets/images/development.png'; // Replace with your header image path
// Import your custom CSS file for additional styling

function Development() {
  return (
    <div className="business-development-container">
      {/* Header Section with Image */}
      <div className="header-section">
        <img src={businessDevImg} alt="Business Development" className="img-fluid" />
      </div>

      {/* Content Section */}
      <Container className="content-section py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-4">Business Development</h1>

            {/* Introduction Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Strategies Tailored for Security Industry</h3>
                <p>
                  Our Business Development services offer tailored strategies specifically designed for the security industry. We assist in driving growth, expanding market reach, and fostering strategic partnerships.
                </p>
              </Card.Body>
            </Card>

            {/* Growth and Expansion Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Facilitating Growth and Market Expansion</h3>
                <p>
                  We focus on identifying growth opportunities and devising plans to expand your market presence within the security sector. Our strategies encompass:
                </p>
                <ul>
                  <li>Market Analysis and Opportunity Identification</li>
                  <li>Customized Growth Strategies</li>
                  <li>Market Penetration Techniques</li>
                  <li>Expansion into New Security Niches</li>
                </ul>
              </Card.Body>
            </Card>

            {/* Strategic Partnerships Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Fostering Strategic Partnerships</h3>
                <p>
                  We facilitate the establishment of strategic alliances and partnerships crucial for the security industry. Collaborations are nurtured to enhance capabilities, broaden service offerings, and create mutually beneficial relationships.
                </p>
              </Card.Body>
            </Card>

            {/* Contact for Business Development Section */}
            <Card className="card mb-4">
              <Card.Body>
                <h3>Partner with Us for Business Growth</h3>
                <p>
                  Elevate your business within the security industry with our tailored business development strategies. Contact us to explore opportunities for growth, market expansion, and strategic partnerships.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Development;
