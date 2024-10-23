/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const FaqItem = ({ title, content }) => {
  const [dropdown, setDropdown] = useState(false);
  
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div
          className="flex flex-row  justify-between items-center cursor-pointer"
          onClick={() => setDropdown(!dropdown)}
        >
          <h1 className="font-bold text-xl text-gray-600">
            {title}
          </h1>
          <IoIosArrowDown className="cursor-pointer" size={30} />
        </div>
        <div className={`${dropdown ? "block" : "hidden"} leading-8 left-0`}>
         {content}
        </div>
      </div>
    </div>
  );
}

export default FaqItem;
