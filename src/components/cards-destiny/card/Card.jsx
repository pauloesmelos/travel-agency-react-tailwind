import React from 'react';

const Card = ({ src, text }) => {
  return (
    <div className="relative group overflow-hidden">
      <img
        className="w-full h-full object-cover hover:scale-125 duration-500"
        src={src}
        alt={text} 
      />
      <div className="absolute bottom-3 left-5 bg-gray-100 p-1 w-[70px] sm:w-[100px] text-center group-hover:bg-blue-600
      duration-300">
        <span className="text-blue-600 group-hover:text-white font-bold text-sm duration-300">
          {text}
        </span>
      </div>
    </div>
  )
}

export default Card;