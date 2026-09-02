import React from "react";
import { Link } from "react-router-dom";
import { BiChevronRight, BiHomeAlt } from "react-icons/bi";

const Breadcrumbs = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className="qb-breadcrumbs my-3">
      <ol className="breadcrumb m-0 d-flex align-items-center flex-wrap list-unstyled">
        <li className="breadcrumb-item d-flex align-items-center">
          <Link to="/" className="text-decoration-none text-muted d-flex align-items-center">
            <BiHomeAlt className="me-1" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={index}
              className={`breadcrumb-item d-flex align-items-center ${isLast ? "active text-dark fw-medium" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              <BiChevronRight className="mx-1 text-muted" size={14} />
              {isLast || !item.path ? (
                <span className="text-truncate" style={{ maxWidth: "300px" }}>{item.label}</span>
              ) : (
                <Link to={item.path} className="text-decoration-none text-muted">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
