import React from "react";
import './CartItem.css';

const CartItem = ({ item }) => {
  console.log(item);
    const { small, name, estimatedMarketValue, quantity, colorway, size } = item;
  return (
    <div className="cart--item">
      <div className="cart--item_quantity">
        <h3>{`${quantity} item(s) in cart`}</h3>
      </div>
      <div className="cart--item_img">
        <img src={small} alt={name} />
      </div>
      <div className="cart--item_details">
        <span>{name}</span>
        <span>{colorway}</span>
        <span>{size}</span>
      </div>
      <div className="cart--item_price">
              <span>{quantity} x ${estimatedMarketValue}</span>
      </div>
    </div>
  );
};

export default CartItem;
