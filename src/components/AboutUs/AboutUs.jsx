import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Title & Tagline */}
        <h1 className="about-title">AM INDISOUL EXIM</h1>
        <p className="about-tagline">Tradition in Heart, Global in Spirit</p>

        {/* Main Description */}
        <p className="about-description">
          AM Indisoul Exim is a trusted Indian export firm dedicated to delivering the finest
          quality products rooted in India’s heritage. We specialize in exporting fresh onions,
          cocopeat, Indian spices, cow dung products, and traditional Paithani sarees to global
          markets.
        </p>
        <p className="about-description">
          With a focus on purity, sustainability, and timely delivery, we ensure that every product
          reflects our commitment to excellence and authenticity. Guided by strong values and
          professional ethics, AM Indisoul Exim bridges the gap between Indian tradition and
          international demand — carrying the true spirit of India across the world.
        </p>

        {/* Why Us Section */}
        <div className="why-us">
          <h2>Why Us</h2>
          <ul>
            <li>
              <strong>Quality Assurance:</strong> Every product is sourced, processed, and packed
              under strict quality standards to meet global expectations.
            </li>
            <li>
              <strong>Authentic Sourcing:</strong> We work directly with trusted farmers, artisans,
              and suppliers to ensure genuine Indian products.
            </li>
            <li>
              <strong>Wide Product Range:</strong> From agricultural produce to traditional textiles,
              we offer a diverse selection under one roof.
            </li>
            <li>
              <strong>Sustainable Practices:</strong> Our focus on eco-friendly and ethical trade
              supports both the environment and rural communities.
            </li>
            <li>
              <strong>Global Reach, Local Values:</strong> While our operations are global, our
              foundation remains deeply rooted in Indian culture and integrity.
            </li>
          </ul>
          <p className="about-footer">
            Choose <strong>AM Indisoul Exim</strong> — where India’s tradition meets the world with
            excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
