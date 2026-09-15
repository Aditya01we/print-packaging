import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import { categories } from "../../data/categories";
import "./Categories.css";

const Categories = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="categories" className="section categories-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Packaging categories</p>
          <h2>Packaging Categories</h2>
          <p>
            Packaging solutions for diverse product and manufacturing requirements.
          </p>
        </motion.div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <CategoryCard category={category} onSelect={setSelected} />
            </motion.div>
          ))}
        </div>
      </div>

      <CategoryModal category={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Categories;
