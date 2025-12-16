// src/pages/Blogs.jsx
import React from "react";
import "./Blogs.css";

const Blogs = () => {
  const videos = [
    {
      id: 1,
      title: "Onion Export Process",
      description:
        "A complete overview of onion grading, packaging, and export standards followed by AM INDISOUL EXIM.",
      videoUrl: "/images/video/onions.mp4",
      date: "March 10, 2025",
    },
    /*{
      id: 2,
      title: "Authentic Indian Spices",
      description:
        "From farm to global markets – experience the purity and aroma of Indian spices.",
      videoUrl: "/videos/indian-spices.mp4",
      date: "March 18, 2025",
    },
    {
      id: 3,
      title: "Traditional Textile Craft",
      description:
        "Exploring the heritage and craftsmanship behind Indian traditional textiles.",
      videoUrl: "/videos/textiles.mp4",
      date: "March 25, 2025",
    },*/
  ];

  return (
    <div className="blogs-page">
      <div className="container">
        <h1 className="page-title">Our Video Blogs</h1>
        <p className="page-subtitle">
          Real stories, real processes — directly from AM INDISOUL EXIM
        </p>

        <div className="blogs-grid">
          {videos.map((video) => (
            <div className="blog-card" key={video.id}>
              <div className="video-wrapper">
                <video controls preload="metadata">
                  <source src={video.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="blog-content">
                <span className="blog-date">{video.date}</span>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
