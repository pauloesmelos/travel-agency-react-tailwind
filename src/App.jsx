import React from 'react';
import Destiny from './components/cards-destiny/Destiny';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import ResortGrid from './components/resorts-grid/ResortGrid';
import Slider from './components/slider/Slider';

const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <ResortGrid />
      <Destiny />
      <Slider />
    </>
  )
}

export default App;