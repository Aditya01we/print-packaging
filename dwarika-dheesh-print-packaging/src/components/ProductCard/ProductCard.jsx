import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Layers, Clock, PackageCheck } from "lucide-react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <article className="product-card" aria-label={product.name}>
      {/* Card Visual / Thumbnail */}
      <div className="product-card-visual">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
        />
        <div className="product-badge-group">
          <span className="product-category-tag">{product.category}</span>
          {product.badge && <span className="product-featured-tag">{product.badge}</span>}
        </div>
      </div>

      {/* Card Content */}
      <div className="product-card-body">
        <h3 className="product-card-title">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>

        <p className="product-card-desc">{product.shortDescription}</p>

        {/* Packaging Spec Pills */}
        <div className="product-spec-pills">
          {product.specifications["Material Options"] && (
            <div className="spec-pill">
              <Layers size={13} className="spec-pill-icon" />
              <span>{product.specifications["Material Options"].split(" or ")[0]}</span>
            </div>
          )}

          {product.specifications["Standard Turnaround"] && (
            <div className="spec-pill">
              <Clock size={13} className="spec-pill-icon" />
              <span>{product.specifications["Standard Turnaround"].split(" (")[0]}</span>
            </div>
          )}

          {product.specifications["Minimum Order"] && (
            <div className="spec-pill">
              <PackageCheck size={13} className="spec-pill-icon" />
              <span>MOQ: {product.specifications["Minimum Order"]}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="product-card-actions">
          <Link to={`/products/${product.id}`} className="btn btn-secondary card-btn-view">
            <span>View Details</span>
            <ArrowRight size={14} />
          </Link>
          <Link to={`/contact?machine=${encodeURIComponent(product.id)}`} className="btn btn-primary card-btn-quote">
            <FileText size={14} />
            <span>Get Quote</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
