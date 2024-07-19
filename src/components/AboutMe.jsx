import React from 'react'
import Profile from '../assets/profileabout.jpg'
import Reveal from '../animation/Reveal.tsx'
import RevealRight from '../animation/RevealRight.tsx'

export const AboutMeComp = () => {
  return (
    <div className='fixed h-screen lg:left-[20%] w-full -z-10 lg:w-[80%] mt-16 lg:mt-0 overflow-y-scroll bg-primaryColor '>
        <div className='flex flex-col lg:flex-row justify-center p-10'> 
            <div className='flex flex-col flex-1 justify-start text-white'>
                <Reveal>
                    <h1 className='mb-10'>Riddhesh Padma</h1>
                </Reveal>
                <Reveal>
                    <h2 className='mb-5'>GET TO KNOW ME</h2>
                </Reveal>
                <Reveal>
                    <p className='mb-4 text-sm'>
                        Hello! I'm Riddhesh Padma, a passionate full-stack developer and aspiring entrepreneur. With a solid foundation in both front-end and back-end development, I specialize in creating dynamic, user-friendly web applications that drive business success. I am currently pursuing a Bachelor's degree in Technology and have a diploma from Swami Vivekanand Institute of Technology.
                    </p>
                </Reveal>
                <Reveal>
                    <p className='mb-4 text-sm'>
                        Driven by a desire to make a meaningful impact, I am inspired to work with clients and build a startup that offers comprehensive software development services. My goal is to help small businesses and startups leverage technology to expand their reach and achieve their business objectives.
                    </p>
                </Reveal>
                <Reveal>
                    <p className=' mb-4 text-sm'>
                        When I'm not coding, you'll find me exploring the latest tech trends, working on personal projects, or learning new tools and frameworks. I believe in continuous learning and strive to stay at the forefront of technological advancements.
                    </p>
                </Reveal>
                <Reveal>
                    <p className=''>
                        Let's create something amazing together!
                    </p>
                </Reveal>
                <div className='flex justify-center items-center mt-5'>
                    <Reveal>
                        <button className='py-2 px-4 border-2 hover:cursor-pointer hover:bg-white hover:text-black transition ease-in-out duration-300'>Get in touch</button>
                    </Reveal>
                    
                </div>
            </div>
            <div className='flex items-end justify-end flex-1 p-10'>
                <RevealRight>
                    <img src={Profile} alt="" className='w-3/4'/>   
                </RevealRight>
            </div>
        </div>
    </div>
  )
}
