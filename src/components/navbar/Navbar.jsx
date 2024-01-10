import React from 'react';
import { FaRegUser, FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import Mobile from './mobile/Mobile';

const Navbar = () => {
  const [mobile, setMobile] = React.useState(false);
  const handleMobile = () => {
    setMobile(e => !e);
  }
  return (
    <header className="w-full p-4 flex justify-between absolute z-10">
      <div>
        <h1 className="text-white">BEACHES.</h1>
      </div>
      <div>
        <ul className="hidden md:flex text-white">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travels</li>
            <li>View</li>
            <li>Book</li>
        </ul>
      </div>
      <div className="hidden md:flex gap-4">
        <FaRegUser 
            className="cursor-pointer text-white"
            size={20}
        />
        <FaSearch 
            className="cursor-pointer text-white"
            size={20}
        />
      </div>
      <div className="md:hidden">
        <IoMdMenu 
            onClick={handleMobile}
            className="cursor-pointer text-white"
            size={35}
        />
      </div>
      <Mobile
        mobile={mobile}
        handleMobile={handleMobile} 
       />
    </header>
  )
}

export default Navbar;