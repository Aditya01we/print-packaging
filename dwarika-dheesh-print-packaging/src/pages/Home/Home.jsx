import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import CategorySpotlight from "../../components/CategorySpotlight/CategorySpotlight";
import About from "../../components/About/About";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import PremiumFinishes from "../../components/PremiumFinishes/PremiumFinishes";
import CardStockVariation from "../../components/CardStockVariation/CardStockVariation";
import PackagingDesignTabs from "../../components/PackagingDesignTabs/PackagingDesignTabs";
import Industries from "../../components/Industries/Industries";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Process from "../../components/Process/Process";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import { products } from "../../data/products";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";
import { companyDetails } from "../../data/company";
import "./Home.css";

export default function Home() {
  // Select top 8 packaging products to feature on homepage (matching Bison Packaging grid)
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Category Spotlight (Candle, Cosmetic, Soap Boxes) */}
      <CategorySpotlight />

      {/* 3. About Company Overview */}
      <About />

      {/* 4. Popular Packaging Styles Grid */}
      <section className="featured-machines-section" aria-label="Our Popular Products">
        <div className="container">
          <div className="featured-machines-header">
            <div>
              <div className="section-eyebrow">
                <Sparkles size={14} />
                <span>POPULAR PACKAGING STYLES</span>
              </div>
              <h2 className="section-title">Our Popular Products</h2>
              <p className="section-subtitle">
                Bison Packaging has a wide range of products it provides such as custom printed boxes, mailer boxes, shipping boxes and retail packaging. All items come in multiple materials, sizes and designs selected to fit the particular needs of our customer. The most sought after items are made using quality materials and can be personalized from top to bottom, ensuring a good impression for any product or service.
              </p>
            </div>
            <Link to="/products" className="btn btn-secondary view-all-top-btn">
              <span>View All Packaging ({products.length})</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <ProductGrid products={featuredProducts} />

          <div className="featured-machines-bottom-cta">
            <Link to="/products" className="btn btn-primary">
              <span>Explore Complete Packaging Catalog</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Premium Finishes - Horizontal Auto-Scrolling Marquee */}
      <PremiumFinishes />

      {/* 6. Card Stock Variation - Horizontal Auto-Scrolling Marquee */}
      <CardStockVariation />

      {/* 7. Interactive Packaging Design Tabs */}
      <PackagingDesignTabs />

      {/* 8. Industries We Serve */}
      <Industries />

      {/* 9. Why Choose Bison Packaging */}
      <WhyChooseUs />

      {/* 10. 6-Step Domestic Manufacturing Process */}
      <Process />

      {/* 11. Client Testimonials */}
      <Testimonials />

      {/* 12. FAQ Section */}
      <FAQ limit={5} />

      {/* 13. Final Inquiry Strip */}
      <section className="home-inquiry-strip">
        <div className="container home-inquiry-box">
          <div className="home-inquiry-copy">
            <span className="inquiry-badge">FREE DESIGN SUPPORT & 3D MOCKUP</span>
            <h2>Need A Custom Box Size, Shape, Or Unique Dieline?</h2>
            <p>
              Speak directly with our packaging specialists to review custom dimensions, materials, foil stamp samples, and complimentary 3D visual proofs.
            </p>
          </div>
          <div className="home-inquiry-buttons">
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Get Free Custom Packaging Quote</span>
              <ArrowRight size={18} />
            </Link>
            <a href={`tel:${companyDetails.phoneRaw}`} className="btn btn-secondary btn-lg">
              <PhoneCall size={18} />
              <span>Call: {companyDetails.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
