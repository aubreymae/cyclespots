import "./ContactForm.css";

function ContactForm() {
  return (
    <>
      <div className="main-section-title-container">
        <h2 className="main-section-title">Want to get featured?</h2>
        <p className="main-section-subtitle">
          Reach out to have your shop or product-based service listed on the
          site. For any other questions about the directory, feel free to
          contact us!
        </p>
      </div>
      <section className="contact-section framed-box">
        <form
          action="https://api.web3forms.com/submit"
          id="contact-form"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
          ></input>
          <div className="contact-form__row">
            <div className="contact-form__col">
              <label htmlFor="email" className="contact-label">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="johnsmith@email.com"
                className="contact-input"
                required
              />
            </div>
            <div className="contact-form__col">
              <label htmlFor="shop" className="contact-label">
                Shop name
              </label>
              <input
                id="shop"
                type="text"
                name="shop"
                placeholder="Cycling Solutions"
                className="contact-input"
              />
            </div>
          </div>
          <div className="contact-form__row">
            <div className="contact-form__col">
              <label htmlFor="fname" className="contact-label">
                First name
              </label>
              <input
                id="fname"
                type="text"
                name="fname"
                placeholder="John"
                className="contact-input"
              />
            </div>
            <div className="contact-form__col">
              <label htmlFor="lname" className="contact-label">
                Last name
              </label>
              <input
                id="lname"
                type="text"
                name="lname"
                placeholder="Smith"
                className="contact-input"
              />
            </div>
          </div>
          <div className="contact-form__row">
            <label htmlFor="cmessage" className="contact-label">
              Message
            </label>
            <textarea
              name="message"
              className="contact-message-input"
              placeholder="Hey team, wondering if we can be featured on your directory?"
              required
            />
          </div>
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          ></input>
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />
          <button>Submit</button>
        </form>
      </section>
    </>
  );
}

export default ContactForm;
