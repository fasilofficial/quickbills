import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import FaqFilterClient from "../../components/faq/FaqFilterClient";
import { faqData } from "../../data/faqData";

export const metadata = {
  title: "Frequently Asked Questions - QuickBills Invoice Generator",
  description:
    "Find clear answers to frequently asked questions about creating invoices, tax calculations, payment terms, currency formats, and client-side data privacy.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  const breadcrumbs = [{ label: "FAQ", path: "/faq" }];

  const allFaqs = faqData.flatMap((c) => c.questions);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <div className="qb-faq-page py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

        <FaqFilterClient />

        {/* Static crawlable fallback for bots */}
        <noscript>
          <div className="max-w-800 mx-auto mb-5">
            {allFaqs.map((item, idx) => (
              <div key={idx} className="p-3 bg-white border rounded-3 mb-3">
                <h3 className="h6 fw-bold text-dark">{item.q}</h3>
                <p className="text-secondary small m-0">{item.a}</p>
              </div>
            ))}
          </div>
        </noscript>

        {/* Help / Contact Box */}
        <div className="bg-white border rounded-3 p-4 p-md-5 max-w-800 mx-auto text-center my-5 shadow-sm">
          <h2 className="h5 fw-bold text-dark mb-2">Still Have Questions?</h2>
          <p className="text-muted small mb-3">
            If you need assistance with an invoice or would like to suggest a feature or template, we welcome your feedback.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link href="/contact" className="btn btn-primary fw-semibold px-4 py-2">
              Contact Support
            </Link>
            <Link href="/invoice" className="btn btn-outline-secondary fw-semibold px-4 py-2">
              Back to Generator
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
