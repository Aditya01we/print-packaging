import React from "react";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import "./Quote.css";

const Quote = () => {
  return (
    <section id="quote" className="quote-screen">
      <div className="container quote-shell">
        <QuoteForm />
      </div>
    </section>
  );
};

export default Quote;
