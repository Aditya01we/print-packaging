import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Categories from "./screens/Categories/Categories";
import Solutions from "./screens/Solutions/Solutions";
import Foiling from "./screens/Foiling/Foiling";
import Corrugated from "./screens/Corrugated/Corrugated";
import Process from "./screens/Process/Process";
import Contact from "./screens/Contact/Contact";
import Quote from "./screens/Quote/Quote";

const getSectionFromHash = () => window.location.hash.replace("#", "") || "home";

function App() {
  const [activeSection, setActiveSection] = useState(getSectionFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const section = getSectionFromHash();
      setActiveSection(section);
      requestAnimationFrame(() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }));
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (target) => {
    if (window.location.hash !== `#${target}`) {
      window.history.pushState({}, "", `#${target}`);
    }
    setActiveSection(target);
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <Navbar onNavigate={navigateTo} activeSection={activeSection} />

      <main>
        <Home />
        <About />
        <Categories />
        <Solutions />
        <Foiling />
        <Corrugated />
        <Process />
        <Quote />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;