import React from "react";
import profile from "../assets/profile pic.png";
import CV from "../assets/Shrutika_Suresh_Juvale_resume.pdf";
const Intro = () => (
  <section id="home" className="intro bg-light py-5">
    <div className="container text-center">
      <img
        src={profile}
        className="rounded-circle mb-3"
        alt="profile"
        width="150"
        height="150"
      />
      <h1>Hi, I'm Shrutika Juvale</h1>
      <p className="lead">A Passionate Frontend Web Developer.</p>
      <a href={CV} download="ShrutikaJuvale_Resume.pdf">
        <button className="btn btn-primary mt-4">Download Resume</button>
      </a>
    </div>
  </section>
);
export default Intro;
