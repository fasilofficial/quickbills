import React from "react";
import Container from "react-bootstrap/Container";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import SeoMeta from "../components/common/SeoMeta";

const TermsPage = () => {
  const breadcrumbs = [{ label: "Terms of Use", path: "/terms" }];

  return (
    <div className="qb-terms-page py-4">
      <SeoMeta
        title="Terms of Use - QuickBills"
        description="Review the QuickBills Terms of Use. Understand user responsibilities regarding invoice accuracy, tax compliance, and terms governing service availability."
        canonicalPath="/terms"
        keywords="quickbills terms of use, terms of service, invoice disclaimer"
      />

      <Container>
        <Breadcrumbs items={breadcrumbs} />

        <div className="max-w-800 mx-auto bg-white border rounded-3 p-4 p-md-5 my-4 shadow-sm">
          <header className="mb-4 pb-3 border-bottom">
            <h1 className="h2 fw-bold text-dark mb-2">Terms of Use</h1>
            <p className="text-muted small m-0">Last Updated: September 2026</p>
          </header>

          <section className="mb-4">
            <h2 className="h5 fw-bold text-dark mb-2">1. Acceptance of Terms</h2>
            <p className="text-secondary small lh-base">
              By accessing and using QuickBills (https://quickbills.vercel.app/), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you should refrain from using the service.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-bold text-dark mb-2">2. Permitted Use of the Service</h2>
            <p className="text-secondary small lh-base">
              QuickBills grants you a non-exclusive, revocable, worldwide license to use the invoice generator, educational guides, and templates for personal and lawful commercial business purposes. You may create, download, print, and distribute generated invoices to your clients without restriction.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-bold text-dark mb-2">3. User Responsibility & Information Accuracy</h2>
            <p className="text-secondary small lh-base">
              You are solely responsible for all information entered into the invoice generator, including the truthfulness of party names, billing descriptions, pricing rates, currency selections, and tax calculations. QuickBills does not verify the identity of parties or validate the legitimacy of commercial claims made in your generated documents.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-bold text-dark mb-2">4. Tax and Legal Disclaimer</h2>
            <p className="text-secondary small lh-base">
              QuickBills is a software utility and publisher of educational articles. We do not provide licensed legal, certified accounting, or professional tax advisory services. Tax regulations (including sales tax, VAT, and GST) vary widely by geographic jurisdiction, business entity structure, and product category. You remain responsible for consulting a qualified accountant or tax professional to ensure your invoices meet local statutory compliance requirements.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-bold text-dark mb-2">5. Data Retention & Backups</h2>
            <p className="text-secondary small lh-base">
              Because QuickBills functions client-side in your browser, we do not maintain a permanent database of your generated invoices. You are solely responsible for downloading and archiving copies of your generated PDFs for your personal records, bookkeeping archives, and tax audit compliance.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-bold text-dark mb-2">6. Service Availability & Modifications</h2>
            <p className="text-secondary small lh-base">
              We strive to keep QuickBills accessible and reliable 24/7. However, the service is provided on an "as is" and "as available" basis without warranties of any kind. We reserve the right to update, modify, or temporarily suspend features or content at any time without prior notice.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-bold text-dark mb-2">7. Limitation of Liability</h2>
            <p className="text-secondary small lh-base">
              To the fullest extent permitted by applicable law, QuickBills and its operators shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use or inability to use the service, including but not limited to business disruption, delayed client payments, or calculation disputes.
            </p>
          </section>

          <section className="mb-0">
            <h2 className="h5 fw-bold text-dark mb-2">8. Questions & Contact</h2>
            <p className="text-secondary small lh-base m-0">
              For questions regarding these Terms of Use, please reach out through our <a href="/contact">Contact Page</a>.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default TermsPage;
