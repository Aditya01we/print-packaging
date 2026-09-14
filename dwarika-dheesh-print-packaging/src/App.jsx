import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Menu,
  Package,
  Phone,
  Send,
  X,
} from "lucide-react";

import service1 from "./assets/service-1.jpg";
import service2 from "./assets/service-2.jpg";
import service3 from "./assets/service-3.jpg";
import service4 from "./assets/service-4.jpg";

const services = [
  {
    title: "Folding / Mono Cartons",
    short: "Folding / Mono cartons",
    image: service1,
  },
  {
    title: "Offset Printing",
    short: "Offset Printing for U.V + texture",
    image: service2,
  },
  {
    title: "Foil Printing",
    short: "Foil printing — all types",
    image: service3,
  },
  {
    title: "Corrugated Boxes",
    short: "Corrugated boxes and printing",
    image: service4,
  },
];

const capabilities = [
  "Folding / Mono Cartons",
  "Offset Printing for U.V + Texture",
  "Foil Printing",
  "Corrugated Boxes and Printing",
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "Share your packaging requirement.",
  },
  {
    number: "02",
    title: "Print",
    text: "Choose the appropriate print solution.",
  },
  {
    number: "03",
    title: "Finish",
    text: "Add finishing and packaging details.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "Move from approved work to production.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            DD
          </span>

          <span>
            <strong>DWARIKA DHEESH</strong>
            <small>PRINT PACKAGING</small>
          </span>
        </a>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        <nav
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#solutions" onClick={closeMenu}>
            Solutions
          </a>

          <a href="#process" onClick={closeMenu}>
            Process
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Get a Quote
            <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main>

        {/* ================= HERO ================= */}

        <section
          className="hero"
          id="home"
        >
          <div className="hero-shape hero-shape-one" />
          <div className="hero-shape hero-shape-two" />

          <div className="container hero-grid">

            <motion.div
              className="hero-copy"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <div className="eyebrow">
                <span />
                PRINT • PACKAGING • MANUFACTURING
              </div>

              <h1>
                Packaging that
                <span> makes an impact.</span>
              </h1>

              <p className="hero-text">
                One destination for all your packaging
                needs — from cartons and offset printing
                to foil printing and corrugated packaging.
              </p>

              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href="#solutions"
                >
                  Explore Solutions
                  <ArrowRight size={18} />
                </a>

                <a
                  className="btn btn-light"
                  href="#contact"
                >
                  Talk to Us
                </a>
              </div>

              <div className="hero-points">
                <span>
                  <CheckCircle2 size={17} />
                  Manufacturing focused
                </span>

                <span>
                  <CheckCircle2 size={17} />
                  Custom packaging
                </span>
              </div>
            </motion.div>

            {/* HERO IMAGE */}

            <motion.div
              className="hero-visual"
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
            >
              <div className="visual-card">

                <div className="visual-top">
                  <span>
                    OUR SOLUTIONS
                  </span>

                  <Package size={21} />
                </div>

                <img
                  src={service2}
                  alt="Dwarika Dheesh printing packaging"
                />

                <div className="visual-bottom">

                  <div>
                    <span className="visual-label">
                      DWARIKA DHEESH
                    </span>

                    <h3>
                      Print Packaging
                    </h3>
                  </div>

                  <span className="visual-arrow">
                    <ArrowRight size={20} />
                  </span>

                </div>

              </div>

              <div className="floating-card">

                <Factory size={20} />

                <div>
                  <strong>
                    Print Packaging
                  </strong>

                  <span>
                    Manufacturing
                  </span>
                </div>

              </div>

            </motion.div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section
          className="intro section"
          id="about"
        >
          <div className="container two-col">

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="section-kicker">
                WHO WE ARE
              </div>

              <h2>
                Built for better
                <span> packaging.</span>
              </h2>
            </motion.div>

            <motion.div
              className="intro-text"
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <p>
                Dwarika Dheesh Print Packaging is focused
                on print and packaging manufacturing,
                bringing multiple packaging capabilities
                together under one destination.
              </p>

              <p>
                From printing to packaging solutions,
                the website presents the company's
                capabilities in a clean and simple way.
              </p>
            </motion.div>

          </div>
        </section>

        {/* ================= SOLUTIONS ================= */}

        <section
          className="solutions section"
          id="solutions"
        >
          <div className="container">

            <div className="section-heading">

              <div>
                <div className="section-kicker">
                  OUR SOLUTIONS
                </div>

                <h2>
                  Print & packaging
                  <span> solutions.</span>
                </h2>
              </div>

              <p>
                Explore our printing and packaging
                capabilities in one place.
              </p>

            </div>

            <div className="service-grid">

              {services.map((service, index) => (
                <motion.article
                  className="service-card"
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >

                  <div className="service-image">

                    <img
                      src={service.image}
                      alt={service.title}
                    />

                    <span className="service-number">
                      0{index + 1}
                    </span>

                  </div>

                  <div className="service-content">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.short}
                    </p>

                    <a href="#contact">
                      Enquire
                      <ArrowRight size={16} />
                    </a>

                  </div>

                </motion.article>
              ))}

            </div>

          </div>
        </section>

        {/* ================= CAPABILITIES ================= */}

        <section className="capability section">

          <div className="container capability-box">

            <div className="capability-copy">

              <div className="section-kicker light">
                WHY CHOOSE US
              </div>

              <h2>
                Everything your
                <span> packaging needs.</span>
              </h2>

              <p>
                A simple, direct and business-focused
                presentation of the company's printing
                and packaging capabilities.
              </p>

              <a
                className="btn btn-white"
                href="#contact"
              >
                Start an Enquiry
                <Send size={17} />
              </a>

            </div>

            <div className="capability-list">

              {capabilities.map((item) => (
                <div
                  className="capability-item"
                  key={item}
                >
                  <CheckCircle2 size={21} />

                  <span>
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ================= PROCESS ================= */}

        <section
          className="process section"
          id="process"
        >
          <div className="container">

            <div className="section-heading centered">

              <div>
                <div className="section-kicker">
                  OUR APPROACH
                </div>

                <h2>
                  Simple process.
                  <span> Clear results.</span>
                </h2>
              </div>

              <p>
                A straightforward approach from
                requirement to production.
              </p>

            </div>

            <div className="process-grid">

              {processSteps.map((step) => (
                <div
                  className="process-item"
                  key={step.number}
                >

                  <span>
                    {step.number}
                  </span>

                  <div>
                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.text}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section
          className="cta section"
          id="contact"
        >

          <div className="container cta-box">

            <div>

              <div className="section-kicker">
                LET'S WORK TOGETHER
              </div>

              <h2>
                Have a packaging
                <span> requirement?</span>
              </h2>

              <p>
                Tell us what you need and our team can
                discuss the right printing or packaging
                solution with you.
              </p>

            </div>

            <div className="contact-actions">

              <a
                className="btn btn-primary"
                href="tel:+910000000000"
              >
                <Phone size={18} />
                Call Us
              </a>

              <a
                className="btn btn-dark"
                href="mailto:info@example.com"
              >
                <Send size={18} />
                Send Enquiry
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container footer-inner">

          <div className="footer-brand">

            <div className="brand-mark">
              DD
            </div>

            <div>
              <strong>
                DWARIKA DHEESH
              </strong>

              <span>
                PRINT PACKAGING
              </span>
            </div>

          </div>

          <p>
            One Destination For All Your Packaging Needs.
          </p>

          <div className="footer-links">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#solutions">
              Solutions
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;