import React,  { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
          setIsAuth(true);
        }
      }, []);

  return (
        <nav>
            <div className="fixed inset-x-0 top-0 z-10 bg-white flex justify-center">
                <div className="flex justify-between ">
                    <div className="flex space-x-7 items-center">
                        <Link to="/" className="py-4 px-2 font-poppins font-semibold hover:text-mygreen transition duration-300">ACCUEIL</Link>
                        <Link to="/about" className="py-4 px-2 font-poppins font-semibold hover:text-mygreen transition duration-300">À PROPOS DE</Link>
                        <Link to="/boutique" className="py-4 px-2 font-poppins font-semibold hover:text-mygreen transition duration-300">BOUTIQUE</Link>                    
                        <Link to="/restaurant" className="block font-poppins font-semibold px-2 py-4 hover:text-mygreen transition duration-300" >RESTAURANT</Link>
                        <Link to="/ngo" className="block font-poppins font-semibold px-2 py-4 hover:text-mygreen transition duration-300" >ASSOCIATION</Link>
                        <Link to="/contact" className="block font-poppins font-semibold px-2 py-4 hover:text-mygreen transition duration-300" >CONTACT</Link>
                    </div>
                    <ul>
                    {isAuth === true ? (                                                    
                        <li className='ml-12 inline-block'>
                            <Link to='/logout' className="block font-poppins text-myorange px-1 py-4 hover:text-mygreen transition duration-300">Logout</Link>
                        </li>                    
                    ) : (
                        <>
                            <li className='ml-12 inline-block'>
                                <Link to="/register" className="block font-poppins text-myorange px-1 py-4 hover:text-mygreen transition duration-300">S'inscrire</Link>
                            </li>
                            <li className='inline-block'>
                                <Link to="/login" className="block font-poppins text-myorange px-1 py-4 hover:text-mygreen transition duration-300">Connexion</Link>
                            </li>
                        </>
                     
                        )}
                    </ul>
                </div>
            </div>
        </nav >
  );
};
export default Navbar;