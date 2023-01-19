"use client"
import Image from 'next/image';
import photo from '../public/foto-cv.jpeg';
import programming from '../public/programming.svg';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';
import css from '../public/css.png'
import express from '../public/express.png'
import gitBash from '../public/gitBash.png'
import html from '../public/html.png'
import javascriptLogo from '../public/javascriptLogo.png'
import next from '../public/next.png'
import nodeJS from '../public/nodeJS.png'
import react from '../public/react.png'
import redux from '../public/redux.png'
import tailwind from '../public/tailwind.png'
import CarouselComp from './components/Carousel';
import Typewriter from 'typewriter-effect';
import { Fade } from "react-awesome-reveal";
import GraphemeSplitter from "grapheme-splitter";


export default function Page() {

  const stringSplitter = (value: any) => {
    const splitter: any = new GraphemeSplitter();
    return splitter.splitGraphemes(value);
  };


  return (

    <div className=" bg-white dark:bg-slate-800 w-full h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-slate-300 dark:scrollbar-track-blue-900 md:scroll-smooth snap-y snap-mandatory ">

      <section className='flex flex-row justify-around items-center h-screen w-full snap-center'>

        <div className='flex flex-row max-md:flex-col justify-center items-center md:gap-4 w-full'>

          <div className='w-6/12 max-md:w-full overflow-hidden flex flex-col md:gap-8 justify-center items-center'>
            <Typewriter
              options={{
                delay: 75,
                wrapperClassName: 'max-md:text-4xl text-5xl font-comfortaa',
                stringSplitter,
              }}
              onInit={(typewriter) => {
                typewriter.typeString("<span style='color: rgb(147, 62, 62);'>Hi!</span> I'm Gonzalo <span class='wave'>👋</span>")
                  .start();
              }}
            />
            <Fade direction='left' triggerOnce={true} className='my-4 w-full relative 2xl:left-[14rem] md:left-[12rem] max-md:w-full'>
              <nav className=' flex flex-col text-4xl justify-center items-center text-end  text-slate-400 dark:text-slate-500 '>
                <div className='md:relative md:right-[42rem] md:hover:right-[40rem] md:w-[64rem] hover:ease-in duration-200'>
                  <div className='border-b-2 hover:text-black dark:hover:text-white '>
                    <a href="#aboutMe">About Me</a>
                  </div>
                  <div className='border-r-2 h-8 text-gray-700 dark:text-white'></div>
                </div>
                <div className='md:relative md:right-[39rem] md:hover:right-[37rem] md:w-[64rem] hover:ease-in duration-200 '>
                  <div className='border-b-2 hover:text-black dark:hover:text-white'>
                    <a href="#myProjects">My Projects</a>
                  </div>
                  <div className='border-r-2 h-8 '></div>
                </div>
                <div className='md:relative md:right-[36rem] md:hover:right-[34rem] md:w-[64rem] hover:ease-in duration-200   '>
                  <div className='border-b-2 hover:text-black dark:hover:text-white'>
                    <a href="#myTools">My Tools</a>
                  </div>
                  <div className='border-r-2 h-8 '></div>
                </div>
                <div className='md:relative md:right-[33rem] md:hover:right-[31rem] md:w-[64rem] hover:ease-in duration-200  '>
                  <div className='border-b-2 hover:text-black dark:hover:text-white'>
                    <a href="#contactMe">Contact Me</a>
                  </div>
                  <div className='border-r-2 h-8 '></div>
                </div>
              </nav>
            </Fade>
          </div>

          <Fade direction='right' triggerOnce={true} className='rounded-full w-6/12 h-6/12 my-4 max-md:w-7/12 max-md:h-7/12 overflow-hidden'>
            <div>
              <Image priority src={programming} alt='photo' className='object-cover' />
            </div>
          </Fade>

        </div>

      </section>



      <section id='aboutMe' className='flex flex-col justify-center items-center h-screen w-full snap-center'>
        <div className='max-lg:mx-6 max-lg:mt-8 '>
          <h1 className=" font-roboto text-5xl max-md:text-3xl  text-center py-2 text-blue-900 dark:text-blue-300">Gonzalo Zucca</h1>
          <h2 className="text-2xl max-md:text-lg text-center text-black dark:text-gray-200 ">Full-Stack Developer</h2>

          <div className='flex flex-row flex-wrap lg:mx-32 2xl:mx-96'>
            <div className='relative rounded-full w-80 h-80 my-4 max-md:w-40 max-md:h-40 overflow-hidden mx-auto'>
              <Image priority src={photo} alt='photo' className='object-cover' />
            </div>
            <div className='md:w-6/12'>
              <p className="text-gray-700 dark:text-white my-4 tracking-wide text-justify leading-7 max-md:text-sm 2xl:text-lg"> Hi there! I'm Gonzalo. I've a bachelor's degree in marketing the English Language, but I've recently found my true passion in programming and decided to become a Full-Stack Web Developer. <br></br>  <br></br> Since then, I have successfully graduated from "Soy Henry" Coding Bootcamp, where I've learned the basics of web programming with Javascript and some of its most widely utilized frameworks and libraries: tools such as React, Redux, Node JS, and Express and many more that I've used in different projects. And I'm excited to say that this is only the beginning of my career in this ever-growing profession which is web programming. </p>
            </div>
          </div>

        </div>
      </section>

      <section id='myProjects' className='h-screen pt-6 snap-center '>


        <CarouselComp></CarouselComp>


        {/* <div className="md:w-[64rem] h-5/6 max-md:w-screen snap-center ">
              <div className="bg-white dark:bg-gray-400 h-full rounded shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4">API Food</h2>
                <p className="text-gray-700 dark:text-white mb-4 max-md:text-sm">
                  Primer proyecto individual de Soy Henry. Consiste en una página que utiliza la API de Spoonacular, con integración de una base de datos. La utilización de frameworks y dependencias fuera de las vistas en el bootcamp fue limitada por la consigna. En el Frontend es una APP creada con React, que incorpora Redux para el uso de un estado global, y CSS puro. El Backend incluye Express para el manejo de rutas, y una base de datos creada con PostgreSQL. Se pueden agregar nuevas recetas a la base de datos desde la página.
                </p>
                <a href="https://api-food-frontend-production.up.railway.app/" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  View project
                </a>
              </div>
            </div>

            <div className="md:w-[64rem] md:h-5/6 max-md:h-5/6 max-md:w-screen snap-center">
              <div className="bg-white dark:bg-gray-400 h-full rounded shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4">Scaneame</h2>
                <p className="text-gray-700 dark:text-white mb-4 max-md:text-sm">
                  Primer proyecto grupal de Soy Henry. Es un e-commerce de una línea ficticia de indumentaria. La utilización de frameworks y dependencias nuevos fue incentivada, por lo que el proyecto cuenta con una API de autentificación con distintos roles de usuario, que pueden administrarse desde un dashboard integrado en la página disponible sólo para los usuarios considerados admin. También cuenta con pasarela de pagos de Stripe, y sistema de mails automáticos de EmailJS. En el apartado estético, utilizamos bootstrap, tailwind, y módulos de CSS, además de varias dependencias para iconos y otras funcionalidades menores. La página también cuenta con una base de datos, esta vez creada con MongoDB, y su catálogo de productos también es administrable desde el dashboard en la página web.
                </p>
                <a href="https://scaneame.vercel.app/" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  View project
                </a>
              </div>
            </div> */}



      </section>


      <section id='myTools' className='flex flex-col justify-center items-center h-screen w-full snap-center'>
        <div className='mx-auto'>
          <h1 className=" font-roboto text-5xl text-center py-2 text-blue-900 dark:text-blue-300">My tools</h1>
          <ul className='flex flex-wrap gap-4 justify-center mt-4 md:mx-32 lg:mx-64 max-md:mx-16'>
            <li className=' bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20'>
              <Image src={html} alt='html' width={70} height={70} className=' self-center justify-self-center' ></Image>
            </li>

            <li className='bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20'>
              <Image src={css} alt='css' width={70} height={70} className=' self-center justify-self-center' ></Image>
            </li>

            <li className='bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20'>
              <Image src={javascriptLogo} alt='javascript' width={60} height={60} className='h-auto w-auto self-center justify-self-center' ></Image>
            </li>

            <li className='bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20'>
              <Image src={gitBash} alt='gitbash' width={60} height={60} className='h-auto w-auto self-center justify-self-center' ></Image>
            </li>

            <li className='bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20'>
              <Image src={nodeJS} alt='nodeJS' width={60} height={60} className='h-auto w-auto self-center justify-self-center' ></Image>
            </li>

            <li className='bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20'>
              <Image src={react} alt='react' width={60} height={60} className='h-auto w-auto self-center justify-self-center' ></Image>
            </li>

            <li className='bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20'>
              <Image src={redux} alt='redux' width={60} height={60} className='h-auto w-auto self-center justify-self-center' ></Image>
            </li>

            <li className='bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20'>
              <Image src={express} alt='express' width={60} height={60} className='h-auto w-auto self-center justify-self-center' ></Image>
            </li>

            <li className='bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20'>
              <Image src={tailwind} alt='tailwind' width={60} height={60} className='h-auto w-auto self-center justify-self-center' ></Image>
            </li>

            <li className='bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20'>
              <Image src={next} alt='next' width={60} height={60} className='h-auto w-auto self-center justify-self-center' ></Image>
            </li>

          </ul>

        </div>
      </section>


      <section id='contactMe' className='   flex flex-col justify-center items-center h-screen w-full snap-center'>

        <div className='flex flex-col justify-center items-center md:h-screen lg:w-6/12 md:w-10/12 sm:w-full mx-auto'>

          <div className='m-8 mx-auto w-full text-center'>
            <h2 className="text-gray-700 dark:text-white text-6xl max-sm:text-5xl">Contact Me!</h2>
          </div>
          <div className='w-full flex flex-row items-center justify-end lg:mr-32 md:mr-16 mb-4'>
            <label className="text-gray-700 dark:text-white pr-4 text-2xl max-sm:text-xl">Name: </label>
            <input className=' w-8/12 bg-slate-200 rounded shadow-lg' />
          </div>
          <div className='w-full flex flex-row items-center justify-end lg:mr-32 md:mr-16'>
            <label className="text-gray-700 dark:text-white pr-4 text-2xl max-sm:text-xl">Email: </label>
            <input className=' w-8/12  bg-slate-200 rounded shadow-lg' />
          </div>
          <div className='w-full flex flex-row items-center mt-8'>
            <textarea className=" h-24 w-full resize-none bg-slate-200 rounded shadow-lg"></textarea>
          </div>

          <div className='mt-8 w-full flex flex-row justify-around'>
            <a href='https://www.linkedin.com/in/gonzalo-zucca-51557b7a/?locale=en_US'>
              <BsLinkedin className='text-black dark:text-white cursor-pointer text-5xl' />
            </a>

            <a href='https://github.com/gzucca'>
              <BsGithub className='text-black dark:text-white cursor-pointer text-5xl' />
            </a>

            <a href='mailto:gonzalo.zucca@gmail.com' >
              <AiOutlineMail className='text-black dark:text-white cursor-pointer text-5xl' />
            </a>
          </div>

        </div>
      </section>

    </div>

  )
}
