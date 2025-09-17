import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" flex justify-between bg-white w-full">
        <img
          src="https://ik.imagekit.io/hb9mevpzq/BOOK%20FINDER/pngtree-an-open-book-logo-png-image_15367612.png?updatedAt=1757687990133"
          alt="Book.img"
          className="h-auto w-20"
        />
        
          <ul className="hidden md:flex items-center space-x-5 text-[#BD082B] text-[15px] font-bold font-nunito p-5">
            <li>
              <Link to="/">Home</Link>
            </li>
              <li>
              <Link to="/categories">Categories</Link>
            </li>
              <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        
      </div>
    </>
  );
};

export default Header;
