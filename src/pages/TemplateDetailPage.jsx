import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import {
  BiCheckCircle,
  BiRightArrowAlt,
  BiFile,
  BiArrowBack,
} from "react-icons/bi";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import SeoMeta from "../components/common/SeoMeta";
import AdBanner from "../components/layout/AdBanner";
import { templatesData } from "../data/templatesData";
import { guidesData } from "../data/guidesData";

const TemplateDetailPage = () => {
  const { slug } = useParams();
  const template = templatesData.find((t) => t.slug === slug);

  if (!template) {
    return <Navigate to="/templates" replace />;
  }

  const breadcrumbs = [
    { label: "Templates", path: "/templates" },
    { label: template.title, path: `/templates/${template.slug}` },
  ];

  // Resolve related guides
  const relatedGuidesList = guidesData.filter((g) =>
    template.relatedGuides?.includes(g.slug)
  );

  return (
    <div className="qb-template-detail-page py-4">
      <SeoMeta
        title={`${template.title} - Free Download & Online Builder`}
        description={template.shortDescription}
        canonicalPath={`/templates/${template.slug}`}
        keywords={`${template.title}, free invoice template, online invoice generator, invoice format`}
      />

      <Container>
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Header */}
        <div className="bg-white border rounded-3 p-4 p-md-5 mb-5 shadow-sm">
          <Row className="gy-4 align-items-center">
            <Col lg={8}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge bg-primary text-white px-2 py-1 small">
                  {template.badge}
                </span>
                <span className="text-muted small">Standard Invoice Structure</span>
              </div>
              <h1 className="display-6 fw-bold text-dark mb-3">
                {template.title}
              </h1>
              <p className="text-secondary fs-6 lh-base mb-4">
                {template.fullDescription}
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link
                  to={`/invoice?template=${template.slug}`}
                  state={{ templateData: template.prefillData }}
                  className="btn btn-primary btn-lg fw-semibold px-4 text-white d-inline-flex align-items-center gap-2 shadow-sm"
                >
                  <BiFile size={20} />
                  <span>Use This Template in Generator</span>
                </Link>
                <Link
                  to="/templates"
                  className="btn btn-outline-secondary btn-lg fw-semibold px-3 d-inline-flex align-items-center gap-1"
                >
                  <BiArrowBack size={18} />
                  <span>All Templates</span>
                </Link>
              </div>
            </Col>

            {/* Template Specs Mini Box */}
            <Col lg={4}>
              <div className="bg-light border rounded-3 p-3 p-xl-4">
                <h2 className="h6 fw-bold text-dark mb-3">Template Overview</h2>
                <ul className="list-unstyled d-flex flex-column gap-2 small text-muted m-0">
                  <li className="d-flex justify-content-between py-1 border-bottom">
                    <span>Format:</span>
                    <span className="fw-semibold text-dark">Digital PDF & Print</span>
                  </li>
                  <li className="d-flex justify-content-between py-1 border-bottom">
                    <span>Cost:</span>
                    <span className="fw-semibold text-success">100% Free</span>
                  </li>
                  <li className="d-flex justify-content-between py-1 border-bottom">
                    <span>Tax Supported:</span>
                    <span className="fw-semibold text-dark">Yes (Custom Rate %)</span>
                  </li>
                  <li className="d-flex justify-content-between py-1 border-bottom">
                    <span>Discount Supported:</span>
                    <span className="fw-semibold text-dark">Yes (Custom %)</span>
                  </li>
                  <li className="d-flex justify-content-between py-1">
                    <span>Account Required:</span>
                    <span className="fw-semibold text-dark">None</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>

        {/* Content Section: Who is this template suitable for? */}
        <section className="mb-5">
          <h2 className="h4 fw-bold text-dark mb-3">Who is this Template Suitable For?</h2>
          <Row className="g-3">
            {template.suitableFor.map((item, index) => (
              <Col md={6} key={index}>
                <div className="p-3 bg-white border rounded-3 h-100 d-flex align-items-start gap-2 shadow-sm">
                  <BiCheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                  <span className="text-secondary small">{item}</span>
                </div>
              </Col>
            ))}
          </Row>
        </section>

        {/* Content Section: Recommended Fields & Required Information */}
        <section className="mb-5">
          <h2 className="h4 fw-bold text-dark mb-3">What Information Should this Invoice Include?</h2>
          <Card className="p-4 border bg-white shadow-sm">
            <p className="text-secondary small mb-3">
              To ensure compliance and avoid dispute when issuing this document, verify that the following fields are accurately filled:
            </p>
            <Row className="gy-2">
              {template.recommendedFields.map((field, idx) => (
                <Col sm={6} key={idx}>
                  <div className="d-flex align-items-center gap-2 small text-secondary">
                    <span className="badge bg-light text-primary border rounded-circle p-1" style={{ width: "20px", height: "20px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      {idx + 1}
                    </span>
                    <span>{field}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>
        </section>

        {/* Content Section: Live Example Preview Table */}
        <section className="mb-5">
          <h2 className="h4 fw-bold text-dark mb-3">Sample Itemization & Layout Example</h2>
          <Card className="p-4 border bg-white shadow-sm overflow-hidden">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <span className="fw-bold text-dark">{template.prefillData.billFrom}</span>
                <span className="text-muted small d-block">Sample Invoiced Deliverables</span>
              </div>
              <span className="badge bg-light text-secondary border">Sample Data</span>
            </div>

            <div className="table-responsive">
              <Table className="align-middle border-top border-bottom small mb-3">
                <thead className="table-light">
                  <tr>
                    <th>Item & Description</th>
                    <th style={{ width: "80px" }} className="text-center">Qty</th>
                    <th style={{ width: "120px" }} className="text-end">Rate</th>
                    <th style={{ width: "120px" }} className="text-end">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {template.prefillData.items.map((item, i) => (
                    <tr key={i}>
                      <td>
                        <div className="fw-semibold text-dark">{item.name}</div>
                        <div className="text-muted">{item.description}</div>
                      </td>
                      <td className="text-center">{item.quantity}</td>
                      <td className="text-end">{template.prefillData.currency}{item.price}</td>
                      <td className="text-end fw-semibold">
                        {template.prefillData.currency}
                        {(parseFloat(item.price) * parseFloat(item.quantity)).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="p-3 bg-light border rounded-3 small text-muted">
              <strong className="text-dark">Default Payment Instructions:</strong> {template.prefillData.notes}
            </div>

            <div className="mt-3 text-end">
              <Link
                to={`/invoice?template=${template.slug}`}
                state={{ templateData: template.prefillData }}
                className="btn btn-primary btn-sm fw-medium text-white px-3"
              >
                Load this sample into generator &rarr;
              </Link>
            </div>
          </Card>
        </section>

        {/* Content Section: Best Practices */}
        <section className="mb-5">
          <h2 className="h4 fw-bold text-dark mb-3">Invoicing Best Practices for this Template</h2>
          <div className="d-flex flex-column gap-2">
            {template.bestPractices.map((tip, idx) => (
              <div key={idx} className="p-3 bg-white border rounded-3 d-flex align-items-start gap-2 shadow-sm">
                <span className="badge bg-primary-subtle text-primary fw-bold mt-1">Tip {idx + 1}</span>
                <span className="text-secondary small lh-base">{tip}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        {relatedGuidesList.length > 0 && (
          <section className="mb-5 pt-3 border-top">
            <h2 className="h5 fw-bold text-dark mb-3">Related Invoicing Guides</h2>
            <Row className="g-3">
              {relatedGuidesList.map((guide) => (
                <Col md={4} key={guide.slug}>
                  <Card className="p-3 border rounded-3 h-100 bg-white shadow-sm card-hover">
                    <span className="badge bg-light text-secondary border small align-self-start mb-2">
                      {guide.category}
                    </span>
                    <h3 className="h6 fw-bold text-dark mb-2">{guide.title}</h3>
                    <p className="text-muted small mb-3 flex-grow-1">
                      {guide.summary.slice(0, 100)}...
                    </p>
                    <Link
                      to={`/guides/${guide.slug}`}
                      className="small fw-semibold text-primary mt-auto d-flex align-items-center gap-1"
                    >
                      <span>Read Guide</span>
                      <BiRightArrowAlt size={16} />
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
        )}

        {/* Content Ad Placement */}
        <AdBanner slot="8765432109" />
      </Container>
    </div>
  );
};

export default TemplateDetailPage;
