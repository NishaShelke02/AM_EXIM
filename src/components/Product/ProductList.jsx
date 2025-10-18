import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/data/products.json");
        const data = await res.json();
        const category = data.find(
          (c) => c.slug === categorySlug || c.category.toLowerCase().replace(/\s+/g, "-") === categorySlug
        );
        setProducts(category ? category.products : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [categorySlug]);

  if (loading) return <p>Loading...</p>;
  if (products.length === 0) return <p>No products found in this category.</p>;

  return (
    <div className="product-list container">
      <h1>{categorySlug.toUpperCase()}</h1>
      <div className="product-grid">
        {products.map((p, i) => (
          <div key={i} className="product-card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
