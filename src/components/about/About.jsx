import React from 'react';
import { FaHeadphones } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";

const About = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-3 pt-24 grid lg:grid-cols-3 gap-3">
      <div className="lg:col-span-2">
        <div>
          <h1>Luxury Resorts in Your Region</h1>
          <p className="font-sans text-black my-8">Discover At Travel Agency PauloMelos S.A, we understand that every traveler is unique. That's why we offer personalized packages tailored to your preferences and budget. From romantic honeymoons to thrilling group adventures, we are here to create the trip of your dreams. The really enterprise focusing thrilling group adventures, we are here to create the experience.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 mt-16">
          <div className="flex flex-col sm:flex-row text-center items-center gap-3">
            <button>
              <FaHeadphones size={40} />
            </button>
            <div className="p-3">
              <h4 className="text-2xl font-bold">LEADING SERVICE</h4>
              <p className="font-sans text-black my-3">Leading service in the region of South America, Brazil.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row text-center items-center gap-3">
            <button>
              <TbWorldSearch size={40} />
            </button>
            <div className="p-3">
              <h4 className="text-2xl font-bold">TOP 1 WORLD</h4>
              <p className="font-sans text-black my-3">Our be the best Agency in the ranking anual.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="border-2 font-sans text-center">
          <p className="my-4">GET ADDITIONAL 10% OFF</p>
          <p className="my-4">12 HOUR LEFT</p>
          <div className="bg-slate-600 p-3 w-full cursor-pointer hover:scale-[1.03] duration-200">
            <span className="text-white">BOOK NOW AND SAVE</span>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex flex-col">
            <label className="font-bold text-black" htmlFor="destiny">Destiny</label>
            <select id="destiny">
              <option value="">Bora Bora</option>
              <option value="">Ilha Bela</option>
              <option value="">Honolulu</option>
              <option value="">Maui</option>
            </select>
          </div>
          <div className="flex flex-col my-3">
            <label htmlFor="checkin">Check-in</label>
            <input type="date" id="checkin" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="checkout">Check-out</label>
            <input type="date" id="checkout" />
          </div>
          <button className="w-full">Search Routes</button>
        </div>
      </div>
    </section>
  )
}

export default About;