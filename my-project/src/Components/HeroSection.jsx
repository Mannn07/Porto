import React, { useState, useEffect } from "react";
import "./HeroSection.css"; // Pastikan ini mengarah ke file CSS yang benar

const phrases = [
  "Welcome to My Portfolio",
  "I Love Coding",
  "Frontend Developer",
];

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let typingSpeed = 150;

    if (isDeleting) {
      typingSpeed = 50;
    }

    const timeoutId = setTimeout(() => {
      setDisplayedText((prevText) =>
        isDeleting
          ? currentPhrase.substring(0, prevText.length - 1)
          : currentPhrase.substring(0, prevText.length + 1)
      );

      if (!isDeleting && displayedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000); // Jeda sebelum menghapus
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  return (
    <div className="hero-section w-full min-h-screen bg-black text-white p-8">
      <div className="content-wrapper max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="text-container flex-1 space-y-6">
          <h1 className="hello-text text-left">
            <span className="gradient-text">Hello, I'm Imanuell Gilland</span>
          </h1>

          <div className="typing-container">
            <h2 className="typing-text">{displayedText}</h2>
          </div>

          <p className="description">
            I am an active student with expertise in Python, JavaScript, and
            Tailwind CSS for application and interface development. In addition,
            I also master Adobe Photoshop, Illustrator, and Premiere Pro for
            visual content creation.
          </p>

          <div className="button-container">
            <button className="hire-button">Hire Me</button>
            <a
              href="/Doc/CV_Imanuell Gilland.pdf"
              download
              className="cv-button"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="image-container flex-1 flex justify-center md:justify-end">
          <div className="profile-image-wrapper">
            <img src="/Img/Foto.jpg" alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
