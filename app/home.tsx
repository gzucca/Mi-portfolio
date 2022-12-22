'use client';
import Image from 'next/image';
import photo from '../public/foto-cv.jpeg';

export default function Home() {
  return (

    <div className=" bg-white dark:bg-slate-800 mx-auto px-4">

      <div className='flex flex-col justify-center items-center max-md:mb-32 md:h-screen mx-auto'>
        <div className='mx-auto'>
          <h1 className=" font-roboto text-5xl text-center py-2 text-blue-900 dark:text-blue-300">Gonzalo Zucca</h1>
          <h2 className="text-1xl text-center text-black dark:text-gray-200 ">Full-Stack Developer</h2>

          <div className='flex flex-row flex-wrap lg:mx-32'>
            <div className='relative rounded-full w-80 h-80 my-4 overflow-hidden mx-auto'>
              <Image priority src={photo} alt='photo' className='object-cover' />
            </div>
            <div className='md:w-6/12'>
              <p className="text-gray-700 dark:text-white my-4 tracking-wide text-justify leading-7"> Hi there! I'm Gonzalo. I'm a marketing professional with a licentiate degree in the English Language who found his true passion in programming and decided to become a Full-Stack Web Developer. Since then, I have successfully graduated from "Soy Henry" Coding Bootcamp, where I've learned the basics of web programming with Javascript and some of its most widely utilized frameworks and libraries: tools such as React, Redux, Node JS, and Express and many more that I've used in different projects. And I'm excited to say that this is only the beginning of my career in this ever-growing profession which is web programming. </p>
            </div>
          </div>

        </div>
      </div>

      <div className='flex flex-col justify-center items-center max-md:mb-32 md:h-screen mx-auto'>
        <div className="flex flex-wrap mx-4 gap-4">

          <div className="md:w-5/12 md:h-screen">
            <div className="bg-white dark:bg-gray-400 h-full rounded shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">API Food</h2>
              <p className="text-gray-700 dark:text-white mb-4">
                Primer proyecto individual de Soy Henry. Consiste en una página que utiliza la API de Spoonacular, con integración de una base de datos. La utilización de frameworks y dependencias fuera de las vistas en el bootcamp fue limitada por la consigna. En el Frontend es una APP creada con React, que incorpora Redux para el uso de un estado global, y CSS puro. El Backend incluye Express para el manejo de rutas, y una base de datos creada con PostgreSQL. Se pueden agregar nuevas recetas a la base de datos desde la página.
              </p>
              <a href="https://api-food-frontend-production.up.railway.app/" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                View project
              </a>
            </div>
          </div>

          <div className="md:w-5/12 md:h-screen">
            <div className="bg-white dark:bg-gray-400 h-full rounded shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Scaneame</h2>
              <p className="text-gray-700 dark:text-white mb-4">
                Primer proyecto grupal de Soy Henry. Es un e-commerce de una línea ficticia de indumentaria. La utilización de frameworks y dependencias nuevos fue incentivada, por lo que el proyecto cuenta con una API de autentificación con distintos roles de usuario, que pueden administrarse desde un dashboard integrado en la página disponible sólo para los usuarios considerados admin. También cuenta con pasarela de pagos de Stripe, y sistema de mails automáticos de EmailJS. En el apartado estético, utilizamos bootstrap, tailwind, y módulos de CSS, además de varias dependencias para iconos y otras funcionalidades menores. La página también cuenta con una base de datos, esta vez creada con MongoDB, y su catálogo de productos también es administrable desde el dashboard en la página web.
              </p>
              <a href="https://scaneame.vercel.app/" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                View project
              </a>
            </div>

          </div>
        </div>

      </div>

      <div className='flex flex-col justify-center items-center max-md:pb-32 md:h-screen md:w-8/12  mx-auto'>

        <div className='mb-8'>
          <h2 className="text-gray-700 dark:text-white text-6xl">Contact Me!</h2>
        </div>
        <div className='flex flex-row items-center justify-end md:mr-32 mb-4 w-8/12'>
          <label className="text-gray-700 dark:text-white pr-4 text-2xl">Name: </label>
          <input className=' w-9/12 bg-slate-200 rounded shadow-lg' />
        </div>
        <div className='flex flex-row items-center justify-end md:mr-32 w-8/12'>
          <label className="text-gray-700 dark:text-white pr-4 text-2xl">Email: </label>
          <input className=' w-9/12  bg-slate-200 rounded shadow-lg' />
        </div>
        <div className='flex flex-row items-center mt-8 w-full'>
          <textarea className=" h-24 w-9/12 resize-none mx-auto  bg-slate-200 rounded shadow-lg"></textarea>
        </div>
        
      </div>

    </div>

  )
}
