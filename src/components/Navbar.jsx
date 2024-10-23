import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import ProductDropdown from "./ProductDropdown";
import TemplatesDropdown from "./TemplatesDropdown";

const Navbar = () => {
  const [Phovering, PsetHovering] = useState(false);
  const [Thovering, TsetHovering] = useState(false);


  return (
    <div className="w-full py-4 fixed top-0  bg-[#ffffff] z-10">
      <div className="flex flex-row w-[70%] mx-auto items-center justify-between">
        <img src={logo} alt="logo" width={150} height={150} />
        <ul className="flex flex-row gap-10 font-normal">
          <li
            className="flex flex-row gap-2 items-center cursor-pointer relative"
            onMouseEnter={() => PsetHovering(true)}
            onMouseLeave={() => PsetHovering(false)}
          >
            Products
            <IoIosArrowDown className="cursor-pointer" />
            <div className="absolute top-5 -translate-x-[50%]">
              {Phovering && <ProductDropdown setHovering={PsetHovering} />}
            </div>
          </li>
          <li
            className="flex flex-row gap-2 items-center cursor-pointer"
            onMouseEnter={() => TsetHovering(true)}
            onMouseLeave={() => TsetHovering(false)}
          >
            Templates
            <IoIosArrowDown className="cursor-pointer" />
            <div className="absolute top-12 -translate-x-[30%]">
              {Thovering && <TemplatesDropdown TsetHovering={TsetHovering} />}
            </div>
          </li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Reviews</li>
        </ul>
        <div className="flex flex-row gap-6">
          <button className="text-primary border-2 border-primary outline-1 px-4 py-2">
            LOG IN
          </button>
          <button className="bg-primary text-white px-4 py-2">
            START FREE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
