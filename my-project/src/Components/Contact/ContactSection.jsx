import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div id="Contact" className="contact-section">
      {/* Bagian teks */}
      <div className="contact-content">
        <h2 className="contact-heading">CONTACT</h2>
        <p className="contact-text">
          I am an enthusiastic IT student currently pursuing my degree at
          Multimedia Nusantara University, seeking internship opportunities to
          further enhance my skills and contribute to impactful projects. My
          academic journey has provided me with hands-on experience in various
          areas, including developing organizational websites, Android
          applications, and implementing software solutions.
        </p>
        <p className="contact-text">
          I am eager to bring my knowledge and creativity to a professional
          setting. Feel free to connect with me if you're looking for a
          dedicated intern to support your team! You can contact me through the
          social media links below or email me directly.
        </p>
      </div>

      {/* Bagian logo Gmail */}
      <div className="social-links">
        <a
          href="mailto:imanuelgiland@gmail.com"
          className="social-link"
          title="Email Me"
        >
          <img src="/Img/Logo/gmail.png" alt="Profile" />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
