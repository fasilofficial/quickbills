"use client";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FaqAccordion from "../common/FaqAccordion";
import { faqData } from "../../data/faqData";

export default function FaqFilterClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...faqData.map((c) => c.category)];

  const displayedQuestions =
    activeCategory === "All"
      ? faqData.flatMap((c) => c.questions)
      : faqData.find((c) => c.category === activeCategory)?.questions || [];

  return (
    <>
      {/* Category Filters */}
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "primary" : "light"}
            size="sm"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-pill px-3 py-1 border ${
              activeCategory === cat ? "text-white shadow-sm" : "text-secondary"
            }`}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Accordion Questions */}
      <div className="max-w-800 mx-auto mb-5">
        <FaqAccordion items={displayedQuestions} defaultOpenIndex={0} />
      </div>
    </>
  );
}
