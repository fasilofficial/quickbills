import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import {
  BiTimeFive,
  BiCalendar,
  BiRightArrowAlt,
  BiUser,
  BiShieldQuarter,
} from "react-icons/bi";
import Breadcrumbs from "../../../components/layout/Breadcrumbs";
import FaqAccordion from "../../../components/common/FaqAccordion";
import { guidesData } from "../../../data/guidesData";
import { templatesData } from "../../../data/templatesData";

export async function generateStaticParams() {
  return guidesData.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }) {
  const guide = guidesData.find((g) => g.slug === params.slug);

  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  return {
    title: guide.title,
    description: guide.summary,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.summary,
      url: `https://quickbills.vercel.app/guides/${guide.slug}`,
      type: "article",
      publishedTime: "2026-01-15T08:00:00+00:00",
      modifiedTime: "2026-09-01T10:00:00+00:00",
      authors: ["QuickBills Editorial Team"],
    },
  };
}

export default function GuideDetailPage({ params }) {
  const guide = guidesData.find((g) => g.slug === params.slug);

  if (!guide) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Guides", path: "/guides" },
    { label: guide.title, path: `/guides/${guide.slug}` },
  ];

  const relatedGuidesList = guidesData.filter((g) =>
    guide.relatedGuides?.includes(g.slug)
  );
  const relatedTemplatesList = templatesData.filter((t) =>
    guide.relatedTemplates?.includes(t.slug)
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.summary,
    "datePublished": "2026-01-15T08:00:00+00:00",
    "dateModified": "2026-09-01T10:00:00+00:00",
    "author": {
      "@type": "Organization",
      "name": "QuickBills Editorial Team",
      "url": "https://quickbills.vercel.app/about",
    },
    "publisher": {
      "@type": "Organization",
      "name": "QuickBills",
      "url": "https://quickbills.vercel.app/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://quickbills.vercel.app/og-image.svg",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://quickbills.vercel.app/guides/${guide.slug}`,
    },
  };

  return (
    <div className="qb-guide-detail-page py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
              <span className="d-flex align-items-center gap-1">
                <BiUser size={15} />
                <span>QuickBills Editorial Team</span>
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

          {/* Editorial Disclaimer Box */}
          <div className="p-4 bg-light border rounded-3 my-5">
            <div className="d-flex align-items-center gap-2 text-primary fw-semibold mb-2">
              <BiShieldQuarter size={20} />
              <span>Legal &amp; Tax Disclaimer</span>
            </div>
            <p className="text-muted small lh-base m-0">
              QuickBills publishes business articles and software utilities for general educational purposes. We do not provide licensed legal, certified public accounting, or professional tax consulting services. Invoicing standards, sales tax, VAT, and GST obligations vary substantially by jurisdiction, transaction category, and legal business entity. Always verify your specific requirements with a licensed accountant, attorney, or regional tax revenue agency.
            </p>
          </div>

          {/* Guide Specific FAQs */}
          {guide.faqs && guide.faqs.length > 0 && (
            <div className="my-5 pt-4 border-top">
              <h2 className="h4 fw-bold text-dark mb-3">Frequently Asked Questions</h2>
              <FaqAccordion items={guide.faqs} defaultOpenIndex={0} />
            </div>
          )}

          {/* Contextual Generator Banner */}
          <div className="p-4 bg-light-subtle border rounded-3 my-5 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <div>
              <h3 className="h6 fw-bold text-dark mb-1">
                Create a Verified Invoice with QuickBills
              </h3>
              <p className="text-muted small m-0">
                Apply these principles immediately in our free browser-based generator.
              </p>
            </div>
            <Link
              href="/invoice"
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
                        href={`/templates/${tpl.slug}`}
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
              <h3 className="h5 fw-bold text-dark mb-3">Related Invoicing Guides</h3>
              <Row className="g-3">
                {relatedGuidesList.map((rg) => (
                  <Col md={6} key={rg.slug}>
                    <div className="p-3 border rounded-3 bg-white h-100">
                      <span className="badge bg-light text-primary border small mb-1">{rg.category}</span>
                      <h4 className="h6 fw-bold text-dark mb-1">
                        <Link href={`/guides/${rg.slug}`} className="text-dark text-decoration-none hover-primary">
                          {rg.title}
                        </Link>
                      </h4>
                      <p className="text-muted small mb-2">{rg.summary.slice(0, 110)}...</p>
                      <Link
                        href={`/guides/${rg.slug}`}
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
      </Container>
    </div>
  );
}
