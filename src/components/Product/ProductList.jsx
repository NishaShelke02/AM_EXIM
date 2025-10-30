import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = () => {
  const { categorySlug } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const slugify = (str = "") =>
    str.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/data/products.json");
        const json = await res.json();

        const cat = json.find(
          (c) => (c.slug || slugify(c.category)) === categorySlug
        );
        setCategory(cat || null);
      } catch (e) {
        console.error("Error loading products:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [categorySlug]);

  if (loading) return <p>Loading...</p>;
  if (!category) return <p>Category not found.</p>;

  return (
    <div className="category-page">
      <h1>{category.category}</h1>

      <div className="product-grid">
        {category.products.map((p) => (
          <div key={p.id} className="product-card">
            <Link to={`/products/${categorySlug}/${p.slug}`}>
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.shortDescription}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
