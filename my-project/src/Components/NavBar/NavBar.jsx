import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact Us", href: "#Contact" },
  ];

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbar-container">
        {/* Desktop Menu */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="navbar-item">
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="navbar-toggle">
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="navbar-mobile">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="navbar-mobile-item"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
