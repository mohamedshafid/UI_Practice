/* eslint-disable react/prop-types */
import React from 'react';
import { TemplateLeftData } from '../../constants';

const TemplatesDropdown = ({TsetHovering}) => {
  return (
    <div className="bg-[#fcfcfc] p-14 flex flex-col card_shadow ">
      <div>
        <div
          className="flex flex-col gap-6 "
          onMouseEnter={() => TsetHovering(true)}
          onMouseLeave={() => TsetHovering(false)}
        >
          {TemplateLeftData.map((item, index) => (
            <div key={index} className="w-[250px] flex flex-row gap-4 ">
              <img src={item.img} alt="icons" width={20} height={20}/>
              <h1 className="text-gray-600  text-[16px]">
                {item.title}
              </h1>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplatesDropdown;
