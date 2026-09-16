import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./CategoryCard.css";

export default function CategoryCard({ category, onSelect, index = 0 }) {
  const Icon = category?.icon;
  const numString = String(category?.number || index + 1).padStart(2, "0");

  return (
    <motion.article
      className="category-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={() => onSelect?.(category)}
    >
      <div className="category-visual-area">
        <div className="category-visual-grid" />
        <div className="category-visual-glow" />

        {category?.image ? (
          <img className="category-product-image" src={category.image} alt={category.title} />
        ) : (
          <div className="category-fallback-box">
            <div className="fallback-box-front" />
            <div className="fallback-box-top" />
            <div className="fallback-box-side" />
          </div>
        )}

        <span className="category-visual-index">{numString}</span>

        <div className="category-visual-icon">
          {Icon && <Icon size={24} strokeWidth={1.8} />}
        </div>
      </div>

      <div className="category-card-body">
        <div className="category-meta-row">
          <span className="category-eyebrow">CATEGORY {numString}</span>
          <span className="category-dot" />
        </div>

        <h3 className="category-title">{category?.title}</h3>

        <p className="category-description">
          {category?.description ||
            "Custom engineered structural cartons manufactured to precise tolerances and finishing requirements."}
        </p>

        {category?.packagingTypes && category.packagingTypes.length > 0 && (
          <div className="category-spec-preview">
            <span className="spec-label">Applications:</span>
            <span className="spec-text">{category.packagingTypes.slice(0, 2).join(" • ")}</span>
          </div>
        )}

        <div className="category-card-footer">
          <span className="category-action-label">Explore Category</span>
          <div className="category-arrow-badge">
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
