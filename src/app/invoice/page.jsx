import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import InvoicePageClient from "../../components/invoice/InvoicePageClient";

export const metadata = {
  title: "Online Invoice Generator - Create & Download Free Invoices",
  description:
    "Generate professional invoices with automatic tax, discounts, and multiple currencies. Free, secure, client-side invoice maker ready to export to PDF.",
  alternates: {
    canonical: "/invoice",
  },
};

export default function InvoicePage() {
  const breadcrumbs = [{ label: "Invoice Generator", path: "/invoice" }];

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "QuickBills Online Invoice Generator",
    "url": "https://quickbills.vercel.app/invoice",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description":
      "Free browser-based invoice generator for freelancers and small businesses. Create, calculate, review, download PDF and print professional invoices with zero sign-up.",
  };

  return (
    <div className="qb-invoice-page py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      <Container>
        <Breadcrumbs items={breadcrumbs} />

        <div className="mb-4 pb-2 border-bottom">
          <div className="d-flex align-items-center gap-2 mb-1">
            <span className="badge bg-primary-subtle text-primary fw-medium px-2 py-1">
              Workspace
            </span>
            <span className="text-muted small">• Private browser processing</span>
          </div>
          <h1 className="h3 fw-bold text-dark m-0">Invoice Generator</h1>
          <p className="text-muted small mt-1 mb-0">
            Fill in your billing details, add items, and review your invoice. All calculations occur locally on your machine.
          </p>
        </div>

        <InvoicePageClient />

        {/* Supporting educational section below generator */}
        <div className="mt-5 pt-4 border-top">
          <Row className="gy-4">
            <Col md={4}>
              <div className="p-3 bg-white border rounded-3 h-100 shadow-sm">
                <h2 className="h6 fw-bold text-dark mb-2">Need a Pre-Built Template?</h2>
                <p className="text-muted small mb-3">
                  QuickBills offers pre-configured layouts for freelancers, contractors, and small businesses with sample line items and terms.
                </p>
                <Link href="/templates" className="small fw-semibold text-primary">
                  Browse Invoice Templates &rarr;
                </Link>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3 bg-white border rounded-3 h-100 shadow-sm">
                <h2 className="h6 fw-bold text-dark mb-2">Invoicing Best Practices</h2>
                <p className="text-muted small mb-3">
                  Read our practical guides on invoice numbering, tax calculation, and determining appropriate payment terms for your business.
                </p>
                <Link href="/guides" className="small fw-semibold text-primary">
                  Read Invoicing Guides &rarr;
                </Link>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3 bg-white border rounded-3 h-100 shadow-sm">
                <h2 className="h6 fw-bold text-dark mb-2">Frequently Asked Questions</h2>
                <p className="text-muted small mb-3">
                  Have questions about currency formatting, PDF downloading, or data privacy? Explore our comprehensive FAQ section.
                </p>
                <Link href="/faq" className="small fw-semibold text-primary">
                  View QuickBills FAQ &rarr;
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
