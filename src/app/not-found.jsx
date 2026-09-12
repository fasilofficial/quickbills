import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiFile, BiHomeAlt, BiBookOpen, BiLayer } from "react-icons/bi";

export const metadata = {
  title: "Page Not Found (404)",
  description:
    "The page you are looking for does not exist on QuickBills. Return to the invoice generator or explore our free templates and invoicing guides.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="qb-not-found-page py-5 my-4">
      <Container>
        <div className="max-w-700 mx-auto text-center py-4">
          <div className="display-1 fw-bold text-primary mb-2">404</div>
          <h1 className="h2 fw-bold text-dark mb-3">Page Not Found</h1>
          <p className="lead text-muted fs-6 mb-4">
            The page you requested could not be found. It may have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
            <Link
              href="/"
              className="btn btn-primary fw-semibold px-4 py-2 d-inline-flex align-items-center justify-content-center gap-2"
            >
              <BiHomeAlt size={18} />
              <span>Back to Homepage</span>
            </Link>
            <Link
              href="/invoice"
              className="btn btn-outline-primary fw-semibold px-4 py-2 d-inline-flex align-items-center justify-content-center gap-2"
            >
              <BiFile size={18} />
              <span>Create an Invoice</span>
            </Link>
          </div>

          <div className="text-start bg-white border rounded-3 p-4 shadow-sm">
            <h2 className="h5 fw-bold text-dark mb-3">Looking for something specific?</h2>
            <Row className="g-3">
              <Col sm={6}>
                <div className="p-3 bg-light rounded-2 h-100">
                  <div className="d-flex align-items-center gap-2 text-primary fw-semibold mb-1">
                    <BiLayer size={18} />
                    <span>Invoice Templates</span>
                  </div>
                  <p className="text-muted small mb-2">
                    Browse pre-configured invoice formats for freelancers, services, and small businesses.
                  </p>
                  <Link href="/templates" className="small fw-semibold text-primary">
                    View Templates &rarr;
                  </Link>
                </div>
              </Col>
              <Col sm={6}>
                <div className="p-3 bg-light rounded-2 h-100">
                  <div className="d-flex align-items-center gap-2 text-primary fw-semibold mb-1">
                    <BiBookOpen size={18} />
                    <span>Invoicing Guides</span>
                  </div>
                  <p className="text-muted small mb-2">
                    Read our step-by-step guides on invoice numbering, tax calculation, and payment terms.
                  </p>
                  <Link href="/guides" className="small fw-semibold text-primary">
                    Read Guides &rarr;
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}
