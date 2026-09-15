import React from "react";
import { motion } from "framer-motion";
import { Box, Sparkles } from "lucide-react";
import "./PackagingVisual.css";

const PackagingVisual = () => {
  return (
    <motion.div
      className="packaging-visual"
      initial={{ rotate: -6, y: 20 }}
      animate={{ rotate: 0, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ rotate: 1.5, scale: 1.01 }}
    >
      <div className="packaging-grid" />
      <div className="packaging-glow" />
      <div className="packaging-lights" />

      <motion.div
        className="packaging-box-box"
        animate={{ y: [0, -14, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="packaging-box-face packaging-box-front" />
        <div className="packaging-box-face packaging-box-side" />
        <div className="packaging-box-face packaging-box-top" />
      </motion.div>

      <motion.div
        className="packaging-floating packaging-floating-one"
        animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>01</span>
      </motion.div>

      <motion.div
        className="packaging-floating packaging-floating-two"
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>3D</span>
      </motion.div>

      <div className="packaging-metrics">
        <div className="metric-card metric-card-top">
          <Sparkles size={12} />
          <span>Foil Finish</span>
        </div>
        <div className="metric-card metric-card-bottom">
          <Box size={12} />
          <span>Custom Cartons</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PackagingVisual;
