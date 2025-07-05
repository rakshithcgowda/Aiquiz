import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';


function PopupModal({ show, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);
    const dataToSend = { ...formData };

    try {
      const response = await axios.post('https://6dc4-2400-4f20-11-c00-8579-9d16-79b7-eaba.ngrok-free.app/api/contact-now', dataToSend);

      if (response.data.status) {
        alert('Your email has been sent successfully.');
        handleClose();
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        alert('An error occurred. Please try again.');
      }
    }
    setLoading(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Talk to Our Experts</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Name */}
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            {errors?.name && <div className="text-danger">{errors.name[0]}</div>}
          </Form.Group>

          {/* Mobile Number */}
          <Form.Group className="mb-3" controlId="formMobile">
            <Form.Label>Mobile Number*</Form.Label>
            <InputGroup>
              <InputGroup.Text>+91</InputGroup.Text>
              <Form.Control
                type="tel"
                placeholder="Enter your mobile number"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </InputGroup>
            {errors?.phone && <div className="text-danger">{errors.phone[0]}</div>}
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors?.email && <div className="text-danger">{errors.email[0]}</div>}
          </Form.Group>

          {/* Location */}
          <Form.Group className="mb-3" controlId="formLocation">
            <Form.Label>Location of your Plot*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter plot location"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
            />
            {errors?.location && <div className="text-danger">{errors.location[0]}</div>}
          </Form.Group>

          {/* Submit Button */}
          <div className="text-end">
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Book Free Consultation'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default PopupModal;
