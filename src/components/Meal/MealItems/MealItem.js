import './MealItem.css'

const MealItem=props=>{
return(
    <li className='available-meal__listinner'>
    <div className=''>
     <h3>{props.name}</h3>
     <div className='description'> {props.description}</div>
     <div className='price'>${props.price}</div>
       </div>
        <div className='form-div'>
        <form >
            <label>Amount</label>
            <input type='number'/>
            <div className='btn-div'>
            <button className='btn-add'>+Add</button>
            </div>
           
        </form>
    </div>
    </li>
);
}
export default MealItem