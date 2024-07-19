import React, { useState } from 'react';
import { SiDevpost } from 'react-icons/si';
import { GrHomeRounded } from 'react-icons/gr';
import { SiAboutdotme } from 'react-icons/si';
import { SiEducative } from 'react-icons/si';
import { GrProjects } from 'react-icons/gr';
import { FaBlog } from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { RiCloseLargeLine } from 'react-icons/ri';
import '../style/template.css'; // Make sure this path is correct
import { Link } from 'react-router-dom';

const SideNavbar = () => {
  const [nav, setNav] = useState(false); // Default to false for the initial state

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="">
      {/* Sidebar */}
      <div className="flex flex-col justify-start fixed left-0 top-0 w-full lg:h-[100vh] lg:w-[20%] bg-secondaryColor text-white ">
        <div className="flex justify-between items-center">
          {/* Responsive Navigation Bar */}
          <div className="flex items-end px-10 py-6 lg:pb-5 lg:pt-10">
            {/* <SiDevpost size={35} /> */}
            <span className="text-3xl md:text-4xl">.Dev</span>
          </div>
          <div className="relative block lg:hidden p-5">
            <div onClick={handleNav} className="">
              {nav ? <RiCloseLargeLine size={24} /> : <CgMenuRight size={24} />}
            </div>
          </div>
        </div>
        {/* Side bar nav items */}
        <div className={`${nav ? 'block' : 'hidden'} lg:block h-screen lg:mt-10 w-full p-10 lg:p-0 transition-all ease-in-out duration-700`}>
          <ul className="flex flex-col justify-center items-start w-full">
            <Link to="/" onClick={() => setNav(false)} className='navLink'>
              <li className="navItems">
                <GrHomeRounded size={24} />
                <span>Home</span>
              </li>
            </Link>
            <Link to="/about" onClick={() => setNav(false)} className='navLink'>
              <li className="navItems">
                <SiAboutdotme size={24} />
                <span>About Me</span>
              </li>
            </Link>
            <Link to="/skills" onClick={() => setNav(false)} className='navLink'>
              <li className="navItems">
                <SiEducative size={24} />
                <span>Skills</span>
              </li>
            </Link>
            <Link to="/portfolio" onClick={() => setNav(false)} className='navLink'>
              <li className="navItems">
                <GrProjects size={24} />
                <span>Portfolio</span>
              </li>
            </Link>
            <Link to="/blogs" onClick={() => setNav(false)} className='navLink'>
              <li className="navItems">
                <FaBlog size={24} />
                <span>Blogs</span>
              </li>
            </Link>
            <Link to="/contact" onClick={() => setNav(false)} className='navLink'>
              <li className="navItems">
                <IoIosContact size={24} />
                <span>Contact Me</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;