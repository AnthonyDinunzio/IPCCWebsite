import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import riskImg from '../assets/images/risk.png'; // Replace with your header image path
// Import your custom CSS file for additional styling

function Management() {
  return (
    <div className="learn-one-container">
      {/* Header Section with Image */}
      <div className="header-section">
        <img src={riskImg} alt="Header" className="img-fluid" />
      </div>

      {/* Content Section */}
      <Container className="content-section py-5">
        <Row>
          <Col>
            <h1 className="text-center mb-4">Risk Assessment and Management</h1>

            {/* Approach Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Our Approach</h3>
                <p>
                  At Integrity Protection and Consulting Corp, we understand that mitigating risks is pivotal in safeguarding your assets and operations. Our comprehensive Risk Assessment and Management service is tailored to identify, evaluate, and mitigate potential threats, allowing you to navigate your business landscape with confidence and resilience.
                </p>
                <h4>Thorough Risk Evaluation</h4>
                <p>
                  Our seasoned experts conduct a meticulous analysis of your business environment, examining every facet to identify potential risks. We delve deep into your operations, infrastructure, and systems to pinpoint vulnerabilities that could compromise your security posture.
                </p>
                <h4>Customized Mitigation Strategies</h4>
                <p>
                  Based on the assessment results, we craft bespoke risk mitigation strategies. These solutions are tailored to your unique business needs, aligning with industry best practices and regulatory standards. We focus on proactive measures to reduce exposure and fortify your defense mechanisms.
                </p>
                <h4>Continual Monitoring and Adaptation</h4>
                <p>
                  Risk is dynamic, and our commitment extends beyond assessment and mitigation. We offer continuous monitoring services, keeping a vigilant eye on evolving threats. Our adaptive approach ensures that as risks evolve, so do our strategies, maintaining your resilience in an ever-changing landscape.
                </p>
              </Card.Body>
            </Card>

            {/* Key Offerings Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Key Offerings</h3>
                <h5>Comprehensive Risk Assessment</h5>
                <p>
                  Utilizing cutting-edge methodologies and technology, we conduct thorough risk evaluations across all operational domains. Our assessments cover:
                  <ul>
                    <li>Asset Vulnerability Analysis: Identifying weaknesses in your physical and digital assets.</li>
                    <li>Threat Identification: Detecting potential threats from internal and external sources.</li>
                    <li>Impact Analysis: Assessing the potential consequences of identified risks on your business.</li>
                  </ul>
                </p>
                <h5>Tailored Mitigation Strategies</h5>
                <p>
                  Armed with insights from the assessment, we devise customized strategies that encompass:
                  <ul>
                    <li>Risk Prioritization: Prioritizing identified risks based on severity and likelihood.</li>
                    <li>Mitigation Plans: Formulating actionable plans to mitigate high-priority risks effectively.</li>
                    <li>Risk Transfer and Acceptance: Advising on risk transfer mechanisms or accepting calculated risks.</li>
                  </ul>
                </p>
                <h5>Continual Monitoring and Adaptation</h5>
                <p>
                  Our services extend beyond the initial assessment and mitigation phases:
                  <ul>
                    <li>Real-Time Monitoring: Implementing systems to monitor threats and vulnerabilities.</li>
                    <li>Periodic Reviews and Updates: Conducting routine reviews to adapt strategies to new threats.</li>
                    <li>Training and Education: Empowering your team with the knowledge to identify and respond to emerging risks.</li>
                  </ul>
                </p>
              </Card.Body>
            </Card>

            {/* Why Choose Us Section */}
            <Card className="mb-4">
              <Card.Body>
                <h3>Why Choose Integrity Protection and Consulting Corp?</h3>
                <p>
                  <ul>
                    <li>Expertise and Experience: Our team comprises seasoned professionals with diverse expertise across industries.</li>
                    <li>Tailored Solutions: We don't offer one-size-fits-all solutions; we tailor strategies to your specific business requirements.</li>
                    <li>Adaptive and Innovative Approach: We stay ahead by leveraging the latest technologies and evolving methodologies.</li>
                    <li>Continuous Support: Beyond assessments, we offer ongoing support and guidance to fortify your defenses.</li>
                  </ul>
                </p>
              </Card.Body>
            </Card>

            {/* Ready to Fortify Section */}
            <Card className="card mb-4">
              <Card.Body>
                <h3>Ready to Fortify Your Defenses?</h3>
                <p>
                  In a world of evolving risks, safeguard your business with our meticulous Risk Assessment and Management services. Partner with us to navigate uncertainties and secure a resilient future for your enterprise.
                </p>
                <p>
                  Ready to fortify your defenses? Contact us today to schedule a comprehensive risk assessment!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Management;
