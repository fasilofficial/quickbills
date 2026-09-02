import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  BiCheckCircle,
  BiFile,
  BiUserCheck,
  BiListPlus,
  BiCloudDownload,
  BiCheckShield,
  BiRightArrowAlt,
} from "react-icons/bi";
import InvoiceForm from "../components/InvoiceForm";
import FaqAccordion from "../components/common/FaqAccordion";
import SeoMeta from "../components/common/SeoMeta";
import { faqData } from "../data/faqData";

const HomePage = () => {
  const scrollToGenerator = () => {
    const el = document.getElementById("invoice-generator-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Structured Data for WebApplication
  const webAppSchema = {
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
          "priceCurrency": "USD"
        },
        "description": "Free online invoice generator for freelancers, small businesses, and contractors. Create professional invoices with taxes, discounts, and PDF downloads directly in your browser."
      },
      {
        "@type": "WebSite",
        "@id": "https://quickbills.vercel.app/#website",
        "url": "https://quickbills.vercel.app/",
        "name": "QuickBills",
        "description": "Free online invoice generator and invoicing educational resource."
      }
    ]
  };

  // Grab first 8 FAQs for the homepage
  const homepageFaqs = faqData.flatMap((cat) => cat.questions).slice(0, 8);

  return (
    <div className="qb-home-page">
      <SeoMeta
        title="QuickBills - Free Online Invoice Generator & Invoicing Guides"
        description="Create professional invoices in minutes with QuickBills. Free browser-based invoice generator, invoice templates, and step-by-step invoicing guides for freelancers and small businesses."
        canonicalPath="/"
        keywords="free invoice generator, create invoice online, invoice template, billing software, freelance invoice, invoice maker"
        schema={webAppSchema}
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
                Create professional invoices in minutes. Add your business and customer details, list your products or services, apply taxes or discounts, and generate a clear invoice ready to share with your customer.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={scrollToGenerator}
                  className="fw-semibold px-4 py-2 shadow-sm d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <BiFile size={20} />
                  <span>Create an Invoice</span>
                </Button>
                <Link
                  to="/templates"
                  className="btn btn-outline-secondary btn-lg fw-semibold px-4 py-2 d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <span>Explore Invoice Templates</span>
                  <BiRightArrowAlt size={20} />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Invoice Generator Section */}
      <section id="invoice-generator-section" className="py-5">
        <Container>
          <div className="mb-4 text-center text-md-start">
            <h2 className="h4 fw-bold text-dark m-0">Live Invoice Builder</h2>
            <p className="text-muted small m-0">
              Customize your fields below. Once ready, click "Review Invoice" to preview, download PDF, or print.
            </p>
          </div>
          <InvoiceForm />
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-5 bg-white border-top border-bottom">
        <Container>
          <div className="text-center max-w-700 mx-auto mb-5">
            <h2 className="h2 fw-bold text-dark mb-2">How to Create an Invoice</h2>
            <p className="text-muted fs-6">
              Generate a client-ready invoice in four simple, guided steps.
            </p>
          </div>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 p-4 border rounded-3 bg-light-subtle card-hover">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-3 p-3 mb-3" style={{ width: "48px", height: "48px" }}>
                  <BiFile size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">1. Enter Your Business Details</h3>
                <p className="text-muted small m-0">
                  Input your trading or business name, billing address, and contact email so the client knows exactly who is billing them.
                </p>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 p-4 border rounded-3 bg-light-subtle card-hover">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-3 p-3 mb-3" style={{ width: "48px", height: "48px" }}>
                  <BiUserCheck size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">2. Add Customer Information</h3>
                <p className="text-muted small m-0">
                  Enter your client’s organization or individual contact details, mailing address, and the target payment due date.
                </p>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 p-4 border rounded-3 bg-light-subtle card-hover">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-3 p-3 mb-3" style={{ width: "48px", height: "48px" }}>
                  <BiListPlus size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">3. Add Products or Services</h3>
                <p className="text-muted small m-0">
                  Itemize deliverables with item titles, descriptions, quantities, and rates. Configure sales tax or discount percentages as needed.
                </p>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 p-4 border rounded-3 bg-light-subtle card-hover">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-3 p-3 mb-3" style={{ width: "48px", height: "48px" }}>
                  <BiCloudDownload size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2">4. Review & Generate Invoice</h3>
                <p className="text-muted small m-0">
                  Review the formatted invoice in the high-definition preview modal, then download your PDF copy or print directly.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Educational Section: What is an Invoice? */}
      <section className="py-5">
        <Container>
          <Row className="gy-4 align-items-center">
            <Col lg={6}>
              <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-1 mb-2">
                Invoicing Fundamentals
              </span>
              <h2 className="h2 fw-bold text-dark mb-3">What is an Invoice and Why is it Necessary?</h2>
              <p className="text-secondary lh-base mb-3">
                An invoice is an itemized commercial document that records a transaction between a buyer and seller. When products or services are rendered with agreed payment terms, the invoice establishes a legal obligation for the purchaser to pay the specified amount by a specified deadline.
              </p>
              <p className="text-secondary lh-base mb-3">
                Beyond being a payment request, invoices are critical accounting records. They form the foundation of Accounts Receivable (A/R) for sellers and Accounts Payable (A/P) for buyers, providing the verifiable audit trail required for business expense deductions and corporate tax compliance.
              </p>
              <div className="p-3 bg-white border rounded-3">
                <h3 className="h6 fw-bold text-dark mb-1">Invoice vs. Receipt: A Quick Distinction</h3>
                <p className="text-muted small m-0">
                  An <strong>invoice</strong> requests payment before funds are received. A <strong>receipt</strong> acknowledges that payment has been completed. Both are vital, but they serve opposite stages of the billing lifecycle.
                </p>
                <div className="mt-2">
                  <Link to="/guides/invoice-vs-receipt" className="small fw-semibold text-primary">
                    Read the full Invoice vs. Receipt guide &rarr;
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Card className="p-4 border rounded-3 bg-white shadow-sm">
                <h3 className="h5 fw-bold text-dark mb-3">When Should an Invoice Be Issued?</h3>
                <ul className="list-unstyled d-flex flex-column gap-3 m-0 small text-secondary">
                  <li className="d-flex align-items-start gap-2">
                    <BiCheckCircle className="text-success mt-1 flex-shrink-0" size={18} />
                    <span><strong>Upon Service Completion:</strong> Send the invoice within 24 to 48 hours of delivering work to maximize faster payment turnaround.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <BiCheckCircle className="text-success mt-1 flex-shrink-0" size={18} />
                    <span><strong>Project Milestones:</strong> For long-term projects, issue invoices when agreed development or design milestones are signed off.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <BiCheckCircle className="text-success mt-1 flex-shrink-0" size={18} />
                    <span><strong>Recurring Cycles:</strong> For monthly retainers or ongoing maintenance, dispatch invoices on a consistent day (e.g. 1st of each month).</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <BiCheckCircle className="text-success mt-1 flex-shrink-0" size={18} />
                    <span><strong>Upfront Deposits:</strong> For custom commissions or large contracts, issue an invoice for an initial deposit before commencing work.</span>
                  </li>
                </ul>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Educational Section: What Should an Invoice Include? */}
      <section className="py-5 bg-white border-top border-bottom">
        <Container>
          <div className="text-center max-w-700 mx-auto mb-5">
            <h2 className="h2 fw-bold text-dark mb-2">What Should Every Invoice Include?</h2>
            <p className="text-muted fs-6">
              To prevent payment delays and accounts payable rejections, ensure your invoices include these key components:
            </p>
          </div>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <div className="p-3 border rounded-3 h-100 bg-light-subtle">
                <h3 className="h6 fw-bold text-dark mb-2">1. Header & Numbering</h3>
                <p className="text-muted small m-0">
                  Display the word "Invoice" prominently with a unique, non-repeating invoice number (e.g., INV-1001) for audit and tracking purposes.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="p-3 border rounded-3 h-100 bg-light-subtle">
                <h3 className="h6 fw-bold text-dark mb-2">2. Issuer & Client Details</h3>
                <p className="text-muted small m-0">
                  Full legal names, physical business addresses, billing emails, and contact phone numbers for both your business and the client.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="p-3 border rounded-3 h-100 bg-light-subtle">
                <h3 className="h6 fw-bold text-dark mb-2">3. Issue Date & Due Date</h3>
                <p className="text-muted small m-0">
                  State the date the invoice is dispatched and the exact date by which payment is expected (e.g., Net 14 or Net 30).
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="p-3 border rounded-3 h-100 bg-light-subtle">
                <h3 className="h6 fw-bold text-dark mb-2">4. Itemized Deliverables</h3>
                <p className="text-muted small m-0">
                  Clear row-by-row descriptions of each product or service delivered, including quantities, unit prices, and line subtotals.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="p-3 border rounded-3 h-100 bg-light-subtle">
                <h3 className="h6 fw-bold text-dark mb-2">5. Subtotals, Taxes & Discounts</h3>
                <p className="text-muted small m-0">
                  A transparent financial summary detailing gross subtotal, applied promotional discounts, statutory sales tax or VAT, and net amount due.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="p-3 border rounded-3 h-100 bg-light-subtle">
                <h3 className="h6 fw-bold text-dark mb-2">6. Payment Coordinates</h3>
                <p className="text-muted small m-0">
                  Bank transfer details (ACH, IBAN, routing numbers), online payment URLs, or remittance instructions so clients know how to pay.
                </p>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Link to="/guides/what-should-an-invoice-include" className="fw-semibold text-primary small">
              Read the complete 10-element invoice checklist guide &rarr;
            </Link>
          </div>
        </Container>
      </section>

      {/* Who Can Use QuickBills? */}
      <section className="py-5">
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
              <Card className="p-4 border rounded-3 h-100 bg-white shadow-sm">
                <h3 className="h5 fw-bold text-dark mb-2">Freelancers</h3>
                <p className="text-muted small mb-3">
                  Writers, developers, photographers, and graphic artists who need to bill clients by the hour or by deliverable without paying monthly subscription fees.
                </p>
                <Link to="/templates/freelance-invoice" className="small fw-semibold text-primary mt-auto">
                  View Freelance Template &rarr;
                </Link>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="p-4 border rounded-3 h-100 bg-white shadow-sm">
                <h3 className="h5 fw-bold text-dark mb-2">Small Businesses</h3>
                <p className="text-muted small mb-3">
                  B2B wholesalers, local shops, and e-commerce merchants requiring formal billing documents with tax calculations and customer PO references.
                </p>
                <Link to="/templates/small-business-invoice" className="small fw-semibold text-primary mt-auto">
                  View Small Business Template &rarr;
                </Link>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="p-4 border rounded-3 h-100 bg-white shadow-sm">
                <h3 className="h5 fw-bold text-dark mb-2">Consultants</h3>
                <p className="text-muted small mb-3">
                  Management advisors, legal consultants, and marketing strategists billing corporate clients under structured Net 15 or Net 30 payment terms.
                </p>
                <Link to="/templates/service-invoice" className="small fw-semibold text-primary mt-auto">
                  View Service Template &rarr;
                </Link>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="p-4 border rounded-3 h-100 bg-white shadow-sm">
                <h3 className="h5 fw-bold text-dark mb-2">Trade Contractors</h3>
                <p className="text-muted small mb-3">
                  Electricians, plumbers, landscapers, and carpenters who need to produce clean, itemized labor and material bills on-site for immediate approval.
                </p>
                <Link to="/templates/simple-invoice" className="small fw-semibold text-primary mt-auto">
                  View Simple Template &rarr;
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Practical Invoice Tips */}
      <section className="py-5 bg-white border-top border-bottom">
        <Container>
          <div className="max-w-800 mx-auto">
            <div className="text-center mb-5">
              <h2 className="h2 fw-bold text-dark mb-2">7 Practical Tips to Get Invoices Paid Faster</h2>
              <p className="text-muted fs-6">
                Simple habits that prevent payment delays and strengthen client relationships.
              </p>
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="p-3 bg-light border rounded-3 d-flex align-items-start gap-3">
                <div className="badge bg-primary rounded-circle p-2 text-white mt-1">1</div>
                <div>
                  <h3 className="h6 fw-bold text-dark m-0">Use Sequential & Non-Repeating Numbers</h3>
                  <p className="text-muted small m-0">
                    Never reuse an invoice number. Standardize on formats like INV-1001 or INV-2026-001 so both you and your client can track payments easily.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-light border rounded-3 d-flex align-items-start gap-3">
                <div className="badge bg-primary rounded-circle p-2 text-white mt-1">2</div>
                <div>
                  <h3 className="h6 fw-bold text-dark m-0">Specify Clear, Calendar Due Dates</h3>
                  <p className="text-muted small m-0">
                    Replace "Due Upon Receipt" with a concrete calendar date (e.g., October 15, 2026) to help client finance teams fit your invoice into their payment cycle.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-light border rounded-3 d-flex align-items-start gap-3">
                <div className="badge bg-primary rounded-circle p-2 text-white mt-1">3</div>
                <div>
                  <h3 className="h6 fw-bold text-dark m-0">Break Down Deliverables into Specific Milestones</h3>
                  <p className="text-muted small m-0">
                    Avoid vague labels like "Design Work". Detail the scope (e.g., "Homepage UI Redesign & Mobile Responsive Optimization - 12 hrs @ $85/hr").
                  </p>
                </div>
              </div>
              <div className="p-3 bg-light border rounded-3 d-flex align-items-start gap-3">
                <div className="badge bg-primary rounded-circle p-2 text-white mt-1">4</div>
                <div>
                  <h3 className="h6 fw-bold text-dark m-0">Double-Check Tax & Discount Computations</h3>
                  <p className="text-muted small m-0">
                    Inaccurate math is the #1 reason corporate accounts payable departments reject invoices. QuickBills handles calculations automatically to avoid errors.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-light border rounded-3 d-flex align-items-start gap-3">
                <div className="badge bg-primary rounded-circle p-2 text-white mt-1">5</div>
                <div>
                  <h3 className="h6 fw-bold text-dark m-0">Include Bank Transfer Coordinates Explicitly</h3>
                  <p className="text-muted small m-0">
                    Provide complete ACH, routing, IBAN, or SWIFT details in the notes section so accounts payable has everything required to initiate payment.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-light border rounded-3 d-flex align-items-start gap-3">
                <div className="badge bg-primary rounded-circle p-2 text-white mt-1">6</div>
                <div>
                  <h3 className="h6 fw-bold text-dark m-0">Archive Downloaded PDF Copies for Tax Filing</h3>
                  <p className="text-muted small m-0">
                    Keep a dedicated folder on your computer or cloud storage organized by year and client name for seamless year-end tax preparation.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-light border rounded-3 d-flex align-items-start gap-3">
                <div className="badge bg-primary rounded-circle p-2 text-white mt-1">7</div>
                <div>
                  <h3 className="h6 fw-bold text-dark m-0">Follow Up Politely Before Due Dates</h3>
                  <p className="text-muted small m-0">
                    A friendly reminder 3 business days before the due date ensures your invoice hasn't been overlooked in the client's inbox.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <Container>
          <div className="text-center max-w-700 mx-auto mb-5">
            <h2 className="h2 fw-bold text-dark mb-2">Frequently Asked Questions</h2>
            <p className="text-muted fs-6">
              Have questions about creating invoices or using QuickBills? Here are answers to common questions.
            </p>
          </div>
          <div className="max-w-800 mx-auto">
            <FaqAccordion items={homepageFaqs} defaultOpenIndex={0} />
            <div className="text-center mt-4">
              <Link to="/faq" className="btn btn-outline-primary fw-semibold px-4 py-2">
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
              <Button
                variant="light"
                size="lg"
                onClick={scrollToGenerator}
                className="fw-bold px-4 py-2 text-primary shadow-sm"
              >
                Create an Invoice
              </Button>
              <Link
                to="/guides/how-to-create-an-invoice"
                className="btn btn-outline-light btn-lg fw-semibold px-4 py-2"
              >
                Read Invoicing Guide
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
