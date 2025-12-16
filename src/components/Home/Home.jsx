// src/pages/Home.jsx
import React, { useState } from "react";
import {
  FaEye,
  FaBullseye,
  FaAward,
  FaBalanceScale,
  FaCheckDouble,
  FaHandsHelping,
  FaUsers,
  FaCheckCircle,
  FaGlobe,
  FaLeaf,
  FaHandshake,
  FaBoxOpen,
  FaShippingFast,

} from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const slides = [
    {
      id: 1,
      title: "Agriculture Product- Onions",
      
      description:
        " Versatile and pungent, onions are a foundational vegetable for cuisines worldwide, valued for their flavor, aroma, and essential role in cooking.",
      image: "/images/onions1.png",
      cta: "Explore Products",
    },
    {
      id: 2,
      title: "Authentic Indian Spices",
      
      description:
        "Experience the richness of traditional Indian spices, handpicked and exported worldwide.",
      image: "/images/spices.png",
      cta: "Shop Spices",
    },
    {
      id: 3,
      title: "Traditional Textiles",
      subtitle: "The pride of Maharashtra",
      description:
        "Handwoven sarees that blend royal heritage with timeless beauty.",
      image: "/images/Saree2.png",
      cta: "View Collection",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="home-page">
      {/* ====== HERO SLIDER ====== */}
      <section className="hero-slider">
        <div className="slider-container">
          <div className="slide-image">
            <img src={currentSlideData.image} alt={currentSlideData.title} />
            <div className="overlay"></div>
          </div>

          <div className="slide-content">
            <div className="content-wrapper">
              <h1 className="slide-title">{currentSlideData.title}</h1>
              <h2 className="slide-subtitle">{currentSlideData.subtitle}</h2>
              <p className="slide-description">{currentSlideData.description}</p>
              <a href="/products" className="cta-button">
                {currentSlideData.cta}
              </a>
            </div>
          </div>

          <button
            className="nav-arrow prev"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            &#8249;
          </button>
          <button
            className="nav-arrow next"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            &#8250;
          </button>

          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
      {/* ====== VISION & MISSION ====== */}
<section className="vision-mission">
  <div className="container vision-mission-grid">
    <div className="vision-box">
      <FaEye className="vm-icon" />
      <h3>VISION</h3>
      <p>
        To be the most consistently preferred exporter of Agro Products
        in terms of quality and affordability across the globe.
      </p>
    </div>

    <div className="mission-box">
      <FaBullseye className="vm-icon" />
      <h3>MISSION</h3>
      <p>
        To supply Indian Agro Products by spreading miles of smiles
        in every country.
      </p>
    </div>
  </div>
</section>

{/* ====== CORE VALUES ====== */}
<section className="core-values">
  <div className="container">
    <h2 className="section-title">CORE VALUES</h2>

    <div className="core-values-grid">
      <div className="core-card">
        <FaAward className="core-icon" />
        <h4>Quality</h4>
      </div>

      <div className="core-card">
        <FaBalanceScale className="core-icon" />
        <h4>Integrity</h4>
      </div>

      <div className="core-card">
        <FaCheckDouble className="core-icon" />
        <h4>Accuracy</h4>
      </div>

      <div className="core-card">
        <FaHandsHelping className="core-icon" />
        <h4>Commitment</h4>
      </div>

      <div className="core-card">
        <FaUsers className="core-icon" />
        <h4>Collaboration</h4>
      </div>
    </div>
  </div>
</section>


      {/* ====== WHY CHOOSE US ====== */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose AM INDISOUL EXIM?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <FaCheckCircle className="feature-icon" />
              <h3>Quality Assurance</h3>
              <p>Certified products meeting international standards.</p>
            </div>
            <div className="feature-item">
              <FaGlobe className="feature-icon" />
              <h3>Global Export</h3>
              <p>Reliable shipping to customers worldwide.</p>
            </div>
            <div className="feature-item">
              <FaLeaf className="feature-icon" />
              <h3>Sustainable Practices</h3>
              <p>Eco-friendly farming and production methods.</p>
            </div>
            <div className="feature-item">
              <FaHandshake className="feature-icon" />
              <h3>Trusted Suppliers</h3>
              <p>Partnered with verified farmers and manufacturers.</p>
            </div>
            <div className="feature-item">
              <FaBoxOpen className="feature-icon" />
              <h3>Custom Packaging</h3>
              <p>Products packed to meet international trade standards.</p>
            </div>
            <div className="feature-item">
              <FaShippingFast className="feature-icon" />
              <h3>On-Time Delivery</h3>
              <p>Efficient logistics ensuring timely shipments.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ====== OUR PROMISE SECTION ====== */}
<section className="our-promise">
  <div className="container">
    <h2>🌍 Our Promise</h2>
    <p>
      Every product from <strong>AM Indisoul Exim</strong> reflects our core values — authenticity, quality, and sustainability.
    </p>
    <p>
      We deliver the true essence of India to the world, with integrity and excellence in every shipment.
    </p>
  </div>
</section>

     
      {/* ====== EXPLORE PRODUCTS SECTION ====== */}
      <section className="explore-products">
        <div className="container">
          <h2>Explore All Products</h2>
          <p>
            Browse through our wide range of agricultural products, spices, and
            traditional textiles.
          </p>
          <a href="/products" className="cta-button explore">
            View All Products
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;




