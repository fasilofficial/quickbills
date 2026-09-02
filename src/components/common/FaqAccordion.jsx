import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const FaqAccordion = ({ items = [], defaultOpenIndex = 0 }) => {
  const [openIndices, setOpenIndices] = useState(
    defaultOpenIndex !== null ? [defaultOpenIndex] : []
  );

  const toggle = (idx) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <div className="qb-accordion d-flex flex-column gap-3">
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className={`qb-accordion-item border rounded-3 transition-all ${
              isOpen ? "bg-white shadow-sm border-primary-subtle" : "bg-white"
            }`}
          >
            <button
              type="button"
              className="w-100 text-start d-flex justify-content-between align-items-center p-3 p-md-4 border-0 bg-transparent fw-semibold text-dark fs-6"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
            >
              <span className="pe-3">{item.q}</span>
              <BiChevronDown
                size={22}
                className={`text-muted transition-transform flex-shrink-0 ${
                  isOpen ? "rotate-180 text-primary" : ""
                }`}
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease"
                }}
              />
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                className="px-3 px-md-4 pb-3 pb-md-4 text-muted lh-base pt-0"
              >
                <div className="border-top pt-3 text-secondary">{item.a}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
