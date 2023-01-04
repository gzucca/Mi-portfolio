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

        <div className="fixed self-start w-screen top-0 z-50 bg-white dark:bg-black px-2  shadow-lg">

            <nav className='py-3'>

                <ul className='flex justify-around'>

                        <div className='flex justify-between items-center'>
                            <li>
                                <a href='https://www.linkedin.com/in/gonzalo-zucca-dev/'>
                                    <BsLinkedin className='text-black dark:text-white cursor-pointer text-3xl' />
                                </a>
                            </li>

                            <li>
                                <a href='https://github.com/gzucca'>
                                    <BsGithub className='text-black dark:text-white cursor-pointer text-3xl ml-4' />
                                </a>
                            </li>
                        </div>


                        <div className='flex justify-between items-center'>
                            <li>
                                {darkMode === false ? (<BsFillMoonStarsFill onClick={handleDarkMode} className='cursor-pointer text-3xl text-black' />) : (<BsSun onClick={handleDarkMode} className='cursor-pointer text-3xl dark:text-white' />)}
                            </li>

                            <li>
                                <a className='bg-gradient-to-r  from-cyan-800  to-cyan-700 text-white px-4 py-2 rounded ml-8' href="https://drive.google.com/file/d/1-je9TGhsldLceSW3588D4Y1Mz1--qM0v/view?usp=sharing">Resume</a>
                            </li>
                        </div>


                </ul>
            </nav>


        </div>
    )
}

export default Navbar