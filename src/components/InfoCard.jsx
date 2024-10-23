import React from 'react';
import Button from './Button';

const InfoCard = () => {
  return (
    <div className="mt-20 bg-[#f2faff]">
      <div className="w-full p-10">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-[40px] w-[700px] text-gray-600">
            It’s <span className='text-primary'>your</span> business. <br /> We’re here to help it grow.
          </h1>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
