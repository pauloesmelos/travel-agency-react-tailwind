import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24 bg-gray-200 w-full">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-4 lg:flex-row items-center justify-between pt-9">
        <h1 className="text-center">BEACHES.</h1>
        <div className="flex justify-between w-full max-w-[300px]">
            <FaFacebook 
                className="icon"
                size={30}
            />
            <FaInstagram 
                className="icon"
                size={30}
            />
            <FaPinterest 
                className="icon"
                size={30}
            />
            <FaTwitter 
                className="icon"
                size={30}
            />
            <FaYoutube 
                className="icon"
                size={30}
            />
        </div>
      </div>
      <div className="flex justify-between mt-8 w-full max-w-[1400px] mx-auto">
        <div>
            <ul className="flex flex-col lg:flex-row">
                <li>Home</li>
                <li>Destinations</li>
                <li>Travels</li>
                <li>View</li>
                <li>Book</li>
            </ul>
        </div>
        <div>
            <ul className="flex flex-col lg:flex-row">
                <li>About</li>
                <li>Jobs</li>
                <li>Destinations</li>
                <li>Legal</li>
                <li>Stages</li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;