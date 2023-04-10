'use client';
import Image from 'next/image';
import photo from '../public/foto-cv.jpeg';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import css from '../public/css.png';
import express from '../public/express.png';
import gitBash from '../public/gitBash.png';
import html from '../public/html.png';
import javascriptLogo from '../public/javascriptLogo.png';
import next from '../public/next.png';
import nodeJS from '../public/nodeJS.png';
import react from '../public/react.png';
import redux from '../public/redux.png';
import tailwind from '../public/tailwind.png';
import CarouselComp from './components/Carousel';



export default function Home() {
  return (

    <div className="w-full h-screen overflow-y-scroll bg-white dark:bg-slate-800 scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-orange-600 md:scroll-smooth snap-y snap-mandatory">

      <section className='flex flex-col items-center justify-center w-full h-screen bg-violet-900 snap-center'>
        <nav className='flex flex-col items-center justify-center'>
          <a href="#aboutMe" className="mr-4 text-lg text-gray-700 dark:text-white">About Me</a>
          <a href="#myProjects" className="mr-4 text-lg text-gray-700 dark:text-white">My Projects</a>
          <a href="#myTools" className="mr-4 text-lg text-gray-700 dark:text-white">My Tools</a>
          <a href="#contactMe" className="mr-4 text-lg text-gray-700 dark:text-white">Contact Me</a>
        </nav>

      </section>



      <section id='aboutMe' className='flex flex-col items-center justify-center w-full h-screen bg-lime-800 snap-center'>
        <div className='max-lg:mx-6 max-lg:mt-8 '>
          <h1 className="py-2 text-5xl text-center text-blue-900 font-roboto max-md:text-3xl dark:text-blue-300">Gonzalo Zucca</h1>
          <h2 className="text-2xl text-center text-black max-md:text-lg dark:text-gray-200 ">Full-Stack Developer</h2>

          <div className='flex flex-row flex-wrap lg:mx-32 2xl:mx-96'>
            <div className='relative mx-auto my-4 overflow-hidden rounded-full w-80 h-80 max-md:w-40 max-md:h-40'>
              <Image priority src={photo} alt='photo' className='object-cover' />
            </div>
            <div className='md:w-6/12'>
              <p className="my-4 leading-7 tracking-wide text-justify text-gray-700 dark:text-white max-md:text-sm"> Hi there! I'm Gonzalo. I've a bachelor's degree in marketing the English Language, but I've recently found my true passion in programming and decided to become a Full-Stack Web Developer. <br></br>  <br></br> Since then, I have successfully graduated from "Soy Henry" Coding Bootcamp, where I've learned the basics of web programming with Javascript and some of its most widely utilized frameworks and libraries: tools such as React, Redux, Node JS, and Express and many more that I've used in different projects. And I'm excited to say that this is only the beginning of my career in this ever-growing profession which is web programming. </p>
            </div>
          </div>

        </div>
      </section>

      <section id='myProjects' className='h-screen pt-6 bg-red-800 snap-center'>

  
          <CarouselComp></CarouselComp>

      </section>


      <section id='myTools' className='flex flex-col items-center justify-center w-full h-screen bg-yellow-800 snap-center'>
        <div className='mx-auto'>
          <h1 className="py-2 text-5xl text-center text-blue-900 font-roboto dark:text-blue-300">My tools</h1>
          <ul className='flex flex-wrap justify-center gap-4 mt-4 md:mx-32 lg:mx-64 max-md:mx-16'>
            <li className='grid w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-600'>
              <Image src={html} alt='html' width={70} height={70} className='self-center justify-self-center' ></Image>
            </li>

            <li className='grid w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-600'>
              <Image src={css} alt='css' width={70} height={70} className='self-center justify-self-center' ></Image>
            </li>

            <li className='grid w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-600'>
              <Image src={javascriptLogo} alt='javascript' width={60} height={60} className='self-center w-auto h-auto justify-self-center' ></Image>
            </li>

            <li className='grid w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-600'>
              <Image src={gitBash} alt='gitbash' width={60} height={60} className='self-center w-auto h-auto justify-self-center' ></Image>
            </li>

            <li className='grid w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-600'>
              <Image src={nodeJS} alt='nodeJS' width={60} height={60} className='self-center w-auto h-auto justify-self-center' ></Image>
            </li>

            <li className='grid w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-600'>
              <Image src={react} alt='react' width={60} height={60} className='self-center w-auto h-auto justify-self-center' ></Image>
            </li>

            <li className='grid w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-600'>
              <Image src={redux} alt='redux' width={60} height={60} className='self-center w-auto h-auto justify-self-center' ></Image>
            </li>

            <li className='grid w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-600'>
              <Image src={express} alt='express' width={60} height={60} className='self-center w-auto h-auto justify-self-center' ></Image>
            </li>

            <li className='grid w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-600'>
              <Image src={tailwind} alt='tailwind' width={60} height={60} className='self-center w-auto h-auto justify-self-center' ></Image>
            </li>

            <li className='grid w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-600'>
              <Image src={next} alt='next' width={60} height={60} className='self-center w-auto h-auto justify-self-center' ></Image>
            </li>

          </ul>

        </div>
      </section>


      <section id='contactMe' className='flex flex-col items-center justify-center w-full h-screen bg-teal-800 snap-center'>

        <div className='flex flex-col items-center justify-center mx-auto md:h-screen lg:w-6/12 md:w-10/12 sm:w-full'>

          <div className='w-full m-8 mx-auto text-center'>
            <h2 className="text-6xl text-gray-700 dark:text-white max-sm:text-5xl">Contact Me!</h2>
          </div>
          <div className='flex flex-row items-center justify-end w-full mb-4 lg:mr-32 md:mr-16'>
            <label className="pr-4 text-2xl text-gray-700 dark:text-white max-sm:text-xl">Name: </label>
            <input className='w-8/12 rounded shadow-lg bg-slate-200' />
          </div>
          <div className='flex flex-row items-center justify-end w-full lg:mr-32 md:mr-16'>
            <label className="pr-4 text-2xl text-gray-700 dark:text-white max-sm:text-xl">Email: </label>
            <input className='w-8/12 rounded shadow-lg bg-slate-200' />
          </div>
          <div className='flex flex-row items-center w-full mt-8'>
            <textarea className="w-full h-24 rounded shadow-lg resize-none bg-slate-200"></textarea>
          </div>

          <div className='flex flex-row justify-around w-full mt-8'>
            <a href='https://www.linkedin.com/in/gonzalo-zucca-51557b7a/?locale=en_US'>
              <BsLinkedin className='text-5xl text-black cursor-pointer dark:text-white' />
            </a>

            <a href='https://github.com/gzucca'>
              <BsGithub className='text-5xl text-black cursor-pointer dark:text-white' />
            </a>

            <a href='mailto:gonzalo.zucca@gmail.com' >
              <AiOutlineMail className='text-5xl text-black cursor-pointer dark:text-white' />
            </a>
          </div>

        </div>
      </section>

    </div>

  )
}
