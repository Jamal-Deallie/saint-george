import React, { useCallback } from "react";
import * as BsIcons from "react-icons/bs";
import "./CartIcon.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartHidden } from "../../Redux/Actions/cartActions";
import { selectCartItemsCount } from "../../Redux/Selectors/cartSelectors";

const CartIcon = () => {
  const hidden = useSelector((state) => state.cart.hidden);

  const itemCount = useSelector(selectCartItemsCount);
  

  //add useCallback for memoization
  const dispatch = useDispatch();

  console.log(toggleCartHidden());
  console.log(itemCount);

  return (
    <div
      className="cart--icon"
      onClick={() => dispatch(toggleCartHidden())}
    >
      <BsIcons.BsBag className="bag--icon" />
      <span className="cart--icon_count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
