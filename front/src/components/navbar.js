import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  
  return (
        <nav className="bg-lightColor">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">

                        <Link to="/" className="flex items-center py-4 px-2">
                         <img src="./img/logoTiP.png" alt="Logo" width="150px" />
                        </Link>
                    </div>
                    <div className="flex space-x-7">
                        <Link to="/about" className="py-4 px-2 text-baseColor font-semibold ">About</Link>
                        <Link to="/boutique" className="py-4 px-2 text-baseColor font-semibold ">Boutique</Link>                    
                        <Link to="/restaurant" className="block text-sm px-2 py-4 hover:baseColor transition duration-300" >Restaurant</Link>
                        <Link to="/ngo" className="block text-sm px-2 py-4 hover:baseColor transition duration-300" >NGO</Link>
                        <Link to="/contact" className="block text-sm px-2 py-4 hover:baseColor transition duration-300" >Contact</Link>
                    </div>
                    </div>
            </div>
        </nav >
  );
};
export default Navbar;