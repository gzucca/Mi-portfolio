"use client";
import Image from "next/image";
import photo from "../public/foto-cv.jpeg";
import programming from "../public/programming.svg";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import css from "../public/css.png";
import express from "../public/express.png";
import git from "../public/git.png";
import html from "../public/html.png";
import javascriptLogo from "../public/javascriptLogo.png";
import next from "../public/next.png";
import nodeJS from "../public/nodeJS.png";
import react from "../public/react.png";
import redux from "../public/redux.png";
import angular from "../public/angular.png";
import tailwind from "../public/tailwind.png";
import CarouselComp from "./components/Carousel";
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import GraphemeSplitter from "grapheme-splitter";

export default function Page() {
  const stringSplitter = (value: any) => {
    const splitter: any = new GraphemeSplitter();
    return splitter.splitGraphemes(value);
  };

  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll bg-white scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-gray-900 dark:bg-slate-800 dark:scrollbar-track-blue-900 md:scroll-smooth">
      <section className="mt-3 flex h-screen w-full snap-center flex-row items-center justify-around">
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
              className="relative my-4 w-full max-md:w-full md:left-[12rem] 2xl:left-[14rem]"
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
            className="h-6/12 max-md:h-7/12 my-4 w-6/12 overflow-hidden rounded-full max-md:w-7/12"
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

      <section
        id="aboutMe"
        className="mx-auto my-auto flex h-[85vh] w-[80vw] snap-center flex-col items-center justify-center"
      >
        <div className="h-full w-full">
          <h1 className="font-roboto py-2 text-center text-4xl text-blue-900 dark:text-blue-300">
            Gonzalo Zucca
          </h1>
          <h2 className="text-center text-2xl text-black dark:text-gray-200 ">
            Full-Stack Developer
          </h2>

          <div className="flex h-[80%] w-full flex-col gap-2 sm:flex-row">
            <div className="mx-auto my-auto h-[35%] w-[75%] overflow-hidden rounded-full shadow-lg dark:shadow-slate-600 sm:h-[65%] sm:w-[35%]">
              <Image
                priority
                src={photo}
                alt="photo"
                style={{ height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="mx-auto  my-auto flex h-[40%] w-[100%] items-center justify-center sm:h-[80%] sm:w-[40%]">
              <p className="text-justify text-xs text-gray-700 dark:text-white">
                {" "}
                Hi there! I&apos;m Gonzalo. I have a bachelor&apos;s degree in
                Marketing and the English Language, but I&apos;ve recently found
                my true passion in programming and decided to become a
                Full-Stack Web Developer. <br></br> <br></br> Since then, I have
                successfully graduated from &quot;Soy Henry&quot; Coding
                Bootcamp, where I&apos;ve learned the basics of web programming
                with Javascript and some of its most widely utilized frameworks
                and libraries: tools such as React, Redux, Node JS, and Express
                and many more that I&apos;ve used in different projects. And
                I&apos;m excited to say that this is only the beginning of my
                career in this ever-growing profession which is web programming.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="myProjects" className="h-screen snap-center pt-6 ">
        <CarouselComp></CarouselComp>
      </section>

      <section
        id="myTools"
        className="mx-auto my-auto h-[85vh] w-[80vw] snap-center"
      >
        <div className="flex h-full w-full flex-col items-center justify-center align-middle">
          <h1 className="font-roboto text-center text-3xl text-gray-800 dark:text-blue-300">
            My tools
          </h1>
          <ul className="mt-4 flex flex-wrap justify-center gap-4 sm:mt-16 ">
            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={html}
                alt="html"
                width={70}
                className="z-10 h-auto self-center justify-self-center transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                HTML5
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={css}
                alt="html"
                width={70}
                className="z-10 h-auto self-center justify-self-center transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                CSS
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={javascriptLogo}
                alt="html"
                width={48}
                className="z-10 h-auto self-center justify-self-center pt-4 transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Javascript
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={git}
                alt="html"
                width={60}
                className="z-10 h-auto self-center justify-self-center pt-2 transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Git
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={nodeJS}
                alt="html"
                width={60}
                className="z-10 h-auto self-center justify-self-center pt-[1rem] transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Node JS
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={react}
                alt="html"
                width={60}
                className="z-10 h-auto self-center justify-self-center pt-[0.7rem] transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                React JS
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={redux}
                alt="html"
                width={60}
                className="z-10 h-auto self-center justify-self-center pt-3 transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Redux
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={express}
                alt="html"
                width={62}
                className="z-10 self-center justify-self-center pt-2 transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="h-auto scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Express
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={tailwind}
                alt="html"
                width={62}
                className="z-10 h-auto self-center justify-self-center pt-2 transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Tailwind
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={next}
                alt="html"
                width={60}
                className="z-10 h-auto self-center justify-self-center pt-[0.6rem] transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Next.js
              </p>
            </li>

            <li className="group grid h-20 w-20 rounded-full bg-slate-200 transition delay-150 duration-300 ease-in-out hover:scale-110 dark:bg-slate-600">
              <Image
                src={angular}
                alt="html"
                width={60}
                className="z-10 h-auto self-center justify-self-center pt-[0.6rem] transition delay-100 duration-300 ease-in-out group-hover:scale-125"
              ></Image>
              <p className="scale-0 self-center justify-self-center text-gray-700 transition delay-150 duration-300 ease-in-out group-hover:translate-y-2 group-hover:scale-100 dark:text-white">
                Angular
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="contactMe"
        className="flex h-screen w-full snap-center flex-col items-center justify-center px-8"
      >
        <div className="mx-auto flex flex-col items-center justify-center sm:w-full md:h-screen md:w-10/12 lg:w-8/12">
          <div className="m-8 mx-auto w-full text-center">
            <h2 className="text-6xl text-gray-700 dark:text-white max-sm:text-4xl">
              Contact Me!
            </h2>
          </div>

          <div className="py-8">
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
            >
              <BsLinkedin className="cursor-pointer text-5xl text-black transition delay-100 duration-200 ease-in-out hover:scale-125 hover:text-gray-700 dark:text-white dark:hover:text-slate-500" />
            </a>

            <a
              href="https://github.com/gzucca"
              rel="noreferrer"
              target="_blank"
            >
              <BsGithub className="cursor-pointer text-5xl text-black transition delay-100 duration-200 ease-in-out hover:scale-125 hover:text-gray-700 dark:text-white dark:hover:text-slate-500" />
            </a>

            <a
              href="mailto:gonzalo.zucca@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineMail className="cursor-pointer text-5xl text-black transition delay-100 duration-200 ease-in-out hover:scale-125 hover:text-gray-700 dark:text-white dark:hover:text-slate-500" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
