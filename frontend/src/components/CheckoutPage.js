// CheckoutPage.js

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './CheckoutPage.css'; // Import CSS file

function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    // Add more fields as needed
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to backend
      const response = await axios.post('/api/checkout', formData);
      console.log(response.data);
      // Handle successful payment or display error message
    } catch (error) {
      console.error('Error:', error.response.data);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <Container>
      <h1>Checkout Page</h1>
      {error && <p className="text-danger">{error}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {/* Add more form fields as needed */}
        <Button variant="primary" type="submit">
          Pay Now
        </Button>
      </Form>
    </Container>
  );
}

export default CheckoutPage;
