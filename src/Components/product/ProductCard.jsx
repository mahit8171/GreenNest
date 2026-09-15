
import React from "react";
import "./Css/ProductCard.css";
import { FaRegHeart } from "react-icons/fa";
import Button from "../common/Button";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image">
        <span className="product-badge">
          {product.badge}
        </span>

        <button className="wishlist-btn">
          <FaRegHeart />
        </button>

        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <h3 className="product-name">
          {product.name}
        </h3>

        <div className="product-rating">
          <span>★</span>
          {product.rating}
          <small>({product.reviews})</small>
        </div>

        <div className="product-bottom">

          <div>
            <span className="product-price">
              ₹{product.price}
            </span>

            <span className="old-price">
              ₹{product.oldPrice}
            </span>
          </div>

          <Button variant="primary"  type="button" onClick={() => console.log(`Added ${product.name} to cart`)}>
            Add to Cart
          </Button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;