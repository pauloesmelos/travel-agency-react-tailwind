import React from 'react';

const Card = ({ src, text }) => {
  return (
    <div className="relative">
      <img
        className="w-full h-full object-cover"
        src={src}
        alt={text} 
      />
      <div className="absolute bottom-3 left-5 bg-gray-100 p-1 sm:p-2 rounded-xl w-[70px] sm:w-[100px] text-center">
        <span className="text-blue-600 text-sm sm:text-lg">{text}</span>
      </div>
    </div>
  )
}

export default Card;