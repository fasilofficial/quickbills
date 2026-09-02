import React from "react";
import { Link } from "react-router-dom";
import { BiChevronRight, BiHomeAlt } from "react-icons/bi";

const Breadcrumbs = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className="qb-breadcrumbs my-3">
      <ol
        className="breadcrumb m-0 d-flex align-items-center flex-wrap list-unstyled"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          className="breadcrumb-item d-flex align-items-center"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            to="/"
            className="text-decoration-none text-muted d-flex align-items-center"
            itemProp="item"
          >
            <BiHomeAlt className="me-1" />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const position = index + 2;
          return (
            <li
              key={index}
              className={`breadcrumb-item d-flex align-items-center ${
                isLast ? "active text-dark fw-medium" : ""
              }`}
              aria-current={isLast ? "page" : undefined}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <BiChevronRight className="mx-1 text-muted" size={14} />
              {isLast || !item.path ? (
                <span
                  className="text-truncate"
                  style={{ maxWidth: "300px" }}
                  itemProp="name"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-decoration-none text-muted"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(position)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
