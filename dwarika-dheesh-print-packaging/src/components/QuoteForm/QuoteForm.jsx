import React from "react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { categories } from "../../data/categories";
import "./QuoteForm.css";

const initialState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  packagingCategory: "",
  requirement: "",
  quantity: "",
  message: "",
};

const QuoteForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const categoryOptions = useMemo(
    () => categories.map((category) => category.title),
    [],
  );

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.company.trim()) nextErrors.company = "Company is required.";
    if (!formData.phone.trim()) nextErrors.phone = "Phone is required.";
    if (!formData.email.trim()) nextErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = "Email is invalid.";
    if (!formData.packagingCategory) nextErrors.packagingCategory = "Select a category.";
    if (!formData.requirement.trim()) nextErrors.requirement = "Requirement is required.";
    if (!formData.quantity.trim()) nextErrors.quantity = "Quantity is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    const subject = encodeURIComponent(`Packaging enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCategory: ${formData.packagingCategory}\nRequirement: ${formData.requirement}\nQuantity: ${formData.quantity}\nMessage: ${formData.message}`,
    );
    window.location.href = `mailto:dwarikadheeshprint@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFormData(initialState);
    setErrors({});
  };

  return (
    <motion.div
      className="quote-form-wrapper"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="quote-copy">
        <p className="eyebrow">Request a quote</p>
        <h2>Tell us about your packaging requirement.</h2>
        <p>
          Share your requirement and we’ll help with the right print format, finish, and production solution.
        </p>
      </div>

      <form className="quote-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <label>
            <span>Name</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <small>{errors.name}</small>}
          </label>

          <label>
            <span>Company</span>
            <input type="text" name="company" value={formData.company} onChange={handleChange} />
            {errors.company && <small>{errors.company}</small>}
          </label>

          <label>
            <span>Phone</span>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <small>{errors.phone}</small>}
          </label>

          <label>
            <span>Email</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <small>{errors.email}</small>}
          </label>

          <label>
            <span>Packaging Category</span>
            <select name="packagingCategory" value={formData.packagingCategory} onChange={handleChange}>
              <option value="">Select category</option>
              {categoryOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.packagingCategory && <small>{errors.packagingCategory}</small>}
          </label>

          <label>
            <span>Requirement</span>
            <input type="text" name="requirement" value={formData.requirement} onChange={handleChange} />
            {errors.requirement && <small>{errors.requirement}</small>}
          </label>

          <label className="full-width">
            <span>Quantity</span>
            <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} />
            {errors.quantity && <small>{errors.quantity}</small>}
          </label>

          <label className="full-width">
            <span>Message</span>
            <textarea name="message" rows="4" value={formData.message} onChange={handleChange} />
          </label>
        </div>

        <button type="submit" className="submit-btn">Send Enquiry</button>

        {submitted && (
          <p className="success-message">Thank you. Your packaging enquiry has been received.</p>
        )}
      </form>
    </motion.div>
  );
};

export default QuoteForm;
