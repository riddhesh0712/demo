import React, { useState } from 'react';
import BlogCard from '../template/BlogCard.jsx';

const blogs = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Blog Post 1',
    date: 'March 1, 2023',
    comments: 5,
    description: 'Description for blog post 1. This is quite a long description to showcase truncation.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Blog Post 2',
    date: 'March 2, 2023',
    comments: 2,
    description: 'Description for blog post 2. This is quite a long description to showcase truncation.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Blog Post 3',
    date: 'March 3, 2023',
    comments: 3,
    description: 'Description for blog post 3. This is quite a long description to showcase truncation.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Blog Post 4',
    date: 'March 4, 2023',
    comments: 4,
    description: 'Description for blog post 4. This is quite a long description to showcase truncation.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Blog Post 5',
    date: 'March 5, 2023',
    comments: 5,
    description: 'Description for blog post 5. This is quite a long description to showcase truncation.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Blog Post 6',
    date: 'March 6, 2023',
    comments: 6,
    description: 'Description for blog post 6. This is quite a long description to showcase truncation.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Blog Post 1',
    date: 'March 1, 2023',
    comments: 5,
    description: 'Description for blog post 1. This is quite a long description to showcase truncation.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Blog Post 2',
    date: 'March 2, 2023',
    comments: 2,
    description: 'Description for blog post 2. This is quite a long description to showcase truncation.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Blog Post 3',
    date: 'March 3, 2023',
    comments: 3,
    description: 'Description for blog post 3. This is quite a long description to showcase truncation.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Blog Post 4',
    date: 'March 4, 2023',
    comments: 4,
    description: 'Description for blog post 4. This is quite a long description to showcase truncation.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Blog Post 5',
    date: 'March 5, 2023',
    comments: 5,
    description: 'Description for blog post 5. This is quite a long description to showcase truncation.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Blog Post 6',
    date: 'March 6, 2023',
    comments: 6,
    description: 'Description for blog post 6. This is quite a long description to showcase truncation.',
  },

  
  // Add more blog posts as needed
];

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const maxPageButtons = 5;

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const currentItems = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPaginationButtons = () => {
    let start = 1;
    let end = totalPages;

    if (totalPages > maxPageButtons) {
      if (currentPage <= Math.ceil(maxPageButtons / 2)) {
        end = maxPageButtons;
      } else if (currentPage + Math.floor(maxPageButtons / 2) >= totalPages) {
        start = totalPages - maxPageButtons + 1;
      } else {
        start = currentPage - Math.floor(maxPageButtons / 2);
        end = currentPage + Math.floor(maxPageButtons / 2);
      }
    }

    return Array.from({ length: end - start + 1 }, (_, idx) => start + idx);
  };
  return (
    <div>
      <div className="grid grid-cols-1 gap-6">
        {currentItems.map((blog, index) => (
          
          <BlogCard
            key={index}
            image={blog.image}
            title={blog.title}
            date={blog.date}
            comments={blog.comments}
            description={blog.description}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <nav className="flex space-x-2 p-12">
          <button
            onClick={handlePrevClick}
            className={`px-4 py-2 rounded ${
              currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700'
            }`}
            hidden={currentPage === 1}
          >
            &lt;
          </button>
          {getPaginationButtons().map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handleClick(pageNumber)}
              className={`px-4 py-2  ${
                currentPage === pageNumber
                  ? 'bg-thirtaryColor text-secondaryColor'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {pageNumber}
            </button>
          ))}
          <button
            onClick={handleNextClick}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700'
            }`}
            hidden={currentPage === totalPages}
          >
            &gt;
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;