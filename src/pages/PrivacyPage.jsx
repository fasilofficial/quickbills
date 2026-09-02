import React from "react";
import Container from "react-bootstrap/Container";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import SeoMeta from "../components/common/SeoMeta";

const PrivacyPage = () => {
  const breadcrumbs = [{ label: "Privacy Policy", path: "/privacy" }];

  return (
    <div className="qb-privacy-page py-4">
      <SeoMeta
        title="Privacy Policy - QuickBills"
        description="Read the QuickBills Privacy Policy. Understand how client-side invoice processing works, and our transparent disclosures regarding Google Analytics and Google AdSense."
        canonicalPath="/privacy"
        keywords="quickbills privacy policy, invoice data privacy, adsense cookie policy"
      />

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
              When you enter business names, client contact details, billing addresses, line item prices, tax rates, or confidential project notes into QuickBills, all data is held in your browser's temporary memory. Your invoices are converted to PDF format locally on your device via client-side JavaScript. If you refresh or close your browser tab, that temporary data is cleared.
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
              • Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites on the internet.
            </p>
            <p className="text-secondary small lh-base">
              • Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to QuickBills and/or other sites on the Internet.
            </p>
            <p className="text-secondary small lh-base">
              • Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> or by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">aboutads.info</a>.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-bold text-dark mb-2">5. Log Files & Technical Hosting</h2>
            <p className="text-secondary small lh-base">
              Like virtually all web applications hosted on modern cloud infrastructure (Vercel), our hosting provider may collect standard technical access logs containing your IP address, browser user-agent, date/time stamps, and requested page paths. These logs are maintained strictly for network security, DDoS defense, and infrastructure reliability.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-bold text-dark mb-2">6. Children's Information</h2>
            <p className="text-secondary small lh-base">
              QuickBills does not knowingly collect any personal identifiable information from children under the age of 13. If you believe your child has provided personal information on our website, please contact us and we will promptly take appropriate action.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="h5 fw-bold text-dark mb-2">7. Changes to this Privacy Policy</h2>
            <p className="text-secondary small lh-base">
              We may update this Privacy Policy from time to time to reflect modifications in our application features, legal requirements, or advertising practices. Any updates will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-0">
            <h2 className="h5 fw-bold text-dark mb-2">8. Contact Us</h2>
            <p className="text-secondary small lh-base m-0">
              If you have questions or suggestions regarding our Privacy Policy, please reach out through our <a href="/contact">Contact Page</a>.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPage;
