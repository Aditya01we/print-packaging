import React from "react";
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

function App() {
  return (
    <div className="app-shell">
      <Navbar />

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