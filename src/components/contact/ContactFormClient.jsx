"use client";

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { BiMailSend, BiCheckCircle } from "react-icons/bi";

export default function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "feedback",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Alert
        variant="success"
        className="d-flex align-items-start gap-2 border-0 bg-success-subtle text-success py-3"
      >
        <BiCheckCircle size={22} className="flex-shrink-0 mt-1" />
        <div>
          <div className="fw-bold mb-1">Message Received!</div>
          <div className="small">
            Thank you for reaching out. We review all feedback, feature requests, and bug reports to continuously improve QuickBills.
          </div>
          <Button
            variant="link"
            size="sm"
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", reason: "feedback", message: "" });
            }}
            className="p-0 text-success text-decoration-underline mt-2 small"
          >
            Send another message
          </Button>
        </div>
      </Alert>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="contactName">
        <Form.Label className="fw-semibold text-dark small mb-1">
          Your Name
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="e.g. Jane Doe"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactEmail">
        <Form.Label className="fw-semibold text-dark small mb-1">
          Email Address
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="e.g. jane@company.com"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contactReason">
        <Form.Label className="fw-semibold text-dark small mb-1">
          Reason for Contact
        </Form.Label>
        <Form.Select
          value={formData.reason}
          onChange={(e) =>
            setFormData({ ...formData, reason: e.target.value })
          }
        >
          <option value="feedback">General Feedback &amp; Usability</option>
          <option value="bug">Report a Bug / Calculation Error</option>
          <option value="feature">Request a Feature or New Currency</option>
          <option value="template">Suggest an Invoice Template</option>
          <option value="question">General Inquiry</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-4" controlId="contactMessage">
        <Form.Label className="fw-semibold text-dark small mb-1">
          Message
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Please provide specific details so we can assist you..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="w-100 fw-semibold py-2 d-inline-flex align-items-center justify-content-center gap-2"
      >
        <BiMailSend size={18} />
        <span>Submit Message</span>
      </Button>
    </Form>
  );
}
