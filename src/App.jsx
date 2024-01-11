import React from 'react';
import About from './components/about/About';
import Destiny from './components/cards-destiny/Destiny';
import Footer from './components/footer/Footer';
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
      <About />
      <Slider />
      <Footer />
    </>
  )
}

export default App;