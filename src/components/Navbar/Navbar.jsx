import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const productRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productRef.current && !productRef.current.contains(event.target)) {
        setProductOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* ---------- TOP BAR ---------- */}
      <div className="top-bar">
        <div className="logo-section">
          <img src="/logo.png" alt="AM EXIM" className="logo-img" />
        </div>

        <div
          className="hamburger"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setProductOpen(false);
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
        </div>

        <div className="top-items-desktop">
          <a href="tel:+917379650571" className="top-item">
            <FiPhoneCall className="top-icon" />
            <div className="top-text">
              <b>+91 73796 50571</b>
              <p>Make A Call</p>
            </div>
          </a>

          <div className="divider" />

          <a href="mailto:contact@amindisoulexim.com" className="top-item">
            <HiOutlineMail className="top-icon" />
            <div className="top-text">
              <b>contact@amindisoulexim.com</b>
              <p>Get An Estimate</p>
            </div>
          </a>

          <div className="divider" />

          <a
            href="https://goo.gl/maps/moshipuneindian"
            target="_blank"
            rel="noopener noreferrer"
            className="top-item"
          >
            <FaGlobeAmericas className="top-icon" />
            <div className="top-text">
              <b> Moshi, Pune, Maharashtra, India</b>
              <p>Location</p>
            </div>
          </a>
        </div>
      </div>

      {/* ---------- MAIN NAVBAR ---------- */}
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
          </li>

          {/* PRODUCTS DROPDOWN */}
          <li
            className={`dropdown ${productOpen ? "active" : ""}`}
            ref={productRef}
          >
            <span
              className="dropdown-title"
              onClick={() => setProductOpen(!productOpen)}
              aria-expanded={productOpen}
              aria-haspopup="true"
            >
              OUR PRODUCTS ▾
            </span>

            <ul className={`dropdown-menu ${productOpen ? "show" : ""}`}>
              <li>
                <Link
                  to="/products/indian-spices"
                  onClick={() => { setMenuOpen(false); setProductOpen(false); }}
                >
                  Indian Spices
                </Link>
              </li>

              <li>
                <Link
                  to="/products/agriculture"
                  onClick={() => { setMenuOpen(false); setProductOpen(false); }}
                >
                  Agriculture
                </Link>
              </li>

              <li>
                <Link
                  to="/products/traditional-textiles"
                  onClick={() => { setMenuOpen(false); setProductOpen(false); }}
                >
                  Traditional Textiles
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
          </li>

          <li>
            <Link to="/certification" onClick={() => setMenuOpen(false)}>VERIFY US</Link>
          </li>

          <li>
            <Link to="/blogs" onClick={() => setMenuOpen(false)}>BLOGS</Link>
          </li>

          <li>
            <Link to="/contactus" onClick={() => setMenuOpen(false)}>CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
