import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  
  return (
        <nav className="bg-lightColor">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div className="">

                        <Link to="/" className="flex items-center px-2">
                            <img src="./img/logoT.png" alt="Logo" width="120px" />
                        </Link>
                    </div>
                    <div className="flex space-x-7 items-center">
                        <Link to="/about" className="py-4 px-2 text-baseColor font-semibold hover:text-black transition duration-300">ABOUT</Link>
                        <Link to="/boutique" className="py-4 px-2 text-baseColor font-semibold hover:text-black transition duration-300">BOUTIQUE</Link>                    
                        <Link to="/restaurant" className="block font-semibold px-2 py-4 text-baseColor hover:text-black transition duration-300" >RESTAURANT</Link>
                        <Link to="/ngo" className="block font-semibold px-2 py-4 text-baseColor hover:text-black transition duration-300" >NGO</Link>
                        <Link to="/contact" className="block font-semibold px-2 py-4 text-baseColor hover:text-black transition duration-300" >CONTACT</Link>
                    </div>
                    </div>
            </div>
        </nav >
  );
};
export default Navbar;