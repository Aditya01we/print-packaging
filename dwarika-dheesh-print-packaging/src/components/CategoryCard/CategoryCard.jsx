import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import "./CategoryCard.css";

export default function CategoryCard({ category, onSelect, index = 0 }) {
  const Icon = category?.icon;
  const numString = String(category?.number || index + 1).padStart(2, "0");
  const categoryId = (category?.id || category?.title || "").toLowerCase();

  return (
    <motion.article
      className={`category-card theme-${categoryId}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={() => onSelect?.(category)}
    >
      {/* Large Abstract CSS Visual Space (Preserves space without images) */}
      <div className="category-visual-area">
        <div className="category-visual-grid" />
        <div className="category-visual-glow" />

        {/* Dynamic Category Geometry */}
        <div className="category-shape-stage">
          {categoryId.includes("pharma") && (
            <div className="geo-pharma">
              <div className="pharma-cross">
                <span className="cross-h" />
                <span className="cross-v" />
              </div>
              <div className="pharma-grid-dots">
                <span /><span /><span /><span />
              </div>
            </div>
          )}

          {categoryId.includes("masala") && (
            <div className="geo-masala">
              <div className="spice-ring ring-1" />
              <div className="spice-ring ring-2" />
              <div className="spice-core" />
              <div className="spice-particles">
                <span /><span /><span />
              </div>
            </div>
          )}

          {categoryId.includes("chocolate") && (
            <div className="geo-chocolate">
              <div className="choc-block block-1" />
              <div className="choc-block block-2" />
              <div className="choc-block block-3" />
            </div>
          )}

          {categoryId.includes("cigarette") && (
            <div className="geo-cigarette">
              <div className="pack-outline">
                <div className="pack-lid" />
                <div className="pack-crease" />
              </div>
            </div>
          )}

          {categoryId.includes("biscuit") && (
            <div className="geo-biscuit">
              <div className="biscuit-disc disc-main">
                <div className="disc-pattern">
                  <span /><span /><span /><span />
                </div>
              </div>
            </div>
          )}

          {categoryId.includes("foil") && (
            <div className="geo-foiling">
              <div className="foil-card">
                <div className="foil-metallic-sheen" />
              </div>
            </div>
          )}

          {categoryId.includes("corrugat") && (
            <div className="geo-corrugated">
              <div className="flute-line flute-1" />
              <div className="flute-wave" />
              <div className="flute-line flute-2" />
            </div>
          )}

          {/* Default Packaging Geometry */}
          {!["pharma", "masala", "chocolate", "cigarette", "biscuit", "foil", "corrugat"].some(
            (k) => categoryId.includes(k)
          ) && (
            <div className="geo-default-box">
              <div className="box-isometric face-front" />
              <div className="box-isometric face-top" />
              <div className="box-isometric face-side" />
            </div>
          )}
        </div>

        {/* Top-Right Index Indicator */}
        <span className="category-visual-index">{numString}</span>

        {/* Floating Category Icon */}
        <div className="category-visual-icon">
          {Icon && <Icon size={24} strokeWidth={1.8} />}
        </div>
      </div>

      {/* Card Information Body */}
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
            <span className="spec-text">
              {category.packagingTypes.slice(0, 2).join(" • ")}
            </span>
          </div>
        )}

        {/* Action Link Footer */}
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