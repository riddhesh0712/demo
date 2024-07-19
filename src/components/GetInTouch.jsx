import React from 'react';
import Button from '../template/Button.jsx'
import Reveal from '../animation/Reveal.tsx';
const GetInTouch = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto px-10 lg:px-20 py-20 bg-white mt-20    ">
         
        <Reveal>
            <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-4">
                INNOVATION BY SOFTWARE    
             </h2>
        </Reveal>
        <Reveal>
            <h1 className="text-3xl lg:text-5xl text-center font-bold text-gray-800 mb-8">
                SET UP A 15 MIN MEETING
            </h1>
        </Reveal>
        <Reveal>
            <p className="text-lg text-gray-600 mb-6 text-center">
                Set up a call with one of our creative directors to
                discover how you can leverage design to enhance
                the growth of your startup.
            </p>
        </Reveal>
        <Reveal>
            <Button first={"Schedule"} second={"Meeting"} type={""}/>
        </Reveal> 
      
      
      
    </div>
  );
};

export default GetInTouch;