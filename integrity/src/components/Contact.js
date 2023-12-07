import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import '../styles/contact.css'; // Import your custom styles here

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    companyName: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/submit-form', formData);
      alert('Form submitted successfully!');
      // Additional logic after successful form submission if needed
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form to the application');
    }
  };

  return (
    <Row className="contact-form-container mb-5">
      {/* Form Column */}
      <Col md={6} className="form-column">
        <Form onSubmit={handleSubmit} className="my-5">
          <h4>Contact A Consultant</h4>
          <Form.Group controlId="formName">
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Control
              type="tel"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Control
              as="textarea"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-input"
              rows={4}
            />
          </Form.Group>
          <Form.Group controlId="formCompanyName">
            <Form.Control
              type="text"
              placeholder="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="form-input"
            />
          </Form.Group>
          <Form.Group controlId="formLocation">
            <Form.Control
              type="text"
              placeholder="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="form-input"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="submit-button">Submit</Button>
        </Form>
      </Col>

      {/* Contact Information Column */}
      <Col md={6} className="info-column">
        <div className="contact-info">
          <h4>Integral Security Solutions Contact Our Consultants Today!</h4>
          <p>Edmonton, AB, Canada</p>
          <p>info@ipcc.ltd</p>
        </div>
      </Col>
    </Row>
  );
};

export default ContactForm;
