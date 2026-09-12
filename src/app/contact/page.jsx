import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BiBug, BiBulb, BiQuestionMark, BiGitPullRequest } from "react-icons/bi";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import ContactFormClient from "../../components/contact/ContactFormClient";

export const metadata = {
  title: "Contact QuickBills - Feedback, Bug Reports & Inquiries",
  description:
    "Get in touch with the QuickBills team. Send product feedback, report bugs, suggest new invoice templates, or ask general questions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact", path: "/contact" }];

  return (
    <div className="qb-contact-page py-4">
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
              We welcome your feedback, bug reports, and feature suggestions to make invoicing faster, simpler, and more useful.
            </p>
          </div>

          <Row className="gy-4 mb-5">
            {/* Contact Form */}
            <Col lg={7}>
              <Card className="p-4 p-md-5 border rounded-3 bg-white shadow-sm h-100">
                <h2 className="h5 fw-bold text-dark mb-3">Send a Message</h2>
                <ContactFormClient />
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
                    If you encounter a calculation anomaly or layout rendering issue on a specific device or browser, please let us know. You can also file a GitHub issue directly at{" "}
                    <a
                      href="https://github.com/fasilofficial/quickbills/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fw-semibold text-primary"
                    >
                      GitHub Issues
                    </a>.
                  </p>
                </Card>

                <Card className="p-4 border rounded-3 bg-white shadow-sm">
                  <div className="d-flex align-items-center gap-2 mb-2 text-primary">
                    <BiBulb size={20} />
                    <h3 className="h6 fw-bold text-dark m-0">Feature Requests</h3>
                  </div>
                  <p className="text-muted small m-0">
                    Need support for an additional currency, custom tax format, or a specialized template for your industry? We prioritize updates based on user suggestions.
                  </p>
                </Card>

                <div className="p-4 bg-light border rounded-3 text-center mt-auto">
                  <div className="d-flex align-items-center justify-content-center gap-1 text-secondary mb-1">
                    <BiQuestionMark size={18} />
                    <h3 className="h6 fw-bold text-dark m-0">Need Immediate Help?</h3>
                  </div>
                  <p className="text-muted small mb-3">
                    Many common questions regarding invoice numbering, PDF downloading, and calculations are answered in our FAQ.
                  </p>
                  <Link href="/faq" className="btn btn-outline-secondary btn-sm fw-semibold">
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
}
