import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, ArrowRight, Package, Box, Truck } from "lucide-react";
import { companyDetails } from "../../data/company";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleSectionClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? "navbar-scrolled" : ""}`}>
      {/* Top utility bar on desktop */}
      <div className="navbar-topbar">
        <div className="container navbar-topbar-inner">
          <div className="topbar-badge">
            <Truck size={14} className="topbar-icon" />
            <span>Free Nationwide Domestic Shipping • 100% Custom Printed Packaging • No Die & Plate Charges</span>
          </div>
          <div className="topbar-actions">
            <span className="topbar-item">Direct Sales & Support:</span>
            <a href={`tel:${companyDetails.phoneRaw}`} className="topbar-phone">
              <Phone size={13} />
              <span>{companyDetails.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="navbar-main">
        <div className="container navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand" aria-label="Bison Packaging Home">
            <div className="brand-logo-icon">
              <Package className="logo-gear" size={24} />
            </div>
            <div className="brand-text">
              <span className="brand-title">BISON PACKAGING</span>
              <span className="brand-sub">CUSTOM PACKAGING & PRINTING</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="navbar-desktop-nav" aria-label="Main Navigation">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive && !location.hash ? "active" : ""}`}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              About
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              Packaging Boxes
            </NavLink>
            <button 
              type="button" 
              className="nav-link nav-btn-link"
              onClick={() => handleSectionClick("finishes")}
            >
              Finishes
            </button>
            <button 
              type="button" 
              className="nav-link nav-btn-link"
              onClick={() => handleSectionClick("cardstock")}
            >
              Card Stock
            </button>
            <button 
              type="button" 
              className="nav-link nav-btn-link"
              onClick={() => handleSectionClick("industries")}
            >
              Industries
            </button>
            <button 
              type="button" 
              className="nav-link nav-btn-link"
              onClick={() => handleSectionClick("why-choose-us")}
            >
              Why Us
            </button>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="navbar-right-actions">
            <Link to="/contact" className="btn btn-primary nav-quote-btn">
              <span>Get Free Quote</span>
              <ArrowRight size={15} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button 
              type="button"
              className="navbar-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => `mobile-nav-item ${isActive && !location.hash ? "active" : ""}`}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `mobile-nav-item ${isActive ? "active" : ""}`}
          >
            About Bison Packaging
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => `mobile-nav-item ${isActive ? "active" : ""}`}
          >
            Custom Packaging Boxes & Mylar Bags
          </NavLink>
          <button 
            type="button" 
            className="mobile-nav-item mobile-btn-link"
            onClick={() => handleSectionClick("finishes")}
          >
            Luxury Premium Finishes
          </button>
          <button 
            type="button" 
            className="mobile-nav-item mobile-btn-link"
            onClick={() => handleSectionClick("cardstock")}
          >
            Card Stock Variations
          </button>
          <button 
            type="button" 
            className="mobile-nav-item mobile-btn-link"
            onClick={() => handleSectionClick("industries")}
          >
            Industries We Serve
          </button>
          <button 
            type="button" 
            className="mobile-nav-item mobile-btn-link"
            onClick={() => handleSectionClick("why-choose-us")}
          >
            Why Choose Bison Packaging
          </button>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `mobile-nav-item ${isActive ? "active" : ""}`}
          >
            Contact & Free Quotation
          </NavLink>

          <div className="mobile-drawer-footer">
            <Link to="/contact" className="btn btn-primary mobile-quote-cta">
              <span>Get An Instant Packaging Quote</span>
              <ArrowRight size={16} />
            </Link>
            <div className="mobile-support-contact">
              <span>Direct Sales Desk:</span>
              <a href={`tel:${companyDetails.phoneRaw}`}>{companyDetails.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}