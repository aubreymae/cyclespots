import "./FAQ.css";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

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
          <div className="accordion-answer-wrapper">
            <p>
              Absolutely! Feel free to reach out to us using the contact form
              below.
            </p>
          </div>
        </details>
        <details name="faq" className="accordion-container">
          <summary className="accordion-summary">
            I'm a shop owner. How do I get listed?
          </summary>
          <div className="accordion-answer-wrapper">
            <p>
              Send us an email or connect with us through the contact form
              below.
            </p>
          </div>
        </details>
        <details name="faq" className="accordion-container">
          <summary className="accordion-summary">
            Do you charge shops to be listed?
          </summary>
          <div className="accordion-answer-wrapper">
            <p>
              No, we are currently offering free featured listings. Reach out to
              us if you'd like to get featured!
            </p>
          </div>
        </details>
        <details name="faq" className="accordion-container">
          <summary className="accordion-summary">
            Is Cyclespots available outside Toronto?
          </summary>
          <div className="accordion-answer-wrapper">
            <p>
              Right now, we're focused on the Toronto area—but we are working to
              expand! Let us know if you'd like to see Cyclespots in your city.
            </p>
          </div>
        </details>
      </section>
    </>
  );
}

export default FAQ;
