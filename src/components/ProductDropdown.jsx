/* eslint-disable react/prop-types */
import React from 'react';
import { productData } from '../../constants';
const ProductDropdown = ({setHovering}) => {
  return (
    <div
      className="bg-[#fcfcfc] p-10 flex flex-col card_shadow "
      onMouseEnter={() => PsetHovering(true)}
      onMouseLeave={() => PsetHovering(false)}
    >
      {productData.map((item, index) => (
        <div key={index} className="w-[250px] flex flex-col gap-4 ">
          <h1 className="text-gray-600 font-semibold text-xl">{item.title}</h1>
          <p className="text-[14px] text-gray-600">{item.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductDropdown;;
