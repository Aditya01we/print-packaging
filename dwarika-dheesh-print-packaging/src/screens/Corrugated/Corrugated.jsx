import React from "react";
import { motion } from "framer-motion";
import "./Corrugated.css";

const corrugatedItems = [
  "Corrugated Boxes",
  "Custom Printed Boxes",
  "Shipping Packaging",
  "Industrial Packaging",
];

const Corrugated = () => {
  return (
    <section className="section corrugated-section">
      <div className="container corrugated-shell">
        <motion.div
          className="corrugated-copy"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Corrugated</p>
          <h2>Structural packaging built for protection and scale.</h2>
          <p>
            Heavy-duty corrugated formats, custom print layouts, and shipping-ready constructions for industrial and retail distribution flows.
          </p>

          <ul className="corrugated-list">
            {corrugatedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="corrugated-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6, rotate: 0.5 }}
        >
          <div className="corrugated-box">
            <span className="corrugated-face front" />
            <span className="corrugated-face side" />
            <span className="corrugated-face top" />
            <span className="corrugated-face inner" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Corrugated;
