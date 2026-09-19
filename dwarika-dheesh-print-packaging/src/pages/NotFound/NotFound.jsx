import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search, HelpCircle, PhoneCall } from "lucide-react";
import { companyDetails } from "../../data/company";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container not-found-wrapper">
        <div className="not-found-badge">
          <span>404 ERROR</span>
        </div>

        <h1 className="not-found-heading">Page Not Found</h1>

        <p className="not-found-sub">
          The requested URL does not correspond to an active department, machine model, or engineering document. It may have been relocated or updated.
        </p>

        <div className="not-found-buttons">
          <Link to="/" className="btn btn-primary btn-lg">
            <Home size={18} />
            <span>Return To Home</span>
          </Link>
          <Link to="/products" className="btn btn-secondary btn-lg">
            <Search size={18} />
            <span>Browse Machines Catalog</span>
          </Link>
          <Link to="/contact" className="btn btn-outline-accent btn-lg">
            <PhoneCall size={18} />
            <span>Contact Support</span>
          </Link>
        </div>

        <div className="not-found-quick-directory">
          <h3>Quick Site Navigation:</h3>
          <div className="quick-links-grid">
            <Link to="/about" className="quick-link-box">
              <span className="ql-title">About Company</span>
              <span className="ql-desc">Factory floor, manufacturing capabilities & certifications</span>
            </Link>
            <Link to="/products?category=Packaging" className="quick-link-box">
              <span className="ql-title">Packaging Machines</span>
              <span className="ql-desc">Horizontal flow wrap and vertical multi-head pouch packing</span>
            </Link>
            <Link to="/products?category=Filling" className="quick-link-box">
              <span className="ql-title">Filling Machinery</span>
              <span className="ql-desc">Rotary liquid, servo volumetric, and piston bottle fillers</span>
            </Link>
            <Link to="/contact" className="quick-link-box">
              <span className="ql-title">Get a Machinery Quote</span>
              <span className="ql-desc">Technical inquiries, RFQ submissions & site visits</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
