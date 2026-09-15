import React from "react";
import { motion } from "framer-motion";
import { Factory, Palette, ShieldCheck } from "lucide-react";
import "./About.css";

const capabilities = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Palette, label: "Printing" },
  { icon: ShieldCheck, label: "Packaging" },
  { icon: Factory, label: "Finishing" },
];

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Precision manufacturing</p>
          <h2>
            Built for <span>better packaging.</span>
          </h2>
          <p>
            We combine industrial production discipline with premium print finishing to deliver cartons,
            foil applications, and structural packaging solutions that stand out at shelf level and hold up in supply flow.
          </p>
          <p>
            From product packaging to supply-chain protection, every format is engineered around print quality,
            finish consistency, and business performance.
          </p>
        </motion.div>

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-visual-grid" />
          <div className="about-visual-lines" />
          <div className="about-visual-badge">D</div>

          <div className="about-tag-cluster">
            {capabilities.map(({ icon: Icon, label }) => (
              <span key={label} className="about-tag">
                <Icon size={14} />
                {label}
              </span>
            ))}
          </div>

          <div className="about-packaging-shape">
            <span className="shape-front" />
            <span className="shape-side" />
            <span className="shape-top" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
