import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product, onView }) {
  return (
    <article className="product-card">
      <div className="product-visual-stage" aria-hidden="true">
        <div className="product-stage-grid" />
        <div className="product-box-silhouette" />
      </div>
      <div>
        <small>{product.category}</small>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <button onClick={() => onView(product)}>View Details</button>
      </div>
    </article>
  );
}
