import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BiTimeFive, BiRightArrowAlt } from "react-icons/bi";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import SeoMeta from "../components/common/SeoMeta";
import AdBanner from "../components/layout/AdBanner";
import { guidesData } from "../data/guidesData";

const GuidesPage = () => {
  const breadcrumbs = [{ label: "Guides", path: "/guides" }];

  return (
    <div className="qb-guides-page py-4">
      <SeoMeta
        title="Invoicing Guides & Educational Resources - QuickBills"
        description="Comprehensive, practical invoicing guides for small business owners, freelancers, and contractors. Learn numbering systems, payment terms, tax calculations, and how to get paid on time."
        canonicalPath="/guides"
        keywords="invoicing guide, how to invoice, invoice numbering, tax calculation, small business billing, freelance invoice advice"
      />

      <Container>
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-1 mb-2">
            Invoicing Education
          </span>
          <h1 className="display-6 fw-bold text-dark mb-3">
            Invoicing Guides & Practical Resources
          </h1>
          <p className="lead text-muted fs-6">
            Master the fundamentals of billing, accounting terminology, tax itemization, and cash flow management with our practical, human-written guides.
          </p>
        </div>

        {/* Guides Grid */}
        <Row className="g-4 mb-5">
          {guidesData.map((guide) => (
            <Col md={6} lg={4} key={guide.slug}>
              <Card className="h-100 p-4 border rounded-3 bg-white shadow-sm card-hover d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-light text-primary border small">
                    {guide.category}
                  </span>
                  <span className="text-muted small d-flex align-items-center gap-1">
                    <BiTimeFive size={14} />
                    <span>{guide.readTime}</span>
                  </span>
                </div>

                <h2 className="h5 fw-bold text-dark mb-3 lh-snug">
                  <Link
                    to={`/guides/${guide.slug}`}
                    className="text-dark text-decoration-none hover-primary"
                  >
                    {guide.title}
                  </Link>
                </h2>

                <p className="text-secondary small mb-4 lh-base flex-grow-1">
                  {guide.summary}
                </p>

                <div className="pt-3 border-top mt-auto d-flex justify-content-between align-items-center">
                  <span className="text-muted small">{guide.updatedDate}</span>
                  <Link
                    to={`/guides/${guide.slug}`}
                    className="fw-semibold small text-primary d-inline-flex align-items-center gap-1"
                  >
                    <span>Read Guide</span>
                    <BiRightArrowAlt size={16} />
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Callout box linking to tool */}
        <div className="bg-light border rounded-3 p-4 p-md-5 my-5 text-center max-w-800 mx-auto">
          <h2 className="h4 fw-bold text-dark mb-2">Put Your Knowledge to Work</h2>
          <p className="text-muted small mb-4">
            QuickBills makes it simple to generate professional, calculation-verified invoices adhering to all standard commercial guidelines.
          </p>
          <Link to="/invoice" className="btn btn-primary fw-semibold px-4 py-2">
            Create an Invoice Now &rarr;
          </Link>
        </div>

        {/* Compliant Ad Slot on Content Page */}
        <AdBanner slot="7654321098" />
      </Container>
    </div>
  );
};

export default GuidesPage;
