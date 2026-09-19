import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, CheckCircle2, Shield, Clock, Sparkles } from "lucide-react";
import { companyDetails } from "../../data/company";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Hero Introduction">
      <div className="container hero-container">
        {/* Left Column: Copy & CTAs */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-pulse"></span>
            <span className="eyebrow-text">YOUR CUSTOM PACKAGING PARTNER • ZERO DIE & PLATE CHARGES</span>
          </div>

          <h1 className="hero-title">
            Custom <span className="title-highlight">Packaging Boxes</span> & Premium Mylar Bags
          </h1>

          <p className="hero-description">
            Fully customizable packaging solutions with unique box designs, high-barrier mylar pouches, eco-friendly kraft cardstocks, free design assistance, and rapid 8–10 days turnaround.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary hero-btn">
              <span>Explore Packaging Boxes</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-secondary hero-btn">
              <FileText size={18} />
              <span>Get Free Quote</span>
            </Link>
          </div>

          <div className="hero-trust-row">
            <div className="trust-item">
              <CheckCircle2 size={16} className="trust-icon" />
              <span>Free 3D Digital Mockup & Dielines</span>
            </div>
            <div className="trust-item">
              <Shield size={16} className="trust-icon" />
              <span>Zero Die, Tooling, or Cut Plate Fees</span>
            </div>
            <div className="trust-item">
              <Clock size={16} className="trust-icon" />
              <span>Fast 8–10 Days Standard Delivery (Rush 6–8 Days)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Industrial Machine/Box Graphic & Floating Badges */}
        <div className="hero-visual-wrapper">
          <div className="hero-visual-card">
            <div className="machine-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1200&q=80"
                alt="Custom Corrugated Mailer Boxes by Dwarika Dheesh Packaging"
                className="hero-machine-img"
                loading="eager"
              />
              <div className="machine-image-overlay"></div>
            </div>

            {/* Floating Metric 1: Top Right */}
            <div className="floating-metric metric-top">
              <div className="metric-icon-badge">
                <Clock size={18} />
              </div>
              <div className="metric-text">
                <span className="metric-val">8 – 10 Days</span>
                <span className="metric-sub">Fast Turnaround</span>
              </div>
            </div>

            {/* Floating Metric 2: Bottom Left */}
            <div className="floating-metric metric-bottom">
              <div className="metric-icon-badge accent-badge">
                <Sparkles size={18} />
              </div>
              <div className="metric-text">
                <span className="metric-val">0$ Plate Fees</span>
                <span className="metric-sub">Free 3D Design Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Trust Statistics Strip */}
      <div className="hero-stats-strip">
        <div className="container stats-grid">
          {companyDetails.stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-description">{stat.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
