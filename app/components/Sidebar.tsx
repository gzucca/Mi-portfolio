'use client';
import React, { useState } from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleNav}
        className="sticky top-0 text-gray-700 dark:text-white hover:text-gray-800 flex items-center focus:text-black z-10"
      >
        <div>
          {isOpen ? (
            <AiOutlineMenuUnfold className='text-3xl' />
          ) : (
            <AiOutlineMenuFold className='text-3xl' />
          )}
        </div>
      </button>

      {isOpen ? (
        <div className="fixed h-screen top-0 left-0 ease-in duration-300" >
          <nav className=" py-8 h-screen w-32 bg-slate-400 shadow-xl">

            <ul className=" text-gray-800 py-4">
              <li className="py-2 ">
                <a
                  href="#"
                  className="block pl-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                >
                  Home
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="block pl-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                >
                  About
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="block pl-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) :
        <div></div>
      }
    </div>
  );

}

export default Sidebar;
