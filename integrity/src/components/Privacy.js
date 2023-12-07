import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Privacy = () => {
  return (
    <Container className="py-4">
      <h3 className="mb-4">Privacy Policy</h3>

      <Card className="mb-3">
        <Card.Header>
          <h5 className="mb-0">
            1. Introduction
          </h5>
        </Card.Header>
        <Card.Body>
          <p>
            Integrity Protection and Consulting Corp is committed to safeguarding the personal information entrusted to us by our clients and website visitors. This Privacy Policy outlines the practices we adhere to in accordance with Alberta’s Personal Information Protection Act (PIPA).
          </p>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header>
          <h5 className="mb-0">
            2. Information We Collect
          </h5>
        </Card.Header>
        <Card.Body>
          <p>
            We may collect and process:
            <ul>
              <li>Personal contact details such as name, email, phone number, and company affiliation.</li>
              <li>Feedback, inquiries, or other forms of engagement with our services.</li>
              <li>Technical data like IP address, browser type, and website usage details.</li>
            </ul>
          </p>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header>
          <h5 className="mb-0">
            3. Purpose of Collection
          </h5>
        </Card.Header>
        <Card.Body>
          <p>
            Your personal information may be used to:
            <ul>
              <li>Deliver and enhance our consulting services.</li>
              <li>Address inquiries or feedback.</li>
              <li>Conduct marketing and promotional activities, with your explicit consent.</li>
              <li>Ensure our websites security and optimal performance.</li>
            </ul>
          </p>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header>
          <h5 className="mb-0">
            4. Consent
          </h5>
        </Card.Header>
        <Card.Body>
          <p>
            Before collecting personal information, we will inform you of the purpose and obtain your explicit consent, except where otherwise permitted by law.
          </p>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header>
          <h5 className="mb-0">
            5. Protecting Personal Information
          </h5>
        </Card.Header>
        <Card.Body>
          <p>
          We employ administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of personal information in our custody and control.
          </p>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header>
          <h5 className="mb-0">
            6. Disclosure of Information
          </h5>
        </Card.Header>
        <Card.Body>
          <p>
          We will not disclose your personal information without your consent unless required by law.
          </p>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header>
          <h5 className="mb-0">
            7. Access to Personal Information
          </h5>
        </Card.Header>
        <Card.Body>
          <p>
          You have the right to access your personal information, subject to limited exceptions as defined by PIPA. If you believe any information we hold about you is incorrect or incomplete, please contact us as soon as possible.
          </p>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header>
          <h5 className="mb-0">
            8. Cookies
          </h5>
        </Card.Header>
        <Card.Body>
          <p>
          Our website may use cookies to enhance user experience. While cookies can be declined through browser settings, some website features may not function as intended without them.
          </p>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header>
          <h5 className="mb-0">
          9. Policy Updates
          </h5>
        </Card.Header>
        <Card.Body>
          <p>
          We may revise this Privacy Policy periodically to reflect changes in legal or regulatory obligations or changes in the manner in which we deal with personal information. We will post any revised version of this Policy on our website.
          </p>
        </Card.Body>
      </Card>
      
      <Card className="mb-3">
        <Card.Header>
          <h5 className="mb-0">
            10. Contact and Redress
          </h5>
        </Card.Header>
        <Card.Body>
          <p>
          If you have questions about accessing your personal information or our privacy practices, wish to make a complaint, or require any other information, please contact our Privacy Officer at info@ipcc.ltd
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Privacy;
