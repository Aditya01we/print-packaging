import React from "react";
import { 
  FileEdit, 
  Eye, 
  Printer, 
  Scissors, 
  ShieldCheck, 
  Truck 
} from "lucide-react";
import "./Process.css";

const steps = [
  {
    step: 1,
    title: "Share Your Specifications",
    description: "Submit your box dimensions, preferred style, material caliper, quantity, and logo artwork.",
    icon: FileEdit
  },
  {
    step: 2,
    title: "Free 3D Proof & Dieline",
    description: "Our design team crafts structural dielines and an interactive 3D digital proof for your final sign-off.",
    icon: Eye
  },
  {
    step: 3,
    title: "Precision Printing & Foiling",
    description: "High-definition CMYK offset printing paired with your choice of foil stamping, spot UV, or soft-touch finishes.",
    icon: Printer
  },
  {
    step: 4,
    title: "Automated Die-Cutting",
    description: "High-speed laser die-cutting, deep crease scoring, and precision gluing with zero die/plate charges.",
    icon: Scissors
  },
  {
    step: 5,
    title: "Quality Control & Audit",
    description: "Every batch is inspected for color accuracy, structural burst strength, and effortless flap interlocking.",
    icon: ShieldCheck
  },
  {
    step: 6,
    title: "Fast Doorstep Delivery",
    description: "Carefully flat-packed to protect corners, shipped free with end-to-end tracking in 8 to 10 business days.",
    icon: Truck
  }
];

export default function Process() {
  return (
    <section className="process-component-section" id="process" aria-label="Dwarika Dheesh Packaging Manufacturing Process">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">OUR STREAMLINED PROCESS</div>
          <h2 className="section-title">6 Simple Steps From Concept To Custom Packaging</h2>
          <p className="section-subtitle">
            We make ordering custom printed boxes, mailers, and mylar pouches effortless. Experience our seamless workflow from complimentary 3D dieline proofs to fast doorstep delivery.
          </p>
        </div>

        {/* Responsive Timeline: Horizontal on Desktop, Vertical on Mobile */}
        <div className="process-timeline">
          <div className="process-timeline-track" aria-hidden="true"></div>
          
          <div className="process-steps-wrapper">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="process-step-node">
                  <div className="step-indicator">
                    <div className="step-icon-circle">
                      <Icon size={20} />
                    </div>
                    <span className="step-number-tag">0{item.step}</span>
                  </div>

                  <div className="step-content">
                    <h3 className="step-title">{item.title}</h3>
                    <p className="step-desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
