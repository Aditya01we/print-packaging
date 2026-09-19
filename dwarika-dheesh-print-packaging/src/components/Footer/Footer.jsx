import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Package, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  Linkedin, 
  Youtube, 
  Twitter, 
  MessageSquare,
  Truck,
  Sparkles,
  X
} from "lucide-react";
import { companyDetails } from "../../data/company";
import "./Footer.css";

export default function Footer() {
  const [modalPolicy, setModalPolicy] = useState(null);

  const currentYear = new Date().getFullYear();

  const openModal = (policyType) => {
    setModalPolicy(policyType);
  };

  const closeModal = () => {
    setModalPolicy(null);
  };

  return (
    <footer className="footer-root" role="contentinfo">
      {/* Top CTA Strip */}
      <div className="footer-cta-strip">
        <div className="container footer-cta-inner">
          <div className="footer-cta-text">
            <span className="footer-cta-eyebrow">READY TO UPGRADE YOUR BRAND PACKAGING?</span>
            <h3>Get A Free 3D Digital Mockup & Custom Quote Within Hours</h3>
          </div>
          <div className="footer-cta-action">
            <Link to="/contact" className="btn btn-primary footer-cta-btn">
              <span>Request Free Packaging Quote</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container footer-main-grid">
        {/* Col 1: Brand & Bio */}
        <div className="footer-col footer-brand-col">
          <Link to="/" className="footer-brand-link">
            <div className="footer-logo-box">
              <Package size={22} className="footer-logo-gear" />
            </div>
            <div className="footer-brand-title">
              <span className="footer-brand-name">BISON PACKAGING</span>
              <span className="footer-brand-sub">CUSTOM PACKAGING & PRINTING</span>
            </div>
          </Link>

          <p className="footer-bio-text">
            Your dedicated custom packaging house specializing in custom printed boxes, high-barrier mylar bags, corrugated mailers, and luxury rigid gift packaging with free design support, zero die fees, and rapid turnaround.
          </p>

          <div className="footer-iso-badge">
            <Truck size={16} className="iso-icon" />
            <span>Free Nationwide Domestic Ground Shipping</span>
          </div>

          <div className="footer-social-links">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn" 
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn" 
              aria-label="YouTube Custom Packaging Showcase"
            >
              <Youtube size={18} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn" 
              aria-label="Twitter / X"
            >
              <Twitter size={18} />
            </a>
            <a 
              href={`https://wa.me/${companyDetails.whatsappPhone}?text=${encodeURIComponent(companyDetails.whatsappDefaultMessage)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn" 
              aria-label="WhatsApp Packaging Specialist"
            >
              <MessageSquare size={18} />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-nav-list">
            <li><Link to="/">Home Overview</Link></li>
            <li><Link to="/about">About Bison Packaging</Link></li>
            <li><Link to="/products">Packaging Catalog</Link></li>
            <li><Link to="/contact">Get Free Custom Quote</Link></li>
            <li><Link to="/about#process">Our 6-Step Process</Link></li>
            <li><Link to="/about#faq">Packaging FAQs</Link></li>
          </ul>
        </div>

        {/* Col 3: Packaging Categories */}
        <div className="footer-col">
          <h4 className="footer-col-title">Box Styles & Bags</h4>
          <ul className="footer-nav-list">
            <li><Link to="/products?category=Corrugated+Boxes">Corrugated Mailers</Link></li>
            <li><Link to="/products?category=Mylar+Bags">Resealable Mylar Bags</Link></li>
            <li><Link to="/products?category=Rigid+Boxes">Luxury Rigid Boxes</Link></li>
            <li><Link to="/products?category=Kraft+Boxes">Eco-Friendly Kraft Cartons</Link></li>
            <li><Link to="/products?category=Cardstock+Boxes">White Cardstock Boxes</Link></li>
            <li><Link to="/products?category=Stickers+%26+Labels">Die-Cut Stickers & Labels</Link></li>
          </ul>
        </div>

        {/* Col 4: Sales Office & Direct Desk */}
        <div className="footer-col footer-contact-col">
          <h4 className="footer-col-title">Packaging Support</h4>
          <div className="footer-contact-items">
            <div className="f-contact-item">
              <MapPin size={18} className="f-contact-icon" />
              <span>
                {companyDetails.address.line1}, {companyDetails.address.line2}, {companyDetails.address.city}, {companyDetails.address.state} - {companyDetails.address.postalCode}
              </span>
            </div>

            <div className="f-contact-item">
              <Phone size={18} className="f-contact-icon" />
              <div>
                <a href={`tel:${companyDetails.phoneRaw}`}>{companyDetails.phone}</a>
                <span className="f-contact-note"> (Direct Sales Desk)</span>
              </div>
            </div>

            <div className="f-contact-item">
              <Mail size={18} className="f-contact-icon" />
              <a href={`mailto:${companyDetails.email}`}>{companyDetails.email}</a>
            </div>

            <div className="f-contact-item">
              <Clock size={18} className="f-contact-icon" />
              <span>{companyDetails.workingHours.weekdays}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            © {currentYear} {companyDetails.name}. All Rights Reserved. Your Trusted Custom Packaging Partner.
          </p>

          <div className="footer-policy-links">
            <button 
              type="button" 
              className="policy-btn" 
              onClick={() => openModal("Privacy Policy")}
            >
              Privacy Policy
            </button>
            <span className="policy-divider">•</span>
            <button 
              type="button" 
              className="policy-btn" 
              onClick={() => openModal("Terms & Conditions")}
            >
              Terms & Conditions
            </button>
            <span className="policy-divider">•</span>
            <button 
              type="button" 
              className="policy-btn" 
              onClick={() => openModal("Shipping & Returns")}
            >
              Shipping & 100% Quality Guarantee
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {modalPolicy && (
        <div className="policy-modal-backdrop" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="policy-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="policy-modal-header">
              <h3>{modalPolicy}</h3>
              <button type="button" onClick={closeModal} className="policy-modal-close" aria-label="Close modal">
                <X size={20} />
              </button>
            </div>
            <div className="policy-modal-body">
              {modalPolicy === "Privacy Policy" && (
                <p>
                  At Bison Packaging, customer artwork, confidential packaging dimensions, and brand specifications are strictly protected. Your logo files and dieline drawings submitted for quote generation are utilized exclusively for your production run and will never be shared with third parties.
                </p>
              )}
              {modalPolicy === "Terms & Conditions" && (
                <p>
                  All custom box orders are manufactured to your approved 3D digital proof and dieline specifications. Production begins only after you sign off on artwork placement. Standard delivery spans 8–10 business days, with rush shipping available in 6–8 business days.
                </p>
              )}
              {modalPolicy === "Shipping & Returns" && (
                <p>
                  Bison Packaging provides 100% free doorstep shipping nationwide across the domestic United States. We back every order with a 100% quality guarantee: if there is any manufacturing or structural defect not matching your approved proof, we will reprint your order promptly.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}