import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { company } from "../../data/company";
import "./Contact.css";

const contactItems = [
  { label: "Call", value: company.phone || "Add phone number", icon: Phone },
  { label: "Email", value: company.email || "Add email", icon: Mail },
  { label: "WhatsApp", value: company.whatsapp || "Add WhatsApp number", icon: MessageCircle },
  { label: "Business Enquiry", value: company.businessEnquiry || "Add business enquiry detail", icon: Send },
];

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-shell">
        <motion.div
          className="contact-copy"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Contact</p>
          <h2>{company.name}</h2>
          <p className="tagline">{company.tagline}</p>
        </motion.div>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {contactItems.map(({ label, value, icon: Icon }) => (
            <div key={label} className="contact-card">
              <span className="contact-icon"><Icon size={16} /></span>
              <div>
                <small>{label}</small>
                <p>{value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
