"use client";
import { Carousel } from "flowbite-react";
import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import { BsGithub } from 'react-icons/bs'

function CarouselComp() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = ['https://i.ibb.co/M7jDbfJ/scan-1.jpg','https://i.ibb.co/2hfFMPM/scan-2.jpg', 'https://i.ibb.co/XCVVFLZ/scan-3.jpg', 'https://i.ibb.co/drg7T6J/scan-4.jpg','https://i.ibb.co/Qj2316Z/scan-5.jpg', 'https://i.ibb.co/nzPnBJT/scan-6.jpg', 'https://i.ibb.co/9YJ0w8m/scan-7.jpg'];
  const images2 = ['https://i.ibb.co/8YWJCfn/food1.jpg','https://i.ibb.co/1nDPQ73/food2.jpg', 'https://i.ibb.co/Cz6QP1W/food3.jpg', 'https://i.ibb.co/D5Tsy8H/food4.jpg'];

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);
  

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="h-full mx-3">
      <Carousel
        slide={false}
        indicators={false}
        leftControl="<"
        rightControl=">"
        className="text-2xl text-black dark:text-white"
      >
        <div className="max-w-[80%] h-5/6 max-md:w-screen overflow-y-hidden snap-center">
          <div className="h-full p-6 font-normal bg-white rounded shadow-lg dark:bg-gray-400 dark:shadow-slate-600">
            <h2 className="mb-2 text-lg font-bold text-black underline dark:text-white decoration-inherit">
              API Food
            </h2>
            <p className="text-base text-gray-700 h-fit dark:text-white">
              First solo project at Soy Henry. It is a website that uses the Spoonacular API, with integration of a database. The use of frameworks and dependencies outside of the bootcamp syllabus was limited by design. The Frontend is a React APP, which incorporates Redux for the use of a global state, and pure CSS. The Backend is a RESTful API created with Node JS and Express for managing routes, and a database created with PostgreSQL. New recipes can be added to the database from within the website.
            </p>
            <a
              href="https://pi-api-food.up.railway.app/"
              target="_blank"
              className="inline-flex items-center self-center justify-center gap-2 px-3 py-2 mx-2 my-2 text-base font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              View project
            </a>
            <a
              href="https://github.com/gzucca/PI-API-Food"
              target="_blank"
              className="inline-flex items-center self-center justify-center gap-2 px-3 py-2 mx-2 my-2 text-base font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              <BsGithub className='text-xs text-black cursor-pointer dark:text-white' />
              Go to repo
            </a>
            <div className="flex flex-wrap max-h-[60%] min-h-[25%] justify-center overflow-y-auto max-sm:hidden">
              {images2.map((src, index) => (
                <img
                  src={src}
                  onClick={() => openImageViewer(index)}
                  width="200px"
                  key={index}
                  style={{ margin: "4px", width: "max(250px, 15vw)", height: "max(200px, 18vh)", cursor: 'pointer', }}
                  alt=""
                />
              ))}

              {isViewerOpen && (
                <ImageViewer
                  src={images2}
                  currentIndex={currentImage}
                  onClose={closeImageViewer}
                  disableScroll={false}
                  backgroundStyle={{
                    backgroundColor: "rgba(0,0,0,0.9)",
                  }}
                  closeOnClickOutside={true}
                />
              )}
            </div>
          </div>
        </div>
        <div className="max-w-[80%] h-5/6 max-md:w-screen overflow-y-hidden snap-center">
          <div className="h-full p-6 font-normal bg-white rounded shadow-lg dark:bg-gray-400 dark:shadow-slate-600">
            <h2 className="mb-2 text-lg font-bold text-black underline dark:text-white decoration-inherit">
              Scaneame
            </h2>
            <p className="text-base text-gray-700 h-fit dark:text-white">
              First group project at "Soy Henry." It is an online store for a
              fictitious clothing line. The use of new frameworks and
              dependencies was encouraged, so the project includes an
              authentication API with different user roles, manageable from a
              dashboard integrated in the website, which is available only to
              users with admin-level authorization. It also includes a Stripe
              payment gateway, and an EmailJS automatic email system. On the
              aesthetic side, we use bootstrap, tailwind, and CSS modules, plus
              various dependencies for icons and other minor functionalities.
              The page also has a database built with MongoDB, and its product
              catalog is also manageable from the dashboard in the website.
            </p>
            <a
              href="https://scaneame.vercel.app/"
              target="_blank"
              className="inline-flex items-center self-center justify-center gap-2 px-3 py-2 mx-2 my-2 text-base font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              View project
            </a>
            <a
              href="https://github.com/odalviarez/scaneaMe"
              target="_blank"
              className="inline-flex items-center self-center justify-center gap-2 px-3 py-2 mx-2 my-2 text-base font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              <BsGithub className='text-xs text-black cursor-pointer dark:text-white' />
              Go to repo
            </a>
            <div className="flex flex-wrap max-h-[60%] min-h-[25%] justify-center overflow-y-auto max-sm:hidden">
              {images.map((src, index) => (
                <img
                  src={src}
                  onClick={() => openImageViewer(index)}
                  key={index}
                  style={{ margin: "4px", width: "max(250px, 15vw)", height: "max(200px, 18vh)", cursor: 'pointer', }}
                  alt=""
                />
              ))}

              {isViewerOpen && (
                <ImageViewer
                  src={images}
                  currentIndex={currentImage}
                  onClose={closeImageViewer}
                  disableScroll={false}
                  backgroundStyle={{
                    backgroundColor: "rgba(0,0,0,0.9)",
                  }}
                  closeOnClickOutside={true}
                />
              )}
            </div>
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
  );
}

export default CarouselComp;
