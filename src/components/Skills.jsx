import React from 'react'
import SkillBar from '../template/SkillsBar'
  const skills = [
    { name: 'HTML 5', percentage: 95 },
    { name: 'JAVASCRIPT', percentage: 75 },
    { name: 'PHP', percentage: 85 },
    { name: 'ILLUSTRATOR', percentage: 70 },
    { name: 'PHOTOSHOP', percentage: 95 },
    { name: 'SONY VEGAS', percentage: 90 },
  ];
export const SkillsComp = () => {
  return (
    <div className=' flex flex-1 min-h-screen ml-0 lg:mt-0 fixed lg:left-[20%] w-full lg:w-[80%] -z-10 bg-primaryColor '>
        <div className='flex flex-col justify-center items-center text-white w-full max-w-screen-lg p-5'>
            <div className=' text-center mb-4'>
                <h1 className='text-6xl font-bold'>Skills</h1>
            </div> 
            
            <div className="grid grid-cols-1  gap-8 px-5 w-full lg:w-1/2">
              {skills.map((skills, index) => (
                
                  <SkillBar key={index} skill={skills} />

              ))}
            </div>
           
        </div>
    </div>
  )
}
export default SkillsComp