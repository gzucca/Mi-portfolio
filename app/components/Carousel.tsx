import React from 'react'
import { Carousel } from "flowbite-react";

function CarouselComp() {
  return (
    <div className="h-full">
      <Carousel slide={false} indicators={false}>
        <div className="md:w-[64rem] h-5/6 max-md:w-screen snap-center ">
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
        </div>
        <img
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
        />
      </Carousel>
    </div>
  )
}

export default CarouselComp