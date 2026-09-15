import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import "./Footer.css";

const footerCategories = [
  "Pharmaceutical Packaging",
  "Masala & Spice Cartons",
  "Chocolate & Confectionery",
  "Cigarette Hard Boxes",
  "Biscuit Packaging",
  "Foiling & Embossing",
  "Corrugated Shipping Boxes",
];

const capabilities = [
  "High-Precision Offset Printing",
  "UV Curing & Spot Finishing",
  "Thermal Foil Stamping",
  "Custom Die-Cutting & Creasing",
  "Structural Box Engineering",
];

export default function Footer({ onNavigate = () => {} }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root">
      <div className="footer-glow-radial" />
      <div className="footer-grid-overlay" />

      {/* Top Banner / Call to Action Strip */}
      <div className="footer-cta-strip">
        <div className="footer-container cta-flex">
          <div className="cta-copy">
            <span className="cta-eyebrow">READY TO SCALE YOUR PRODUCTION?</span>
            <h3 className="cta-headline">
              Engineered Packaging Built To Make An Impact.
            </h3>
          </div>
          <button
            type="button"
            className="footer-cta-button"
            onClick={() => onNavigate("contact")}
          >
            <Sparkles size={16} />
            <span>Request Custom Quote</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Main Footer Matrix */}
      <div className="footer-container footer-main-grid">
        {/* Column 1: Brand & Abstract Architectural Badge */}
        <div className="footer-col brand-col">
          <div
            className="footer-brand"
            onClick={() => onNavigate("home")}
            role="button"
            tabIndex={0}
          >
            <div className="footer-logo-mark">DD</div>
            <div className="footer-brand-text">
              <span className="footer-brand-title">DWARIKA DHEESH</span>
              <span className="footer-brand-tagline">PRINT PACKAGING</span>
            </div>
          </div>

          <p className="footer-about-text">
            One Destination For All Your Packaging Needs. Combining high-precision
            printing, custom structural fabrication, and luxury metallic finishing
            for commercial and industrial manufacturers.
          </p>

          <div className="footer-cert-badge">
            <ShieldCheck size={16} className="cert-icon" />
            <span>ISO Compliant & Industrial Grade Manufacturing</span>
          </div>
        </div>

        {/* Column 2: Packaging Categories */}
        <div className="footer-col">
          <h4 className="footer-col-title">Packaging Categories</h4>
          <ul className="footer-link-list">
            {footerCategories.map((item, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  className="footer-text-link"
                  onClick={() => onNavigate("categories")}
                >
                  <span className="link-bullet">›</span>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Capabilities & Solutions */}
        <div className="footer-col">
          <h4 className="footer-col-title">Core Capabilities</h4>
          <ul className="footer-link-list">
            {capabilities.map((item, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  className="footer-text-link"
                  onClick={() => onNavigate("solutions")}
                >
                  <span className="link-bullet">›</span>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact & Facility Info */}
        <div className="footer-col">
          <h4 className="footer-col-title">Production Facility</h4>
          <div className="footer-contact-list">
            <div className="contact-item">
              <MapPin size={16} className="contact-icon" />
              <span>Industrial Area Phase II, Production Facility</span>
            </div>
            <div className="contact-item">
              <Mail size={16} className="contact-icon" />
              <span>enquiry@dwarikadheesh.com</span>
            </div>
            <div className="contact-item">
              <Phone size={16} className="contact-icon" />
              <span>+91 (B2B Desk / Manufacturing)</span>
            </div>
          </div>

          {/* Abstract Wireframe Unit (No images) */}
          <div className="footer-spec-box">
            <div className="spec-box-indicator">
              <span className="spec-dot" />
              <span>FACILITY STATUS: OPERATIONAL</span>
            </div>
            <div className="spec-lines">
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Strip */}
      <div className="footer-bottom-bar">
        <div className="footer-container bottom-flex">
          <p className="copyright-text">
            © {currentYear} DWARIKA DHEESH PRINT PACKAGING. All rights reserved.
          </p>
          <div className="bottom-links">
            <span>Precision Manufacturing</span>
            <span className="bottom-separator">•</span>
            <span>Custom Cartons</span>
            <span className="bottom-separator">•</span>
            <span>Offset & Foiling</span>
          </div>
        </div>
      </div>
    </footer>
  );
}