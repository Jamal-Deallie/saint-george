import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../Redux/Selectors/cartSelectors";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className="checkout">
      <div className="checkout--header">
        <h3>My Cart</h3>
        <span>{total}</span>
      </div>
      <div className="checkout--card">
        {cartItems.map((item) => (
          <CheckoutItem key={item.sku} item={item} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Checkout;
