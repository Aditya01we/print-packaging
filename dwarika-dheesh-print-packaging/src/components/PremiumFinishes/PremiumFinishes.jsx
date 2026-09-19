import React, { useState } from "react";
import { premiumFinishes } from "../../data/finishes";
import { Sparkles, ArrowRight, X, Layers } from "lucide-react";
import "./PremiumFinishes.css";

export default function PremiumFinishes() {
  const [activeFinish, setActiveFinish] = useState(null);

  // Duplicate items for continuous infinite CSS loop
  const marqueeItems = [...premiumFinishes, ...premiumFinishes];

  return (
    <section className="premium-finishes-section" id="finishes" aria-label="Premium Packaging Finishes">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>LUXURY EMBELLISHMENTS</span>
          </div>
          <h2 className="section-title">Premium Finishes</h2>
          <p className="section-subtitle">
            At Bison Packaging, we offer a wide variety of luxurious, high-end finishes that will make the beauty of your packaging stand out. Glossy, matte coats to embossing and foil stamping are some finishes that take your professionalism a notch up, and help your products get ceded attention.
          </p>
        </div>
      </div>

      {/* Horizontal Auto-Scrolling Marquee Track */}
      <div className="finishes-marquee-container" aria-hidden="false">
        <div className="finishes-marquee-track">
          {marqueeItems.map((finish, index) => (
            <div
              key={`${finish.id}-${index}`}
              className="finish-card"
              onClick={() => setActiveFinish(finish)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActiveFinish(finish)}
              aria-label={`View details for ${finish.name}`}
            >
              <div className="finish-image-box">
                <img
                  src={finish.image}
                  alt={finish.name}
                  className="finish-card-img"
                  loading="lazy"
                />
                <div className="finish-overlay-glow"></div>
              </div>
              <div className="finish-card-body">
                <span className="finish-tagline">{finish.tagline}</span>
                <h3 className="finish-card-name">{finish.name}</h3>
                <p className="finish-card-desc">{finish.description}</p>
                <span className="finish-explore-link">
                  <span>Explore Finish</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Preview for Selected Finish */}
      {activeFinish && (
        <div className="finish-modal-backdrop" onClick={() => setActiveFinish(null)} role="dialog" aria-modal="true">
          <div className="finish-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="finish-modal-header">
              <div className="finish-modal-title-group">
                <Layers size={20} className="finish-modal-icon" />
                <h3>{activeFinish.name}</h3>
              </div>
              <button
                type="button"
                className="finish-modal-close"
                onClick={() => setActiveFinish(null)}
                aria-label="Close finish modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="finish-modal-body">
              <div className="finish-modal-image-holder">
                <img src={activeFinish.image} alt={activeFinish.name} />
              </div>
              <div className="finish-modal-info">
                <span className="modal-finish-tagline">{activeFinish.tagline}</span>
                <p className="modal-finish-desc">{activeFinish.description}</p>
                <div className="modal-ideal-uses">
                  <h4>Ideal For:</h4>
                  <p>Cosmetic boxes, candle packaging, chocolate rigid boxes, and luxury retail folding cartons.</p>
                </div>
                <a href="#quote-section" onClick={() => setActiveFinish(null)} className="btn btn-primary modal-quote-btn">
                  <span>Request Sample With This Finish</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
