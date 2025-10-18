import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => {
    setMenuOpen(false);
    setShowProducts(false);
    setShowAbout(false);
  };

  return (
    <>
      {/* ====== TOP HEADER ====== */}
      <header className="top-header">
        <div className="contact-info">
          <span>📍 Moshi, Pune, Maharashtra, India</span>
          <span>📧 contact@amindisoulexim.com</span>
        </div>

        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://wa.me/+917379650571"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </header>

      {/* ====== MAIN NAVBAR ====== */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo-section">
          <a href="/" aria-label="AM INDISOUL EXIM Home">
            <img
              src="/logo.png"
              alt="AM INDISOUL EXIM Logo"
              className="logo"
            />
          </a>
        </div>

        {/* Hamburger icon for mobile */}
        <div
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="/services" onClick={closeMenu}>
              Services
            </a>
          </li>

          {/* Our Products Dropdown */}
          <li
            className={`dropdown ${showProducts ? "active" : ""}`}
            onMouseEnter={() => setShowProducts(true)}
            onMouseLeave={() => setShowProducts(false)}
          >
            <button
              className="dropdown-btn"
              aria-expanded={showProducts}
              aria-haspopup="true"
              aria-controls="products-menu"
              onClick={() => setShowProducts((prev) => !prev)} // for mobile
            >
              Our Products <span className="arrow">▾</span>
            </button>

            {showProducts && (
              <ul id="products-menu" className="dropdown-menu energy">
                <li>
                  <a href="/products/agriculture" onClick={closeMenu}>
                    Agriculture
                  </a>
                </li>
                <li>
                  <a href="/products/spices" onClick={closeMenu}>
                    Indian Spices
                  </a>
                </li>
                <li>
                  <a href="/products/textiles" onClick={closeMenu}>
                    Traditional Textiles
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* About Us Dropdown */}
          <li
            className={`dropdown ${showAbout ? "active" : ""}`}
            onMouseEnter={() => setShowAbout(true)}
            onMouseLeave={() => setShowAbout(false)}
          >
            <button
              className="dropdown-btn"
              aria-expanded={showAbout}
              aria-haspopup="true"
              aria-controls="about-menu"
              onClick={() => setShowAbout((prev) => !prev)} // for mobile
            >
              About Us <span className="arrow">▾</span>
            </button>

            {showAbout && (
              <ul id="about-menu" className="dropdown-menu energy">
                <li>
                  <a href="/about" onClick={closeMenu}>
                    Our Company
                  </a>
                </li>
                <li>
                  <a href="/certification" onClick={closeMenu}>
                    Certification
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="/blogs" onClick={closeMenu}>
              Blogs
            </a>
          </li>
          <li>
            <a href="/contactus" onClick={closeMenu}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
