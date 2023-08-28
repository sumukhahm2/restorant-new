import React from 'react'
import Layout from './components/Layout/Layout';
import './App.css'
import Card from './components/Layout/Card';
function App() {
  return (
   <React.Fragment>
      <Layout></Layout>
      <div className='main'>
        <img className='image' src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg" alt='restorant Background'/>
      </div>
      <Card></Card>
      </React.Fragment>
  );
}

export default App;
