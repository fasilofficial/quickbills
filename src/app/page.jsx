import React from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import {
  BiCheckCircle,
  BiFile,
  BiUserCheck,
  BiListPlus,
  BiCloudDownload,
  BiCheckShield,
  BiLockAlt,
  BiCalculator,
  BiPrinter,
} from "react-icons/bi";
import InvoiceForm from "../components/InvoiceForm";
import FaqAccordion from "../components/common/FaqAccordion";
import HeroCta from "../components/home/HeroCta";
import { faqData } from "../data/faqData";

export const metadata = {
  title: "QuickBills - Free Online Invoice Generator & Invoicing Guides",
  description:
    "Create professional invoices in minutes with QuickBills. Free browser-based invoice generator, invoice templates, and step-by-step invoicing guides for freelancers and small businesses.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const homepageFaqs = faqData.flatMap((cat) => cat.questions).slice(0, 8);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://quickbills.vercel.app/#webapp",
        "name": "QuickBills Invoice Generator",
        "url": "https://quickbills.vercel.app/",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
        "description":
          "Free online invoice generator for freelancers, small businesses, and contractors. Create professional invoices with taxes, discounts, and PDF downloads directly in your browser without registration.",
      },
      {
        "@type": "WebSite",
        "@id": "https://quickbills.vercel.app/#website",
        "url": "https://quickbills.vercel.app/",
        "name": "QuickBills",
        "description": "Free online invoice generator and invoicing educational resource.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://quickbills.vercel.app/#faq",
        "mainEntity": homepageFaqs.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="qb-home-page">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="qb-hero-section py-5 bg-white border-bottom">
        <Container>
          <Row className="justify-content-center text-center py-3 py-md-4">
            <Col lg={9} xl={8}>
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-light border rounded-pill text-secondary small fw-medium mb-3">
                <BiCheckShield className="text-primary" size={16} />
                <span>100% Free • No Account Required • Client-Side Privacy</span>
              </div>
              <h1 className="display-5 fw-bold text-dark mb-3 tracking-tight">
                Free Online Invoice Generator
              </h1>
              <p className="lead text-muted mb-4 fs-6 fs-md-5 lh-base">
                Create clear, professional invoices in minutes. Enter your business and client details, itemize your goods or services, apply custom taxes and discounts, and generate a print-ready or downloadable PDF invoice instantly.
              </p>
              <HeroCta />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Invoice Generator Section */}
      <section id="invoice-generator-section" className="py-5">
        <Container>
          <div className="mb-4 text-center text-md-start">
            <div className="d-flex align-items-center gap-2 mb-1">
              <span className="badge bg-primary-subtle text-primary fw-semibold px-2 py-1">
                Interactive Workspace
              </span>
              <span className="text-muted small">• Computations run client-side</span>
            </div>
            <h2 className="h4 fw-bold text-dark m-0">Live Invoice Builder</h2>
            <p className="text-muted small m-0">
              Customize your fields below. Once ready, click &quot;Review Invoice&quot; to inspect your document, download a high-resolution PDF, or print directly.
            </p>
          </div>
          <InvoiceForm />
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-5 bg-white border-top border-bottom">
        <Container>
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-1 mb-2">
              Simple 4-Step Process
            </span>
            <h2 className="h2 fw-bold text-dark mb-2">How to Create an Invoice with QuickBills</h2>
            <p className="text-muted fs-6">
              Generate a polished, client-ready billing statement in four straightforward steps.
            </p>
          </div>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 p-4 border rounded-3 bg-light-subtle card-hover">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-3 p-3 mb-3"
                  style={{ width: "48px", height: "48px" }}
                >
                  <BiFile size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">1. Enter Business Details</h3>
                <p className="text-muted small m-0">
                  Input your trading name, registered address, and billing email so your client clearly identifies who is billing them.
                </p>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 p-4 border rounded-3 bg-light-subtle card-hover">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-3 p-3 mb-3"
                  style={{ width: "48px", height: "48px" }}
                >
                  <BiUserCheck size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">2. Add Client Information</h3>
                <p className="text-muted small m-0">
                  Enter your client&apos;s legal name, accounts payable email, billing address, and specify a clear calendar payment due date.
                </p>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 p-4 border rounded-3 bg-light-subtle card-hover">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-3 p-3 mb-3"
                  style={{ width: "48px", height: "48px" }}
                >
                  <BiListPlus size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">3. Itemize Products & Services</h3>
                <p className="text-muted small m-0">
                  Add line items with titles, descriptions, quantities, and rates. Configure tax or discount percentages as needed.
                </p>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 p-4 border rounded-3 bg-light-subtle card-hover">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-3 p-3 mb-3"
                  style={{ width: "48px", height: "48px" }}
                >
                  <BiCloudDownload size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">4. Review & Download PDF</h3>
                <p className="text-muted small m-0">
                  Preview your formatted invoice in the preview modal, verify figures, and download your PDF or print directly from your browser.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How QuickBills Calculates Totals & Handles Data (Product-Specific) */}
      <section className="py-5">
        <Container>
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-1 mb-2">
              Product Architecture & Logic
            </span>
            <h2 className="h2 fw-bold text-dark mb-2">How QuickBills Works Under the Hood</h2>
            <p className="text-muted fs-6">
              Complete transparency into how calculations are performed and how your invoice data is handled.
            </p>
          </div>
          <Row className="g-4">
            <Col lg={6}>
              <Card className="p-4 p-md-5 border rounded-3 bg-white shadow-sm h-100">
                <div className="d-flex align-items-center gap-2 mb-3 text-primary">
                  <BiCalculator size={26} />
                  <h3 className="h5 fw-bold text-dark m-0">How QuickBills Calculates Totals</h3>
                </div>
                <p className="text-secondary small lh-base mb-3">
                  All mathematical operations in QuickBills are executed locally using standard commercial accounting formulas to guarantee consistency:
                </p>
                <div className="table-responsive">
                  <Table bordered hover size="sm" className="small text-secondary mb-3">
                    <thead className="table-light">
                      <tr>
                        <th>Calculation Component</th>
                        <th>Applied Mathematical Formula</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Line Item Amount</strong></td>
                        <td><code>Item Quantity &times; Unit Price</code></td>
                      </tr>
                      <tr>
                        <td><strong>Gross Subtotal</strong></td>
                        <td><code>&sum; (All Line Item Amounts)</code></td>
                      </tr>
                      <tr>
                        <td><strong>Discount Amount</strong></td>
                        <td><code>Subtotal &times; (Discount Rate &divide; 100)</code></td>
                      </tr>
                      <tr>
                        <td><strong>Taxable Base</strong></td>
                        <td><code>max(0, Subtotal &minus; Discount Amount)</code></td>
                      </tr>
                      <tr>
                        <td><strong>Tax Amount</strong></td>
                        <td><code>Taxable Base &times; (Tax Rate &divide; 100)</code></td>
                      </tr>
                      <tr>
                        <td><strong>Net Total Due</strong></td>
                        <td><code>Subtotal &minus; Discount Amount + Tax Amount</code></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <p className="text-muted small m-0">
                  QuickBills calculates discounts prior to calculating taxes, ensuring tax is only assessed on the actual discounted net base.
                </p>
              </Card>
            </Col>
            <Col lg={6}>
              <Card className="p-4 p-md-5 border rounded-3 bg-white shadow-sm h-100">
                <div className="d-flex align-items-center gap-2 mb-3 text-primary">
                  <BiLockAlt size={26} />
                  <h3 className="h5 fw-bold text-dark m-0">How QuickBills Handles Your Data</h3>
                </div>
                <p className="text-secondary small lh-base mb-3">
                  QuickBills was deliberately designed with a client-first privacy architecture:
                </p>
                <ul className="list-unstyled d-flex flex-column gap-3 small text-secondary mb-4">
                  <li className="d-flex align-items-start gap-2">
                    <BiCheckCircle className="text-success mt-1 flex-shrink-0" size={18} />
                    <span><strong>Zero Server Storage:</strong> Your invoice line items, pricing, customer names, and banking coordinates never leave your browser. They are not transmitted to or stored on any server database.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <BiCheckCircle className="text-success mt-1 flex-shrink-0" size={18} />
                    <span><strong>Client-Side PDF Generation:</strong> PDF files are assembled directly on your device using HTML5 canvas capture and local PDF rendering. No external rendering service receives your document.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <BiCheckCircle className="text-success mt-1 flex-shrink-0" size={18} />
                    <span><strong>Direct Print Support:</strong> Dedicated print stylesheets (@media print) ensure that clicking &quot;Print Invoice&quot; formats an exact A4 or Letter page for your local printer without browser clutter.</span>
                  </li>
                </ul>
                <div className="p-3 bg-light rounded-3 mt-auto">
                  <p className="text-muted small m-0">
                    Because your data lives in browser memory, remember to download your PDF before closing or refreshing your browser tab.
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Educational Section: What is an Invoice? */}
      <section className="py-5 bg-white border-top border-bottom">
        <Container>
          <Row className="gy-4 align-items-center">
            <Col lg={6}>
              <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-1 mb-2">
                Invoicing Fundamentals
              </span>
              <h2 className="h2 fw-bold text-dark mb-3">What is an Invoice and Why is it Necessary?</h2>
              <p className="text-secondary lh-base mb-3">
                An invoice is an itemized commercial document that records a transaction between a seller and a buyer. When services are delivered or goods are shipped under agreed payment terms, the invoice establishes a clear payment request stating what was provided, the total amount owed, and the deadline for settlement.
              </p>
              <p className="text-secondary lh-base mb-3">
                In addition to requesting payment, invoices are indispensable for bookkeeping. They form the basis of Accounts Receivable (A/R) for sellers and Accounts Payable (A/P) for buyers, providing the verifiable audit trail required for business accounting, expense tracking, and corporate tax reporting.
              </p>
              <div className="p-3 bg-light border rounded-3">
                <h3 className="h6 fw-bold text-dark mb-1">Invoice vs. Receipt: The Key Difference</h3>
                <p className="text-muted small m-0">
                  An <strong>invoice</strong> requests payment before funds are transferred. A <strong>receipt</strong> is issued after payment has been completed as proof of settlement. Both are vital records at different stages of the billing cycle.
                </p>
                <div className="mt-2">
                  <Link href="/guides/invoice-vs-receipt" className="small fw-semibold text-primary">
                    Read the full Invoice vs. Receipt guide &rarr;
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Card className="p-4 border rounded-3 bg-light-subtle shadow-sm">
                <h3 className="h5 fw-bold text-dark mb-3">When Should an Invoice Be Issued?</h3>
                <ul className="list-unstyled d-flex flex-column gap-3 m-0 small text-secondary">
                  <li className="d-flex align-items-start gap-2">
                    <BiCheckCircle className="text-success mt-1 flex-shrink-0" size={18} />
                    <span><strong>Upon Milestone or Project Completion:</strong> Issue your invoice promptly once work is approved to keep cash flow predictable and deliverables fresh in the client&apos;s mind.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <BiCheckCircle className="text-success mt-1 flex-shrink-0" size={18} />
                    <span><strong>Agreed Project Milestones:</strong> For multi-week engagements, dispatch invoices when defined project checkpoints or deliverables are approved.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <BiCheckCircle className="text-success mt-1 flex-shrink-0" size={18} />
                    <span><strong>Recurring Billing Intervals:</strong> For ongoing retainer agreements or maintenance plans, issue invoices on a predictable monthly schedule (such as the 1st or 15th).</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <BiCheckCircle className="text-success mt-1 flex-shrink-0" size={18} />
                    <span><strong>Upfront Project Deposits:</strong> For custom commissions or new clients, issue a deposit invoice before initiating extensive billable hours.</span>
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What Should Every Invoice Include? */}
      <section className="py-5">
        <Container>
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-1 mb-2">
              Best Practice Checklist
            </span>
            <h2 className="h2 fw-bold text-dark mb-2">What Should Every Invoice Include?</h2>
            <p className="text-muted fs-6">
              To prevent payment delays and accounts payable rejections, verify your invoice contains these essential components:
            </p>
          </div>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <div className="p-4 border rounded-3 h-100 bg-white shadow-sm">
                <h3 className="h6 fw-bold text-dark mb-2">1. Header & Numbering</h3>
                <p className="text-muted small m-0">
                  Display the word &quot;Invoice&quot; clearly with a unique, sequential invoice number (e.g., INV-1001) for audit and tracking purposes.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="p-4 border rounded-3 h-100 bg-white shadow-sm">
                <h3 className="h6 fw-bold text-dark mb-2">2. Issuer & Client Details</h3>
                <p className="text-muted small m-0">
                  Full trading names, business addresses, contact email addresses, and phone numbers for both your business and the client.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="p-4 border rounded-3 h-100 bg-white shadow-sm">
                <h3 className="h6 fw-bold text-dark mb-2">3. Issue Date & Due Date</h3>
                <p className="text-muted small m-0">
                  State the specific date the invoice was issued and the calendar deadline for payment (e.g., Net 14 or Net 30).
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="p-4 border rounded-3 h-100 bg-white shadow-sm">
                <h3 className="h6 fw-bold text-dark mb-2">4. Itemized Deliverables</h3>
                <p className="text-muted small m-0">
                  Detailed row-by-row descriptions of each task or merchandise delivered, including quantities, unit prices, and line subtotals.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="p-4 border rounded-3 h-100 bg-white shadow-sm">
                <h3 className="h6 fw-bold text-dark mb-2">5. Subtotals, Taxes & Discounts</h3>
                <p className="text-muted small m-0">
                  A transparent financial summary detailing gross subtotal, applied discount percentage, sales tax or VAT, and net amount due.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="p-4 border rounded-3 h-100 bg-white shadow-sm">
                <h3 className="h6 fw-bold text-dark mb-2">6. Payment Coordinates</h3>
                <p className="text-muted small m-0">
                  Remittance details such as bank transfer information (ACH, IBAN, routing numbers) or payment links so clients know how to pay.
                </p>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Link href="/guides/what-should-an-invoice-include" className="fw-semibold text-primary small">
              Read the complete 10-element invoice checklist guide &rarr;
            </Link>
          </div>
        </Container>
      </section>

      {/* Who Can Use QuickBills? */}
      <section className="py-5 bg-white border-top border-bottom">
        <Container>
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-1 mb-2">
              Designed For Real Workflows
            </span>
            <h2 className="h2 fw-bold text-dark mb-2">Who Can Use QuickBills?</h2>
            <p className="text-muted fs-6">
              Our lightweight, private generator is tailored to the practical needs of independent professionals and growing businesses.
            </p>
          </div>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="p-4 border rounded-3 h-100 bg-light-subtle shadow-sm">
                <h3 className="h5 fw-bold text-dark mb-2">Freelancers</h3>
                <p className="text-muted small mb-3">
                  Writers, developers, photographers, and graphic artists who need to bill clients by the hour or deliverable without recurring monthly subscriptions.
                </p>
                <Link href="/templates/freelance-invoice" className="small fw-semibold text-primary mt-auto">
                  View Freelance Template &rarr;
                </Link>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="p-4 border rounded-3 h-100 bg-light-subtle shadow-sm">
                <h3 className="h5 fw-bold text-dark mb-2">Small Businesses</h3>
                <p className="text-muted small mb-3">
                  B2B wholesalers, local shops, and e-commerce suppliers requiring clear billing documents with tax calculations and PO numbers.
                </p>
                <Link href="/templates/small-business-invoice" className="small fw-semibold text-primary mt-auto">
                  View Small Business Template &rarr;
                </Link>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="p-4 border rounded-3 h-100 bg-light-subtle shadow-sm">
                <h3 className="h5 fw-bold text-dark mb-2">Consultants</h3>
                <p className="text-muted small mb-3">
                  Management advisors, legal consultants, and marketing strategists billing corporate clients under structured Net 15 or Net 30 payment terms.
                </p>
                <Link href="/templates/service-invoice" className="small fw-semibold text-primary mt-auto">
                  View Service Template &rarr;
                </Link>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="p-4 border rounded-3 h-100 bg-light-subtle shadow-sm">
                <h3 className="h5 fw-bold text-dark mb-2">Trade Contractors</h3>
                <p className="text-muted small mb-3">
                  Electricians, plumbers, landscapers, and carpenters who need to produce clean, itemized labor and material bills on-site for immediate client approval.
                </p>
                <Link href="/templates/simple-invoice" className="small fw-semibold text-primary mt-auto">
                  View Simple Template &rarr;
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Practical Invoice Tips */}
      <section className="py-5">
        <Container>
          <div className="max-w-800 mx-auto">
            <div className="text-center mb-5">
              <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-1 mb-2">
                Actionable Advice
              </span>
              <h2 className="h2 fw-bold text-dark mb-2">Practical Habits to Get Invoices Paid Faster</h2>
              <p className="text-muted fs-6">
                Simple professional practices that reduce processing friction and maintain healthy cash flow.
              </p>
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="p-3 bg-white border rounded-3 d-flex align-items-start gap-3 shadow-sm">
                <div className="badge bg-primary rounded-circle p-2 text-white mt-1">1</div>
                <div>
                  <h3 className="h6 fw-bold text-dark m-0">Use Sequential & Non-Repeating Numbers</h3>
                  <p className="text-muted small m-0">
                    Standardize on formats like INV-1001 or INV-2026-001 so both you and your client can track payments easily and maintain an organized audit trail.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-white border rounded-3 d-flex align-items-start gap-3 shadow-sm">
                <div className="badge bg-primary rounded-circle p-2 text-white mt-1">2</div>
                <div>
                  <h3 className="h6 fw-bold text-dark m-0">Specify Clear Calendar Due Dates</h3>
                  <p className="text-muted small m-0">
                    Replace &quot;Due Upon Receipt&quot; with a concrete calendar date (e.g., October 15, 2026) to help client finance teams fit your invoice into their scheduled payment runs.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-white border rounded-3 d-flex align-items-start gap-3 shadow-sm">
                <div className="badge bg-primary rounded-circle p-2 text-white mt-1">3</div>
                <div>
                  <h3 className="h6 fw-bold text-dark m-0">Break Down Deliverables into Specific Milestones</h3>
                  <p className="text-muted small m-0">
                    Avoid vague labels like &quot;Design Work&quot;. Detail the scope (e.g., &quot;Homepage UI Redesign &amp; Mobile Optimization - 12 hrs @ $85/hr&quot;) to avoid approval questions.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-white border rounded-3 d-flex align-items-start gap-3 shadow-sm">
                <div className="badge bg-primary rounded-circle p-2 text-white mt-1">4</div>
                <div>
                  <h3 className="h6 fw-bold text-dark m-0">Automate Calculation Accuracy</h3>
                  <p className="text-muted small m-0">
                    Calculation discrepancies and rounding errors are common causes for invoice disputes. QuickBills calculates subtotals, tax rates, and discounts automatically to minimize mistakes.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-white border rounded-3 d-flex align-items-start gap-3 shadow-sm">
                <div className="badge bg-primary rounded-circle p-2 text-white mt-1">5</div>
                <div>
                  <h3 className="h6 fw-bold text-dark m-0">Include Remittance Details Clearly</h3>
                  <p className="text-muted small m-0">
                    Provide complete ACH, routing, IBAN, or SWIFT details in the notes section so accounts payable has everything required to initiate payment immediately.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-white border rounded-3 d-flex align-items-start gap-3 shadow-sm">
                <div className="badge bg-primary rounded-circle p-2 text-white mt-1">6</div>
                <div>
                  <h3 className="h6 fw-bold text-dark m-0">Archive Downloaded PDF Copies for Bookkeeping</h3>
                  <p className="text-muted small m-0">
                    Keep a dedicated folder on your computer or cloud storage organized by year and client name for seamless year-end tax and accounting preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-white border-top border-bottom">
        <Container>
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-1 mb-2">
              Common Questions
            </span>
            <h2 className="h2 fw-bold text-dark mb-2">Frequently Asked Questions</h2>
            <p className="text-muted fs-6">
              Have questions about creating invoices or using QuickBills? Here are answers to common questions.
            </p>
          </div>
          <div className="max-w-800 mx-auto">
            <FaqAccordion items={homepageFaqs} defaultOpenIndex={0} />
            <div className="text-center mt-4">
              <Link href="/faq" className="btn btn-outline-primary fw-semibold px-4 py-2">
                View All Frequently Asked Questions &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Final Call to Action */}
      <section className="py-5 bg-primary text-white text-center">
        <Container>
          <div className="py-4 max-w-700 mx-auto">
            <h2 className="display-6 fw-bold text-white mb-3">Ready to Create Your Invoice?</h2>
            <p className="lead text-white-50 mb-4 fs-6 fs-md-5">
              Create a clean, professional invoice in just a few steps. 100% free, private, and ready to download or print.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <HeroCta />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
