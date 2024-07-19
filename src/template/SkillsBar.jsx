import React from 'react'

const SkillBar = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="relative flex text-white mb-1 ">
          <div>
              {skill.name}
          </div> 
          <div className='absolute' style={{marginLeft: `${skill.percentage}%`}}>
              {skill.percentage}%
          </div>
      </div>
      <div className="relative h-1 rounded-full overflow-hidden bg-secondaryColor">
        <div
          style={{ width: `${skill.percentage}%` }}
          className="h-full bg-thirtaryColor relative flex items-center justify-end"
        >
        </div>
      </div>
    </div>
  );
};
export default SkillBar
