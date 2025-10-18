// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Product.css";

const ProductDetail = () => {
  const { categorySlug, productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [loading, setLoading] = useState(true);

  // Helper to convert string to slug
  const slugify = (str = "") =>
    str.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const res = await fetch("/data/products.json");
        const json = await res.json();

        // Find category by slug
        const category = json.find(
          (c) => (c.slug || slugify(c.category)) === categorySlug
        );
        if (category) {
          // Find product inside category by slug
          const prod = category.products.find(
            (p) => (p.slug || slugify(p.name)) === productSlug
          );
          if (prod) {
            setProduct(prod);
            setMainImage(prod.image);
          }
        }
      } catch (err) {
        console.error("Error loading product:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [categorySlug, productSlug]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link> /{" "}
        <Link to={`/products/${categorySlug}`}>{categorySlug}</Link> /{" "}
        <span>{product.name}</span>
      </nav>

      <div className="product-detail">
        {/* Product Image + Gallery */}
        <div className="product-image-container">
          <img
            src={mainImage}
            alt={product.name || "Product"}
            className="product-image"
          />
          <div className="product-gallery">
            {product.gallery && product.gallery.length > 0 ? (
              product.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  className={mainImage === img ? "active" : ""}
                  onClick={() => setMainImage(img)}
                />
              ))
            ) : (
              <p className="no-gallery">No additional images</p>
            )}
          </div>
        </div>

        {/* Product Description */}
        <div className="product-description">
          <h2>{product.name}</h2>
          <p>{product.description}</p>

          {product.price && (
            <p className="product-price">₹ {product.price}</p>
          )}

          {/* Optional: Add to Cart / Contact Button */}
          <button className="buy-now-btn">Enquire Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
