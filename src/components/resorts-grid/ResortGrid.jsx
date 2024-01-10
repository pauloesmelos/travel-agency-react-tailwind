import React from 'react';
import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Keywest from '../../assets/keywest.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';

const ResortGrid = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto pt-24 px-3">
      <div className="text-center">
        <h1>Bests Resorts in Brazil And The World</h1>
        <p className="my-8 text-xl text-gray-600">Inclusive Caribe Beaches</p>
      </div>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
        <img
            className="w-full h-full object-cover col-span-2 row-span-2"
            src={BoraBora} 
        />
        <img
            className="w-full h-full object-cover"
            src={BoraBora2} 
        />
        <img
            className="w-full h-full object-cover"
            src={Keywest} 
        />
        <img
            className="w-full h-full object-cover"
            src={Maldives} 
        />
        <img
            className="w-full h-full object-cover"
            src={Maldives2} 
        />
      </div>
    </section>
  )
}

export default ResortGrid;