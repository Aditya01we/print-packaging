import React, { useState, useEffect, useCallback } from "react";
import { galleryImages } from "../../data/gallery";
import { X, ChevronLeft, ChevronRight, Maximize2, Tag } from "lucide-react";
import "./Gallery.css";

const categories = ["All", "Packaging Machinery", "Filling Machinery", "Sealing Machinery", "Labeling Machinery", "Printing Machinery", "Assembly Floor", "Quality Testing"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev + 1) % filteredImages.length);
  }, [activeImageIndex, filteredImages.length]);

  const showPrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  }, [activeImageIndex, filteredImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, showNext, showPrev]);

  return (
    <section className="gallery-component-section" id="gallery" aria-label="Machinery and Facility Gallery">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">FACTORY & PRODUCTION GALLERY</div>
          <h2 className="section-title">Precision Engineering In Action</h2>
          <p className="section-subtitle">
            Explore our assembly bays, CNC manufacturing floor, trial runs, and finished packaging machines ready for client dispatch. Click any image for high-resolution preview.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="gallery-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`gallery-filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Individual Image Grid */}
        <div className="gallery-grid">
          {filteredImages.map((img, idx) => (
            <div 
              key={img.id} 
              className="gallery-item"
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(idx)}
              aria-label={`Open preview of ${img.title}`}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={img.src}
                  alt={img.title}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-hover-overlay">
                  <div className="gallery-hover-icon">
                    <Maximize2 size={22} />
                  </div>
                  <span className="gallery-hover-cat">{img.category}</span>
                  <h4 className="gallery-hover-title">{img.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImageIndex !== null && filteredImages[activeImageIndex] && (
          <div className="gallery-lightbox" role="dialog" aria-modal="true">
            <div className="lightbox-backdrop" onClick={closeLightbox}></div>

            <div className="lightbox-content">
              {/* Close Button */}
              <button 
                type="button" 
                className="lightbox-btn-close" 
                onClick={closeLightbox}
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>

              {/* Prev Button */}
              <button 
                type="button" 
                className="lightbox-btn-nav lightbox-btn-prev" 
                onClick={showPrev}
                aria-label="Previous Image"
              >
                <ChevronLeft size={30} />
              </button>

              {/* Main Image View */}
              <div className="lightbox-image-holder">
                <img
                  src={filteredImages[activeImageIndex].src}
                  alt={filteredImages[activeImageIndex].title}
                  className="lightbox-main-img"
                />
                <div className="lightbox-caption">
                  <div className="lightbox-caption-meta">
                    <span className="lightbox-cat-badge">
                      <Tag size={12} />
                      {filteredImages[activeImageIndex].category}
                    </span>
                    <span className="lightbox-counter">
                      {activeImageIndex + 1} of {filteredImages.length}
                    </span>
                  </div>
                  <h3 className="lightbox-caption-title">
                    {filteredImages[activeImageIndex].title}
                  </h3>
                  <p className="lightbox-caption-desc">
                    {filteredImages[activeImageIndex].description}
                  </p>
                </div>
              </div>

              {/* Next Button */}
              <button 
                type="button" 
                className="lightbox-btn-nav lightbox-btn-next" 
                onClick={showNext}
                aria-label="Next Image"
              >
                <ChevronRight size={30} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
