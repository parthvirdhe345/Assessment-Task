import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-800 px-12 py-4">
      <div className="container mx-auto flex justify-between items-center ">
        <Link to="/" className="text-white  text-xl hover:scale-105 duration-125">Home</Link>
        <div className="w-1/2 mx-4">
        {/* <Link to="/" className="text-white  text-xl hover:scale-105 duration-125"></Link> */}
        <div className="flex justify-start">
            <Link to="/add" className="text-white  text-xl hover:scale-105 duration-125">+ Add User</Link>
            </div>
         
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
