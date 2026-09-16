import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { navigation } from "../../data/navigation";
import brandLogo from "../../assets/logo.svg";
import "./Navbar.css";
export default function Navbar({ onNavigate, activeSection = "home" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (target) => {
    onNavigate?.(target);
    setIsOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <div
          className="navbar-brand"
          onClick={() => handleLinkClick("home")}
          role="button"
          tabIndex={0}
        >
          <img className="brand-logo" src={brandLogo} alt="Dwarika Dheesh Print Packaging" />
          <div className="brand-text-group">
            <span className="brand-title">DWARIKA DHEESH</span>
            <span className="brand-subtitle">PRINT PACKAGING</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {navigation.map((item) => {
            const isActive = activeSection === item.target;

            return (
              <button
                key={item.target}
                type="button"
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={() => handleLinkClick(item.target)}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="nav-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Action */}
        <div className="navbar-cta-group">
          <button
            type="button"
            className="navbar-quote-btn"
            onClick={() => handleLinkClick("contact")}
          >
            <Sparkles size={14} className="cta-icon" />
            <span>Get A Quote</span>
            <ArrowUpRight size={14} className="cta-arrow" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="navbar-hamburger"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-drawer-inner">
              {navigation.map((item, idx) => (
                <motion.button
                  key={item.target}
                  type="button"
                  className="mobile-nav-link"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleLinkClick(item.target)}
                >
                  <span className="mobile-nav-index">0{idx + 1}</span>
                  <span className="mobile-nav-label">{item.label}</span>
                  <ArrowUpRight size={16} className="mobile-nav-arrow" />
                </motion.button>
              ))}

              <button
                type="button"
                className="mobile-quote-btn"
                onClick={() => handleLinkClick("contact")}
              >
                <span>Request Custom Quote</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}