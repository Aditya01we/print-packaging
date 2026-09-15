import React from "react";
import "./ProductModal.css";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="product-modal">
      <div>
        <button onClick={onClose}>×</button>
        <div className="product-modal-visual" aria-hidden="true" />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
