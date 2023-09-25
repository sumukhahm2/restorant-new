import React,{useReducer} from 'react'
import CartContext from './CartContext'

const defaultCartState={
  
    items:[],
    totalAmount:0
  
}
const cartReducer=(state,action)=>{
  if(action.type==='ADD')
  {
    const existingIndex=state.items.findIndex((item)=>
      item.id===action.item.id
    )
   
    const existingCart=state.items[existingIndex];
    
    let updated;
    let updatedTotalAmount
    if(existingIndex>=0)
    {
      console.log(existingCart.amount)
      const updatedItems={
        ...existingCart,
        amount:parseInt(existingCart.amount)+1
      }
      
      updated=[...state.items]
     
      updated[existingIndex]=updatedItems
      console.log(updated[existingIndex].amount)
      updatedTotalAmount=state.totalAmount+action.item.price
     
    }
    else{
      updated=state.items.concat(action.item)
       updatedTotalAmount=state.totalAmount+action.item.price
    }
    //console.log(updated[existingIndex])
   
     
     return {
       items:updated,
       totalAmount:updatedTotalAmount

     }
  }
  if(action.type==='REMOVE')
  {
    const exsistingIndex=state.items.findIndex(item=>item.id===action.id)
    const existingCart=state.items[exsistingIndex]
    const updatedTotalAmount=state.totalAmount-existingCart.price
    let updatedItems
    if(existingCart.amount===1)
    {
      updatedItems=state.items.filter((item)=>{
       return  item.id!==action.id
      })
    }
    else{
      const updatedItem={...existingCart,amount:existingCart.amount-1}
      updatedItems=[...state.items]
      updatedItems[exsistingIndex]=updatedItem
    }
    return{
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  return defaultCartState
}
const CartProvider=(props)=>{
 const [cartState,dispatchCart]= useReducer(cartReducer,defaultCartState)
  const addItemHandler=(item)=>{
   // console.log(item)
  dispatchCart({type:'ADD',item:item})
  }

  const removeItemHandler=(id)=>{
    dispatchCart({type:'REMOVE',id:id})
  }
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    
    return(
      <CartContext.Provider value={cartContext} >
        {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;