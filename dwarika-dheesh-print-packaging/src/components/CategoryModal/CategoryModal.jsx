import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import "./CategoryModal.css";

const CategoryModal = ({ category, onClose }) => {
  return (
    <AnimatePresence>
      {category && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="category-modal"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="modal-close" onClick={onClose} aria-label="Close category details">
              <X size={18} />
            </button>

            <div className="modal-visual">
              <div className="modal-visual-glow" />
              {category.image && (
                <img className="modal-product-image" src={category.image} alt={`${category.title} packaging`} />
              )}
              <span className="modal-visual-tag">{category.number}</span>
            </div>

            <div className="modal-copy">
              <p className="modal-eyebrow">{category.title}</p>
              <h3>{category.title}</h3>
              <p className="modal-description">{category.description}</p>

              <div className="modal-grid">
                <div>
                  <h4>Packaging Types</h4>
                  <ul>
                    {category.packagingTypes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Printing Options</h4>
                  <ul>
                    {category.printingOptions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Finishing Options</h4>
                  <ul>
                    {category.finishingOptions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Applications</h4>
                  <ul>
                    {category.applications.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CategoryModal;
