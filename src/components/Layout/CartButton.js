import React,{useState} from "react";
import './CartButton.css';
import CartOverlay from "../CartOverlay/CartOverlay";


const CartButton=(props)=>{
  const [isCart,setIsCart]=useState(false)
  const cartButtonHandler=()=>{
    setIsCart(true)
  }
  const confirmHandler=()=>{
    setIsCart(null)
  }
  return(
    <React.Fragment>
      {isCart && <CartOverlay onConfirm={confirmHandler} />}
    <div className='cart-button'>
     <button className='btn' onClick={cartButtonHandler}> <i className="fa fa-shopping-cart"></i>Your Cart <div className='cart-count'>3</div></button>
     </div>
    </React.Fragment>      
  );
}
export default CartButton