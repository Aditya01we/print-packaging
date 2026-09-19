import React from "react";
import { Link } from "react-router-dom";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import ContactActions from "../../components/ContactActions/ContactActions";
import { companyDetails } from "../../data/company";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Building, 
  ShieldCheck, 
  Truck,
  Sparkles
} from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${companyDetails.whatsappPhone}?text=${encodeURIComponent(companyDetails.whatsappDefaultMessage)}`;

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <header className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumbs">
            <Link to="/">Home</Link>
            <span className="crumb-divider">/</span>
            <span className="crumb-current">Contact & Custom Quote</span>
          </div>
          <h1 className="page-hero-title">Contact Our Packaging Specialists</h1>
          <p className="page-hero-subtitle">
            Get in touch with our packaging design team for complimentary 3D digital mockups, structural dielines, material recommendations, and wholesale custom box quotes.
          </p>
        </div>
      </header>

      {/* Quick Direct Actions Strip */}
      <section className="contact-quick-actions-section">
        <div className="container">
          <ContactActions layout="bar" />
        </div>
      </section>

      {/* Main Contact Grid: Information & QuoteForm */}
      <section className="contact-main-section">
        <div className="container contact-main-grid">
          {/* Left Column: Direct Coordinates & Working Hours */}
          <div className="contact-info-column">
            {/* Value proposition notice */}
            <div className="contact-placeholder-notice" role="note">
              <Sparkles size={18} className="notice-icon" />
              <div>
                <strong>Bison Packaging Guarantee:</strong> Free 3D digital mockups • Zero die & cut plate fees • Free nationwide domestic ground shipping.
              </div>
            </div>

            {/* Address Card */}
            <div className="info-card">
              <div className="info-card-header">
                <div className="info-icon-box">
                  <MapPin size={22} />
                </div>
                <h3>Headquarters & Production Facility</h3>
              </div>
              <p className="info-text">
                <strong>{companyDetails.name}</strong><br />
                {companyDetails.address.line1}<br />
                {companyDetails.address.line2}<br />
                {companyDetails.address.city}, {companyDetails.address.state} {companyDetails.address.postalCode}, {companyDetails.address.country}
              </p>
              <div className="info-sub-note">
                <Truck size={14} />
                <span>Fast Nationwide Doorstep Delivery with End-to-End Tracking</span>
              </div>
            </div>

            {/* Telephony & Email Card */}
            <div className="info-card">
              <div className="info-card-header">
                <div className="info-icon-box">
                  <Phone size={22} />
                </div>
                <h3>Direct Phone & Email Channels</h3>
              </div>
              <div className="contact-line-item">
                <span className="channel-label">Direct Sales & Orders:</span>
                <a href={`tel:${companyDetails.phoneRaw}`} className="channel-link">
                  {companyDetails.phone}
                </a>
              </div>
              <div className="contact-line-item">
                <span className="channel-label">Direct Customer Service:</span>
                <a href={`tel:${companyDetails.phoneRaw}`} className="channel-link">
                  {companyDetails.alternatePhone}
                </a>
              </div>
              <div className="contact-line-item">
                <span className="channel-label">Wholesale Inquiries:</span>
                <a href={`mailto:${companyDetails.email}`} className="channel-link">
                  {companyDetails.email}
                </a>
              </div>
              <div className="contact-line-item">
                <span className="channel-label">Design & Dieline Support:</span>
                <a href={`mailto:${companyDetails.supportEmail}`} className="channel-link">
                  {companyDetails.supportEmail}
                </a>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="info-card">
              <div className="info-card-header">
                <div className="info-icon-box">
                  <Clock size={22} />
                </div>
                <h3>Packaging Studio Working Hours</h3>
              </div>
              <p className="info-text">
                <strong>Sales & Support Desk:</strong><br />
                {companyDetails.workingHours.weekdays}<br />
                {companyDetails.workingHours.saturday}<br />
                <em>{companyDetails.workingHours.sunday}</em>
              </p>
              <div className="live-status-pill">
                <span className="live-dot"></span>
                <span>Designers Available For Instant Consultation</span>
              </div>
            </div>

            {/* Interactive Location Visual */}
            <div className="map-card">
              <div className="map-card-header">
                <h4>Packaging Hub & Logistics Center</h4>
                <span className="map-badge">North America Hub</span>
              </div>
              <div className="map-visual-placeholder">
                <div className="map-crosshair">
                  <Building size={32} className="map-factory-icon" />
                  <span className="map-pin-pulse"></span>
                </div>
                <div className="map-overlay-caption">
                  <span className="map-plant-name">Bison Packaging Facility</span>
                  <span className="map-coords">Jonesboro, Arkansas (USA)</span>
                </div>
              </div>
              <div className="map-footer-note">
                <span>Direct daily dispatches via FedEx, UPS & regional domestic freight for fast nationwide arrival.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Full Interactive QuoteForm */}
          <div className="contact-form-column">
            <div className="form-card-wrapper">
              <div className="form-header-copy">
                <span className="form-eyebrow">CUSTOM PACKAGING ESTIMATOR</span>
                <h2>Request Your Free 3D Proof & Quote</h2>
                <p>
                  Share your box dimensions, packaging style, and desired quantity below. Our packaging specialists will review your specs and send a wholesale quote with complimentary 3D visual proof.
                </p>
              </div>

              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
