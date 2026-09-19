import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../data/products";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import ProductCard from "../../components/ProductCard/ProductCard";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Settings2, 
  Layers, 
  TrendingUp, 
  AlertTriangle, 
  FileText, 
  PhoneCall,
  ShieldCheck,
  Truck,
  Tag
} from "lucide-react";
import { companyDetails } from "../../data/company";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();

  // Find matching packaging style
  const product = products.find((p) => p.id === id);

  // If invalid product ID is entered, show a robust Product Not Found screen
  if (!product) {
    return (
      <div className="product-not-found-page">
        <div className="container not-found-container">
          <div className="not-found-icon-box">
            <AlertTriangle size={56} />
          </div>
          <span className="not-found-code">ERROR: 404 - PACKAGING STYLE NOT FOUND</span>
          <h1 className="not-found-title">Custom Packaging Style Not Found</h1>
          <p className="not-found-message">
            The requested packaging identifier <code>"{id}"</code> could not be located in our production catalog. It may have been renamed or updated with a newer dieline specification.
          </p>

          <div className="not-found-actions">
            <Link to="/products" className="btn btn-primary btn-lg">
              <ArrowLeft size={18} />
              <span>Back To Packaging Catalog</span>
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              <span>Contact Packaging Specialist</span>
            </Link>
          </div>

          <div className="suggested-popular-block">
            <h3>Suggested Custom Packaging Styles:</h3>
            <div className="suggested-list">
              {products.slice(0, 3).map((item) => (
                <Link key={item.id} to={`/products/${item.id}`} className="suggested-item-link">
                  <span>{item.name}</span>
                  <span className="suggested-cat">({item.category})</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Related packaging styles in same or complementary category
  const relatedMachines = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.category === "Corrugated Boxes"))
    .slice(0, 3);

  return (
    <div className="product-details-page">
      {/* Breadcrumb Navigation */}
      <nav className="details-breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <Link to="/products">Packaging Boxes</Link>
            <span className="crumb-sep">/</span>
            <Link to={`/products?category=${encodeURIComponent(product.category)}`}>{product.category}</Link>
            <span className="crumb-sep">/</span>
            <span className="crumb-active">{product.name}</span>
          </div>
        </div>
      </nav>

      {/* Main Product Hero */}
      <section className="product-hero-section">
        <div className="container product-hero-grid">
          {/* Left: Large High-Resolution Image */}
          <div className="product-hero-image-pane">
            <div className="main-image-card">
              <img
                src={product.image}
                alt={product.name}
                className="main-machine-image"
              />
              <div className="image-badge-row">
                <span className="category-pill">
                  <Tag size={13} />
                  {product.category}
                </span>
                {product.badge && <span className="highlight-pill">{product.badge}</span>}
              </div>
            </div>

            <div className="image-assurance-strip">
              <div className="assurance-box">
                <ShieldCheck size={16} className="assure-icon" />
                <span>Zero Die & Plate Charges</span>
              </div>
              <div className="assurance-box">
                <Truck size={16} className="assure-icon" />
                <span>Free Domestic Shipping</span>
              </div>
            </div>
          </div>

          {/* Right: Overview & Fast Actions */}
          <div className="product-hero-info-pane">
            <Link to="/products" className="back-link">
              <ArrowLeft size={16} />
              <span>Back to Packaging Catalog</span>
            </Link>

            <h1 className="details-title">{product.name}</h1>
            <p className="details-short-desc">{product.shortDescription}</p>

            <div className="fast-specs-highlights">
              {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
                <div key={key} className="fast-spec-item">
                  <span className="fast-spec-key">{key}</span>
                  <span className="fast-spec-val">{value}</span>
                </div>
              ))}
            </div>

            <div className="details-cta-group">
              <a href="#quote-section" className="btn btn-primary details-quote-btn">
                <FileText size={18} />
                <span>Get Free Custom Quote & 3D Proof</span>
              </a>
              <a href={`tel:${companyDetails.phoneRaw}`} className="btn btn-secondary details-call-btn">
                <PhoneCall size={18} />
                <span>Call: {companyDetails.phone}</span>
              </a>
            </div>

            <p className="details-inquiry-note">
              * Standard turnaround: 8–10 business days. Complimentary dielines & 3D digital mockup included with every inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Technical Details */}
      <section className="product-tech-specs-section">
        <div className="container">
          <div className="tech-details-grid">
            {/* Column 1: Full Description & Features */}
            <div className="tech-left-col">
              <div className="content-card">
                <div className="card-section-title">
                  <Settings2 size={20} className="section-title-icon" />
                  <h2>Material & Structural Overview</h2>
                </div>
                <p className="full-description-text">{product.description}</p>
              </div>

              {/* Key Features */}
              <div className="content-card">
                <div className="card-section-title">
                  <CheckCircle2 size={20} className="section-title-icon" />
                  <h2>Custom Box Features & Embellishments</h2>
                </div>
                <ul className="features-checklist">
                  {product.features.map((feature, i) => (
                    <li key={i} className="feature-checklist-item">
                      <CheckCircle2 size={16} className="feature-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="content-card">
                <div className="card-section-title">
                  <Layers size={20} className="section-title-icon" />
                  <h2>Recommended Industries & Product Uses</h2>
                </div>
                <div className="applications-tag-cloud">
                  {product.applications.map((app, i) => (
                    <span key={i} className="app-tag-pill">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Business Benefits */}
              <div className="content-card">
                <div className="card-section-title">
                  <TrendingUp size={20} className="section-title-icon" />
                  <h2>Brand Advantages & Cost Savings</h2>
                </div>
                <ul className="benefits-checklist">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="benefit-checklist-item">
                      <span className="benefit-bullet"></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2: Structured Specifications Table */}
            <div className="tech-right-col">
              <div className="specs-table-card">
                <h3 className="specs-card-title">Packaging Specifications</h3>
                <div className="specs-table">
                  {Object.entries(product.specifications).map(([specKey, specVal]) => (
                    <div key={specKey} className="spec-row">
                      <span className="spec-name">{specKey}</span>
                      <span className="spec-value">{specVal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Support Card */}
              <div className="support-sidebar-card">
                <h4>Have Unique Box Dimensions?</h4>
                <p>
                  Share your exact length, width, and depth (L × W × D). We prepare a custom dieline template and 3D visual proof with zero setup fees.
                </p>
                <div className="support-contact-mini">
                  <span>Direct Packaging Sales Desk:</span>
                  <a href={`tel:${companyDetails.phoneRaw}`}>{companyDetails.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Dedicated Quote Form Pre-filled */}
      <section className="product-quote-section" id="quote-section" aria-label="Request Quote for this Packaging Style">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">CUSTOM PACKAGING INQUIRY</div>
            <h2 className="section-title">Get A Quote For: {product.name}</h2>
            <p className="section-subtitle">
              Submit your required quantity, dimensions, or artwork files below. Our packaging design team responds with a free 3D digital proof and wholesale quote.
            </p>
          </div>

          <div className="quote-form-embed-wrapper">
            <QuoteForm preselectedMachineId={product.id} />
          </div>
        </div>
      </section>

      {/* Related Packaging Styles */}
      {relatedMachines.length > 0 && (
        <section className="related-machines-section">
          <div className="container">
            <div className="section-header">
              <div className="section-eyebrow">EXPLORE MORE STYLES</div>
              <h2 className="section-title">Related Custom Packaging Boxes</h2>
            </div>
            <div className="related-machines-grid">
              {relatedMachines.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
