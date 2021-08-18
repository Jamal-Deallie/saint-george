import React from "react";
import "./CartDropDown.css";
import Button from "../../Components/Button/Button";
import CartItem from "../../Components/CartItem/CartItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../Redux/Selectors/cartSelectors";


const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);

  console.log(cartItems);

  return (
    <div className="cart--dd">
      <div className="cartdd--items">
        {cartItems.map((item) => (
          <CartItem key={item.sku} item={item} />
        ))}
      </div>
      <div className="cartdd--button">
        <Button type="outline">View Cart</Button>
        <Button type="primary">Proceed to Cart</Button>
      </div>
    </div>
  );
};

export default CartDropDown;