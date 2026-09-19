import React, { useState } from "react";
import { cardStockOptions } from "../../data/cardstock";
import { Layers, ArrowRight, X, Shield } from "lucide-react";
import "./CardStockVariation.css";

export default function CardStockVariation() {
  const [activeStock, setActiveStock] = useState(null);

  // Duplicate items for seamless continuous infinite CSS scrolling loop
  const marqueeItems = [...cardStockOptions, ...cardStockOptions];

  return (
    <section className="cardstock-variation-section" id="cardstock" aria-label="Card Stock Variations">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Layers size={14} />
            <span>MATERIAL RIGIDITY & TEXTURES</span>
          </div>
          <h2 className="section-title">Card Stock Variation</h2>
          <p className="section-subtitle">
            With a wide selection of cardstock choices available for your packaging. Available in multiple thicknesses, textures and colors, this product creates beautiful patterns which not only beautify your designs but also enhance protection. Our durable cardstock options include:
          </p>
        </div>
      </div>

      {/* Horizontal Auto-Scrolling Marquee Track */}
      <div className="cardstock-marquee-container" aria-hidden="false">
        <div className="cardstock-marquee-track">
          {marqueeItems.map((stock, index) => (
            <div
              key={`${stock.id}-${index}`}
              className="stock-card"
              onClick={() => setActiveStock(stock)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActiveStock(stock)}
              aria-label={`View details for ${stock.name}`}
            >
              <div className="stock-image-box">
                <img
                  src={stock.image}
                  alt={stock.name}
                  className="stock-card-img"
                  loading="lazy"
                />
                <span className="stock-thickness-badge">{stock.thickness}</span>
              </div>
              <div className="stock-card-body">
                <h3 className="stock-card-name">{stock.name}</h3>
                <p className="stock-card-desc">{stock.description}</p>
                <span className="stock-explore-link">
                  <span>View Material Specs</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Preview for Selected Stock */}
      {activeStock && (
        <div className="stock-modal-backdrop" onClick={() => setActiveStock(null)} role="dialog" aria-modal="true">
          <div className="stock-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="stock-modal-header">
              <div className="stock-modal-title-group">
                <Shield size={20} className="stock-modal-icon" />
                <h3>{activeStock.name}</h3>
              </div>
              <button
                type="button"
                className="stock-modal-close"
                onClick={() => setActiveStock(null)}
                aria-label="Close cardstock modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="stock-modal-body">
              <div className="stock-modal-image-holder">
                <img src={activeStock.image} alt={activeStock.name} />
              </div>
              <div className="stock-modal-info">
                <span className="modal-stock-thickness">{activeStock.thickness}</span>
                <p className="modal-stock-desc">{activeStock.description}</p>
                <div className="modal-ideal-uses">
                  <h4>Recommended For:</h4>
                  <p>Retail folding cartons, corrugated subscription boxes, luxury rigid gifts, and cosmetic packaging.</p>
                </div>
                <a href="#quote-section" onClick={() => setActiveStock(null)} className="btn btn-primary modal-quote-btn">
                  <span>Get Quote With This Stock</span>
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

