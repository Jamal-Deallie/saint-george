import React from 'react';
import './CartDropDown.css';
import Button from '../../Components/Button/Button';

const CartDropDown = () => {
  return (
    <div className='cart--dd'>
      <div className="cartdd--items">
        <h1>Items</h1>
      </div>
      <div className="cartdd--button">
        <Button type="outline">Go To Checkout</Button>
      </div>
    </div>
  );
}

export default CartDropDown
