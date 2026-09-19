import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Sparkles, Award, Users2, ShieldCheck, Box, Truck } from "lucide-react";
import { companyDetails } from "../../data/company";
import "./About.css";

export default function About({ isDetailed = false }) {
  return (
    <section className="about-component-section" id="about-overview" aria-label="About Dwarika Dheesh Packaging">
      <div className="container about-grid">
        {/* Left Side: Visual Column and Floating Achievement */}
        <div className="about-visual-column">
          <div className="about-image-card">
            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80"
              alt="Dwarika Dheesh Custom Boxes and Rigid Packaging Studio"
              className="about-main-img"
              loading="lazy"
            />
            <div className="about-experience-badge">
              <span className="badge-years">100%</span>
              <span className="badge-label">Customizable Sizes, Shapes & Finishes</span>
            </div>
          </div>

          <div className="about-certifications-strip">
            <div className="cert-item">
              <Sparkles size={18} className="cert-icon" />
              <span>0$ Die / Plate Fees</span>
            </div>
            <div className="cert-item">
              <Truck size={18} className="cert-icon" />
              <span>Free Domestic Shipping</span>
            </div>
            <div className="cert-item">
              <CheckCircle size={18} className="cert-icon" />
              <span>Free 3D Mockup</span>
            </div>
          </div>
        </div>

        {/* Right Side: Engineering Story & Capabilities */}
        <div className="about-text-column">
          <div className="section-eyebrow">ABOUT DWARIKA DHEESH PACKAGING</div>
          <h2 className="section-title">
            Your Dedicated Partner For High-Impact Custom Packaging & Boxes
          </h2>

          <p className="about-intro">
            At <strong>Dwarika Dheesh Packaging</strong>, we are a passionate, full-service packaging house committed to providing brands of all sizes with completely bespoke custom boxes, mailers, mylar bags, and printed retail packaging.
          </p>

          <p className="about-detail">
            Whether you need crush-resistant corrugated shipping mailers, luxury magnetic closure rigid boxes, eco-friendly kraft cartons, or smell-proof mylar barrier pouches, our packaging specialists deliver pristine print registration, vibrant soy-based inks, and fast 8–10 days turnaround with zero die or plate charges.
          </p>

          {/* Pillars List */}
          <div className="about-pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Box size={18} />
              </div>
              <div className="pillar-content">
                <h4>Endless Customization</h4>
                <p>Tailored shapes, sizes, and styles with luxury foil stamping, embossing, spot UV, and custom window die-cuts.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Award size={18} />
              </div>
              <div className="pillar-content">
                <h4>No Hidden Tooling Charges</h4>
                <p>Never pay for cutting dies or setup plates. What you see is transparent wholesale factory-direct pricing.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Users2 size={18} />
              </div>
              <div className="pillar-content">
                <h4>Complimentary Design & 3D Mockups</h4>
                <p>Our dedicated packaging designers provide free dieline templates and interactive 3D digital proofs before production.</p>
              </div>
            </div>
          </div>

          {!isDetailed && (
            <div className="about-actions">
              <Link to="/about" className="btn btn-primary">
                <span>Learn More About Our Capabilities</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/products" className="btn btn-secondary">
                <span>Explore Packaging Catalog</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
