import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./Button.css";

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  type = "button",
  disabled = false,
}) {
  return (
    <motion.button
      type={type}
      className={`dd-button variant-${variant} size-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="btn-sheen-sweep" />
      <span className="btn-content">{children}</span>
      {icon && (
        <span className="btn-icon-wrapper">
          <ArrowUpRight size={15} className="btn-icon" />
        </span>
      )}
    </motion.button>
  );
}