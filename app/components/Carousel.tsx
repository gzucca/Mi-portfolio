"use client";
import React from 'react';
import { Carousel } from "flowbite-react";

function CarouselComp() {


  return (
    <div className="h-full mx-3">
      <Carousel slide={false} indicators={false}  leftControl="<" rightControl=">" className='text-3xl font-bold dark:text-white text-black' >
        <div className="font-normal md:w-[64rem] h-5/6 max-md:w-screen snap-center ">
          <div className="bg-white dark:bg-gray-400 h-full rounded shadow-lg dark:shadow-slate-600 p-6">
            <h2 className="text-xl dark:text-white text-black font-bold mb-4">API Food</h2>
            <p className="text-gray-700 dark:text-white text-base mb-4 max-md:text-sm 2xl:text-lg">
              First solo project at Soy Henry. It is a website that uses the Spoonacular API, with integration of a database. The use of frameworks and dependencies outside of the bootcamp syllabus was limited by design. The Frontend is a React APP, which incorporates Redux for the use of a global state, and pure CSS. The Backend is a RESTful API created with Node JS and Express for managing routes, and a database created with PostgreSQL. New recipes can be added to the database from within the website.
            </p>
            <a href="https://pi-api-food.up.railway.app/" target="_blank" className="inline-block text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              View project
            </a>
          </div>
        </div>
        <div className="md:w-[64rem] md:h-5/6 max-md:h-5/6 max-md:w-screen snap-center">
          <div className="font-normal bg-white dark:bg-gray-400 h-full rounded shadow-lg dark:shadow-slate-600 p-6">
            <h2 className="text-xl dark:text-white text-black font-bold mb-4">Scaneame</h2>
            <p className="text-gray-700 dark:text-white text-base mb-4 max-md:text-sm 2xl:text-lg">
              First group project at "Soy Henry." It is an online store for a fictitious clothing line. The use of new frameworks and dependencies was encouraged, so the project includes an authentication API with different user roles, manageable from a dashboard integrated in the website, which is available only to users with admin-level authorization. It also includes a Stripe payment gateway, and an EmailJS automatic email system. On the aesthetic side, we use bootstrap, tailwind, and CSS modules, plus various dependencies for icons and other minor functionalities. The page also has a database built with MongoDB, and its product catalog is also manageable from the dashboard in the website.
            </p>
            <a href="https://scaneame.vercel.app/" target="_blank" className="inline-block text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              View project
            </a>
          </div>
        </div>
        {/* <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        /> */}
      </Carousel>
    </div>
  )
}

export default CarouselComp