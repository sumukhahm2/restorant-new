import React from "react";
import './CartButton.css'

const CartButton=()=>{
  return(
    <div className='cart-button'>
            <button className='btn'>  <i className="fa fa-shopping-cart"></i>Your Cart <div className='cart-count'>0</div></button>

            </div>
  );
}
export default CartButton