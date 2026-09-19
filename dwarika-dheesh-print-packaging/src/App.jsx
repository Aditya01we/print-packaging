import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp/FloatingWhatsApp";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      {/* Scroll restoration helper */}
      <ScrollToTop />

      <div className="app-layout">
        {/* Sticky Reusable Navbar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="main-content" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Reusable Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;