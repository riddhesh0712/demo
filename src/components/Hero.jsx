import React, { useEffect, useState } from 'react'
import HeroSvg from '../assets/HeroSvg1.png'
import aa from '../assets/aa.jpg'
import aa2 from '../assets/aa2.jpg'
import aa3 from '../assets/aa3.jpg'
import aa4 from '../assets/aa4.jpg'
import Reveal from '../animation/Reveal.tsx'
import RevealRight from '../animation/RevealRight.tsx'


export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [aa, aa2, aa3, aa4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          console.log("000");
          return 0;
        } else {
          console.log("111");
          return prevIndex + 1;
        }
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
    <div className='flex flex-col fixed h-screen lg:left-[20%] w-full -z-10 lg:w-[80%] bg-cover' >
      <div className='relative w-full h-screen'>
        <div className="absolute w-full h-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`carousel-${index}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>

        <div className="absolute flex flex-col lg:flex-row  h-[100vh] w-full px-10 bg-primaryColor bg-opacity-75">
          <div className='flex flex-1 flex-col justify-end space-y-2 text-thirtaryColor lg:pb-20 pt-20 lg:pt-0'>
              <Reveal>
                <h1 className="text-5xl lg:text-8xl font-bold ">Hello</h1>
              </Reveal>
              <Reveal>
                <h2 className="text-4xl lg:text-7xl font-bold mt-2 shadow-xl">I am Riddhesh</h2>
              </Reveal>
              <Reveal>
                <p className="text-xl lg:text-3xl mt-2">Fullstack Developer</p>
              </Reveal>
            <div className='flex lg:pt-10'>
              <Reveal>
                <p className='max-w-md '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error fugit facilis illum nesciunt </p>
              </Reveal>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-end items-end lg:pt-20 lg:pl-16">
            <RevealRight>
              <img src={HeroSvg} alt="Profile of Riddhesh" className="object-cover h-[100%] overflow-visible" />

            </RevealRight>
          </div>
        </div>
      </div>
      
    </div>
  )
}
