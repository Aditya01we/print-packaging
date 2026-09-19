import React from "react";
import { 
  Sparkles, 
  DollarSign, 
  Clock, 
  Layers, 
  Truck, 
  Leaf, 
  PackageCheck, 
  Headphones 
} from "lucide-react";
import "./WhyChooseUs.css";

const reasons = [
  {
    icon: Sparkles,
    title: "Free Design Support",
    description: "Our in-house packaging designers prepare structural dielines and interactive 3D digital mockups so you can inspect your box from every angle before printing."
  },
  {
    icon: DollarSign,
    title: "Zero Die & Plate Fees",
    description: "No hidden setup fees or tooling surcharges. We absorb all cutting die and printing plate expenses to keep your custom packaging affordable."
  },
  {
    icon: Clock,
    title: "Fast 8–10 Days Delivery",
    description: "Industry-leading production speeds. Standard custom orders ship within 8 to 10 business days, with rush delivery available in 6 to 8 days."
  },
  {
    icon: Layers,
    title: "Premium Custom Finishes",
    description: "Differentiate your brand with hot metallic foil stamping, velvet soft-touch lamination, raised spot gloss UV, deep debossing, and clear window cutouts."
  },
  {
    icon: Truck,
    title: "Free Nationwide Shipping",
    description: "Enjoy 100% free doorstep domestic shipping across the United States with real-time tracking, fast turnaround, and zero freight surcharges."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Recyclable",
    description: "We champion sustainability using FSC-certified recycled paperboard, biodegradable unbleached kraft, and non-toxic soy/water-based printing inks."
  },
  {
    icon: PackageCheck,
    title: "Low MOQs & Wholesale Rates",
    description: "Order as few as 100 custom boxes or scale to tens of thousands of units with aggressive factory-direct volume tier discounts."
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    description: "Work with a dedicated packaging specialist who knows your product dimensions and guides your project from initial concept to delivery."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section" id="why-choose-us" aria-label="Why Choose Dwarika Dheesh Packaging">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">THE DWARIKA DHEESH ADVANTAGE</div>
          <h2 className="section-title">Why Leading Brands Trust Dwarika Dheesh Packaging</h2>
          <p className="section-subtitle">
            From free 3D design assistance and zero die fees to rapid 8-10 days turnaround and free delivery, discover why businesses choose us for their custom boxes and mylar pouches.
          </p>
        </div>

        <div className="why-choose-grid">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="why-card">
                <div className="why-card-top">
                  <div className="why-icon-box">
                    <Icon size={22} />
                  </div>
                  <span className="why-card-num">0{index + 1}</span>
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
