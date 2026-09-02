import React, { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiInfoCircle } from "react-icons/bi";
import InvoiceForm from "../components/InvoiceForm";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import SeoMeta from "../components/common/SeoMeta";
import { templatesData } from "../data/templatesData";

const InvoicePage = () => {
  const location = useLocation();

  // Support pre-filling via query string ?template=slug or history state
  const initialData = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    const templateSlug = searchParams.get("template");

    if (location.state?.templateData) {
      return location.state.templateData;
    }

    if (templateSlug) {
      const found = templatesData.find((t) => t.slug === templateSlug);
      if (found) return found.prefillData;
    }

    return null;
  }, [location.search, location.state]);

  const breadcrumbs = [{ label: "Invoice Generator", path: "/invoice" }];

  return (
    <div className="qb-invoice-page py-4">
      <SeoMeta
        title="Online Invoice Generator - Create & Download Free Invoices"
        description="Generate professional invoices with automatic tax, discounts, and multiple currencies. Free, secure, client-side invoice maker ready to export to PDF."
        canonicalPath="/invoice"
        keywords="invoice generator, create invoice online, free billing tool, pdf invoice maker"
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

        {initialData && (
          <div className="alert alert-info d-flex align-items-center gap-2 mb-4 py-2 px-3 small border-0 bg-primary-subtle text-primary rounded-3">
            <BiInfoCircle size={18} className="flex-shrink-0" />
            <span>
              Invoice pre-filled from template. You can customize any field below.
            </span>
          </div>
        )}

        <InvoiceForm initialData={initialData} />

        {/* Supporting educational section below generator */}
        <div className="mt-5 pt-4 border-top">
          <Row className="gy-4">
            <Col md={4}>
              <div className="p-3 bg-white border rounded-3 h-100">
                <h2 className="h6 fw-bold text-dark mb-2">Need a Specific Template?</h2>
                <p className="text-muted small mb-3">
                  QuickBills offers pre-configured layouts for freelancers, contractors, and small businesses with sample line items and terms.
                </p>
                <Link to="/templates" className="small fw-semibold text-primary">
                  Browse Invoice Templates &rarr;
                </Link>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3 bg-white border rounded-3 h-100">
                <h2 className="h6 fw-bold text-dark mb-2">Invoicing Best Practices</h2>
                <p className="text-muted small mb-3">
                  Read our practical guides on invoice numbering, tax calculation, and determining appropriate payment terms for your business.
                </p>
                <Link to="/guides" className="small fw-semibold text-primary">
                  Read Invoicing Guides &rarr;
                </Link>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3 bg-white border rounded-3 h-100">
                <h2 className="h6 fw-bold text-dark mb-2">Frequently Asked Questions</h2>
                <p className="text-muted small mb-3">
                  Have questions about currency formatting, PDF downloading, or data privacy? Explore our comprehensive FAQ section.
                </p>
                <Link to="/faq" className="small fw-semibold text-primary">
                  View QuickBills FAQ &rarr;
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default InvoicePage;
