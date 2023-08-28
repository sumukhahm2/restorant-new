import {Fragment} from 'react'
import './Layout.css'
import CartButton from './CartButton';
const Layout=()=>{
   return(
    <Fragment>
       <header className='header'>
           <h2>React Meals </h2> 
           <CartButton></CartButton>
        </header>
        
    </Fragment>
        
   );
}
export default Layout