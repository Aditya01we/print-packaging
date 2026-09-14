import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  ChevronDown,
  Factory,
  Menu,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
  X,
  Boxes,
  Printer,
  Phone,
  Mail,
  CheckCircle2,
  MessageCircle,
  MoveUpRight,
} from "lucide-react";

import service1 from "./assets/service-1.jpg";
import service2 from "./assets/service-2.jpg";
import service3 from "./assets/service-3.jpg";
import service4 from "./assets/service-4.jpg";

const services = [
  {
    title: "Folding / Mono Cartons",
    image: service1,
    icon: Boxes,
    tag: "Cartons",
  },
  {
    title: "Offset Printing for UV + Texture",
    image: service2,
    icon: Printer,
    tag: "Printing",
  },
  {
    title: "Foil Printing — All Types",
    image: service3,
    icon: Sparkles,
    tag: "Finishing",
  },
  {
    title: "Corrugated Boxes & Printing",
    image: service4,
    icon: PackageCheck,
    tag: "Corrugated",
  },
];

const capabilities = [
  [
    "Custom Packaging",
    "Packaging manufactured around your product, dimensions and brand requirements.",
  ],
  [
    "Print & Finish",
    "Offset printing with premium finishing options including UV, texture and foil effects.",
  ],
  [
    "Corrugated Solutions",
    "Strong corrugated boxes with printing for practical transport and presentation needs.",
  ],
  [
    "One Packaging Destination",
    "A focused packaging partner covering cartons, printing, finishing and boxes.",
  ],
];

const steps = [
  [
    "01",
    "Discuss",
    "Share your product, packaging requirement and preferred finish.",
  ],
  [
    "02",
    "Design",
    "Finalize the box structure, artwork and print/finish direction.",
  ],
  [
    "03",
    "Produce",
    "Manufacturing and printing are handled with a quality-focused workflow.",
  ],
  [
    "04",
    "Deliver",
    "Your finished packaging is prepared for use across your product line.",
  ],
];

