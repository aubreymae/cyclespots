import "./Contact.css";

function Contact() {
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
        <form action="" id="contact-form">
          <div className="contact-form__row">
            <div className="contact-form__col">
              <label htmlFor="email" className="contact-label">
                Email address
              </label>
              <input
                type="text"
                name="email"
                placeholder="johnsmith@email.com"
                className="contact-input"
              />
            </div>
            <div className="contact-form__col">
              <label htmlFor="shop" className="contact-label">
                Shop name
              </label>
              <input
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
            <input
              type="text"
              name="cmessage"
              className="contact-input"
              placeholder="Hey team, wondering if we can be featured on your directory?"
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
