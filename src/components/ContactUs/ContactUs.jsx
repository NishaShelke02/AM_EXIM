// src/components/ContactUs/ContactUs.jsx
import React, { useState } from "react";
import { FaLinkedin, FaFacebookF, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    const sheetDBUrl="https://sheetdb.io/api/v1/99qnm9gi9a5ri";
    try {
      const response = await fetch(sheetDBUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          data: [
            {
              name: formData.name,
              email: formData.email,
              contact: formData.contact,
              message: formData.message,
              timestamp: new Date().toISOString()
            },
          ] 
        }),
      });
      if (response.ok) {
        alert("Thank you! Your message has been submitted. We'll get back to you shortly.");
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
        });
      } else {
        alert("There was an issue submitting your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Network error. Please try again later.");
    }
    // Add API integration here if needed (e.g., emailJS or backend endpoint)
  };

  return (
    <div className="contact-us-page">
      {/* Main Contact Section: Two-column layout for desktop (Keep in Touch left, Form right) */}
      <section className="contact-main-section">
        <div className="keep-in-touch">
          <h1>Keep in Touch</h1>
          <p>
            We operate a business built on trust. This can only be achieved through communication and experienced support. From the first contact, you become more familiar with us each step of the way.
          </p>
          <p>
            We are eager to discuss your business needs and answer any questions you may have. Enter your details and we will get back to you shortly. Our entire team receives specialized training regularly to ensure you are receiving the best information possible. From basic questions to complex compliance inquiries, we are here to help.
          </p>
        </div>

        <div className="enquiry-form">
          <h2>Send Us Your Requirement</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Enter your email id"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="contact"
                placeholder="Enter your contact number"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info - Professional layout with icons */}
      <div className="contact-info">
        <h2>Contact Details</h2>
        <div className="contact-details-grid">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>
              <strong>Email:</strong> <a href="mailto:contact@amindisoulexim.com">contact@amindisoulexim.com</a>
            </p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>
              <strong>Phone & WhatsApp:</strong> <a href="tel:+917379650571">+91 73796 50571</a>
            </p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <h2>Find Us Here</h2>
        <div className="map-wrapper">
          <FaMapMarkerAlt className="map-icon" />
          <iframe
            title="AM INDISOUL EXIM Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5562862132396!2d73.80299867476383!3d18.67829878733582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c2d38f73b2eb%3A0x7dfb9f5dc1c6b2de!2sAryan%2079%20Apartment%2C%20Chikhali%2C%20Pune%2C%20Maharashtra%20411062!5e0!3m2!1sen!2sin!4v1707638400000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Social Media - Professional links with icons */}
      <div className="social-media">
        <h2>Connect With Us</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin size={32} color="#0A66C2" /> LinkedIn
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebookF size={32} color="#1877F2" /> Facebook
          </a>
          <a href="https://wa.me/917379650571" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaWhatsapp size={32} color="#25D366" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
