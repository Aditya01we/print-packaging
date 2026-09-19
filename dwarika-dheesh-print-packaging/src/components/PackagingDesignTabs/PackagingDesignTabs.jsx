import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Palette, ShieldCheck, Headphones, Truck, ArrowRight, CheckCircle2 } from "lucide-react";
import "./PackagingDesignTabs.css";

const tabsData = [
  {
    id: "design",
    tabLabel: "Custom Packaging Design",
    icon: Palette,
    title: "Custom Packaging Design",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Vibrant Custom Printed Packaging Boxes and Geometry Mockups",
    description:
      "Dwarika Dheesh Packaging is a company that specializes in custom packaging design and production. We offer a wide range of packaging solutions for various industries, including food, cosmetics, electronics, and more. We provide a comprehensive custom packaging design service that begins with understanding the client's requirements and objectives. We work closely with our clients to create a packaging design that not only looks appealing but also functions well and meets the desired specifications. We have a team of skilled designers who use the latest software and technology to create unique and eye-catching packaging designs. We can create custom packaging designs for boxes, bags, labels, and more.",
    features: [
      "Custom dieline templates & precise structural engineering",
      "Complimentary 3D digital visual proofs prior to manufacturing",
      "Full CMYK + Pantone PMS spot color calibration",
      "Vector artwork assistance and resolution pre-flight review"
    ],
    ctaText: "Start Custom Design",
    ctaLink: "/contact"
  },
  {
    id: "worthwhile",
    tabLabel: "Worthwhile Packaging",
    icon: ShieldCheck,
    title: "Worthwhile Packaging",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Premium High Quality Protective Cardboard Packaging Boxes",
    description:
      "High quality doesn't have to mean exorbitant costs. Dwarika Dheesh Packaging is committed to delivering worthwhile, cost-effective packaging solutions without cutting corners on durability or print precision. From short-run prototype packaging for emerging domestic brands to large wholesale production runs, our streamlined domestic manufacturing workflow eliminates unnecessary middlemen and markups. Every box is crafted with premium food-safe or luxury retail grade paperboard, ensuring unmatched structural integrity that protects your products while maximizing return on investment.",
    features: [
      "Tiered wholesale volume discounts on domestic production",
      "Rigid crush-tested fluting and scratch-resistant finishes",
      "Sustainable FSC-certified kraft & recyclable paperboards",
      "Accurate price transparency with no hidden die-cut plate fees"
    ],
    ctaText: "Get Cost Estimate",
    ctaLink: "/contact"
  },
  {
    id: "service",
    tabLabel: "24/7 Customer Service",
    icon: Headphones,
    title: "24/7 Customer Service",
    image: "https://images.unsplash.com/photo-1556742049-0a67e55722ee?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Customer Support and Packaging Consultation Team",
    description:
      "Our dedicated packaging specialists and graphic pre-press teams are available 24/7 to assist you at every step of your packaging journey. Whether you need urgent dieline adjustments, foil finish recommendations, live digital proof reviews, or real-time tracking on your domestic shipment, our knowledgeable team is just a call, email, or live chat away. We believe responsive, attentive customer care is what sets true domestic packaging partners apart.",
    features: [
      "Dedicated packaging account representative for your brand",
      "Instant dieline template generation and dimension guidance",
      "Phone, email, and live messaging support anytime",
      "Rapid revision turnaround on artwork proofs"
    ],
    ctaText: "Speak With A Specialist",
    ctaLink: "/contact"
  },
  {
    id: "delivery",
    tabLabel: "In-Time Delivery",
    icon: Truck,
    title: "In-Time Delivery",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Fast Domestic Packaging Delivery and Warehouse Dispatch",
    description:
      "Speed and reliability are at the core of our domestic manufacturing. With dedicated packaging manufacturing facilities and expedited domestic freight partnerships across the nation, we guarantee on-time delivery on every standard and rush order. Enjoy standard turnaround times as fast as 8 to 10 business days, with express rush production options available for tight product launch deadlines. Free ground shipping is provided across all domestic orders.",
    features: [
      "Standard turnarounds in 8-10 business days",
      "Expedited 4-6 business day rush production available",
      "Free ground shipping across the domestic United States",
      "Live tracking and dispatch notifications from factory floor"
    ],
    ctaText: "Schedule Domestic Shipment",
    ctaLink: "/contact"
  }
];

export default function PackagingDesignTabs() {
  const [activeTabId, setActiveTabId] = useState("design");

  const currentTab = tabsData.find((tab) => tab.id === activeTabId) || tabsData[0];

  return (
    <section className="packaging-tabs-section" aria-label="Why Dwarika Dheesh Packaging Services">
      <div className="container">
        {/* Navigation Tabs Bar */}
        <div className="packaging-tabs-nav" role="tablist">
          {tabsData.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                className={`packaging-tab-btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveTabId(tab.id)}
              >
                <Icon size={18} className="tab-btn-icon" />
                <span>{tab.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Area */}
        <div className="packaging-tab-content-panel" role="tabpanel">
          <div className="packaging-tab-grid">
            <div className="packaging-tab-image-col">
              <div className="tab-image-wrapper">
                <img
                  src={currentTab.image}
                  alt={currentTab.imageAlt}
                  className="tab-content-img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="packaging-tab-text-col">
              <h3 className="tab-content-title">{currentTab.title}</h3>
              <p className="tab-content-desc">{currentTab.description}</p>

              <div className="tab-features-list">
                {currentTab.features.map((feature, idx) => (
                  <div key={idx} className="tab-feature-item">
                    <CheckCircle2 size={18} className="tab-feature-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="tab-actions">
                <Link to={currentTab.ctaLink} className="btn btn-primary">
                  <span>{currentTab.ctaText}</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/products" className="btn btn-secondary">
                  <span>Explore Box Styles</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

