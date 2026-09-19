import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { AlertCircle, RotateCcw } from "lucide-react";
import "./ProductGrid.css";

export default function ProductGrid({ 
  products = [], 
  emptyMessage = "No packaging machines match your criteria.", 
  onResetFilters = null 
}) {
  if (products.length === 0) {
    return (
      <div className="product-grid-empty">
        <div className="empty-icon-box">
          <AlertCircle size={36} />
        </div>
        <h3>No Machines Found</h3>
        <p>{emptyMessage}</p>
        {onResetFilters && (
          <button type="button" onClick={onResetFilters} className="btn btn-secondary empty-reset-btn">
            <RotateCcw size={15} />
            <span>Reset Search & Filters</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="product-grid-layout">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
