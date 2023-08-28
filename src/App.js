import React from 'react'
import Layout from './components/Layout/Layout';
import './App.css'
import RestorantImage from './components/Layout/RestorantImage';
import Meal from './components/Meal/Meal';
function App() {
  return (
   <React.Fragment>
      <Layout></Layout>
      <main className='main'>
      <RestorantImage/>
      <Meal/>
      </main>
     </React.Fragment>
  );
}

export default App;
