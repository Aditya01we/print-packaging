import React from "react";
import { motion } from "framer-motion";
import "./SectionTitle.css";

export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  text,
  align = "left",
  tag = "01",
}) {
  const isCentered = align === "center";

  return (
    <div className={`section-title-wrapper ${isCentered ? "is-center" : "is-left"}`}>
      {/* Eyebrow & Technical Badge */}
      <motion.div
        className="section-title-eyebrow"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow-accent-line" />
        <span className="eyebrow-text">{eyebrow || "CAPABILITIES & SYSTEMS"}</span>
        {tag && <span className="eyebrow-tag">[{tag}]</span>}
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        className="section-title-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}{" "}
        {highlight && <span className="section-title-highlight">{highlight}</span>}
      </motion.h2>

      {/* Decorative Technical Beam */}
      <div className="section-title-divider">
        <span className="divider-glow-dot" />
        <span className="divider-line" />
      </div>

      {/* Subtitle / Description */}
      {text && (
        <motion.p
          className="section-title-text"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}