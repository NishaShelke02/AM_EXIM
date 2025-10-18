import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* ====== TOP SECTION ====== */}
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-logo">AM INDISOUL EXIM</h2>
          <p>
            We are a trusted exporter of premium quality Indian agricultural products,
            spices, and traditional textiles. Delivering the essence of India to the world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </div>

        {/* Products Links */}
        <div className="footer-section">
          <h3>Our Products</h3>
          <ul>
            <li><Link to="/products/onions">Onions</Link></li>
            <li><Link to="/products/cocopeat">Cocopeat</Link></li>
            <li><Link to="/products/cow-dung">Cow Dung Products</Link></li>
            <li><Link to="/products/spices">Indian Spices</Link></li>
            <li><Link to="/products/textiles">Traditional Textiles</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Moshi, Pune, Maharashtra, India</p>
          <p>📧 contact@amindisoulexim.com</p>
          <p>📞 +91 73796 50571</p>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://wa.me/+917379650571" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* ====== BOTTOM SECTION ====== */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AM INDISOUL EXIM. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
