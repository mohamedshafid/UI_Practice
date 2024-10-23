import React, { useState } from 'react';
import { faqData } from '../../constants';
import FaqItem from './FaqItem';


const Faq = () => {
  return (
    <div className="mt-20 flex flex-col gap-4 w-[80%] mx-auto">
      <h1 className="font-bold text-2xl text-primary text-center">
        Frequently Asked Questions
      </h1>
      <div className='flex flex-col gap-8 mt-10'>
        {
          faqData.map((item, index) => (
            <FaqItem key={index} content={item.content} title={item.title} />
          ))
         }
      </div>
    </div>
  );
}

export default Faq;
