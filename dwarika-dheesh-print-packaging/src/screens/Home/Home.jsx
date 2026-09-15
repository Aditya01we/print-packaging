import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Factory } from "lucide-react";
import Button from "../../components/Button/Button";
import PackagingVisual from "../../components/PackagingVisual/PackagingVisual";
import Stats from "../../components/Stats/Stats";
import "./Home.css";

const homeHighlights = [
  { icon: ShieldCheck, label: "Custom Packaging" },
  { icon: Sparkles, label: "Premium Finish" },
  { icon: Factory, label: "Industrial Scale" },
];

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container hero-shell">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">PRINT • PACKAGING • MANUFACTURING</p>
          <h1>
            Packaging
            <span>Built To Make</span>
            An Impact.
          </h1>
          <p className="hero-text">
            One destination for all your packaging needs — from printed cartons and foil finishing to corrugated packaging solutions.
          </p>

          <div className="hero-actions">
            <Button variant="primary" href="#solutions" icon={<ArrowRight size={16} />}>
              Explore Solutions
            </Button>
            <Button variant="secondary" href="#contact">
              Request a Quote
            </Button>
          </div>

          <div className="home-highlights" aria-label="Company highlights">
            {homeHighlights.map(({ icon: Icon, label }) => (
              <div key={label} className="mini-highlight">
                <span className="mini-highlight-icon">
                  <Icon size={14} />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual-wrap"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <PackagingVisual />
        </motion.div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
