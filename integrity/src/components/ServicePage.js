import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import riskImage from '../assets/images/risk.png';
import securityImage from '../assets/images/security.png';
import educationImage from '../assets/images/education.png';
import techImage from '../assets/images/tech.png';
import epImage from '../assets/images/ep.png';
import compImage from '../assets/images/compliance.png';
import developImage from '../assets/images/development.png';
import solutionImage from '../assets/images/solutions.png';

const ServicesPage = () => {
  // Sample service data, replace with your actual service data
  const services = [
    {
        "title": "Risk Assessment and Management",
        "description": "Conduct comprehensive risk assessments to identify potential threats and vulnerabilities, and develop strategies to mitigate and manage risks.",
        "imageUrl": riskImage,
        "link": "/risk-mangement-service"
    },
    {
        "title": "Security Consulting",
        "description": "Provide expert advice and consultancy services to improve security infrastructure, policies, and protocols for private and public security firms.",
        "imageUrl": securityImage,
        "link": "/security-consulting-service"
    },
    {
        "title": "Training and Education",
        "description": "Offer specialized training programs for security personnel, covering areas such as threat detection, emergency response, and conflict resolution.",
        "imageUrl": educationImage,
        "link": "/training-education-service"
    },
    {
        "title": "Technology Integration",
        "description": "Implement and integrate cutting-edge security technologies, including surveillance systems, access control, and cybersecurity measures.",
        "imageUrl": techImage,
        "link": "/tech-integration-service"
    },
    {
        "title": "Executive Protection",
        "description": "Provide high-level security and protection services for executives, VIPs, and high-profile individuals.",
        "imageUrl": epImage,
        "link": "/executive-protection-service"
    },
    {
        "title": "Compliance and Regulatory Support",
        "description": "Implement and integrate cutting-edge security technologies, including surveillance systems, access control, and cybersecurity measures.Ensure compliance with industry regulations and standards, offering support in obtaining certifications and adhering to legal requirements.",
        "imageUrl": compImage,
        "link": "/compliance-regulatory-service"
    },
    {
        "title": "Business Development Services",
        "description": "Offer business development strategies tailored to the security industry, assisting in growth, market expansion, and strategic partnerships.",
        "imageUrl": developImage,
        "link": "/business-development-service"
    },
    {
        "title": "Proactive Security Solutions",
        "description": "Implement proactive security measures, utilizing intelligence and predictive analysis to prevent security breaches and threats before they occur.",
        "imageUrl": solutionImage,
        "link": "/security-solutions-service"
    }
  ];

  return (
    <>
      <Container fluid className="bg-light py-5">
        <Container>
          <h1 className="text-center mb-4">Our Services</h1>
          <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center">
            {services.map((service, index) => (
              <Col key={index} className="mb-4">
                <ServiceCard {...service} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      <a href="/"><Button variant="primary" className="contact-btn mx-auto mb-5 d-block">Contact</Button></a>
    </>
  );
};

export default ServicesPage;

