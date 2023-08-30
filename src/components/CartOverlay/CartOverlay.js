import {Fragment} from 'react'
import ReactDOM from 'react-dom'
import './CartOverlay.css'

const Backdrop=(props)=>{
   return(
    <div className='backdrop' onClick={props.onConfirm}>

    </div>
   ); 
}


const ModalOverlay=(props)=>{
  const closeCartHandler=()=>{
    props.onConfirm()
  }
  return(
  <div className='cart-overlay'>
   <div className='overlay'>
    <h3>supper</h3>
    <div className='total-amt'>
        <h2>Total Amount</h2>
    </div>
    <div className='amount'>
        32.66
    </div>
    <div className='buttons'>
        <button className='btn-close' onClick={closeCartHandler}>Close</button>
        <button className='btn-order'>Order</button>
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