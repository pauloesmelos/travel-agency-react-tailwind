import React from 'react';
import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Keywest from '../../assets/keywest.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import Maldives3 from '../../assets/maldives3.jpg';
import Card from './card/Card';

const Destiny = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto p-3 pt-24">
      <h1 className="text-center mb-9">See Somethings Paradises</h1>
      <div className="grid gap-5 grid-cols-2 md:grid-cols-3">
        <Card
            src={BoraBora} 
            text={"Bora Bora"}
        />
        <Card
            src={BoraBora2} 
            text={"Ilha Bela"}
        />
        <Card
            src={Keywest} 
            text={"Honolulu"}
        />
        <Card
            src={Maldives} 
            text={"Maldives"}
        />
        <Card
            src={Maldives2} 
            text={"Maui"}
        />
        <Card
            src={Maldives3} 
            text={"Sidney"}
        />
      </div>
    </section>
  )
}

export default Destiny;