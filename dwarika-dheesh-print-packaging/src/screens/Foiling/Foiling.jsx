import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./Foiling.css";

const Foiling = () => {
  return (
    <section id="foiling" className="section foiling-section">
      <div className="container foiling-shell">
        <motion.div
          className="foiling-copy"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Foiling</p>
          <h2>Metallic finishes that elevate every unboxing moment.</h2>
          <p>
            Premium foil stamping and surface detailing add depth, prestige, and a refined shelf presence to retail and medical packaging formats.
          </p>
        </motion.div>

        <motion.div
          className="foil-visual-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <div className="foil-box-wrap">
            <div className="foil-box">
              <div className="foil-shine" />
              <div className="foil-grid" />
              <div className="foil-label">FOIL</div>
            </div>
          </div>

          <div className="foil-badges">
            <span><Sparkles size={13} /> Premium foil</span>
            <span>Gold & orange</span>
            <span>Luxury finish</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Foiling;
