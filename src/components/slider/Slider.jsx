import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const data = {
  data: [
    {
      url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      beache: 'Ilha bela'
    },
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
      beache: 'Bora Bora'
    },
    {
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      beache: 'Maui'
    },
    {
      url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      beache: 'Honolulu'
    },
  ]
};
const Slider = () => {
  const [slide, setSlide] = React.useState(0);
  const prev = () => {
    setSlide(slide > 0 ? slide - 1 : slide);
  }
  const next = () => {
    setSlide(e => e + 1 < data.data.length ? e + 1: e);
  }
  return (
    <section className="w-full max-w-[1200px] mx-auto pt-24 px-3">
      <h1 className="text-center">Carousel Of Disponibilitys Paradises</h1>
      <div className="mt-8 relative">
        <div className="absolute z-10 flex justify-between items-center px-16 w-full h-full">
          <FaArrowAltCircleLeft 
            onClick={prev}
            className="text-white sm:text-6xl text-4xl cursor-pointer hover:text-blue-700 duration-200"
          />
          <FaArrowAltCircleRight 
            onClick={next}
            className="text-white sm:text-6xl text-4xl cursor-pointer hover:text-blue-700 duration-200"
          />
        </div>
        {data.data.map((img, index) => (
          <div>
            {index === slide && 
              <img 
                className="w-full h-[300px] sm:h-[600px] object-cover brightness-95"
                src={img.url}
                alt={img.beache}
                key={index * Math.random()}
              />
              }
          </div>
        ))}
      </div>
    </section>
  )
}

export default Slider;