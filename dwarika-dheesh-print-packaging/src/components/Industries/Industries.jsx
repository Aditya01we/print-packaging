import React from "react";
import { Link } from "react-router-dom";
import { 
  Utensils, 
  Pill, 
  ShoppingBag, 
  Sparkles, 
  FlaskConical, 
  Wheat, 
  Milk, 
  Flame, 
  Cookie,
  ArrowUpRight
} from "lucide-react";
import { industries } from "../../data/industries";
import "./Industries.css";

const iconMap = {
  Utensils,
  Pill,
  ShoppingBag,
  Sparkles,
  FlaskConical,
  Wheat,
  Milk,
  Flame,
  Cookie
};

export default function Industries() {
  return (
    <section className="industries-section" id="industries" aria-label="Industries Served">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">INDUSTRIES WE SERVE</div>
          <h2 className="section-title">Tailored Custom Packaging For Diverse Product Categories</h2>
          <p className="section-subtitle">
            From food-safe bakery cartons and child-resistant CBD pouches to luxury cosmetics and e-commerce mailers, our packaging solutions meet the highest standards of protection, aesthetics, and domestic delivery speed.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((item) => {
            const IconComponent = iconMap[item.iconName] || ShoppingBag;
            return (
              <div key={item.id} className="industry-card">
                <div className="industry-card-header">
                  <div className="industry-icon-wrapper">
                    <IconComponent size={24} className="industry-icon" />
                  </div>
                  <Link 
                    to={`/products`} 
                    className="industry-card-action"
                    aria-label={`View machines for ${item.name}`}
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>

                <h3 className="industry-card-title">{item.name}</h3>
                <p className="industry-card-desc">{item.description}</p>

                <div className="industry-card-meta">
                  <span className="industry-meta-label">Key Standard:</span>
                  <span className="industry-meta-value">{item.keyDemands}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="industries-cta-bar">
          <div className="cta-bar-text">
            <h4>Have a unique custom product or special packaging requirement?</h4>
            <p>Our packaging structural designers create custom dielines, foam inserts, and bespoke box formats engineered specifically for your product dimensions.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            <span>Consult Our Packaging Specialists</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
