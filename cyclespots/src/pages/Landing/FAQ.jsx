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
            <p>Can I suggest a bike shop to be added?</p>
            <div className="accordion-icon">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
                className="icon-right-arrow"
              >
                <path
                  d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
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
            <p>I'm a shop owner. How do I get listed?</p>
            <div className="accordion-icon">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
                className="icon-right-arrow"
              >
                <path
                  d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
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
            <p>Do you charge shops to be listed?</p>
            <div className="accordion-icon">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
                className="icon-right-arrow"
              >
                <path
                  d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
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
            <p>Is Cyclespots available outside Toronto?</p>
            <div className="accordion-icon">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
                className="icon-right-arrow"
              >
                <path
                  d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
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
