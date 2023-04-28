"use client";
import { Carousel } from "flowbite-react";
import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import { BsGithub } from "react-icons/bs";
import Prompt from "./Prompt";
import { getCurrentDate } from "../../hour";

function CarouselComp() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "https://i.ibb.co/M7jDbfJ/scan-1.jpg",
    "https://i.ibb.co/2hfFMPM/scan-2.jpg",
    "https://i.ibb.co/XCVVFLZ/scan-3.jpg",
    "https://i.ibb.co/drg7T6J/scan-4.jpg",
    "https://i.ibb.co/Qj2316Z/scan-5.jpg",
    "https://i.ibb.co/nzPnBJT/scan-6.jpg",
    "https://i.ibb.co/9YJ0w8m/scan-7.jpg",
  ];
  const images2 = [
    "https://i.ibb.co/8YWJCfn/food1.jpg",
    "https://i.ibb.co/1nDPQ73/food2.jpg",
    "https://i.ibb.co/Cz6QP1W/food3.jpg",
    "https://i.ibb.co/D5Tsy8H/food4.jpg",
  ];

  const [openedPrompt, setOpenedPrompt] = useState(false);

  const handleOpenLink = (url: string) => {
    const check = getCurrentDate();
    if (check) {
      return () => setOpenedPrompt(true);
    } else {
      return () => window.open(url, "_blank");
    }
  };

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      {openedPrompt === false ? (
        <div className=" mx-3 h-full">
          <Carousel
            slide={false}
            indicators={false}
            leftControl="<"
            rightControl=">"
            className="text-2xl text-black dark:text-white"
          >
            <div className=" h-5/6 max-w-[80%] snap-center overflow-y-hidden max-md:w-screen">
              <div className=" h-full rounded bg-slate-400 p-6 font-normal shadow-lg dark:bg-gray-400 dark:shadow-slate-600">
                <h2 className="mb-2 text-lg font-bold text-black underline decoration-inherit dark:text-white">
                  API Food
                </h2>
                <p className="h-fit text-base text-gray-700 dark:text-white 2xl:text-lg">
                  First solo project at &quot;Soy Henry&quot;. It is a website
                  that uses the Spoonacular API, with integration of a database.
                  The use of frameworks and dependencies outside of the bootcamp
                  syllabus was limited by design. The Frontend is a React APP,
                  which incorporates Redux for the use of a global state, and
                  pure CSS. The Backend is a RESTful API created with Node JS
                  and Express for managing routes, and a database created with
                  PostgreSQL. New recipes can be added to the database from
                  within the website.
                </p>
                <button
                  className="mx-2 my-2 inline-flex items-center justify-center gap-2 self-center rounded-full bg-blue-500 px-3 py-2 text-base font-bold text-white hover:bg-blue-700"
                  onClick={handleOpenLink(
                    "https://pi-api-food.up.railway.app/"
                  )}
                >
                  View project
                </button>
                <a
                  href="https://github.com/gzucca/PI-API-Food"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 my-2 inline-flex items-center justify-center gap-2 self-center rounded-full bg-blue-500 px-3 py-2 text-base font-bold text-white hover:bg-blue-700"
                >
                  <BsGithub className="cursor-pointer text-xs text-white" />
                  Go to repo
                </a>
                <div className="flex max-h-[60%] min-h-[25%] flex-wrap justify-center overflow-y-auto max-sm:hidden">
                  {images2.map((src, index) => (
                    <img
                      src={src}
                      onClick={() => openImageViewer(index)}
                      width="200px"
                      key={index}
                      style={{
                        margin: "4px",
                        width: "max(250px, 15vw)",
                        height: "max(200px, 18vh)",
                        cursor: "pointer",
                      }}
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
            <div className="h-5/6 max-w-[80%] snap-center  max-md:w-screen">
              <div className="h-full overflow-y-scroll rounded  bg-slate-400 p-6 font-normal shadow-lg dark:bg-gray-400 dark:shadow-slate-600">
                <h2 className="mb-2 text-lg font-bold text-black underline decoration-inherit dark:text-white">
                  Scaneame
                </h2>
                <p className="h-fit text-base text-gray-700 dark:text-white 2xl:text-lg">
                  First group project at &quot;Soy Henry.&quot; It is an online
                  store for a fictitious clothing line. The use of new
                  frameworks and dependencies was encouraged, so the project
                  includes an authentication API with different user roles,
                  manageable from a dashboard integrated in the website, which
                  is available only to users with admin-level authorization. It
                  also includes a Stripe payment gateway, and an EmailJS
                  automatic email system. On the aesthetic side, we use
                  bootstrap, tailwind, and CSS modules, plus various
                  dependencies for icons and other minor functionalities. The
                  page also has a database built with MongoDB, and its product
                  catalog is also manageable from the dashboard in the website.
                </p>
                <button
                  className="mx-2 my-2 inline-flex items-center justify-center gap-2 self-center rounded-full bg-blue-500 px-3 py-2 text-base font-bold text-white hover:bg-blue-700"
                  onClick={handleOpenLink("https://scaneame.vercel.app/")}
                >
                  View project
                </button>
                <a
                  href="https://github.com/odalviarez/scaneaMe"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 my-2 inline-flex items-center justify-center gap-2 self-center rounded-full bg-blue-500 px-3 py-2 text-base font-bold text-white hover:bg-blue-700"
                >
                  <BsGithub className="cursor-pointer text-xs text-white" />
                  Go to repo
                </a>
                <div className="flex max-h-[60%] min-h-[25%] flex-wrap justify-center overflow-y-auto max-sm:hidden">
                  {images.map((src, index) => (
                    <img
                      src={src}
                      onClick={() => openImageViewer(index)}
                      key={index}
                      style={{
                        margin: "4px",
                        width: "max(250px, 15vw)",
                        height: "max(200px, 18vh)",
                        cursor: "pointer",
                      }}
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
            <div className="h-5/6 max-w-[80%] snap-center overflow-y-hidden max-md:w-screen">
              <div className="h-full rounded  bg-slate-400 p-6 font-normal shadow-lg dark:bg-gray-400 dark:shadow-slate-600 md:flex  md:flex-row">
                <div className=" items-start md:flex md:w-2/3 md:flex-col">
                  <h2 className="mb-2 text-lg font-bold text-black underline decoration-inherit dark:text-white">
                    CryptoTracker Pro
                  </h2>
                  <p className="text-base text-gray-700 dark:text-white 2xl:text-lg">
                    First mobile APP created with React Native. It utilizes
                    Messari.io API to get updated cryptocurrency data and
                    displays it in a responsive and user-friendly way. The user
                    can save their favorite cryptocurrencies, and receive
                    updates on their price with a 24-hours refresh cycle. The
                    app includes Redux for a global state, Typescript for safe
                    typing, and Styled Components for styling.
                  </p>
                  <a
                    href="https://github.com/gzucca/challenge-cripto-react-native"
                    target="_blank"
                    rel="noreferrer"
                    className=" my-2 inline-flex items-center justify-center gap-2 self-center rounded-full bg-blue-500 px-3 py-2 text-base font-bold text-white hover:bg-blue-700 md:self-start 2xl:my-6"
                  >
                    <BsGithub className="cursor-pointer text-xs text-white" />
                    Go to repo
                  </a>
                </div>
                <div className="mx-auto hidden flex-wrap md:flex md:flex-col">
                  <iframe
                    className="h-full "
                    src="https://www.youtube.com/embed/MHJxOF0PTYE"
                    title="CryptoTracker Pro"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      ) : (
        <Prompt openedPrompt={openedPrompt} setOpenedPrompt={setOpenedPrompt} />
      )}
    </>
  );
}

export default CarouselComp;
