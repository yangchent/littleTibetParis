import React from "react";
import { Link } from "react-router-dom";



function Footer() {
  return (
    <footer>
      <div className="bg-baseColor fixed inset-x-0 bottom-0 ">
        <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row justify-between ">
          <div>
            <p>© 2021 littleTibetParis. All rights reserved.</p>
          </div>
          
          <div className=" sm:mt-0 w-full sm:w-auto sm:text-left">
            <div className="flex ">
              <Link to="/faq" className="p-1 ml-4">FAQ</Link>
              <Link to="/contact" className="p-1 ml-4">Contact</Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;