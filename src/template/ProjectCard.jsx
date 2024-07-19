import React from 'react'

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};
export const ProjectCard = ({title, description, imageUrl, date}) => {
  const truncatedDescription = truncateText(description, 100); // Adjust the maxLength as needed

  return (
    
    <div className="flex flex-col bg-white overflow-hidden shadow-xl  text-primaryColor  transform hover:scale-105 transition-transform duration-300 hover:cursor-pointer p-4">
      <img className=" object-cover" src={imageUrl} alt="Article" />
      <div className="py-2  ">
        <h2 className="text-md md:text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500 text-xs md:text-sm mb-4">
          {date}
        </p>
        <p className="text-gray-400 mb-6">{truncatedDescription}</p>
        <button className=" hover:text-secondaryColor hover:bg-secondary-30 border border-primaryColor hover:bg-thirtaryColor transition-all ease-in-out duration-300  py-2  px-2 md:px-4 rounded">
          READ MORE &gt;
        </button>
      </div>
    </div>
  )
}
export default ProjectCard