'use client';
import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

function Footer() {
  return (
    <div className="bg-white dark:bg-black px-2 top-0 left-0 shadow-inner">


    <nav className='text-gray-700 dark:text-white py-10 px-4 flex justify-between'>
        <div>
        <h2>Gonzalo Zucca</h2>
        <h3>Full-Stack Web Developer</h3>
        </div>
        <ul className='flex items-center'>

            <li>
                <BsLinkedin className='cursor-pointer text-2xl'/>
            </li>

            <li>
                <BsGithub className='cursor-pointer text-2xl ml-4' />
            </li>
        </ul>
    </nav>





    </div>
  )
}

export default Footer