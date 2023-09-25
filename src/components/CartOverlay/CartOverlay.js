import React,{Fragment,useContext} from 'react'
import ReactDOM from 'react-dom'
import './CartOverlay.css'
import CartItem from './CartItem'
import CartContext from '../store/CartContext'

const Backdrop=(props)=>{
 
   return(
    <div className='backdrop' onClick={props.onConfirm}>

    </div>
   ); 
}


const ModalOverlay=(props)=>{
  
  const ctx=useContext(CartContext)
  let totalAmount=ctx.totalAmount.toFixed(2)
  const closeCartHandler=()=>{
    props.onConfirm()
  }
 
  
  const hasItems=ctx.items.length>0;
  const cartItemRemoveHandler=(id)=>{
    ctx.removeItem(id)
  }
  const cartItemAddHandler=(item)=>{
    ctx.addItem(item)
  }
  return(
  <div className='cart-overlay'>
   <div className='overlay'>
    <ul className='ul'>
      {ctx.items.map((item)=><CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)} />)}
    </ul>
    
    <div className='total-amt'>
        <h2>Total Amount</h2>
    </div>
    <div className='amount'>
        {totalAmount}
    </div>
    <div className='buttons'>
        <button className='btn-close' onClick={closeCartHandler}>Close</button>
        {hasItems && <button className='btn-order'>Order</button>}
    </div>
   </div>
   </div>

  );
  
}

const CartOverlay=(props)=>{

  return(
    <Fragment>
       {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById('backdrop'))}
        {ReactDOM.createPortal(<ModalOverlay onConfirm={props.onConfirm}/>,document.getElementById('modal-overlay'))}
    </Fragment>
  );
}

export default CartOverlay;