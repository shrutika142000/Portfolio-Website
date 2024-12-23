import React from "react";
const Contact = () => (
  <section id="contact" className="bg-dark text-light py-5">
    <div className="container text-center">
      <h2>Contact Me</h2>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-light">
          Send Message
        </button>
      </form>
    </div>
  </section>
);
export default Contact;
