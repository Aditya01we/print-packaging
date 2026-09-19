import React, { useState } from "react";
import { faqs } from "../../data/faqs";
import { ChevronDown, HelpCircle } from "lucide-react";
import "./FAQ.css";

export default function FAQ({ limit = null }) {
  // Allow multiple or single open; here we support toggling items
  const [openIds, setOpenIds] = useState([1]); // First FAQ open by default

  const toggleFaq = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const displayedFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="faq-component-section" id="faq" aria-label="Frequently Asked Questions">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="section-title">Common Procurement & Technical Inquiries</h2>
          <p className="section-subtitle">
            Find immediate answers regarding our machinery specifications, customization capabilities, warranty terms, and plant trial demonstrations.
          </p>
        </div>

        <div className="faq-accordion-wrapper">
          {displayedFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div 
                key={faq.id} 
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="faq-question-title-group">
                    <HelpCircle size={18} className="faq-q-icon" />
                    <span className="faq-question-text">{faq.question}</span>
                  </div>
                  <div className={`faq-arrow ${isOpen ? "rotate" : ""}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  className="faq-answer-container"
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    opacity: isOpen ? 1 : 0
                  }}
                  role="region"
                >
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
