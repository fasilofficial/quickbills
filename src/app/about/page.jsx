import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {
  BiCheckShield,
  BiBoltCircle,
  BiLaptop,
  BiCheckCircle,
  BiCodeAlt,
  BiEnvelope,
} from "react-icons/bi";
import Breadcrumbs from "../../components/layout/Breadcrumbs";

export const metadata = {
  title: "About QuickBills - Private, Browser-Based Invoicing",
  description:
    "Learn about QuickBills, our product philosophy, operator background, and why we built a fast, free, browser-based invoice generator that respects user privacy without forcing sign-ups.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const breadcrumbs = [{ label: "About", path: "/about" }];

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "QuickBills",
    "url": "https://quickbills.vercel.app/",
    "logo": "https://quickbills.vercel.app/og-image.svg",
    "description":
      "Free browser-based invoice generator utility developed and maintained by Fasil (fasilofficial) for freelancers and small businesses worldwide.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "url": "https://quickbills.vercel.app/contact",
    },
  };

  return (
    <div className="qb-about-page py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <Container>
        <Breadcrumbs items={breadcrumbs} />

        <div className="max-w-800 mx-auto">
          {/* Header */}
          <div className="text-center mb-5">
            <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-1 mb-2">
              Our Mission &amp; Background
            </span>
            <h1 className="display-6 fw-bold text-dark mb-3">About QuickBills</h1>
            <p className="lead text-muted fs-6">
              A fast, privacy-focused utility built to help freelancers, contractors, and small businesses create professional invoices without unnecessary barriers.
            </p>
          </div>

          {/* Main Story & Problem Solved */}
          <div className="bg-white border rounded-3 p-4 p-md-5 mb-5 shadow-sm">
            <h2 className="h4 fw-bold text-dark mb-3">The Problem We Set Out to Solve</h2>
            <p className="text-secondary lh-base mb-3">
              Most modern billing and accounting software platforms demand user registration, mandate monthly recurring credit card subscriptions, or lock essential tools like tax calculations and unwatermarked PDF exports behind paywalls. For an independent contractor who simply needs to dispatch a clean bill, or a tradesperson needing an on-site receipt for a customer, these heavy enterprise platforms introduce excessive overhead.
            </p>
            <p className="text-secondary lh-base mb-0">
              QuickBills was created to do one job extraordinarily well: let anyone open their browser, fill in their billable line items, calculate totals with mathematical precision, and download a clean, professional PDF invoice immediately—100% free and without creating an account.
            </p>
          </div>

          {/* Developer & Maintainer Information */}
          <div className="bg-white border rounded-3 p-4 p-md-5 mb-5 shadow-sm">
            <div className="d-flex align-items-center gap-2 mb-3 text-primary">
              <BiCodeAlt size={26} />
              <h2 className="h4 fw-bold text-dark m-0">Who Operates &amp; Develops QuickBills</h2>
            </div>
            <p className="text-secondary lh-base mb-3">
              QuickBills is developed and maintained by independent software developer <strong>Fasil</strong> (<a href="https://github.com/fasilofficial" target="_blank" rel="noopener noreferrer">@fasilofficial</a>). The project was built as an open, client-first utility to provide independent workers with a reliable billing tool that puts user privacy first.
            </p>
            <p className="text-secondary lh-base mb-3">
              The project is transparently developed and hosted with open source components. You can view the code repository, report issues, and follow feature updates directly on GitHub at{" "}
              <a
                href="https://github.com/fasilofficial/quickbills"
                target="_blank"
                rel="noopener noreferrer"
                className="fw-medium text-primary"
              >
                github.com/fasilofficial/quickbills
              </a>.
            </p>
            <div className="d-flex align-items-center gap-2 text-muted small pt-2 border-top">
              <BiEnvelope size={16} />
              <span>Direct inquiries and feedback: </span>
              <Link href="/contact" className="fw-semibold text-primary">
                Contact &amp; Support Page
              </Link>
            </div>
          </div>

          {/* Core Product Pillars */}
          <h2 className="h4 fw-bold text-dark mb-4 text-center">Our Core Principles</h2>
          <Row className="g-4 mb-5">
            <Col md={4}>
              <Card className="p-4 border rounded-3 h-100 bg-white shadow-sm">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-3 p-3 mb-3"
                  style={{ width: "48px", height: "48px" }}
                >
                  <BiCheckShield size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">100% Client-Side Privacy</h3>
                <p className="text-muted small m-0">
                  Your client data, financial amounts, and business details remain entirely inside your browser. We never transmit or store your invoice information on our servers.
                </p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 border rounded-3 h-100 bg-white shadow-sm">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-3 p-3 mb-3"
                  style={{ width: "48px", height: "48px" }}
                >
                  <BiBoltCircle size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">Zero Friction</h3>
                <p className="text-muted small m-0">
                  No sign-ups, no passwords to remember, no mandatory email marketing captures. Open the website, build your invoice, and save it.
                </p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 border rounded-3 h-100 bg-white shadow-sm">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-3 p-3 mb-3"
                  style={{ width: "48px", height: "48px" }}
                >
                  <BiLaptop size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">Professional Standards</h3>
                <p className="text-muted small m-0">
                  Every document produced adheres to standard commercial accounting practices: proper subtotaling, explicit tax itemization, and clear payment instructions.
                </p>
              </Card>
            </Col>
          </Row>

          {/* Who is it for */}
          <div className="bg-light border rounded-3 p-4 p-md-5 mb-5">
            <h2 className="h4 fw-bold text-dark mb-3">Who QuickBills Is Built For</h2>
            <ul className="list-unstyled d-flex flex-column gap-2 text-secondary small m-0">
              <li className="d-flex align-items-start gap-2">
                <BiCheckCircle className="text-primary mt-1 flex-shrink-0" size={18} />
                <span><strong>Independent Freelancers:</strong> Designers, developers, translators, and copywriters billing clients by project or hourly milestone.</span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <BiCheckCircle className="text-primary mt-1 flex-shrink-0" size={18} />
                <span><strong>Consultants &amp; Strategists:</strong> Professional service providers needing clean Net 15 or Net 30 billing invoices.</span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <BiCheckCircle className="text-primary mt-1 flex-shrink-0" size={18} />
                <span><strong>Small Businesses &amp; Vendors:</strong> Suppliers delivering merchandise or repair services requiring sales tax calculation.</span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <BiCheckCircle className="text-primary mt-1 flex-shrink-0" size={18} />
                <span><strong>Tradespeople &amp; Contractors:</strong> Plumbers, electricians, and carpenters who need to draft invoices on-site.</span>
              </li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="text-center p-4 bg-white border rounded-3 shadow-sm">
            <h2 className="h5 fw-bold text-dark mb-2">Experience Frictionless Invoicing</h2>
            <p className="text-muted small mb-3">
              Ready to generate your first invoice? No setup is required.
            </p>
            <Link href="/invoice" className="btn btn-primary fw-semibold px-4 py-2">
              Go to Invoice Generator &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
