import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import "./ServiceCard.css";

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service?.icon;
  const numString = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Top Abstract CSS Visual Area (No image dependency) */}
      <div className="service-visual-area">
        <div className="service-visual-grid" />
        <div className="service-visual-glow" />

        {/* CSS Packaging / Geometric Structure */}
        <div className="service-shape-wrapper">
          <div className="service-box-wireframe">
            <div className="wireframe-face front" />
            <div className="wireframe-face top" />
            <div className="wireframe-face right" />
          </div>
          <div className="service-beam-sweep" />
        </div>

        {/* Index Badge */}
        <span className="service-visual-index">{numString}</span>

        {/* Service Primary Icon Float */}
        <div className="service-visual-icon">
          {Icon && <Icon size={26} strokeWidth={1.8} />}
        </div>
      </div>

      {/* Card Content */}
      <div className="service-card-body">
        <div className="service-header">
          <span className="service-eyebrow">CAPABILITY {numString}</span>
          <h3 className="service-title">{service?.name || "Industrial Solution"}</h3>
        </div>

        <p className="service-description">
          {service?.description ||
            "Advanced manufacturing and precision execution tailored to custom dimensional specifications."}
        </p>

        {/* Feature List (if provided) */}
        {service?.features && service.features.length > 0 && (
          <ul className="service-feature-list">
            {service.features.map((feature, idx) => (
              <li key={idx} className="service-feature-item">
                <CheckCircle2 size={13} className="feature-check" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Footer */}
        <div className="service-card-footer">
          <span className="service-cta-text">Specifications</span>
          <span className="service-cta-btn">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}