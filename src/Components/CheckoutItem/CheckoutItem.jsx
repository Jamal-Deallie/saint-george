import React from "react";
import Button from "../Button/Button";
import "./CheckoutItem.css";
import { removeItem } from '../../Redux/Actions/cartActions';
import { useDispatch } from "react-redux";

const CheckoutItem = ({ item }) => {
  const { small, name, estimatedMarketValue, quantity, colorway } = item;
  const dispatch = useDispatch();

  return (
    <>
      <div className="checkout--img">
        <img src={small} alt={name} />
      </div>
      <div className="checkout-details">
        <span>{name}</span>
        <span>{colorway}</span>
        <span>{quantity}</span>
        <span>{estimatedMarketValue}</span>
        <div>
          <Button type="primary" onClick={()=> dispatch(removeItem(item))}> Remove</Button>
          <Button type="outline">Edit</Button>
        </div>
      </div>
      <div className="checkout--summary"></div>
    </>
  );
};

export default CheckoutItem;
