import React from "react";
import Button from "../../Components/Button/Button";
import SizeButtons from "../../Components/SizeButtons/SizeButtons";
import "./Product.css";

const Product = ({
  id,
  gender,
  name,
  brand,
  estimatedMarketValue,
  original,
  story,
  colorway,
  releaseDate,
}) => {
  let newDate = new Date(releaseDate);

  console.log(newDate.toLocaleDateString());
  return (
    <div className="product--card" key={id}>
      <span>{brand}</span>
      <h1>{name}</h1>
      <span>${estimatedMarketValue}</span>
      <div className="product--card_img">
        <img src={original} alt={name} />
      </div>

      <div className="product--card_btn">
        <Button type="outline"> Add to Cart</Button>
      </div>

      <SizeButtons gender={gender} />
      <div className="product--card_desc">
        <h3>
          Colorway: <span>{colorway}</span>
        </h3>
        <h3>
          Release Date: <span>{newDate.toLocaleDateString()}</span>
        </h3>
        <p>{story}</p>
      </div>
    </div>
  );
};

export default Product;
