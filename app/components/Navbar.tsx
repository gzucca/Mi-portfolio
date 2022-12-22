'use client';
import React from 'react'
import { BsFillMoonStarsFill, BsSun, BsLinkedin, BsGithub } from 'react-icons/bs'
import { useState, useEffect } from 'react'



const Navbar: React.FC = () => {

    const [darkMode, setDarkMode] = useState(false)



    useEffect(() => {
        if (window.localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark')
            setDarkMode(true)
        } else {
            document.body.classList.remove('dark')
            setDarkMode(false)
        }

    }, []);


    const handleDarkMode = () => {

        document.body.classList.toggle('dark')

        if (document.body.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'true')
            setDarkMode(true)

        } else {
            localStorage.setItem('darkMode', 'false')
            setDarkMode(false)
        }

    }



    return (

        <div className="sticky self-start top-0 left-0 z-50 bg-white dark:bg-black px-2  shadow-lg">

            <nav className='py-3'>

                <ul className='flex justify-around'>

                        <div className='flex justify-between items-center'>
                            <li>
                                <BsLinkedin className='text-black dark:text-white cursor-pointer text-2xl' />
                            </li>

                            <li>
                                <BsGithub className='text-black dark:text-white cursor-pointer text-2xl ml-4' />
                            </li>
                        </div>


                        <div className='flex justify-between items-center'>
                            <li>
                                {darkMode === false ? (<BsFillMoonStarsFill onClick={handleDarkMode} className='cursor-pointer text-3xl text-black' />) : (<BsSun onClick={handleDarkMode} className='cursor-pointer text-3xl dark:text-white' />)}
                            </li>

                            <li>
                                <a className='bg-gradient-to-r  from-cyan-800  to-cyan-700 text-white px-4 py-2 rounded ml-8' href="*">Resume</a>
                            </li>
                        </div>


                </ul>
            </nav>


        </div>
    )
}

export default Navbar