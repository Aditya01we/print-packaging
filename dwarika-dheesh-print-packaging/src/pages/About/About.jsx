import React from "react";
import { Link } from "react-router-dom";
import AboutComponent from "../../components/About/About";
import Process from "../../components/Process/Process";
import Gallery from "../../components/Gallery/Gallery";
import FAQ from "../../components/FAQ/FAQ";
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Target,
  Sparkles,
  Truck
} from "lucide-react";
import { companyDetails } from "../../data/company";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Page Header Banner */}
      <header className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumbs">
            <Link to="/">Home</Link>
            <span className="crumb-divider">/</span>
            <span className="crumb-current">About Us</span>
          </div>
          <h1 className="page-hero-title">About Bison Packaging</h1>
          <p className="page-hero-subtitle">
            A fanatical packaging house committed to delivering fully customizable packaging solutions with unique designs, premium materials, and endless customer service support.
          </p>
        </div>
      </header>

      {/* Core About Component with Detailed View */}
      <AboutComponent isDetailed={true} />

      {/* Infrastructure & Facility Details */}
      <section className="facility-spec-section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">PACKAGING SPECIALIZATIONS</div>
            <h2 className="section-title">Built Upon High-Precision Printing & Finishing</h2>
            <p className="section-subtitle">
              From high-definition 6-color offset printing and precision laser die-cutting to hot foil stamping and spot UV coatings, our production studio brings your brand vision to life.
            </p>
          </div>

          <div className="facility-grid">
            <div className="facility-card">
              <div className="facility-card-icon">
                <Building2 size={24} />
              </div>
              <h3>Endless Box Styles</h3>
              <p>
                From corrugated mailers and rigid magnetic boxes to folding cartons, pillow boxes, and countertop displays in any custom dimension.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-card-icon">
                <Target size={24} />
              </div>
              <h3>High-Definition Printing</h3>
              <p>
                6-color Heidelberg presses offering vibrant Pantone matching, true black densities, and razor-sharp graphic registration.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-card-icon">
                <Sparkles size={24} />
              </div>
              <h3>Zero Die & Plate Charges</h3>
              <p>
                We believe custom packaging should be accessible. All cutting dies, setup plates, and dieline preparations are 100% complimentary.
              </p>
            </div>

            <div className="facility-card">
              <div className="facility-card-icon">
                <Users size={24} />
              </div>
              <h3>Dedicated Packaging Experts</h3>
              <p>
                Work one-on-one with knowledgeable packaging specialists who verify structural integrity, paper calipers, and artwork dielines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment and Compliance */}
      <section className="compliance-section">
        <div className="container compliance-box">
          <div className="compliance-copy">
            <div className="section-eyebrow">QUALITY & SUSTAINABILITY</div>
            <h2>Eco-Friendly Materials & Certified Quality Standards</h2>
            <p>
              We care about the planet as much as we care about your brand. All our paperboard packaging is sourced from FSC-certified sustainable forests, printed with non-toxic biodegradable soy and water-based inks, and 100% curbside recyclable.
            </p>

            <div className="compliance-checklist">
              {companyDetails.certifications.map((cert, index) => (
                <div key={index} className="compliance-check-item">
                  <CheckCircle size={18} className="check-icon" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="compliance-stat-card">
            <div className="stat-pill-inner">
              <Truck size={36} className="award-icon" />
              <span className="big-stat">8 – 10</span>
              <span className="stat-meta">Days Standard Fast Turnaround</span>
              <p className="stat-note">
                Delivered free to your doorstep nationwide with 100% domestic quality guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Manufacturing Process Timeline */}
      <Process />

      {/* Packaging & Finishes Gallery with Lightbox */}
      <Gallery />

      {/* Technical & Ordering FAQ */}
      <FAQ />

      {/* Bottom Action CTA */}
      <section className="about-cta-banner">
        <div className="container cta-banner-inner">
          <div className="cta-banner-text">
            <h3>Ready To Create Custom Packaging For Your Brand?</h3>
            <p>Share your box dimensions or upload your artwork to receive a complimentary 3D digital proof and custom wholesale quote.</p>
          </div>
          <Link to="/contact" className="btn btn-primary btn-lg">
            <span>Get Free 3D Proof & Quote</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
