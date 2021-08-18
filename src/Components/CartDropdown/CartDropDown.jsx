import React from "react";
import "./CartDropDown.css";
import Button from "../../Components/Button/Button";
import CartItem from "../../Components/CartItem/CartItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../Redux/Selectors/cartSelectors";
import { withRouter } from "react-router";



const CartDropDown = ({history}) => {
  const cartItems = useSelector(selectCartItems);

  console.log(cartItems);

  return (
    <div className="cart--dd">
      <div className="cartdd--items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.sku} item={item} />)
        ) : (
          <span>Your cart is empty</span>
        )}
      </div>
      <div className="cartdd--btn">
        <div className="cart--btn">
          <Button type="outline">View Cart</Button>
        </div>
        <div className="checkout--btn">
          <Button type="primary" onClick={()=> history.push('/checkout')}>Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CartDropDown);
