import React, { useState, useEffect, useRef } from "react";
import { testimonials } from "../../data/testimonials";
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from "lucide-react";
import "./Testimonials.css";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonials.length;
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  // Autoplay functionality with pause on hover
  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPaused, total]);

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section 
      className="testimonials-component-section" 
      id="testimonials"
      aria-label="Client Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">TESTIMONIALS & CASE STUDIES</div>
          <h2 className="section-title">Trusted By Leading Manufacturing Plants</h2>
          <p className="section-subtitle">
            See how our packaging and printing systems perform in high-demand industrial environments across India and international markets.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="testimonial-carousel-container">
          {/* Main Card */}
          <div className="testimonial-card">
            <div className="testimonial-quote-icon">
              <Quote size={40} />
            </div>

            {/* Star Rating */}
            <div className="testimonial-stars" aria-label={`Rated ${activeTestimonial.rating} out of 5 stars`}>
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#F97316" color="#F97316" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="testimonial-text">
              "{activeTestimonial.quote}"
            </blockquote>

            {/* Machine Purchased Tag */}
            <div className="testimonial-machine-tag">
              <CheckCircle2 size={15} />
              <span>Machine Commissioned: <strong>{activeTestimonial.machinePurchased}</strong></span>
            </div>

            {/* Author Profile Info */}
            <div className="testimonial-author">
              <img
                src={activeTestimonial.avatar}
                alt={activeTestimonial.name}
                className="author-avatar"
                loading="lazy"
              />
              <div className="author-info">
                <span className="author-name">{activeTestimonial.name}</span>
                <span className="author-role">{activeTestimonial.role}, {activeTestimonial.company}</span>
                <span className="author-location">{activeTestimonial.location}</span>
              </div>
            </div>
          </div>

          {/* Controls: Prev / Next Buttons */}
          <div className="testimonial-controls">
            <button
              type="button"
              className="carousel-nav-btn"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Dots */}
            <div className="carousel-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`carousel-dot ${currentIndex === i ? "active" : ""}`}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-nav-btn"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
