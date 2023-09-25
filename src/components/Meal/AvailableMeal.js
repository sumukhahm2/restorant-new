import React from 'react'
import './AvailableMeal.css'
import MealItem from './MealItems/MealItem';
import Sushi from '../images/alexander-mils-nG4ZimMIO_k-unsplash.jpg'
import Schnitzel from '../images/daria-volkova-StuKmdIvbwE-unsplash.jpg'
import Burger from '../images/mahmoud-fawzy-Dbx6-XZY6Dg-unsplash.jpg'
import GreenBowl from '../images/valentin-b-kremer-MzVxrOWYmQQ-unsplash.jpg'
  const AvailableMeals=()=>{
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
          image:Sushi
          
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
          image:Schnitzel
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
          image:Burger
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
          image:GreenBowl
        },
      ];
   const mealsList=DUMMY_MEALS.map(meal=><MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} image={meal.image}/>)  

    return(
        <section className='available-meal'>
          <ul className='available-meal__ul'>
          {mealsList}
          </ul>
          
         
        </section>
    );
  }

  export default AvailableMeals