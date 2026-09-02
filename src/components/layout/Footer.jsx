import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiFile, BiLockAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="qb-footer bg-white border-top mt-5 pt-5 pb-4">
      <Container>
        <Row className="gy-4">
          {/* Brand & Description */}
          <Col lg={4} md={12}>
            <Link to="/" className="text-decoration-none d-flex align-items-center gap-2 text-dark mb-3">
              <div className="qb-logo-icon d-flex align-items-center justify-content-center bg-primary text-white rounded-3 p-2">
                <BiFile size={22} />
              </div>
              <div className="d-flex flex-column">
                <span className="fw-bold fs-5 lh-1 text-dark tracking-tight">
                  QuickBills
                </span>
                <span className="text-muted small" style={{ fontSize: "0.72rem" }}>
                  Invoice Generator
                </span>
              </div>
            </Link>
            <p className="text-muted small lh-base pe-lg-4 mb-3">
              QuickBills is a fast, clean, and free invoice generator designed for freelancers, small businesses, consultants, and contractors. Create professional invoices with taxes and discounts directly in your browser.
            </p>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-light border rounded-pill text-secondary small">
              <BiLockAlt className="text-success" />
              <span>100% Client-side • Your data stays in your browser</span>
            </div>
          </Col>

          {/* Product Links */}
          <Col xs={6} sm={6} lg={2}>
            <h6 className="fw-bold text-dark mb-3 fs-6">Product</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link to="/invoice" className="text-decoration-none text-muted hover-primary">
                  Invoice Generator
                </Link>
              </li>
              <li>
                <Link to="/templates" className="text-decoration-none text-muted hover-primary">
                  Invoice Templates
                </Link>
              </li>
              <li>
                <Link to="/templates/simple-invoice" className="text-decoration-none text-muted hover-primary">
                  Simple Invoice
                </Link>
              </li>
              <li>
                <Link to="/templates/freelance-invoice" className="text-decoration-none text-muted hover-primary">
                  Freelance Invoice
                </Link>
              </li>
              <li>
                <Link to="/templates/small-business-invoice" className="text-decoration-none text-muted hover-primary">
                  Small Business Invoice
                </Link>
              </li>
              <li>
                <Link to="/templates/service-invoice" className="text-decoration-none text-muted hover-primary">
                  Service Invoice
                </Link>
              </li>
            </ul>
          </Col>

          {/* Resources Links */}
          <Col xs={6} sm={6} lg={3}>
            <h6 className="fw-bold text-dark mb-3 fs-6">Resources</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link to="/guides" className="text-decoration-none text-muted hover-primary">
                  All Invoice Guides
                </Link>
              </li>
              <li>
                <Link to="/guides/how-to-create-an-invoice" className="text-decoration-none text-muted hover-primary">
                  How to Create an Invoice
                </Link>
              </li>
              <li>
                <Link to="/guides/what-should-an-invoice-include" className="text-decoration-none text-muted hover-primary">
                  What Invoices Must Include
                </Link>
              </li>
              <li>
                <Link to="/guides/invoice-vs-receipt" className="text-decoration-none text-muted hover-primary">
                  Invoice vs Receipt
                </Link>
              </li>
              <li>
                <Link to="/guides/how-to-number-invoices" className="text-decoration-none text-muted hover-primary">
                  Invoice Numbering Systems
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-decoration-none text-muted hover-primary">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </Col>

          {/* Company & Legal */}
          <Col xs={12} sm={6} lg={3}>
            <h6 className="fw-bold text-dark mb-3 fs-6">Company & Legal</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small mb-4">
              <li>
                <Link to="/about" className="text-decoration-none text-muted hover-primary">
                  About QuickBills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none text-muted hover-primary">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-decoration-none text-muted hover-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-decoration-none text-muted hover-primary">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div className="border-top pt-4 mt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 small text-muted">
          <div>
            &copy; {new Date().getFullYear()} QuickBills. All rights reserved. Free online invoice maker.
          </div>
          <div className="d-flex align-items-center gap-3">
            <Link to="/privacy" className="text-decoration-none text-muted hover-primary">
              Privacy
            </Link>
            <span>•</span>
            <Link to="/terms" className="text-decoration-none text-muted hover-primary">
              Terms
            </Link>
            <span>•</span>
            <Link to="/faq" className="text-decoration-none text-muted hover-primary">
              Help
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
