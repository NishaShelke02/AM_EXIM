import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUs";
import Product from "./components/Product";
import AllProducts from "./components/Product/AllProduct";
import ProductDetails from "./components/Product/ProductDetails";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs"; // Assuming this is the enhanced AboutUs component with About Company content
import "./App.css"; // Global styles
import ProductList from "./components/Product/ProductList";
import Certification from "./components/Certification";

// Dummy components for other pages (replace with actual components as you build them)
//const Services = () => <h2 style={{ textAlign: "center", marginTop: "100px" }}>Services Page</h2>;
//const Products = () => <h2 style={{ textAlign: "center", marginTop: "100px" }}>Our Products</h2>;
//const Blogs = () => <h2 style={{ textAlign: "center", marginTop: "100px" }}>Blogs</h2>;
//const Certification = () => <h2 style={{ textAlign: "center", marginTop: "100px" }}>Certification</h2>;


function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:categorySlug" element={<ProductList />} />
             <Route path="/products/:categorySlug/:productSlug" element={<Product />} />
            <Route path="/products/:categorySlug/:productSlug/details" element={<ProductDetails />} />
            
             <Route path="/certification" element={<Certification />} /> {/* Matches Navbar's "Certification" link */}
            <Route path="/about" element={<AboutUs />} /> {/* Matches Navbar's "About Company" link */}
            <Route path="/services" element={<Services />}/>
            <Route path="/contactus" element={<ContactUs />}/>
            
            {/* Fallback for unmatched routes */}
            <Route path="*" element={<h2 style={{ textAlign: "center", marginTop: "100px" }}>Page Not Found</h2>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;