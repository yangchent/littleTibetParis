import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  
  return (
    <>
        <nav className="bg-red shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">

                        <Link to="/" className="flex items-center py-4 px-2">
                        <img src="#" alt="Logo" width="150px" />
                        </Link>
                        <Link to="/about" className="py-4 px-2 text-mediumAccent font-semibold ">About</Link>
                        <Link to="/boutique" className="py-4 px-2 text-mediumAccent font-semibold ">Boutique</Link>                    
                        <Link to="/restaurant" className="block text-sm px-2 py-4 hover:mediumAccent transition duration-300" >Restaurant</Link>
                        <Link to="/ngo" className="block text-sm px-2 py-4 hover:mediumAccent transition duration-300" >NGO</Link>
                        <Link to="/contact" className="block text-sm px-2 py-4 hover:mediumAccent transition duration-300" >Contact</Link>
                    </div>
                </div>
            </div>
        </nav >
    </>
  );
};
export default Navbar;