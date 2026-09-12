import React from "react";
import Container from "react-bootstrap/Container";
import Breadcrumbs from "../../components/layout/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy - QuickBills",
  description:
    "Read the QuickBills Privacy Policy. Understand how client-side invoice processing works, and our transparent disclosures regarding Google Analytics and Google AdSense.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  const breadcrumbs = [{ label: "Privacy Policy", path: "/privacy" }];

  return (
    <div className="qb-privacy-page py-4">
      <Container>
        <Breadcrumbs items={breadcrumbs} />

        <div className="max-w-800 mx-auto bg-white border rounded-3 p-4 p-md-5 my-4 shadow-sm">
          <header className="mb-4 pb-3 border-bottom">
            <h1 className="h2 fw-bold text-dark mb-2">Privacy Policy</h1>
            <p className="text-muted small m-0">Last Updated: September 2026</p>
          </header>

          <section className="mb-4">
            <h2 className="h5 fw-bold text-dark mb-2">1. Overview and Core Privacy Commitment</h2>
            <p className="text-secondary small lh-base">
              At QuickBills (accessible from https://quickbills.vercel.app/), we respect your privacy. Our invoice generator was deliberately engineered as a client-side web application. This means the core functionality of creating, calculating, previewing, downloading, and printing invoices operates directly inside your web browser.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-bold text-dark mb-2">2. Invoice and Financial Data</h2>
            <p className="text-secondary small lh-base">
              <strong>We do not collect, transmit, or store your invoice information on our servers.</strong>
            </p>
            <p className="text-secondary small lh-base">
              When you enter business names, client contact details, billing addresses, line item prices, tax rates, or confidential project notes into QuickBills, all data is held in your browser&apos;s temporary memory. Your invoices are converted to PDF format locally on your device via client-side JavaScript. If you refresh or close your browser tab, that temporary data is cleared.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-bold text-dark mb-2">3. Third-Party Analytics (Google Analytics)</h2>
            <p className="text-secondary small lh-base">
              QuickBills uses Google Analytics (gtag.js) to monitor aggregate website traffic, understand which guides and templates are visited, and improve user navigation. Google Analytics gathers standard internet log information and visitor behavior details in an anonymous format (such as browser type, device category, referring URL, and approximate geographic region).
            </p>
            <p className="text-secondary small lh-base">
              Google Analytics does not capture or link your personally identifiable invoice content. You can opt out of Google Analytics tracking by installing the official Google Analytics Opt-out Browser Add-on.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-bold text-dark mb-2">4. Advertising and Cookies (Google AdSense)</h2>
            <p className="text-secondary small lh-base">
              To keep QuickBills completely free for freelancers and small businesses, we display advertisements served by Google AdSense.
            </p>
            <p className="text-secondary small lh-base">
              • Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites on the internet.
            </p>
            <p className="text-secondary small lh-base">
              • Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to QuickBills and/or other sites on the Internet.
            </p>
            <p className="text-secondary small lh-base">
              • Users may opt out of personalized advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>{" "}
              or by visiting{" "}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
                aboutads.info
              </a>.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-bold text-dark mb-2">5. Data Retention and Backups</h2>
            <p className="text-secondary small lh-base">
              Because QuickBills does not store your invoice data on remote databases, you are responsible for archiving generated PDF files and physical prints for your own bookkeeping, tax documentation, and client records.
            </p>
          </section>

          <section className="mb-0">
            <h2 className="h5 fw-bold text-dark mb-2">6. Changes to this Privacy Policy</h2>
            <p className="text-secondary small lh-base m-0">
              We may update our Privacy Policy from time to time to reflect operational or regulatory changes. Any modifications will be posted directly on this page with an updated revision date.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
