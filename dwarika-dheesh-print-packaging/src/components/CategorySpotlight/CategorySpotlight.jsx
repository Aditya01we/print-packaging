import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import "./CategorySpotlight.css";

const spotlightItems = [
  {
    id: "candle-boxes",
    preTitle: "Get your",
    title: "CANDLE",
    highlightText: "BOXES",
    description: "Heavy-duty custom printed candle boxes designed to insulate glass tumblers and showcase boutique scents.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    theme: "candle-theme",
    link: "/products/candle-boxes"
  },
  {
    id: "cosmetic-boxes",
    preTitle: "Get your",
    title: "COSMETIC",
    highlightText: "BOXES",
    description: "Prestige skincare, perfume, and beauty cartons engineered with soft-touch velvet laminations and gold foil stamping.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    theme: "cosmetic-theme",
    link: "/products/cosmetic-boxes"
  },
  {
    id: "soap-boxes",
    preTitle: "Get your",
    title: "SOAP",
    highlightText: "BOXES",
    description: "Custom printed cutout window soap boxes and slide sleeves that let customers smell organic aromas before buying.",
    image: "https://images.unsplash.com/photo-1607006314639-6536098020d2?auto=format&fit=crop&w=800&q=80",
    theme: "soap-theme",
    link: "/products/soap-boxes"
  }
];

export default function CategorySpotlight() {
  return (
    <section className="category-spotlight-section" aria-label="Featured Custom Box Categories">
      <div className="container">
        <div className="spotlight-grid">
          {spotlightItems.map((item) => (
            <div key={item.id} className={`spotlight-card ${item.theme}`}>
              <div className="spotlight-header">
                <span className="spotlight-pre">{item.preTitle}</span>
                <h3 className="spotlight-title">
                  <span className="spotlight-badge-title">{item.title}</span>
                  <span className="spotlight-boxes-word">{item.highlightText}</span>
                </h3>
              </div>

              <div className="spotlight-image-holder">
                <img
                  src={item.image}
                  alt={`${item.title} ${item.highlightText}`}
                  className="spotlight-img"
                  loading="lazy"
                />
              </div>

              <div className="spotlight-footer">
                <p className="spotlight-desc">{item.description}</p>
                <Link to={item.link} className="btn spotlight-btn">
                  <span>Customize Now</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

