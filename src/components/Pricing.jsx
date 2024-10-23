import React, { useState } from "react";
import { cardData } from "../../constants";
import tick from "../assets/tick.svg";
import Button from "./Button";

const Pricing = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`${
        toggle ? "mt-32" : "mt-28"
      }  flex flex-col gap-24 items-center`}
    >
      <div className="flex flex-row items-center gap-10 flex-1">
        <h1 className="text-3xl">Plans & Pricing</h1>
        <p>MONTHLY</p>
        <div
          className="w-20 h-9 rounded-3xl bg-primary flex items-center p-1 relative cursor-pointer "
          onClick={() => setToggle(!toggle)}
        >
          <div
            className={`${
              toggle ? "translate-x-10" : "left-1"
            } absolute bg-white rounded-full w-8 h-8 transition duration-150`}
          />
        </div>
        <p className="text-gray-500 text-2xl">YEARLY</p>
      </div>
      <div className="flex flex-row gap-6">
        <div className="bg-[#fbfcff] p-10 card_shadow flex flex-col justify-between gap-6 flex-1">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl text-gray-500 font-semibold">Starter</h1>
            <p className="text-gray-400 text-[14px]">
              Ideal for freelancers and contractors just starting out.
            </p>
            <h1 className="text-[40px] text-gray-600">$ 24/MONTH</h1>
            <hr className="h-1 bg-primary" />
            {cardData[0].map((item, index) => (
              <div key={index} className="flex flex-row gap-3 items-center">
                <img src={tick} alt="tick" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <Button />
        </div>
        <div className="bg-[#fbfcff] p-10 card_shadow flex flex-col gap-6 relative flex-1 justify-between">
          <div className="flex flex-col gap-6 ">
            <h1 className="text-2xl text-gray-500 font-semibold">
              Professional
            </h1>
            <p className="text-gray-400 text-[14px]">
              Everything a growing independent business needs to thrive.
            </p>
            <h1 className="text-[40px] text-gray-600">$ 39/MONTH</h1>
            <hr className="h-1 bg-primary" />
            {cardData[1].map((item, index) => (
              <div key={index} className="flex flex-row gap-3 items-center">
                <img src={tick} alt="tick" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <Button />
        </div>
        <div className="bg-[#fbfcff] p-10 card_shadow flex flex-col gap-6 flex-1 justify-between">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl text-gray-500 font-semibold">Business</h1>
            <p className="text-gray-400 text-[14px]">
              The perfect package for small businesses and agencies.
            </p>
            <h1 className="text-[40px] text-gray-600">$ 79/MONTH</h1>
            <hr className="h-1 bg-primary" />
            {cardData[2].map((item, index) => (
              <div key={index} className="flex flex-row gap-3 items-center">
                <img src={tick} alt="tick" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
