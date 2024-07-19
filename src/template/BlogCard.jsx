import React from 'react';

// Utility function to truncate text
const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

const BlogCard = ({ image, title, date, comments, description }) => {
    const truncatedDescription = truncateText(description, 100); // Adjust the maxLength as needed
  return (
    <div className="flex flex-col md:flex-row bg-white overflow-hidden shadow-xl  text-primaryColor  transform hover:scale-105 transition-transform duration-300 hover:cursor-pointer">
      <img className="md:w-1/4 object-cover" src={image} alt="Article" />
      <div className="md:w-2/3 p-4  md:p-6">
        <h2 className="text-md md:text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500 text-xs md:text-sm mb-4">
          {date} | {comments} Comments
        </p>
        <p className="text-gray-400 mb-6">{truncatedDescription}</p>
        <button className=" hover:text-secondaryColor hover:bg-secondary-30 border border-primaryColor hover:bg-thirtaryColor transition-all ease-in-out duration-300  py-2  px-2 md:px-4 rounded">
          READ MORE &gt;
        </button>
      </div>
    </div>
  );
};

export default BlogCard;