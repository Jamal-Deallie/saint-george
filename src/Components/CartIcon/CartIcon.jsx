import React from "react";
import * as BsIcons from "react-icons/bs";
import "./CartIcon.css";

const CartIcon = () => {
  return (
    <div className='cart--icon'>
      <BsIcons.BsBag className="bag--icon" />
    </div>
  );
};

export default CartIcon;
