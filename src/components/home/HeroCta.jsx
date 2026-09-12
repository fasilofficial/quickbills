"use client";

import React from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { BiFile, BiRightArrowAlt } from "react-icons/bi";

export default function HeroCta() {
  const scrollToGenerator = () => {
    const el = document.getElementById("invoice-generator-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
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
        href="/templates"
        className="btn btn-outline-secondary btn-lg fw-semibold px-4 py-2 d-inline-flex align-items-center justify-content-center gap-2"
      >
        <span>Explore Invoice Templates</span>
        <BiRightArrowAlt size={20} />
      </Link>
    </div>
  );
}
