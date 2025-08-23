import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaClock, FaRedo, FaHeadset, FaExternalLinkAlt, FaEnvelope } from 'react-icons/fa';
import products from '../components/Products/data';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container">
        <div className="error">
          <h2>Product not found</h2>
          <Link to="/products" className="back-link">
            <FaArrowLeft /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Link to="/products" className="back-link">
        <FaArrowLeft /> Back to Products
      </Link>
      
      <div className="product-details">
        <div className="product-image-section">
          <img src={product.image} alt={product.title} className="product-image" />
        </div>
        
        <div className="product-info-section">
          <h1 className="product-title">{product.title}</h1>
          <div className="price">{product.price}</div>
          
          <div className="description-section">
            <h3>Description</h3>
            <p className="description">{product.fullDescription}</p>
          </div>
          
          <div className="features-section">
            <h3>Key Features</h3>
            <div className="features">
              {product.features.map((feature, idx) => (
                <span key={idx} className="feature">{feature}</span>
              ))}
            </div>
          </div>
          
          
          <div className="action-buttons">
            <Link to="/contact" className="contact-btn">
              <FaEnvelope /> Contact Us
            </Link>
            {product.demoLink && (
              <a href={product.demoLink} target="_blank" rel="noopener noreferrer" className="demo-btn">
                <FaExternalLinkAlt /> View Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