function App() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredServices = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) {
      return services;
    }

    return services.filter((service) =>
      `${service.title} ${service.tag}`.toLowerCase().includes(q)
    );
  }, [query]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <div className="site">

      {/* TOP BAR */}
      <div className="topline">
        <div className="container topline-inner">

          <span>
            <Factory size={14} />
            Manufacturing
          </span>

          <span>
            One Destination For All Your Packaging Needs
          </span>

          <span>
            Quality • Print • Packaging
          </span>

        </div>
      </div>


      {/* HEADER */}
      <header className="header">

        <div className="container header-main">

          {/* BRAND */}
          <button
            className="brand"
            onClick={() => scrollTo("home")}
            aria-label="Go to home"
          >
            <span className="brand-mark">
              DD
            </span>

            <span>
              <b>DWARIKA DHEESH</b>
              <small>PRINT PACKAGING</small>
            </span>
          </button>


          {/* SEARCH */}
          <div className="search-wrap">

            <Search size={18} />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search packaging solutions..."
            />

            <button
              onClick={() => scrollTo("services")}
            >
              Search
            </button>

          </div>


          {/* CONTACT */}
          <div className="header-contact">

            <span>
              <MessageCircle size={18} />
              WhatsApp / Call
            </span>

            <span>
              <Mail size={18} />
              Business Enquiries
            </span>

          </div>


          {/* MOBILE MENU */}
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>


        {/* NAVIGATION */}
        <nav className={`nav ${open ? "nav-open" : ""}`}>

          <div className="container nav-inner">

            <button onClick={() => scrollTo("services")}>
              Packaging Solutions
              <ChevronDown size={15} />
            </button>

            <button onClick={() => scrollTo("services")}>
              Our Services
              <ChevronDown size={15} />
            </button>

            <button onClick={() => scrollTo("capabilities")}>
              Capabilities
            </button>

            <button onClick={() => scrollTo("process")}>
              Process
            </button>

            <button onClick={() => scrollTo("about")}>
              About Us
            </button>

            <button
              className="quote-btn"
              onClick={() => scrollTo("contact")}
            >
              Get A Quote
              <ArrowRight size={16} />
            </button>

          </div>

        </nav>

      </header>


      <main>

        {/* HERO */}
        <section
          id="home"
          className="hero"
        >

          <div className="hero-pattern" />

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
                duration: 0.6,
              }}
            >

              <div className="eyebrow">
                <span />
                PRINT • PACKAGING • FINISHING
              </div>


              <h1>
                Packaging that makes your{" "}
                <em>product</em> stand out.
              </h1>


              <p>
                From folding and mono cartons to offset printing,
                foil finishing and corrugated boxes — Dwarika
                Dheesh Print Packaging brings your packaging
                requirement together in one destination.
              </p>


              <div className="hero-actions">

                <button
                  className="primary"
                  onClick={() => scrollTo("contact")}
                >
                  Discuss Your Requirement
                  <ArrowRight size={18} />
                </button>


                <button
                  className="text-btn"
                  onClick={() => scrollTo("services")}
                >
                  Explore Services
                  <MoveUpRight size={17} />
                </button>

              </div>


              <div className="hero-proof">

                <span>
                  <CheckCircle2 />
                  Custom-focused
                </span>

                <span>
                  <CheckCircle2 />
                  Print & finishing
                </span>

                <span>
                  <CheckCircle2 />
                  Packaging solutions
                </span>

              </div>

            </motion.div>


            {/* HERO ART */}
            <motion.div
              className="hero-art"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
            >

              <div className="art-card art-one">
                <span>PRINT</span>
                <b>PREMIUM</b>
                <small>FINISHING</small>
              </div>


              <div className="art-card art-two">
                <span>PACK</span>
                <b>SMART</b>
                <small>DESIGN</small>
              </div>


              <div className="art-card art-three">
                <span>BUILD</span>
                <b>STRONG</b>
                <small>BOXES</small>
              </div>


              <div className="art-label">

                <span>01</span>

                <div>
                  <b>One Destination</b>
                  <small>
                    For All Your Packaging Needs
                  </small>
                </div>

              </div>

            </motion.div>

          </div>

        </section>


        {/* BENEFITS */}
        <section className="benefits">

          <div className="container benefit-grid">

            {[
              [
                Factory,
                "Manufacturing",
                "Packaging made with a production-first approach.",
              ],
              [
                Sparkles,
                "Premium Finishing",
                "UV, texture and foil printing options.",
              ],
              [
                PackageCheck,
                "Custom Solutions",
                "Built around your product and requirement.",
              ],
              [
                ShieldCheck,
                "Quality Focused",
                "Attention to print, finish and final presentation.",
              ],
            ].map(([Icon, title, text], index) => (

              <div
                className={`benefit benefit-${index}`}
                key={title}
              >

                <Icon />

                <div>

                  <b>{title}</b>

                  <span>{text}</span>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* SERVICES */}
        <section
          id="services"
          className="section services-section"
        >

          <div className="container">

            <div className="section-heading centered">

              <span className="kicker">
                WHAT WE DO
              </span>

              <h2>
                Our Packaging{" "}
                <span>Solutions</span>
              </h2>

              <p>
                Focused capabilities for printed packaging,
                premium finishing and corrugated box requirements.
              </p>

            </div>


            <div className="service-grid">

              <AnimatePresence mode="popLayout">

                {filteredServices.map((service, index) => {

                  const Icon = service.icon;

                  return (
                    <motion.article
                      className="service-card"
                      key={service.title}
                      layout
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                    >

                      <div className="service-image">

                        <img
                          src={service.image}
                          alt={service.title}
                        />

                        <span>
                          <Icon size={16} />
                          {service.tag}
                        </span>

                      </div>


                      <div className="service-content">

                        <small>
                          0{index + 1}
                        </small>

                        <h3>
                          {service.title}
                        </h3>

                        <button
                          onClick={() => scrollTo("contact")}
                        >
                          Enquire
                          <ArrowRight size={15} />
                        </button>

                      </div>

                    </motion.article>
                  );

                })}

              </AnimatePresence>

            </div>


            {filteredServices.length === 0 && (

              <div className="empty">
                No matching service found.
                Try "carton", "printing", "foil"
                or "corrugated".
              </div>

            )}

          </div>

        </section>


        {/* CAPABILITIES */}
        <section
          id="capabilities"
          className="section capabilities-section"
        >

          <div className="container split">

            <div className="section-heading">

              <span className="kicker">
                WHY DWARIKA DHEESH
              </span>

              <h2>
                A packaging partner built around{" "}
                <span>your product.</span>
              </h2>

              <p>
                We keep the offering clear and practical:
                manufacturing, printing and finishing
                capabilities that help turn packaging
                requirements into a finished product.
              </p>

              <button
                className="outline"
                onClick={() => scrollTo("contact")}
              >
                Start a Packaging Enquiry
                <ArrowRight size={17} />
              </button>

            </div>


            <div className="cap-grid">

              {capabilities.map(
                ([title, text], index) => (

                  <motion.div
                    className="cap-card"
                    key={title}
                    whileHover={{
                      y: -5,
                    }}
                  >

                    <span>
                      0{index + 1}
                    </span>

                    <h3>
                      {title}
                    </h3>

                    <p>
                      {text}
                    </p>

                  </motion.div>

                )
              )}

            </div>

          </div>

        </section>


        {/* ABOUT */}
        <section
          id="about"
          className="about-strip"
        >

          <div className="container about-inner">

            <div>

              <span className="kicker">
                ABOUT THE BUSINESS
              </span>

              <h2>
                One destination for all your{" "}
                <span>packaging needs.</span>
              </h2>

            </div>


            <p>
              Dwarika Dheesh Print Packaging is presented
              as a manufacturing-focused packaging partner,
              with services spanning folding/mono cartons,
              offset printing, foil printing and corrugated
              boxes with printing.
            </p>

          </div>

        </section>


        {/* PROCESS */}
        <section
          id="process"
          className="section process-section"
        >

          <div className="container">

            <div className="section-heading centered">

              <span className="kicker">
                SIMPLE WORKFLOW
              </span>

              <h2>
                From requirement to{" "}
                <span>ready packaging.</span>
              </h2>

              <p>
                A straightforward four-step flow keeps
                communication and execution easy.
              </p>

            </div>


            <div className="steps">

              {steps.map(
                ([number, title, text]) => (

                  <div
                    className="step"
                    key={number}
                  >

                    <span>
                      {number}
                    </span>

                    <div>

                      <h3>
                        {title}
                      </h3>

                      <p>
                        {text}
                      </p>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>


        {/* CONTACT */}
        <section
          id="contact"
          className="contact-section"
        >

          <div className="container contact-card">

            <div>

              <span className="kicker">
                LET'S BUILD IT
              </span>

              <h2>
                Have a packaging requirement?
              </h2>

              <p>
                Tell us what you need and use the
                enquiry button to start the conversation.
              </p>

            </div>


            <div className="contact-actions">

              <a
                className="primary"
                href="mailto:info@example.com?subject=Packaging%20Enquiry"
              >
                <Mail size={18} />
                Send Enquiry
              </a>


              <a
                className="contact-link"
                href="tel:+910000000000"
              >
                <Phone size={17} />
                Call Business
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <div className="container footer-inner">

          <div>

            <b>
              DWARIKA DHEESH
            </b>

            <span>
              PRINT PACKAGING
            </span>

          </div>


          <p>
            Manufacturing • Printing • Packaging Solutions
          </p>


          <span>
            © {new Date().getFullYear()} Dwarika Dheesh Print Packaging
          </span>

        </div>

      </footer>


      {/* WHATSAPP */}
      <a
        className="floating-wa"
        href="https://wa.me/910000000000"
        aria-label="WhatsApp"
      >
        <MessageCircle />
      </a>

    </div>
  );
}

export default App;