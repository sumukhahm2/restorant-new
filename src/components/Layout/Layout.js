import React from 'react'
import './Layout.css'
const Layout=()=>{
   return(
        <header>
            <div className='react-meals'>
                <h2>React Meals</h2>
            </div>
            <div className='cart-button'>
            <button className='btn'>  <i className="fa fa-shopping-cart"></i>Your Cart <div className='cart-count'>0</div></button>

            </div>
        </header>
   );
}
export default Layout