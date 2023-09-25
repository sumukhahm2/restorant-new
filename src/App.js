import React from 'react'
import Layout from './components/Layout/Layout';
import './App.css'
import RestorantImage from './components/Layout/RestorantImage';
import Meal from './components/Meal/Meal';
import CartProvider from './components/store/CartProvider'
function App() {
  return (
   <CartProvider>
      <Layout></Layout>
      <main className='main'>
      <RestorantImage/>
      <Meal/>
      </main>
     </CartProvider>
  );
}

export default App;
