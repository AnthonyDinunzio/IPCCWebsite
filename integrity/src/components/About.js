import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Logo from './Logo';
import riskImg from '../assets/images/risk.png';
import epImg from '../assets/images/ep.png';
import secImg from '../assets/images/security.png';

function AboutUs() {

  const history = useHistory();
  
  const redirectOne = () => {
    history.push('/learn1')
  }

  const redirectTwo = () => {
    history.push('/learn2')
  }

  const redirectThree = () => {
    history.push('/learn3')
  }

  return (
    <div className="about-us-container">

      <Container className="my-5">
        <h1 className="text-center mb-4">About Us</h1>

        <Logo />

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <div className="p-4">
              <h4>Pioneering the Future of Security</h4>
              <p>Integrity Protection and Consulting Corp was born out of a vision to revolutionize the security landscape in Canada. With our partners bringing a wealth of experience from diverse business backgrounds, we embarked on a mission to elevate the standards of the security industry.</p>
              <a href='/about-pioneering'><Button onClick={redirectOne} className="learn-btn d-block d-md-inline-block">Learn More</Button></a>
            </div>
          </Col>
          <Col md={6}>
            {/* Image or visual content */}
            <img
              src={riskImg} /* Provide your image path here */
              alt="Visual content"
              className="img-fluid" /* This class ensures image responsiveness */
            />
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            {/* Image or visual content */}
            <img
              src={epImg} /* Provide your image path here */
              alt="Visual content"
              className="img-fluid" /* This class ensures image responsiveness */
            />
          </Col>
          <Col md={6}>
            <div className="p-4">
              <h4>Redefining Security in Canada</h4>
              <p>Integrity Protection and Consulting Corp is a trailblazer in the Canadian security landscape, offering specialized services ranging from risk mitigation to tech consulting for private security companies.</p>
              <a href='/about-security'><Button onClick={redirectTwo} className="learn-btn d-block d-md-inline-block">Learn More</Button></a>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <div className="p-4">
              <h4>Elevating Security with Integrity</h4>
              <p>At Integrity Protection and Consulting Corp, we believe that true security goes beyond just safeguarding assets—it's about upholding values. Our name is a testament to our core principle: Integrity!</p>
              <a href='/about-integrity'><Button onClick={redirectThree} className="learn-btn d-block d-md-inline-block">Learn More</Button></a>
            </div>
          </Col>
          <Col md={6}>
            {/* Image or visual content */}
            <img
              src={secImg} /* Provide your image path here */
              alt="Visual content"
              className="img-fluid" /* This class ensures image responsiveness */
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(AboutUs);
