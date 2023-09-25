import './MealItem.css'
import React,{ useContext,useState,useRef } from 'react';
import CartContext from '../../store/CartContext';
const MealItem=props=>{
    const [isCartNum,setCartNum]=useState(true)
    const amountInputref=useRef()
   
   const ctx=useContext(CartContext)
   const submitHandler=(event)=>{
    
    event.preventDefault();
     const enteredAmount=amountInputref.current.value;
     if(enteredAmount.trim().length===0 || enteredAmount>5 || enteredAmount<1)
     {
        setCartNum(false)
        return
     }
     setCartNum(true)
     ctx.addItem({
        id:props.id,
        name:props.name,
        amount:enteredAmount,
        price:props.price
     })
     amountInputref.current.value='';
     
   }
 // console.log(props.image)
return(
    <React.Fragment>
    <li className='available-meal__listinner'>
    <h3>{props.name}</h3>
       <div className='dishes-image'>
       
        <img className='images' src={props.image} alt='images of dishes'/>
       </div>
       <div className='meals'>
         <div className='description'> {props.description}</div>
         <div className='price'>${props.price}</div>
        </div>
         
        <div className='form-div'>
        <form onSubmit={submitHandler}>
            <label>Amount</label>
            <input type='number' ref={amountInputref} />
            <div className='btn-div'>
            <button className='btn-add'>+Add</button>
            {!isCartNum && <p className='error'>!Enter a valid number</p>}
            </div>
           
        </form>
    </div>
    </li>
    </React.Fragment>

);
}
export default MealItem