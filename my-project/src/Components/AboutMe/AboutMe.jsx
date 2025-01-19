import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id="about" className="about-me-container">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <div className="profile-section">
          <img src="/Img/Foto1.png" alt="Profile" className="profile-image1" />
          <h2 className="name">Imanuell Glland</h2>
          <p className="specialization">
            UI/UX Designer and Frontend Developer
          </p>
          <p className="location">Based in Tangerang, Indonesia</p>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/imanuel-giland"
            className="social-icon"
          >
            LinkedIn
          </a>
          <a href="https://www.instagram.com/mannn.08/" className="social-icon">
            Instagram
          </a>
          <a href="https://github.com/Mannn07" className="social-icon">
            GitHub
          </a>
        </div>

        <button className="work-button">Let's Work Together</button>
      </aside>

      {/* Right Content Section */}
      <section className="content">
        <div className="content-column">
          <h2 className="section-title">Education</h2>
          <p className="section-content">
            Univerisitas Multimedia Nusantara - informatic (2022 - Now)
          </p>
        </div>

        <div className="content-column">
          <h2 className="section-title">Soft Skills</h2>
          <ul className="section-content">
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Critical Thinking</li>
            <li>Time Management</li>
          </ul>
        </div>

        <div className="content-column">
          <h2 className="section-title">Technical Skills</h2>
          <div className="tech-icons">
            <img src="/Img/Logo/html.png" alt="Profile" className="tech-icon" />
            <img src="/Img/Logo/css.png" alt="Profile" className="tech-icon" />
            <img
              src="/Img/Logo/react.png"
              alt="Profile"
              className="tech-icon"
            />
            <img
              src="/Img/Logo/tailwind.png"
              alt="Profile"
              className="tech-icon"
            />
            <img
              src="/Img/Logo/laravel.webp"
              alt="Profile"
              className="tech-icon"
            />
            <img
              src="/Img/Logo/mysql.png"
              alt="Profile"
              className="tech-icon"
            />
            <img
              src="/Img/Logo/java.webp"
              alt="Profile"
              className="tech-icon"
            />
            <img
              src="/Img/Logo/figma.png"
              alt="Profile"
              className="tech-icon"
            />
            <img src="/Img/Logo/jira.png" alt="Profile" className="tech-icon" />
            <img src="/Img/Logo/ae.png" alt="Profile" className="tech-icon" />
            <img src="/Img/Logo/Ps.png" alt="Profile" className="tech-icon" />
            <img src="/Img/Logo/pr.png" alt="Profile" className="tech-icon" />
          </div>
        </div>

        <div className="content-column">
          <h2 className="section-title">Skill Set</h2>
          <ul className="section-content">
            <li>User Research</li>
            <li>Wireframing</li>
            <li>Web Design</li>
            <li>App Design</li>
            <li>Prototyping</li>
          </ul>
        </div>

        <div className="content-column">
          <h2 className="section-title">Interests</h2>
          <p className="section-content">Design Trends, Technology, Editting</p>
        </div>

        <div className="content-column">
          <h2 className="section-title">Languages</h2>
          <p className="section-content">
            Indonesia, English (Pre-intermediate)
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
