import React from "react";
import { motion } from "framer-motion";
import { Box, Brush, Layers3, ScanLine, Sparkles } from "lucide-react";
import "./Solutions.css";

const capabilityData = [
  { title: "Offset Printing", icon: ScanLine, accent: "offset" },
  { title: "UV Printing", icon: Sparkles, accent: "uv" },
  { title: "Texture", icon: Brush, accent: "texture" },
  { title: "Foil Printing", icon: Layers3, accent: "foil" },
  { title: "Packaging Printing", icon: Box, accent: "packaging" },
  { title: "Corrugated Printing", icon: Box, accent: "corrugated" },
];

const Solutions = () => {
  return (
    <section id="solutions" className="section solutions-section">
      <div className="container">
        <motion.div
          className="section-header solutions-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Printing solutions</p>
          <h2>High-precision printing for every pack format.</h2>
        </motion.div>

        <div className="solutions-grid">
          {capabilityData.map(({ title, icon: Icon, accent }, index) => (
            <motion.article
              key={title}
              className={`solution-card ${accent}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="solution-visual" aria-hidden="true">
                <span className="solution-line line-one" />
                <span className="solution-line line-two" />
                <span className="solution-line line-three" />
                <span className="solution-shape" />
                <span className="solution-badge">
                  <Icon size={18} />
                </span>
              </div>
              <div className="solution-copy">
                <h3>{title}</h3>
                <p>
                  Consistent, premium output engineered for retail impact, durability, and exacting brand standards.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
