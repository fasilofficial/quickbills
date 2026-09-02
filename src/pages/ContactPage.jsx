import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import {
  BiMailSend,
  BiBug,
  BiBulb,
  BiCheckCircle,
} from "react-icons/bi";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import SeoMeta from "../components/common/SeoMeta";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "feedback",
    message: "",
  });

  const breadcrumbs = [{ label: "Contact", path: "/contact" }];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Since QuickBills is a client-side app, show a helpful confirmation message
    setSubmitted(true);
  };

  return (
    <div className="qb-contact-page py-4">
      <SeoMeta
        title="Contact QuickBills - Feedback, Bug Reports & Inquiries"
        description="Get in touch with the QuickBills team. Send product feedback, report bugs, suggest new invoice templates, or ask general questions."
        canonicalPath="/contact"
        keywords="contact quickbills, invoice tool feedback, report invoice bug, quickbills support"
      />

      <Container>
        <Breadcrumbs items={breadcrumbs} />

        <div className="max-w-800 mx-auto">
          {/* Header */}
          <div className="text-center mb-5">
            <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-1 mb-2">
              Get in Touch
            </span>
            <h1 className="display-6 fw-bold text-dark mb-3">Contact QuickBills</h1>
            <p className="lead text-muted fs-6">
              We welcome your feedback, bug reports, and feature suggestions to make invoicing even faster and simpler.
            </p>
          </div>

          <Row className="gy-4 mb-5">
            {/* Contact Form */}
            <Col lg={7}>
              <Card className="p-4 p-md-5 border rounded-3 bg-white shadow-sm h-100">
                <h2 className="h5 fw-bold text-dark mb-3">Send a Message</h2>

                {submitted ? (
                  <Alert variant="success" className="d-flex align-items-start gap-2 border-0 bg-success-subtle text-success py-3">
                    <BiCheckCircle size={22} className="flex-shrink-0 mt-1" />
                    <div>
                      <div className="fw-bold mb-1">Message Received!</div>
                      <div className="small">
                        Thank you for reaching out. We review all feedback and bug reports to continuously improve QuickBills.
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
                ) : (
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
                        <option value="feedback">General Feedback & Usability</option>
                        <option value="bug">Report a Bug / Calculation Error</option>
                        <option value="feature">Request a Feature or New Currency</option>
                        <option value="template">Suggest an Invoice Template</option>
                        <option value="question">Other Inquiries</option>
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
                )}
              </Card>
            </Col>

            {/* Channels & FAQs link */}
            <Col lg={5}>
              <div className="d-flex flex-column gap-3 h-100">
                <Card className="p-4 border rounded-3 bg-white shadow-sm">
                  <div className="d-flex align-items-center gap-2 mb-2 text-primary">
                    <BiBug size={20} />
                    <h3 className="h6 fw-bold text-dark m-0">Found a Bug?</h3>
                  </div>
                  <p className="text-muted small m-0">
                    If you encounter a calculation anomaly or layout rendering issue on a specific device or browser, please let us know so we can patch it promptly.
                  </p>
                </Card>

                <Card className="p-4 border rounded-3 bg-white shadow-sm">
                  <div className="d-flex align-items-center gap-2 mb-2 text-primary">
                    <BiBulb size={20} />
                    <h3 className="h6 fw-bold text-dark m-0">Feature Requests</h3>
                  </div>
                  <p className="text-muted small m-0">
                    Need support for an additional currency, custom tax format, or a specialized template for your industry? We prioritize new features based on user input.
                  </p>
                </Card>

                <div className="p-4 bg-light border rounded-3 text-center mt-auto">
                  <h3 className="h6 fw-bold text-dark mb-2">Need Immediate Help?</h3>
                  <p className="text-muted small mb-3">
                    Many common questions regarding invoice dates, downloading PDFs, and calculations are answered in our FAQ.
                  </p>
                  <Link to="/faq" className="btn btn-outline-secondary btn-sm fw-semibold">
                    Read the FAQ &rarr;
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
