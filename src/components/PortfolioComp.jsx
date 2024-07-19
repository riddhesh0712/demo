import React from 'react';
import { ProjectCard } from '../template/ProjectCard';
import GetInTouch from './GetInTouch';
import RevealLeft from '../animation/RevealLeft.tsx'
import RevealRight from '../animation/RevealRight.tsx'

const projects = [
  { id: 1, title: 'Project 1', description: 'Description 1', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Project 2', description: 'Description 2', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Project 3', description: 'Description 3', imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Project 4', description: 'Description 4', imageUrl: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Project 5', description: 'Description 5', imageUrl: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Project 6', description: 'Description 6', imageUrl: 'https://via.placeholder.com/150' },
];

export const PortfolioComp = () => {
  

  return (
    <div className='flex flex-1 overflow-scroll scrollbar-thin scrollbar-thumb-[#754e38] scrollbar-track-transparen ml-0 lg:mt-0 fixed lg:left-[20%] w-full lg:w-[80%] -z-10  bg-primaryColor'>
      <div className='text-white w-full h-screen max-w-screen-lg  '>
        <div className='p-5 mt-20 lg:mt-0'>
          <div className='p-10'>
            <RevealLeft>
            <h1 className='text-3xl lg:text-4xl font-bold'>Projects</h1>

            </RevealLeft>
          </div>
        </div>
        <div className='p-10 overflow-x-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent'>
          <RevealRight>
          <div className='flex space-x-6'>
            {projects.map((item) => (
              <div key={item.id} className='flex-shrink-0 w-64'>
                <ProjectCard
                  imageUrl={item.imageUrl}
                  title={item.title}
                  date={item.date}
                  description={item.description}
                />
              </div>
            ))}
          </div>
          </RevealRight>
          
        </div>
        <RevealLeft>
          <div className='py-10 w-full'>
            {/* Get in touch */}
          
            <GetInTouch />
          </div>
        </RevealLeft>
      </div>
    </div>
  );
};
