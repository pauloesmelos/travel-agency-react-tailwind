import React from 'react';
import { FaSearch } from "react-icons/fa";
import Video from '../../assets/beachVid.mp4';

const Hero = () => {
  return (
    <main className="w-full h-screen relative">
        <video 
            className="w-full h-full top-0 object-cover brightness-50"
            src={Video}
            autoPlay
            muted
            loop
        />
        <div className="absolute w-full h-full flex flex-col top-0 justify-center text-white px-5">
            <h1 className="text-center">First Site Travel in Brazil</h1>
            <h3 className="py-6 text-center">Top 1% Locations</h3>
            <form className="flex justify-between items-center w-full max-w-[580px] h-12 p-2 bg-gray-100 mx-auto rounded-lg">
                    <input 
                        className="text-black outline-none bg-transparent w-full"
                        type="text"
                        placeholder="Enter with your destiny"
                    />
                    <button>
                        <FaSearch />
                    </button>
            </form>
        </div>
    </main>
  )
}

export default Hero;