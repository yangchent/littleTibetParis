import React from "react";
import { Link } from "react-router-dom";



function Footer() {
  return (
    <footer>
      <div className="border border-gray-200 bg-blue-200 text-green mb-0">
        <div className=" px-5 py-4 flex justify-evenly mx-auto ">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">

            <div className="relative sm:w-60 w-40 sm:mr-2 mr-2">
              <label for="footer-field" className="leading-7 text-sm text-white">Search</label>
              <input type="text" id="footer-field" name="footer-field" className="w-full bg-white bg-opacity-50 rounded border border-mediumGrey focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300 text-base outline-none text-darkGrey py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button children="S'inscrire" classAdd="inline-flex mt-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" >S'incrire</button>
          </div>
          <div className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/plinth-l-art-du-r%C3%A9emploi/?viewAsMember=true" ><img src="./img/linkedin.png" alt="linkedin-logo" classNameName="p-4"></img></a>
            <a className="ml-4" target="_blank" rel="noreferrer" href="https://www.instagram.com/plinth_fr/?utm_medium=copy_link" ><img src="./img/instagram.png" alt="instagram-logo" classNameName="p-4"></img></a>
          </div>
        </div>
      </div>

      <div className="bg-mediumAccent ">
        <div className="mx-auto py-4 px-5 flex flex-col sm:flex-row justify-between text-white ">
          <div>
            <p>© 2021 littleTibetParis. All rights reserved.</p>
          </div>
          
          <div className="mt-2 sm:mt-0 w-full sm:w-auto sm:text-left text-gray-500">
            <div className="flex ">
              <Link to="/faq" className="p-1 text-white ml-4">FAQ</Link>
              <Link to="/contact" className="p-1 text-white ml-4">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>


  );
}

export default Footer;