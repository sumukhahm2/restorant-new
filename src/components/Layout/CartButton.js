import React,{useState,useContext} from "react";
import './CartButton.css';
import CartContext from'../store/CartContext'
import CartOverlay from "../CartOverlay/CartOverlay";


const CartButton=(props)=>{
 const  cartCtx= useContext(CartContext);
 const inputAmount=cartCtx.items.reduce((prev,item)=>{

  return prev+parseInt(item.amount)},0)

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
     <button className='btn' onClick={cartButtonHandler}> <i className="fa fa-shopping-cart"></i>Your Cart <div className='cart-count'>{inputAmount}</div></button>
     </div>
    </React.Fragment>      
  );
}
export default CartButton