import { Fragment } from "react";
import './Restorant.css'
import Restorant from '../images/amin-ramezani-N4patgmWCsE-unsplash.jpg'

const RestorantImage=()=>{
return(
    <Fragment>
        <img className='image' src={Restorant} alt='restorant Background'/>
        </Fragment>
        
);
}
export default RestorantImage