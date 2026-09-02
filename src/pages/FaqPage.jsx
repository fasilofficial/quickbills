import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import FaqAccordion from "../components/common/FaqAccordion";
import SeoMeta from "../components/common/SeoMeta";
import AdBanner from "../components/layout/AdBanner";
import { faqData } from "../data/faqData";

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const breadcrumbs = [{ label: "FAQ", path: "/faq" }];

  const categories = ["All", ...faqData.map((c) => c.category)];

  const displayedQuestions =
    activeCategory === "All"
      ? faqData.flatMap((c) => c.questions)
      : faqData.find((c) => c.category === activeCategory)?.questions || [];

  // Generate FAQPage JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap((c) => c.questions).map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="qb-faq-page py-4">
      <SeoMeta
        title="Frequently Asked Questions - QuickBills Invoice Generator"
        description="Find clear answers to frequently asked questions about creating invoices, tax calculations, payment terms, currency formats, and client-side data privacy."
        canonicalPath="/faq"
        keywords="invoice faq, invoicing questions, how to make invoice, tax on invoice, quickbills support"
        schema={faqSchema}
      />

      <Container>
        <Breadcrumbs items={breadcrumbs} />

        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-1 mb-2">
            Help Center
          </span>
          <h1 className="display-6 fw-bold text-dark mb-3">
            Frequently Asked Questions
          </h1>
          <p className="lead text-muted fs-6">
            Find answers to common questions about invoice creation, bookkeeping principles, currencies, and client privacy.
          </p>
        </div>

        {/* Category Filters */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "primary" : "light"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-pill px-3 py-1 border ${
                activeCategory === cat ? "text-white shadow-sm" : "text-secondary"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Accordion Questions */}
        <div className="max-w-800 mx-auto mb-5">
          <FaqAccordion items={displayedQuestions} defaultOpenIndex={0} />
        </div>

        {/* Help / Contact Box */}
        <div className="bg-white border rounded-3 p-4 p-md-5 max-w-800 mx-auto text-center my-5 shadow-sm">
          <h2 className="h5 fw-bold text-dark mb-2">Still Have Questions?</h2>
          <p className="text-muted small mb-3">
            If you need assistance with an invoice or would like to suggest a feature or template, we welcome your feedback.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/contact" className="btn btn-primary fw-semibold px-4 py-2">
              Contact Support
            </Link>
            <Link to="/invoice" className="btn btn-outline-secondary fw-semibold px-4 py-2">
              Back to Generator
            </Link>
          </div>
        </div>

        {/* Compliant Ad Slot */}
        <AdBanner slot="5432109876" />
      </Container>
    </div>
  );
};

export default FaqPage;
