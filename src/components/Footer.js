import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer bg-dark text-white p-4 text-center">
      <div className="container">
        <h4>Follow Me</h4>
        <div className="d-flex justify-content-center footer-icons">
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://in.indeed.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
          >
            <SiIndeed size={30} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
          >
            <FaSquareInstagram size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
