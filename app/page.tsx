"use client";
import Image from "next/image";
import photo from "../public/pictures/foto-portfolio.webp";
import photoMobile from "../public/pictures/foto-portfolio-mobile.webp";
import programming from "../public/pictures/programming.svg";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import css from "../public/icons/css.png";
import express from "../public/icons/express.png";
import git from "../public/icons/git.png";
import html from "../public/icons/html.webp";
import javascriptLogo from "../public/icons/javascriptLogo.png";
import next from "../public/icons/next.png";
import nodeJS from "../public/icons/nodeJS.png";
import react from "../public/icons/react.png";
import redux from "../public/icons/redux.png";
import vue from "../public/icons/vue.webp";
import tailwind from "../public/icons/tailwind.png";
import docker from "../public/icons/docker.webp";
import CarouselComp from "./components/Carousel";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import GraphemeSplitter from "grapheme-splitter";
import Loading from "./components/LoadingComp";
import { useEffect, useState } from "react";

export default function Page() {
  const stringSplitter = (value: any) => {
    const splitter: any = new GraphemeSplitter();
    return splitter.splitGraphemes(value);
  };

  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
    }
    return () => window.removeEventListener("load", onPageLoad);
  }, []);
  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll bg-white scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-gray-900 dark:bg-slate-900 dark:scrollbar-track-blue-900 md:scroll-smooth">
      {/* Landing */}
      {playAnimation ? (
        <section
          id="Landing"
          className="flex h-full w-full snap-center flex-row items-center justify-around"
        >
          <div className="flex w-full flex-row items-center justify-center max-md:flex-col md:gap-4">
            <div className="flex w-6/12 flex-col items-center justify-center overflow-hidden max-md:w-full md:gap-8">
              <Typewriter
                options={{
                  delay: 75,
                  wrapperClassName:
                    "max-md:text-4xl max-sm:text-2xl text-5xl font-comfortaa",
                  stringSplitter,
                }}
                onInit={(typewriter: any) => {
                  typewriter
                    .typeString(
                      "<span style='color: rgb(147, 62, 62);'>Hi!</span> I'm Gonzalo <span class='wave'>👋</span>"
                    )
                    .start();
                }}
              />
              <Fade
                direction="left"
                triggerOnce={true}
                className=" relative my-4 w-full opacity-0 max-md:w-full md:left-[12rem] 2xl:left-[14rem]"
              >
                <nav className="flex flex-col items-center justify-center text-end text-4xl text-slate-400 dark:text-slate-500">
                  <div className="duration-200 hover:ease-in md:relative md:right-[42rem] md:w-[64rem] md:hover:right-[40rem]">
                    <div className="border-b-2 hover:text-black dark:hover:text-white ">
                      <a href="#aboutMe">About Me</a>
                    </div>
                    <div className="h-8 border-r-2 text-gray-700 dark:text-white"></div>
                  </div>
                  <div className="duration-200 hover:ease-in md:relative md:right-[39rem] md:w-[64rem] md:hover:right-[37rem] ">
                    <div className=" border-b-2 hover:text-black dark:hover:text-white">
                      <a href="#myProjects">My Projects</a>
                    </div>
                    <div className="h-8 border-r-2 "></div>
                  </div>
                  <div className="duration-200 hover:ease-in md:relative md:right-[36rem] md:w-[64rem] md:hover:right-[34rem]   ">
                    <div className="border-b-2 hover:text-black dark:hover:text-white">
                      <a href="#myTools">My Tools</a>
                    </div>
                    <div className="h-8 border-r-2 "></div>
                  </div>
                  <div className="duration-200 hover:ease-in md:relative md:right-[33rem] md:w-[64rem] md:hover:right-[31rem]  ">
                    <div className="border-b-2 hover:text-black dark:hover:text-white">
                      <a href="#contactMe">Get In Touch</a>
                    </div>
                    <div className="h-8 border-r-2 "></div>
                  </div>
                </nav>
              </Fade>
            </div>

            <Fade
              direction="right"
              triggerOnce={true}
              className="h-6/12 max-md:h-7/12 my-4 w-6/12 overflow-hidden rounded-full opacity-0 max-md:w-7/12"
            >
              <div>
                <Image
                  priority
                  src={programming}
                  alt="photo"
                  className="object-cover"
                />
              </div>
            </Fade>
          </div>
        </section>
      ) : (
        <Loading />
      )}

      {/* About me */}
      <section
        id="aboutMe"
        className="mx-auto flex h-full w-11/12 snap-center flex-col items-center justify-center pt-12"
      >
        <div className="h-full w-full">
          <h1 className="font-roboto py-2 text-center text-4xl  text-blue-900 dark:text-blue-300">
            Gonzalo Zucca
          </h1>
          <h2 className="text-center text-2xl text-black dark:text-gray-200 2xl:text-3xl ">
            Full-Stack Developer
          </h2>

          <div className="flex  h-[80%] w-full flex-col items-center gap-4 md:gap-10 lg:flex-row 2xl:gap-16">
            <div className="relative mt-4 h-1/3 w-full md:h-1/2 md:w-1/3 lg:-top-16 lg:h-full ">
              <div className="relative mx-auto my-auto hidden h-full w-auto overflow-hidden rounded-full border-4 shadow-lg dark:shadow-slate-600 md:block ">
                <Image
                  priority
                  src={photo}
                  alt="photo"
                  fill={true}
                  style={{ objectFit: "cover" }}
                  sizes="50vw"
                />
              </div>
              <div className="relative mx-auto my-auto h-full w-[33vw] min-w-[120px] overflow-hidden rounded-full border-4 shadow-lg dark:shadow-slate-600 md:hidden ">
                <Image
                  priority
                  src={photoMobile}
                  alt="photo"
                  fill={true}
                  style={{ objectFit: "cover" }}
                  sizes="90vw"
                />
              </div>
            </div>
            <div className="mx-auto my-auto  flex h-2/3 w-10/12 flex-col items-center justify-center gap-4  md:h-1/2 md:gap-8 lg:h-full lg:w-2/3 ">
              <p className=" text-justify text-xs text-gray-700 dark:text-white md:text-xl">
                {" "}
                Hi there! I&apos;m Gonzalo. I have a bachelor&apos;s degree in
                Marketing and the English Language, but I&apos;ve recently found
                my true passion in programming and decided to become a
                Full-Stack Web Developer.
              </p>

              <p className=" text-justify text-xs text-gray-700 dark:text-white md:text-xl">
                Since then, I have successfully graduated from &quot;Soy
                Henry&quot; Coding Bootcamp, where I&apos;ve learned the basics
                of web programming with Javascript and some of its most widely
                utilized frameworks and libraries: tools such as React, Redux,
                Node JS, and Express and many more that I&apos;ve used in
                different projects. And I&apos;m excited to say that this is
                only the beginning of my career in this ever-growing profession
                which is web programming.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Projects */}
      <section id="myProjects" className="mx-auto h-full w-full snap-center ">
        <CarouselComp></CarouselComp>
      </section>

      {/* My Tools */}
      <section
        id="myTools"
        className="container mx-auto h-full max-w-[95%] snap-center"
      >
        <div className="flex h-full w-full  flex-col items-center justify-center align-middle">
          <h1 className="font-roboto text-3xl  text-gray-800 dark:text-blue-300">
            My tools
          </h1>

          <ul className="mt-4 flex flex-wrap justify-center gap-4 sm:mt-16 ">
            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={html}
                alt="HTML"
                className="z-10 h-auto w-[70px] self-center justify-self-center transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                HTML5
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={css}
                alt="CSS"
                className="z-10 h-auto w-[70px] self-center justify-self-center transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                CSS
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={javascriptLogo}
                alt="Javascript"
                className="z-10 h-auto w-[48px] self-center justify-self-center pt-4 transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Javascript
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={git}
                alt="Git"
                className="z-10 h-auto w-[60px] self-center justify-self-center pt-2 transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Git
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={nodeJS}
                alt="Node JS"
                className="z-10 h-auto w-[60px] self-center justify-self-center pt-[1rem] transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Node JS
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={react}
                alt="React JS and Native"
                className="z-10 h-auto w-[70px] self-center justify-self-center object-cover pt-[0.6rem] transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="w-[120%] scale-0 self-center justify-self-center text-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                React JS & React Native
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={redux}
                alt="Redux"
                className="z-10 h-auto w-[60px] self-center justify-self-center pt-3 transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Redux
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={express}
                alt="Express JS"
                className="z-10  h-auto w-[62px] self-center justify-self-center pt-2 transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="h-auto scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Express
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={tailwind}
                alt="Tailwind CSS"
                className="z-10 h-auto w-[62px] self-center justify-self-center pt-2 transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Tailwind
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={next}
                alt="Next JS"
                className="z-10 h-auto w-[60px] self-center justify-self-center pt-[0.6rem] transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Next JS
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={vue}
                alt="Vue JS"
                className="z-10 h-auto w-[60px] self-center justify-self-center pt-[0.9rem] transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Vue JS
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={docker}
                alt="Docker"
                className="z-10 h-auto w-[60px] self-center justify-self-center pt-[0.6rem] transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Docker
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Me */}
      <section
        id="contactMe"
        className="container mx-auto flex h-screen snap-center flex-col items-center justify-center"
      >
        <div className="mx-auto flex flex-col items-center justify-center sm:w-full md:h-screen md:w-10/12 lg:w-8/12">
          <div className="m-8 mx-auto w-full text-center">
            <h2 className="text-6xl text-gray-700 dark:text-white max-sm:text-4xl">
              Contact Me!
            </h2>
          </div>

          <div className="w-11/12 py-8">
            <p className="text-2xl text-gray-700 dark:text-white max-sm:text-lg">
              I&apos;m currently looking for full-time Frontend or Full-Stack
              opportunities! If you know of any positions available, if you have
              any questions, or if you just want to say hi, please feel free to
              email me at{" "}
              {
                <a
                  href="mailto:gonzalo.zucca@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  gonzalo.zucca@gmail.com
                </a>
              }
              .
            </p>
          </div>

          <div className="mt-8 flex w-full flex-row justify-around">
            <a
              href="https://www.linkedin.com/in/gonzalo-zucca-51557b7a/?locale=en_US"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <BsLinkedin className="cursor-pointer text-5xl text-black transition delay-100 duration-200 ease-in-out hover:scale-125 hover:text-gray-700 dark:text-white dark:hover:text-slate-500" />
            </a>

            <a
              href="https://github.com/gzucca"
              rel="noreferrer"
              target="_blank"
              title="GitHub"
            >
              <BsGithub className="cursor-pointer text-5xl text-black transition delay-100 duration-200 ease-in-out hover:scale-125 hover:text-gray-700 dark:text-white dark:hover:text-slate-500" />
            </a>

            <a
              href="mailto:gonzalo.zucca@gmail.com"
              rel="noreferrer"
              target="_blank"
              title="Email"
            >
              <AiOutlineMail className="cursor-pointer text-5xl text-black transition delay-100 duration-200 ease-in-out hover:scale-125 hover:text-gray-700 dark:text-white dark:hover:text-slate-500" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
