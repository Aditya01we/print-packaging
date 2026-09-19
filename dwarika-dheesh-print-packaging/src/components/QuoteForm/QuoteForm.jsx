import React, { useState, useEffect } from "react";
import { products } from "../../data/products";
import { CheckCircle, Send, AlertCircle, RefreshCw, Loader2, Info } from "lucide-react";
import "./QuoteForm.css";

/**
 * Isolated submit handler: ready for future backend/API or CRM wiring.
 * Currently simulates a brief local async validation without fake external HTTP calls.
 */
async function processFrontendInquirySubmission(formData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, timestamp: new Date().toISOString() });
    }, 700);
  });
}

export default function QuoteForm({ preselectedMachineId = "", className = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    machineRequired: preselectedMachineId || "",
    quantity: "250",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    if (preselectedMachineId) {
      setFormData((prev) => ({ ...prev, machineRequired: preselectedMachineId }));
    }
  }, [preselectedMachineId]);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "fullName":
        if (!value.trim()) error = "Please enter your name.";
        break;
      case "email":
        if (!value.trim()) {
          error = "Please enter your email address.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          error = "Please enter a valid email address.";
        }
        break;
      case "phone":
        if (!value.trim()) {
          error = "Please enter your phone number.";
        } else if (!/^[+0-9\s-]{7,18}$/.test(value.trim())) {
          error = "Please enter a valid phone number.";
        }
        break;
      case "machineRequired":
        if (!value.trim()) {
          error = "Please select the packaging style required.";
        }
        break;
      case "message":
        if (!value.trim()) {
          error = "Please enter your packaging dimensions or project details.";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all required fields
    const validationErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) validationErrors[key] = err;
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await processFrontendInquirySubmission(formData);
      setSubmittedData({ ...formData });
      setIsSuccess(true);
      // Clear the form
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        machineRequired: "",
        quantity: "250",
        message: ""
      });
    } catch (err) {
      setErrors({ form: "An unexpected error occurred during submission. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmittedData(null);
    setErrors({});
  };

  return (
    <div className={`quote-form-container ${className}`}>
      {/* Transparency Note regarding frontend only */}
      <div className="quote-form-disclaimer" role="note">
        <Info size={16} className="disclaimer-icon" />
        <span>
          <strong>Instant Packaging Quote Desk:</strong> Zero die & plate fees • Free 3D digital proof with every inquiry. Validated locally on the client.
        </span>
      </div>

      {isSuccess ? (
        <div className="quote-success-card" role="status" aria-live="polite">
          <div className="success-icon-circle">
            <CheckCircle size={44} />
          </div>
          <h3 className="success-title">Quote Request Submitted Successfully!</h3>
          <p className="success-message">
            Thank you! Your inquiry has been submitted successfully. Our team will contact you shortly with a free 3D digital mockup and wholesale quote.
          </p>

          {submittedData && (
            <div className="submitted-summary">
              <div className="summary-row">
                <span className="summary-label">Name:</span>
                <span className="summary-val">{submittedData.fullName}</span>
              </div>
              {submittedData.companyName && (
                <div className="summary-row">
                  <span className="summary-label">Company:</span>
                  <span className="summary-val">{submittedData.companyName}</span>
                </div>
              )}
              <div className="summary-row">
                <span className="summary-label">Packaging Style:</span>
                <span className="summary-val">
                  {products.find((p) => p.id === submittedData.machineRequired)?.name || submittedData.machineRequired}
                </span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Quantity:</span>
                <span className="summary-val">{submittedData.quantity} unit(s)</span>
              </div>
            </div>
          )}

          <button type="button" onClick={handleReset} className="btn btn-primary success-new-btn">
            <RefreshCw size={15} />
            <span>Submit Another Packaging Quote</span>
          </button>
        </div>
      ) : (
        <form className="quote-form-form" onSubmit={handleSubmit} noValidate>
          {errors.form && (
            <div className="form-global-error">
              <AlertCircle size={16} />
              <span>{errors.form}</span>
            </div>
          )}

          <div className="form-grid-2">
            {/* Full Name */}
            <div className={`form-group ${errors.fullName ? "has-error" : ""}`}>
              <label htmlFor="fullName">
                Full Name <span className="req">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="e.g. John Doe"
                value={formData.fullName}
                onChange={handleChange}
                disabled={isSubmitting}
                autoComplete="name"
              />
              {errors.fullName && <span className="inline-error">{errors.fullName}</span>}
            </div>

            {/* Company Name */}
            <div className="form-group">
              <label htmlFor="companyName">Brand / Company Name</label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                placeholder="e.g. Apex Skincare Studio"
                value={formData.companyName}
                onChange={handleChange}
                disabled={isSubmitting}
                autoComplete="organization"
              />
            </div>
          </div>

          <div className="form-grid-2">
            {/* Email Address */}
            <div className={`form-group ${errors.email ? "has-error" : ""}`}>
              <label htmlFor="email">
                Email Address <span className="req">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="e.g. contact@yourbrand.com"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                autoComplete="email"
              />
              {errors.email && <span className="inline-error">{errors.email}</span>}
            </div>

            {/* Phone Number */}
            <div className={`form-group ${errors.phone ? "has-error" : ""}`}>
              <label htmlFor="phone">
                Phone Number <span className="req">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="e.g. 870 744 8331"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                autoComplete="tel"
              />
              {errors.phone && <span className="inline-error">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-grid-2">
            {/* Packaging Style Required */}
            <div className={`form-group ${errors.machineRequired ? "has-error" : ""}`}>
              <label htmlFor="machineRequired">
                Packaging Style Required <span className="req">*</span>
              </label>
              <select
                id="machineRequired"
                name="machineRequired"
                value={formData.machineRequired}
                onChange={handleChange}
                disabled={isSubmitting}
              >
                <option value="">Select Custom Box or Mylar Style</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.category})
                  </option>
                ))}
                <option value="custom-packaging-box">Custom Unique Shape / Bespoke Box Style</option>
              </select>
              {errors.machineRequired && <span className="inline-error">{errors.machineRequired}</span>}
            </div>

            {/* Quantity */}
            <div className="form-group">
              <label htmlFor="quantity">Quantity (Low MOQ)</label>
              <select
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                disabled={isSubmitting}
              >
                <option value="100">100 Boxes (Minimum Order)</option>
                <option value="250">250 Boxes</option>
                <option value="500">500 Boxes (Popular)</option>
                <option value="1000">1,000 Boxes (Wholesale Tier 1)</option>
                <option value="2500">2,500 Boxes (Wholesale Tier 2)</option>
                <option value="5000">5,000+ Boxes (Enterprise Tier)</option>
              </select>
            </div>
          </div>

          {/* Message / Specifications */}
          <div className={`form-group ${errors.message ? "has-error" : ""}`}>
            <label htmlFor="message">
              Box Dimensions & Custom Finishes <span className="req">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Specify your dimensions (L × W × D in inches or cm), preferred material (corrugated, kraft, white cardstock, rigid), and special finishes (gold foil, spot UV, matte lamination, window cutout)..."
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.message && <span className="inline-error">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary quote-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Preparing Free 3D Mockup & Quote...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Get Instant Custom Packaging Quote</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
