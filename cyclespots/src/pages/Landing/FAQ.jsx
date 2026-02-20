import "./FAQ.css";

function FAQ() {
  return (
    <>
      <div className="main-section-title-container">
        <h2 className="main-section-title">Frequently asked questions</h2>
        <p className="main-section-subtitle">
          Find answers to common questions about getting your shop or
          product-based service listed on our site. If you need more information
          or have any other inquiries about the directory, feel free to reach
          out to us!
        </p>
      </div>
      <section className="faq-section framed-box">
        <details name="faq" className="accordion-container">
          <summary className="accordion-summary">
            Can I suggest a bike shop to be added?
          </summary>
          <p>Answer</p>
        </details>
        <details name="faq" className="accordion-container">
          <summary className="accordion-summary">
            I'm a shop owner. How do I get listed?
          </summary>
          <p>Answer</p>
        </details>
        <details name="faq" className="accordion-container">
          <summary className="accordion-summary">
            Do you charge shops to be listed?
          </summary>
          <p>Answer</p>
        </details>
        <details name="faq" className="accordion-container">
          <summary className="accordion-summary">
            Is Cyclespots available outside Toronto?
          </summary>
          <p>
            Right now, we're focused on the Toronto area—but we are working to
            expand! Let us know if you'd like to see Cyclespots in your city.
          </p>
        </details>
      </section>
    </>
  );
}

export default FAQ;
