import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import {
  BiTimeFive,
  BiCalendar,
  BiRightArrowAlt,
} from "react-icons/bi";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import SeoMeta from "../components/common/SeoMeta";
import AdBanner from "../components/layout/AdBanner";
import { guidesData } from "../data/guidesData";
import { templatesData } from "../data/templatesData";

const GuideDetailPage = () => {
  const { slug } = useParams();
  const guide = guidesData.find((g) => g.slug === slug);

  if (!guide) {
    return <Navigate to="/guides" replace />;
  }

  const breadcrumbs = [
    { label: "Guides", path: "/guides" },
    { label: guide.title, path: `/guides/${guide.slug}` },
  ];

  // Resolve related guides and templates
  const relatedGuidesList = guidesData.filter((g) =>
    guide.relatedGuides?.includes(g.slug)
  );
  const relatedTemplatesList = templatesData.filter((t) =>
    guide.relatedTemplates?.includes(t.slug)
  );

  // Article JSON-LD Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.summary,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://quickbills.vercel.app/guides/${guide.slug}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "QuickBills",
      "url": "https://quickbills.vercel.app/"
    }
  };

  return (
    <div className="qb-guide-detail-page py-4">
      <SeoMeta
        title={guide.title}
        description={guide.summary}
        canonicalPath={`/guides/${guide.slug}`}
        keywords={`${guide.category}, invoicing guide, invoice best practices, QuickBills`}
        schema={articleSchema}
      />

      <Container>
        <Breadcrumbs items={breadcrumbs} />

        <article className="qb-guide-article bg-white border rounded-3 p-4 p-md-5 my-4 shadow-sm">
          {/* Article Header */}
          <header className="mb-4 pb-4 border-bottom">
            <div className="d-flex flex-wrap align-items-center gap-3 mb-2 text-muted small">
              <span className="badge bg-primary-subtle text-primary fw-semibold px-2 py-1">
                {guide.category}
              </span>
              <span className="d-flex align-items-center gap-1">
                <BiTimeFive size={15} />
                <span>{guide.readTime}</span>
              </span>
              <span className="d-flex align-items-center gap-1">
                <BiCalendar size={15} />
                <span>{guide.updatedDate}</span>
              </span>
            </div>

            <h1 className="h2 fw-bold text-dark lh-sm mb-3">{guide.title}</h1>

            <div className="p-3 bg-light border-start border-primary border-3 rounded-end text-secondary small lh-base">
              <strong>Article Summary: </strong> {guide.summary}
            </div>
          </header>

          {/* Article Content Sections */}
          <div className="qb-article-body">
            {guide.sections.map((section, sIdx) => (
              <section key={sIdx} className="mb-4">
                <h2 className="h4 fw-bold text-dark mt-4 mb-3">
                  {section.heading}
                </h2>

                {section.paragraphs &&
                  section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-secondary lh-base mb-3">
                      {p}
                    </p>
                  ))}

                {section.bulletPoints && (
                  <ul className="mb-3 ps-3 text-secondary lh-base">
                    {section.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="mb-2">
                        {bp}
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className="table-responsive my-4 border rounded-3 overflow-hidden">
                    <Table className="align-middle mb-0 small">
                      <thead className="table-light">
                        <tr>
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="py-2 px-3 fw-bold text-dark">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`py-2 px-3 text-secondary ${
                                  cIdx === 0 ? "fw-medium text-dark" : ""
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Contextual Generator Banner */}
          <div className="p-4 bg-light-subtle border rounded-3 my-5 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <div>
              <h3 className="h6 fw-bold text-dark mb-1">
                Create a Compliant Invoice with QuickBills
              </h3>
              <p className="text-muted small m-0">
                Apply these guidelines immediately in our free browser-based generator.
              </p>
            </div>
            <Link
              to="/invoice"
              className="btn btn-primary fw-semibold px-4 py-2 text-white flex-shrink-0"
            >
              Generate Invoice &rarr;
            </Link>
          </div>

          {/* Related Templates */}
          {relatedTemplatesList.length > 0 && (
            <div className="pt-4 border-top mb-4">
              <h3 className="h5 fw-bold text-dark mb-3">Recommended Templates for this Topic</h3>
              <Row className="g-3">
                {relatedTemplatesList.map((tpl) => (
                  <Col md={6} key={tpl.slug}>
                    <div className="p-3 border rounded-3 bg-light h-100">
                      <span className="badge bg-white text-secondary border small mb-1">{tpl.badge}</span>
                      <h4 className="h6 fw-bold text-dark mb-1">{tpl.title}</h4>
                      <p className="text-muted small mb-2">{tpl.shortDescription}</p>
                      <Link
                        to={`/templates/${tpl.slug}`}
                        className="small fw-semibold text-primary d-inline-flex align-items-center gap-1"
                      >
                        <span>View Template</span>
                        <BiRightArrowAlt size={16} />
                      </Link>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          )}

          {/* Related Guides */}
          {relatedGuidesList.length > 0 && (
            <div className="pt-4 border-top">
              <h3 className="h5 fw-bold text-dark mb-3">Related Guides</h3>
              <Row className="g-3">
                {relatedGuidesList.map((rg) => (
                  <Col md={6} key={rg.slug}>
                    <div className="p-3 border rounded-3 bg-white h-100">
                      <span className="badge bg-light text-primary border small mb-1">{rg.category}</span>
                      <h4 className="h6 fw-bold text-dark mb-1">
                        <Link to={`/guides/${rg.slug}`} className="text-dark text-decoration-none hover-primary">
                          {rg.title}
                        </Link>
                      </h4>
                      <p className="text-muted small mb-2">{rg.summary.slice(0, 110)}...</p>
                      <Link
                        to={`/guides/${rg.slug}`}
                        className="small fw-semibold text-primary d-inline-flex align-items-center gap-1"
                      >
                        <span>Read article</span>
                        <BiRightArrowAlt size={16} />
                      </Link>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </article>

        {/* Content Ad Placement */}
        <AdBanner slot="6543210987" />
      </Container>
    </div>
  );
};

export default GuideDetailPage;
