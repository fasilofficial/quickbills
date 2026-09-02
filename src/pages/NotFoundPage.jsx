import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { BiFile, BiHomeAlt } from "react-icons/bi";
import SeoMeta from "../components/common/SeoMeta";

const NotFoundPage = () => {
  return (
    <div className="qb-not-found-page py-5 my-5 text-center">
      <SeoMeta
        title="Page Not Found (404) - QuickBills"
        description="The page you were looking for does not exist on QuickBills. Return to the invoice generator or browse our templates and guides."
        canonicalPath="/404"
      />

      <Container>
        <div className="max-w-600 mx-auto py-5">
          <div className="display-1 fw-bold text-primary mb-3">404</div>
          <h1 className="h3 fw-bold text-dark mb-3">Page Not Found</h1>
          <p className="text-muted mb-4">
            The page you requested could not be found. It may have been moved, renamed, or is temporarily unavailable.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link
              to="/"
              className="btn btn-primary fw-semibold px-4 py-2 d-inline-flex align-items-center gap-2"
            >
              <BiHomeAlt size={18} />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/invoice"
              className="btn btn-outline-secondary fw-semibold px-4 py-2 d-inline-flex align-items-center gap-2"
            >
              <BiFile size={18} />
              <span>Create Invoice</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
