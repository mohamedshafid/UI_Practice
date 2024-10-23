import React from 'react';
import { workflow } from '../../constants';
import { MdKeyboardArrowRight } from "react-icons/md";

const Workflow = () => {
  return (
    <div className="mt-20 flex flex-col">
      <h1 className="text-3xl text-gray-700  text-center">
        Customize your workflow with add-ons
      </h1>
      <div className="w-full ">
        {workflow.map((item, index) => (
          <div
            key={index}
            className="flex flex-row  gap-4 mt-10 bg-[#fbfcff] card_shadow justify-between p-16 items-center"
          >
            <div>
              <h1 className="text-2xl text-gray-600 text-start">
                {item.title}
              </h1>
              <p className="text-gray-400 text-start w-[700px]">
                {item.description}
              </p>
              {index === 0 && (
                <a href="" className="text-primary font-semibold mt- flex flex-row items-center gap-2">
                  LEARN MORE <MdKeyboardArrowRight />
                </a>
              )}
            </div>
            <pre>
              <p className="text-[40px] text-gray-600 font-bold">
                {item.price}
                <span className="font-medium text-[20px]">
                  {item.price !== "Free" && "/YEAR"}
                </span>
              </p>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workflow;
