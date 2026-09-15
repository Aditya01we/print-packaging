import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Stats.css";

const stats = [
  { value: 7, suffix: "+", label: "Packaging Categories" },
  { value: 4, suffix: "+", label: "Core Capabilities" },
  { value: 100, suffix: "%", label: "Custom Solutions" },
];

const useCountUp = (target, duration = 1500) => {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const update = () => {
      let start = 0;
      const increment = target / (duration / 16);

      const tick = () => {
        start += increment;
        if (start >= target) {
          setValue(target);
          return;
        }
        setValue(start);
        requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    if (!started.current) {
      started.current = true;
      update();
    }
  }, [target, duration]);

  return value;
};

const AnimatedStat = ({ item, index }) => {
  const counted = useCountUp(item.value, 1200 + index * 250);

  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <strong>
        {Math.round(counted)}
        {item.suffix}
      </strong>
      <span>{item.label}</span>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <div className="stats-wrap">
      <div className="container stats-grid">
        {stats.map((item, index) => (
          <AnimatedStat key={item.label} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
