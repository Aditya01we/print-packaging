import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, PhoneCall } from "lucide-react";
import "./TopBar.css";

const capabilities = [
  "MANUFACTURING",
  "PRINTING",
  "PACKAGING",
  "FINISHING",
  "CUSTOM CARTONS",
  "FOILING & CORRUGATED",
];

export default function TopBar() {
  return (
    <div className="topbar-wrapper">
      <div className="topbar-grid-line" />
      <div className="topbar-container">
        {/* Left Side: Live Production Status */}
        <div className="topbar-left">
          <span className="live-status-badge">
            <span className="live-dot">
              <span className="live-ping" />
            </span>
            <span className="badge-text">PRECISION FACILITY</span>
          </span>
          <span className="topbar-divider">|</span>
          <p className="topbar-tagline">
            One Destination For All Your Packaging Needs
          </p>
        </div>

        {/* Center: Infinite Ticker / Highlights */}
        <div className="topbar-center">
          <div className="ticker-track">
            {capabilities.map((item, idx) => (
              <span key={idx} className="ticker-item">
                <span className="ticker-bullet">◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Quick Action & Assurance */}
        <div className="topbar-right">
          <div className="assurance-tag">
            <ShieldCheck size={14} className="topbar-icon" />
            <span>ISO Certified Standards</span>
          </div>
          <span className="topbar-divider">|</span>
          <a href="#contact" className="topbar-link">
            <Sparkles size={13} className="topbar-icon accent" />
            <span>B2B Enquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
}