import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Mobile = ({ mobile, handleMobile }) => {
  return (
    <nav className={mobile ? "absolute top-0 left-0 w-full bg-gray-100 ml-0 duration-300" : "absolute ml-[-100%] duration-300"}>
      <div className="p-3 flex justify-between">
        <h1>BEACHES.</h1>
        <IoMdClose 
            className="cursor-pointer"
            onClick={handleMobile}
            size={30}
        />
      </div>
      <div className="p-3">
        <ul className="px-5">
            <li className="border-b border-gray-300 text-lg">Home</li>
            <li className="border-b border-gray-300 text-lg">Destinations</li>
            <li className="border-b border-gray-300 text-lg">Travels</li>
            <li className="border-b border-gray-300 text-lg">View</li>
            <li className="border-b border-gray-300 text-lg">Book</li>
        </ul>
      </div>
      <div className="p-3">
        <button className="w-full">Search</button>
        <button className="w-full">Account</button>
      </div>
      <div className="flex justify-between w-full max-w-[300px] p-3 mx-auto">
        <FaFacebook 
            size={30}
            className="icon" 
        />
        <FaTwitter 
            size={30}
            className="icon" 
        />
        <FaYoutube 
            size={30}
            className="icon" 
        />
        <FaInstagram 
            size={30}
            className="icon" 
        />
        <FaPinterest 
            size={30}
            className="icon" 
        />
      </div>
    </nav>
  )
}

export default Mobile;