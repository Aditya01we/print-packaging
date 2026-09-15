import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Sparkles,
  Building2,
  User,
  Phone,
  Mail,
  Box,
  Layers,
  MessageSquare,
} from "lucide-react";
import "./ContactForm.css";

const categories = [
  "Pharmaceutical",
  "Masala & Spices",
  "Chocolate & Confectionery",
  "Cigarette Hard Boxes",
  "Biscuit & Bakery",
  "Foiling & Embossing",
  "Corrugated & Shipping Boxes",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    category: "",
    quantity: "",
    requirement: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      category: "",
      quantity: "",
      requirement: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="contact-form-card">
      <div className="form-card-glow" />
      <div className="form-card-grid" />

      {/* Card Header Strip */}
      <div className="form-card-header">
        <div className="header-meta">
          <span className="meta-badge">
            <span className="badge-pulse" />
            DIRECT B2B DESK
          </span>
          <span className="meta-spec">SPEC // ENQ-2026</span>
        </div>
        <h3 className="form-title">Request a Production Quote</h3>
        <p className="form-subtitle">
          Submit your structural specifications, batch size, and finishing requirements.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success-message"
            className="form-success-state"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.4 }}
          >
            <div className="success-icon-wrapper">
              <CheckCircle2 size={38} className="success-icon" />
            </div>
            <h4>Enquiry Registered</h4>
            <p>
              Thank you. Your packaging enquiry has been received by the DWARIKA DHEESH technical estimation team.
            </p>
            <div className="success-meta-box">
              <span>Category: {formData.category || "Custom Packaging"}</span>
              <span>Estimated Response: Within 24 Business Hours</span>
            </div>
            <button type="button" className="btn-reset-form" onClick={handleReset}>
              Submit Another Requirement
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="active-form"
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="form-grid-2col">
              {/* Name */}
              <div className="form-group">
                <label htmlFor="form-name">Contact Person *</label>
                <div className="input-wrapper">
                  <User size={15} className="input-icon" />
                  <input
                    id="form-name"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="form-group">
                <label htmlFor="form-company">Company / Brand</label>
                <div className="input-wrapper">
                  <Building2 size={15} className="input-icon" />
                  <input
                    id="form-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                  />
                </div>
              </div>
            </div>

            <div className="form-grid-2col">
              {/* Phone */}
              <div className="form-group">
                <label htmlFor="form-phone">Phone Number *</label>
                <div className="input-wrapper">
                  <Phone size={15} className="input-icon" />
                  <input
                    id="form-phone"
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 Mobile / Direct"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="form-email">Work Email *</label>
                <div className="input-wrapper">
                  <Mail size={15} className="input-icon" />
                  <input
                    id="form-email"
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                  />
                </div>
              </div>
            </div>

            <div className="form-grid-2col">
              {/* Packaging Category */}
              <div className="form-group">
                <label htmlFor="form-category">Packaging Category *</label>
                <div className="input-wrapper select-wrapper">
                  <Box size={15} className="input-icon" />
                  <select
                    id="form-category"
                    required
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    {categories.map((cat, idx) => (
                      <option key={idx} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Target Quantity */}
              <div className="form-group">
                <label htmlFor="form-quantity">Estimated Order Quantity</label>
                <div className="input-wrapper">
                  <Layers size={15} className="input-icon" />
                  <input
                    id="form-quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 10,000 units"
                  />
                </div>
              </div>
            </div>

            {/* Requirement / Message */}
            <div className="form-group full-width">
              <label htmlFor="form-requirement">Specifications & Requirements *</label>
              <div className="input-wrapper textarea-wrapper">
                <MessageSquare size={15} className="input-icon textarea-icon" />
                <textarea
                  id="form-requirement"
                  required
                  rows={4}
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  placeholder="Detail dimensional specs, substrate/GSM, coating (Foil, UV, Texture), and deadlines..."
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="form-footer">
              <span className="privacy-note">
                Strict B2B NDA standards maintained across tooling & artworks.
              </span>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                <Sparkles size={15} />
                <span>{isSubmitting ? "Transmitting..." : "Send Packaging Enquiry"}</span>
                <Send size={14} className="send-icon" />
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}