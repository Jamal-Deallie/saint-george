import React, { useCallback } from "react";
import * as BsIcons from "react-icons/bs";
import "./CartIcon.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartHidden } from "../../Redux/Actions/cartActions";

const CartIcon = () => {
  const hidden = useSelector((state) => state.cart.hidden);
  //add useCallback for memoization 
  const dispatch = useDispatch();

  console.log(toggleCartHidden());
  console.log(hidden);

  return (
    <div
      className="cart--icon"
      onClick={() => dispatch(toggleCartHidden())}
      value
    >
      <BsIcons.BsBag className="bag--icon" />
      <span className="cart--icon_count">0</span>
    </div>
  );
};

export default CartIcon;
