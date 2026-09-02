import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { BiFile, BiMenu, BiX } from "react-icons/bi";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  const isCurrent = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="qb-header sticky-top bg-white border-bottom shadow-sm">
      <Container>
        <div className="d-flex align-items-center justify-content-between py-3">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-decoration-none d-flex align-items-center gap-2 text-dark"
          >
            <div className="qb-logo-icon d-flex align-items-center justify-content-center bg-primary text-white rounded-3 p-2">
              <BiFile size={22} />
            </div>
            <div className="d-flex flex-column">
              <span className="fw-bold fs-5 lh-1 text-dark tracking-tight">
                QuickBills
              </span>
              <span className="text-muted small" style={{ fontSize: "0.72rem" }}>
                Invoice Generator
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="d-none d-md-flex align-items-center gap-4">
            <NavLink
              to="/invoice"
              className={({ isActive }) =>
                `text-decoration-none fw-medium transition-colors ${
                  isActive ? "text-primary fw-semibold" : "text-secondary hover-primary"
                }`
              }
            >
              Invoice Generator
            </NavLink>
            <NavLink
              to="/templates"
              className={({ isActive }) =>
                `text-decoration-none fw-medium transition-colors ${
                  isActive ? "text-primary fw-semibold" : "text-secondary hover-primary"
                }`
              }
            >
              Templates
            </NavLink>
            <NavLink
              to="/guides"
              className={({ isActive }) =>
                `text-decoration-none fw-medium transition-colors ${
                  isActive ? "text-primary fw-semibold" : "text-secondary hover-primary"
                }`
              }
            >
              Guides
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `text-decoration-none fw-medium transition-colors ${
                  isActive ? "text-primary fw-semibold" : "text-secondary hover-primary"
                }`
              }
            >
              FAQ
            </NavLink>
          </nav>

          {/* Right CTA */}
          <div className="d-none d-md-flex align-items-center gap-3">
            <Link
              to="/invoice"
              className="btn btn-primary fw-semibold px-4 py-2 rounded-3 text-white text-decoration-none shadow-sm"
            >
              Create Invoice
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="d-md-none">
            <button
              type="button"
              className="btn btn-light p-2 border-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <BiX size={26} /> : <BiMenu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="d-md-none border-top py-3 animate-fade-in">
            <nav className="d-flex flex-column gap-2 mb-3">
              <Link
                to="/invoice"
                onClick={closeMenu}
                className={`px-3 py-2 rounded-2 text-decoration-none fw-medium ${
                  isCurrent("/invoice") ? "bg-light text-primary fw-semibold" : "text-dark"
                }`}
              >
                Invoice Generator
              </Link>
              <Link
                to="/templates"
                onClick={closeMenu}
                className={`px-3 py-2 rounded-2 text-decoration-none fw-medium ${
                  isCurrent("/templates") ? "bg-light text-primary fw-semibold" : "text-dark"
                }`}
              >
                Templates
              </Link>
              <Link
                to="/guides"
                onClick={closeMenu}
                className={`px-3 py-2 rounded-2 text-decoration-none fw-medium ${
                  isCurrent("/guides") ? "bg-light text-primary fw-semibold" : "text-dark"
                }`}
              >
                Guides
              </Link>
              <Link
                to="/faq"
                onClick={closeMenu}
                className={`px-3 py-2 rounded-2 text-decoration-none fw-medium ${
                  isCurrent("/faq") ? "bg-light text-primary fw-semibold" : "text-dark"
                }`}
              >
                FAQ
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className={`px-3 py-2 rounded-2 text-decoration-none fw-medium ${
                  isCurrent("/about") ? "bg-light text-primary fw-semibold" : "text-dark"
                }`}
              >
                About QuickBills
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className={`px-3 py-2 rounded-2 text-decoration-none fw-medium ${
                  isCurrent("/contact") ? "bg-light text-primary fw-semibold" : "text-dark"
                }`}
              >
                Contact & Support
              </Link>
            </nav>
            <div className="pt-2 px-1">
              <Link
                to="/invoice"
                onClick={closeMenu}
                className="btn btn-primary w-100 fw-semibold py-2 rounded-3 text-white text-decoration-none text-center shadow-sm d-block"
              >
                Create Invoice
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
