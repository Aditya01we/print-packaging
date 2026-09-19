import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { products, categories } from "../../data/products";
import { Search, X, Filter, RotateCcw, Sparkles } from "lucide-react";
import "./Products.css";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "All");

  // Sync category state if URL query param changes
  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    } else if (!categoryParam) {
      setSelectedCategory("All");
    }
  }, [categoryParam]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSearchParams({});
  };

  // Combined real-time filter: Category + Search Query
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category condition
      const matchesCategory =
        selectedCategory === "All" ||
        item.category.toLowerCase() === selectedCategory.toLowerCase();

      // Search query condition across Name, Category, Description, Applications
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.applications.some((app) => app.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const isFiltered = searchQuery.trim() !== "" || selectedCategory !== "All";

  return (
    <div className="products-page">
      {/* Products Banner */}
      <header className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumbs">
            <Link to="/">Home</Link>
            <span className="crumb-divider">/</span>
            <span className="crumb-current">Packaging Boxes Catalog</span>
          </div>
          <h1 className="page-hero-title">Custom Packaging Boxes & Mylar Bags</h1>
          <p className="page-hero-subtitle">
            Explore our diverse catalog of custom printed boxes, corrugated shipping mailers, luxury rigid setup boxes, and high-barrier mylar pouches. Filter by style or search directly.
          </p>
        </div>
      </header>

      {/* Catalog Search & Controls */}
      <section className="catalog-controls-section">
        <div className="container">
          <div className="controls-box">
            {/* Search Input */}
            <div className="search-bar-wrapper">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search packaging by box style, material, or application (e.g. 'mailer', 'mylar', 'rigid', 'kraft', 'cbd')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                aria-label="Search packaging styles"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search input"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="category-filter-group" role="group" aria-label="Packaging Categories">
              <div className="filter-label-wrap">
                <Filter size={15} className="filter-icon" />
                <span>Categories:</span>
              </div>
              <div className="filter-pills-list">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`filter-pill-btn ${selectedCategory === cat ? "active" : ""}`}
                    onClick={() => handleCategorySelect(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Counter & Active Filters Reset Bar */}
            <div className="results-status-bar">
              <div className="result-counter-badge">
                <span>
                  Showing <strong>{filteredProducts.length}</strong> of {products.length} custom packaging styles
                </span>
                {selectedCategory !== "All" && (
                  <span className="active-filter-badge">
                    Category: {selectedCategory}
                  </span>
                )}
                {searchQuery.trim() && (
                  <span className="active-filter-badge">
                    Query: "{searchQuery}"
                  </span>
                )}
              </div>

              {isFiltered && (
                <button
                  type="button"
                  className="clear-all-filters-btn"
                  onClick={handleClearFilters}
                >
                  <RotateCcw size={14} />
                  <span>Clear All Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Product Grid Render */}
          <div className="catalog-grid-area">
            <ProductGrid 
              products={filteredProducts} 
              emptyMessage={`No packaging styles found matching "${searchQuery}" in category "${selectedCategory}". Try adjusting your keywords or clearing the filter.`}
              onResetFilters={handleClearFilters}
            />
          </div>
        </div>
      </section>

      {/* Custom Engineering Callout */}
      <section className="custom-engineering-banner">
        <div className="container custom-eng-inner">
          <div className="custom-eng-text">
            <div className="eng-badge">
              <Sparkles size={14} />
              <span>CUSTOM DIELINES & SIZES</span>
            </div>
            <h3>Need A Completely Bespoke Box Shape Or Custom Insert?</h3>
            <p>
              We engineer custom dielines, molded pulp trays, laser-cut velvet EVA foam inserts, clear window patches, and unique folding styles tailored to your exact product dimensions.
            </p>
          </div>
          <div className="custom-eng-action">
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Request Custom Dieline Blueprint</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
