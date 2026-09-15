import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCheck, DraftingCompass, PackageCheck, Printer, Sparkles } from "lucide-react";
import "./Process.css";

const steps = [
  { number: "01", title: "Requirement", icon: DraftingCompass },
  { number: "02", title: "Design & Specification", icon: Sparkles },
  { number: "03", title: "Printing", icon: Printer },
  { number: "04", title: "Finishing", icon: CheckCheck },
  { number: "05", title: "Production", icon: PackageCheck },
  { number: "06", title: "Delivery", icon: ArrowRight },
];

const Process = () => {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <motion.div
          className="section-header process-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Process</p>
          <h2>From concept to delivery, built with precision.</h2>
        </motion.div>

        <div className="process-timeline" aria-label="Production process timeline">
          {steps.map(({ number, title, icon: Icon }, index) => (
            <motion.div
              key={number}
              className="process-step"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="step-dot" />
              <div className="step-card">
                <span className="step-number">{number}</span>
                <span className="step-icon"><Icon size={18} /></span>
                <h3>{title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
