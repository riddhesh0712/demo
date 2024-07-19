import React, { useState } from 'react'
import BlogCard from '../template/BlogCard.jsx'
import Pagination from './BlogsPagination.jsx'
import { BiCategory } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

const blogsItems = [
    {
        image : 'https://via.placeholder.com/150',
        title : 'Montu is Going to Breakup with Tuntuni',
        date : '18, March, 2017',
        comments : '33',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    },
    {
        image : 'https://via.placeholder.com/150',
        title : 'Montu is Going to Breakup with Tuntuni',
        date : '18, March, 2017',
        comments : '33',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    },
    {
        image : 'https://via.placeholder.com/150',
        title : 'Montu is Going to Breakup with Tuntuni',
        date : '18, March, 2017',
        comments : '33',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    },
    {
        image : 'https://via.placeholder.com/150',
        title : 'Montu is Going to Breakup with Tuntuni',
        date : '18, March, 2017',
        comments : '33',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    }
]
const categoryNames = [
    {
        categoryName: "Education"
    },
    {
        categoryName: "E-Commerce"
    },
    {
        categoryName: "Management"
    },
    {
        categoryName: "Education"
    },
    {
        categoryName: "Education"
    },
    {
        categoryName: "Education"
    },
]
export const BlogsComp = () => {
    const [cat, setCat] = useState(false)

    const handleCategory =  () => {
        setCat(!cat)
    }
  return (
    <div className='flex flex-1 lg:justify-start lg:items-start h-screen fixed lg:left-[20%] lg:w-[80%] w-full -z-10 bg-primaryColor '>
        <div className='text-white  lg:px-20 p-5 overflow-hidden'>
            <div className='flel flex-col justify-center'>
                <div className='flex justify-between items-end border-b-2 p-4 mt-20 lg:mt-0'>
                    <h1 className='text-3xl lg:text-6xl font-bold text-start'>Blogs</h1>
                    <div className='relative flex justify-center items-center space-x-4'>
                        {/* SearchBar */}
                        <div className='flex justify-center items-center space-x-2'>
                            <div className='hidden lg:block'>
                                <input
                                    type="search"
                                    className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg- bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-secondaryColor dark:placeholder:text-secondaryColor dark:focus:border-primary"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="button-addon2" 
                                />
                               
                            </div>
                            <div className=' bg-secondaryColor p-2 rounded'>
                                <IoSearch size={20} className=''/>
                            </div>
                        </div>
                        <div onClick={handleCategory} className='lg:hidden  bg-secondaryColor rounded p-2'>
                            <BiCategory size={20} className='hover:cursor-pointer hover:scale-105 transition-transform duration-300'/>
                        </div>
                    </div>
                </div>
                <div className={`${cat ? 'absolute right-0 top-0 transition-all ease-in-out duration-500' : 'hidden lg:block transition-all ease-in-out duration-500'} relative w-full  p-0 lg:p-4` }>
                    <ul className="absolute right-0 top-0 z-10 bg-secondaryColor lg:bg-primaryColor lg:static flex flex-col w-full lg:flex-row justify-around">
                        {categoryNames.map((item, index) => (
                            <li className='font-bold w-full py-3 pl-3 pr-14 lg:py-0 lg:pl-0 lg:pr-0' key={index}>{item.categoryName}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className=' scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent w-full max-h-[80vh] overflow-y-scroll overflo p-8'>
                <Pagination />
            </div>
        </div>
        
    </div>
  )
}
