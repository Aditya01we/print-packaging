import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { companyDetails } from "../../data/company";
import "./FloatingWhatsApp.css";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${companyDetails.whatsappPhone}?text=${encodeURIComponent(companyDetails.whatsappDefaultMessage)}`;

  return (
    <aside className="floating-whatsapp-container" aria-label="WhatsApp Quick Support">
      {/* Tooltip badge */}
      {showTooltip && (
        <div className="whatsapp-tooltip">
          <div className="tooltip-header">
            <span className="tooltip-badge">Online</span>
            <button 
              type="button" 
              className="tooltip-close" 
              onClick={() => setShowTooltip(false)}
              aria-label="Dismiss WhatsApp tooltip"
            >
              <X size={12} />
            </button>
          </div>
          <p className="tooltip-text">
            Chat directly with our Machine Specialist on WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat on WhatsApp with Dwarika Dheesh Machinery"
      >
        <div className="whatsapp-icon-wrapper">
          <MessageSquare size={26} />
        </div>
        <span className="whatsapp-pulse"></span>
      </a>
    </aside>
  );
}
