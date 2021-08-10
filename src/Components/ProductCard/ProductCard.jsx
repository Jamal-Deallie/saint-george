import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, brand, estimatedMarketValue, image}) => {
  const { thumbnail } = image;
  
  return (
    <Link to={`/product/${id}`}>
      <div className="product--card" key={id}>
        <img src={thumbnail} alt={name} />
        <span id={id}>{brand}</span>
        <h3>{name}</h3>
        <span>${estimatedMarketValue}</span>

      </div>
    </Link>
  );
};

export default ProductCard;
