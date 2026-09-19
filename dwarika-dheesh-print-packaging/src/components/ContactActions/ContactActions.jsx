import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MessageSquare, FileText } from "lucide-react";
import { companyDetails } from "../../data/company";
import "./ContactActions.css";

export default function ContactActions({ layout = "bar" }) {
  const whatsappUrl = `https://wa.me/${companyDetails.whatsappPhone}?text=${encodeURIComponent(companyDetails.whatsappDefaultMessage)}`;

  return (
    <div className={`contact-actions-${layout}`} role="group" aria-label="Direct Contact Actions">
      {/* Call Button */}
      <a 
        href={`tel:${companyDetails.phoneRaw}`} 
        className="action-pill action-call"
        aria-label={`Call direct factory at ${companyDetails.phone}`}
      >
        <div className="action-pill-icon">
          <Phone size={16} />
        </div>
        <div className="action-pill-text">
          <span className="pill-sub">Direct Call</span>
          <span className="pill-main">{companyDetails.phone}</span>
        </div>
      </a>

      {/* Email Button */}
      <a 
        href={`mailto:${companyDetails.email}`} 
        className="action-pill action-email"
        aria-label={`Send email to ${companyDetails.email}`}
      >
        <div className="action-pill-icon">
          <Mail size={16} />
        </div>
        <div className="action-pill-text">
          <span className="pill-sub">Sales Email</span>
          <span className="pill-main">{companyDetails.email}</span>
        </div>
      </a>

      {/* WhatsApp Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="action-pill action-whatsapp"
        aria-label="Chat with machinery team on WhatsApp"
      >
        <div className="action-pill-icon">
          <MessageSquare size={16} />
        </div>
        <div className="action-pill-text">
          <span className="pill-sub">Live WhatsApp</span>
          <span className="pill-main">Instant Inquiry</span>
        </div>
      </a>

      {/* Get Quote Button */}
      <Link 
        to="/contact" 
        className="action-pill action-quote"
        aria-label="Open full quote request form"
      >
        <div className="action-pill-icon">
          <FileText size={16} />
        </div>
        <div className="action-pill-text">
          <span className="pill-sub">Official RFQ</span>
          <span className="pill-main">Get Machine Quote</span>
        </div>
      </Link>
    </div>
  );
}
