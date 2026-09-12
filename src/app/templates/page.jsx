import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BiFile, BiRightArrowAlt, BiCheck } from "react-icons/bi";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import { templatesData } from "../../data/templatesData";

export const metadata = {
  title: "Free Professional Invoice Templates - QuickBills",
  description:
    "Explore free, customizable invoice templates for freelancers, contractors, small businesses, and service providers. Pre-configured with recommended fields and sample line items.",
  alternates: {
    canonical: "/templates",
  },
};

export default function TemplatesPage() {
  const breadcrumbs = [{ label: "Templates", path: "/templates" }];

  return (
    <div className="qb-templates-page py-4">
      <Container>
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-1 mb-2">
            Invoice Formats
          </span>
          <h1 className="display-6 fw-bold text-dark mb-3">
            Free Professional Invoice Templates
          </h1>
          <p className="lead text-muted fs-6">
            Choose a tailored invoice template designed for your industry. Each template includes industry-appropriate line items, standard payment terms, and customizable calculations.
          </p>
        </div>

        {/* Templates Grid */}
        <Row className="g-4 mb-5">
          {templatesData.map((template) => (
            <Col lg={6} key={template.slug}>
              <Card className="h-100 p-4 border rounded-3 bg-white shadow-sm card-hover d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-primary-subtle text-primary rounded-3 p-2">
                      <BiFile size={22} />
                    </div>
                    <span className="badge bg-light text-secondary border small">
                      {template.badge}
                    </span>
                  </div>
                </div>

                <h2 className="h5 fw-bold text-dark mb-2">{template.title}</h2>
                <p className="text-secondary small mb-3 lh-base">
                  {template.shortDescription}
                </p>

                <div className="mb-4">
                  <span className="text-uppercase text-muted fw-semibold small d-block mb-2">
                    Best Suited For:
                  </span>
                  <ul className="list-unstyled d-flex flex-column gap-1 small text-muted m-0">
                    {template.suitableFor.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="d-flex align-items-center gap-2">
                        <BiCheck className="text-success flex-shrink-0" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="d-flex flex-column flex-sm-row gap-2 mt-auto pt-3 border-top">
                  <Link
                    href={`/templates/${template.slug}`}
                    className="btn btn-outline-primary fw-medium small flex-fill text-center d-flex align-items-center justify-content-center gap-1"
                  >
                    <span>Read Template Guide</span>
                    <BiRightArrowAlt size={16} />
                  </Link>
                  <Link
                    href={`/invoice?template=${template.slug}`}
                    className="btn btn-primary fw-medium small flex-fill text-center text-white"
                  >
                    Use This Template
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Informative Guidance Section */}
        <div className="bg-white border rounded-3 p-4 p-md-5 my-5 shadow-sm">
          <Row className="gy-4 align-items-center">
            <Col lg={7}>
              <h2 className="h4 fw-bold text-dark mb-3">
                How to Choose the Right Template for Your Business
              </h2>
              <p className="text-secondary lh-base mb-3">
                Selecting the appropriate invoice layout prevents payment disputes and administrative bottlenecks. For single-deliverable tasks or local trade services, our <strong>Simple Invoice Template</strong> delivers concise itemization without unnecessary overhead.
              </p>
              <p className="text-secondary lh-base mb-0">
                If you are a contractor billing hourly milestones or a small business managing purchase orders and sales tax, choose the <strong>Freelance</strong> or <strong>Small Business</strong> template. Each format can be customized directly in the generator.
              </p>
            </Col>
            <Col lg={5}>
              <div className="p-4 bg-light border rounded-3">
                <h3 className="h6 fw-bold text-dark mb-2">Need Invoicing Guidance?</h3>
                <p className="text-muted small mb-3">
                  Learn about numbering systems, payment terms, and how to itemize deliverables properly.
                </p>
                <Link href="/guides" className="btn btn-outline-secondary btn-sm fw-semibold">
                  Browse All Guides &rarr;
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
