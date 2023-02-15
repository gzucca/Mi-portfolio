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
		<div className=" bg-white dark:bg-slate-800 w-full h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-slate-300 dark:scrollbar-track-blue-900 md:scroll-smooth snap-y snap-mandatory ">
			<section className="flex flex-row justify-around items-center h-screen w-full snap-center mt-3">
				<div className="flex flex-row max-md:flex-col justify-center items-center md:gap-4 w-full">
					<div className="w-6/12 max-md:w-full overflow-hidden flex flex-col md:gap-8 justify-center items-center">
						<Typewriter
							options={{
								delay: 75,
								wrapperClassName:
									"max-md:text-4xl max-sm:text-2xl text-5xl font-comfortaa",
								stringSplitter,
							}}
							onInit={(typewriter) => {
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
							className="my-4 w-full relative 2xl:left-[14rem] md:left-[12rem] max-md:w-full"
						>
							<nav className=" flex flex-col text-4xl justify-center items-center text-end  text-slate-400 dark:text-slate-500 ">
								<div className="md:relative md:right-[42rem] md:hover:right-[40rem] md:w-[64rem] hover:ease-in duration-200">
									<div className="border-b-2 hover:text-black dark:hover:text-white ">
										<a href="#aboutMe">About Me</a>
									</div>
									<div className="border-r-2 h-8 text-gray-700 dark:text-white"></div>
								</div>
								<div className="md:relative md:right-[39rem] md:hover:right-[37rem] md:w-[64rem] hover:ease-in duration-200 ">
									<div className="border-b-2 hover:text-black dark:hover:text-white">
										<a href="#myProjects">My Projects</a>
									</div>
									<div className="border-r-2 h-8 "></div>
								</div>
								<div className="md:relative md:right-[36rem] md:hover:right-[34rem] md:w-[64rem] hover:ease-in duration-200   ">
									<div className="border-b-2 hover:text-black dark:hover:text-white">
										<a href="#myTools">My Tools</a>
									</div>
									<div className="border-r-2 h-8 "></div>
								</div>
								<div className="md:relative md:right-[33rem] md:hover:right-[31rem] md:w-[64rem] hover:ease-in duration-200  ">
									<div className="border-b-2 hover:text-black dark:hover:text-white">
										<a href="#contactMe">Get In Touch</a>
									</div>
									<div className="border-r-2 h-8 "></div>
								</div>
							</nav>
						</Fade>
					</div>

					<Fade
						direction="right"
						triggerOnce={true}
						className="rounded-full w-6/12 h-6/12 my-4 max-md:w-7/12 max-md:h-7/12 overflow-hidden"
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
				className="flex flex-col justify-center items-center mx-auto my-auto h-[85vh] w-[80vw] snap-center"
			>
				<div className="h-full w-full">
					<h1 className="font-roboto text-4xl text-center py-2 text-blue-900 dark:text-blue-300">
						Gonzalo Zucca
					</h1>
					<h2 className="text-2xl text-center text-black dark:text-gray-200 ">
						Full-Stack Developer
					</h2>

					<div className="flex flex-col sm:flex-row gap-2 w-full h-[80%]">
						<div className="rounded-full overflow-hidden mx-auto my-auto shadow-lg w-[75%] h-[35%] sm:w-[35%] sm:h-[65%] dark:shadow-slate-600">
							<Image
								priority
								src={photo}
								alt="photo"
								style={{ height: "100%", objectFit: "cover"}}
							/>
						</div>
						<div className="flex  justify-center items-center mx-auto my-auto w-[100%] h-[40%] sm:w-[40%] sm:h-[80%]">
							<p className="text-gray-700 dark:text-white text-justify text-xs">
								{" "}
								Hi there! I'm Gonzalo. I have a bachelor's degree in Marketing
								and the English Language, but I've recently found my true
								passion in programming and decided to become a Full-Stack Web
								Developer. <br></br> <br></br> Since then, I have successfully
								graduated from "Soy Henry" Coding Bootcamp, where I've learned
								the basics of web programming with Javascript and some of its
								most widely utilized frameworks and libraries: tools such as
								React, Redux, Node JS, and Express and many more that I've used
								in different projects. And I'm excited to say that this is only
								the beginning of my career in this ever-growing profession which
								is web programming.{" "}
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="myProjects" className="h-screen pt-6 snap-center ">
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

			<section
				id="myTools"
				className="mx-auto my-auto h-[85vh] w-[80vw] snap-center"
			>
				<div className="h-full w-full flex flex-col justify-center items-center align-middle">
					<h1 className=" font-roboto text-3xl text-center text-gray-800 dark:text-blue-300">
						My tools
					</h1>
					<ul className="flex flex-wrap gap-4 justify-center mt-4 sm:mt-16 ">
						<li className=" transition ease-in-out delay-150 duration-300 group hover:scale-110  bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20">
							<Image
								src={html}
								alt="html"
								width={70}
								height={"auto"}
								className="z-10 transition ease-in-out delay-100 duration-300 group-hover:scale-125 self-center justify-self-center"
							></Image>
							<p className="transition scale-0 ease-in-out delay-150 duration-300 group-hover:translate-y-2  group-hover:scale-100 self-center  justify-self-center  text-gray-700 dark:text-white">
								HTML5
							</p>
						</li>

						<li className=" transition ease-in-out delay-150 duration-300 group hover:scale-110  bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20">
							<Image
								src={css}
								alt="html"
								width={70}
								height={"auto"}
								className="z-10 transition ease-in-out delay-100 duration-300 group-hover:scale-125 self-center justify-self-center"
							></Image>
							<p className="transition scale-0 ease-in-out delay-150 duration-300 group-hover:translate-y-2  group-hover:scale-100 self-center  justify-self-center text-gray-700 dark:text-white">
								CSS
							</p>
						</li>

						<li className=" transition ease-in-out delay-150 duration-300 group hover:scale-110  bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20">
							<Image
								src={javascriptLogo}
								alt="html"
								width={48}
								height={"auto"}
								className="z-10 pt-4 transition ease-in-out delay-100 duration-300 group-hover:scale-125 self-center justify-self-center h-auto w-auto "
							></Image>
							<p className="transition scale-0 ease-in-out delay-150 duration-300 group-hover:translate-y-2  group-hover:scale-100 self-center  justify-self-center  text-gray-700 dark:text-white">
								Javascript
							</p>
						</li>

						<li className=" transition ease-in-out delay-150 duration-300 group hover:scale-110  bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20">
							<Image
								src={git}
								alt="html"
								width={60}
								height={"auto"}
								className="z-10 pt-2 transition ease-in-out delay-100 duration-300 group-hover:scale-125 self-center justify-self-center"
							></Image>
							<p className="transition scale-0 ease-in-out delay-150 duration-300 group-hover:translate-y-2  group-hover:scale-100 self-center  justify-self-center text-gray-700 dark:text-white">
								Git
							</p>
						</li>

						<li className=" transition ease-in-out delay-150 duration-300 group hover:scale-110  bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20">
							<Image
								src={nodeJS}
								alt="html"
								width={60}
								height={"auto"}
								className="z-10 pt-[1rem] transition ease-in-out delay-100 duration-300 group-hover:scale-125 self-center justify-self-center"
							></Image>
							<p className="transition scale-0 ease-in-out delay-150 duration-300 group-hover:translate-y-2  group-hover:scale-100 self-center  justify-self-center text-gray-700 dark:text-white">
								Node JS
							</p>
						</li>

						<li className=" transition ease-in-out delay-150 duration-300 group hover:scale-110  bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20">
							<Image
								src={react}
								alt="html"
								width={60}
								height={"auto"}
								className="z-10 pt-[0.7rem] transition ease-in-out delay-100 duration-300 group-hover:scale-125 self-center justify-self-center h-auto w-auto"
							></Image>
							<p className="transition scale-0 ease-in-out delay-150 duration-300 group-hover:translate-y-2  group-hover:scale-100 self-center  justify-self-center text-gray-700 dark:text-white">
								React JS
							</p>
						</li>

						<li className=" transition ease-in-out delay-150 duration-300 group hover:scale-110  bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20">
							<Image
								src={redux}
								alt="html"
								width={60}
								height={"auto"}
								className="z-10 pt-3 transition ease-in-out delay-100 duration-300 group-hover:scale-125 self-center justify-self-center "
							></Image>
							<p className="transition scale-0 ease-in-out delay-150 duration-300 group-hover:translate-y-2  group-hover:scale-100 self-center  justify-self-center text-gray-700 dark:text-white">
								Redux
							</p>
						</li>

						<li className=" transition ease-in-out delay-150 duration-300 group hover:scale-110  bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20">
							<Image
								src={express}
								alt="html"
								width={62}
								height={62}
								className="z-10 pt-2 transition ease-in-out delay-100 duration-300 group-hover:scale-125 self-center justify-self-center"
							></Image>
							<p className="transition scale-0 ease-in-out delay-150 duration-300 group-hover:translate-y-2  group-hover:scale-100 self-center  justify-self-center text-gray-700 dark:text-white">
								Express
							</p>
						</li>

						<li className=" transition ease-in-out delay-150 duration-300 group hover:scale-110  bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20">
							<Image
								src={tailwind}
								alt="html"
								width={62}
								height={62}
								className="z-10 pt-2 transition ease-in-out delay-100 duration-300 group-hover:scale-125 self-center justify-self-center"
							></Image>
							<p className="transition scale-0 ease-in-out delay-150 duration-300 group-hover:translate-y-2  group-hover:scale-100 self-center  justify-self-center text-gray-700 dark:text-white">
								Tailwind
							</p>
						</li>

						<li className=" transition ease-in-out delay-150 duration-300 group hover:scale-110  bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20">
							<Image
								src={next}
								alt="html"
								width={60}
								height={60}
								className="z-10 pt-[0.6rem] transition ease-in-out delay-100 duration-300 group-hover:scale-125 self-center justify-self-center"
							></Image>
							<p className="transition scale-0 ease-in-out delay-150 duration-300 group-hover:translate-y-2  group-hover:scale-100 self-center  justify-self-center text-gray-700 dark:text-white">
								Next.js
							</p>
						</li>

						<li className=" transition ease-in-out delay-150 duration-300 group hover:scale-110  bg-slate-200 dark:bg-slate-600 grid rounded-full w-20 h-20">
							<Image
								src={angular}
								alt="html"
								width={60}
								height={"auto"}
								className="z-10 pt-[0.6rem] transition ease-in-out delay-100 duration-300 group-hover:scale-125 self-center justify-self-center"
							></Image>
							<p className="transition scale-0 ease-in-out delay-150 duration-300 group-hover:translate-y-2  group-hover:scale-100 self-center  justify-self-center text-gray-700 dark:text-white">
								Angular
							</p>
						</li>
					</ul>
				</div>
			</section>

			<section
				id="contactMe"
				className="   flex flex-col justify-center items-center h-screen w-full px-8 snap-center"
			>
				<div className="flex flex-col justify-center items-center md:h-screen lg:w-8/12 md:w-10/12 sm:w-full mx-auto">
					<div className="m-8 mx-auto w-full text-center">
						<h2 className="text-gray-700 dark:text-white text-6xl max-sm:text-4xl">
							Contact Me!
						</h2>
					</div>

					<div className="py-8">
						<p className="text-gray-700 dark:text-white text-2xl max-sm:text-lg">
							I'm currently looking for full-time Frontend or Full-Stack
							opportunities! If you know of any positions available, if you have
							any questions, or if you just want to say hi, please feel free to
							email me at{" "}
							{
								<a
									href="mailto:gonzalo.zucca@gmail.com"
									target="_blank"
									className=" text-blue-600 hover:text-blue-800 hover:underline"
								>
									gonzalo.zucca@gmail.com
								</a>
							}
							.
						</p>
					</div>

					<div className="mt-8 w-full flex flex-row justify-around">
						<a
							href="https://www.linkedin.com/in/gonzalo-zucca-51557b7a/?locale=en_US"
							target="_blank"
						>
							<BsLinkedin className="text-black hover:text-gray-700 hover:scale-125 transition ease-in-out delay-100 duration-200  dark:text-white dark:hover:text-slate-500 cursor-pointer text-5xl" />
						</a>

						<a href="https://github.com/gzucca" target="_blank">
							<BsGithub className="text-black hover:text-gray-700 hover:scale-125 transition ease-in-out delay-100 duration-200  dark:text-white dark:hover:text-slate-500 cursor-pointer text-5xl" />
						</a>

						<a href="mailto:gonzalo.zucca@gmail.com" target="_blank">
							<AiOutlineMail className="text-black hover:text-gray-700 hover:scale-125 transition ease-in-out delay-100 duration-200  dark:text-white dark:hover:text-slate-500 cursor-pointer text-5xl" />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
