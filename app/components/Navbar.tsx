import React from 'react'
import {BsLinkedin, BsGithub } from 'react-icons/bs'
import ThemeSwitch from './DarkMode';



const Navbar: React.FC = () => {



return (

    <div className="fixed self-start w-screen top-0 z-50 bg-white dark:bg-black px-2  shadow-lg">

        <nav className='py-3'>

            <ul className='flex flex-row justify-between w-8/12 mx-auto'>

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
                        {<ThemeSwitch/> ? <ThemeSwitch/> : null }
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