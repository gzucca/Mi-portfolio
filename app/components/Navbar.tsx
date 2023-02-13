import React from 'react'
import {BsLinkedin, BsGithub } from 'react-icons/bs'
import ThemeSwitch from './DarkMode';



const Navbar: React.FC = () => {



return (

    <div className="fixed w-screen top-0 z-50 bg-white dark:bg-black py-3 shadow-lg ">

        <nav>

            <ul className='flex flex-row justify-between max-md:w-full w-8/12 max-md:px-4 mx-auto'>

                <div className='flex gap-4 justify-between items-center'>
                    <li>
                        <a href='https://www.linkedin.com/in/gonzalo-zucca-dev/?locale=en_US' target="_blank">
                            <BsLinkedin className='text-black dark:text-white cursor-pointer text-3xl' />
                        </a>
                    </li>

                    <li>
                        <a href='https://github.com/gzucca' target="_blank">
                            <BsGithub className='text-black dark:text-white cursor-pointer text-3xl' />
                        </a>
                    </li>
                </div>


                <div className='flex gap-4 justify-between items-center'>
                    <li>
                        {<ThemeSwitch/> ? <ThemeSwitch/> : null }
                    </li>

                    <li>
                        <a className='bg-gradient-to-r  from-cyan-800  to-cyan-700 text-white px-4 py-2 rounded ' href="https://drive.google.com/file/d/1lqPM_Bl86Kb0fsAyYzNnHzHKOjQFbY3x/view?usp=sharing" target="_blank">Resume</a>
                    </li>
                </div>


            </ul>
        </nav>


    </div>
)
}

export default Navbar