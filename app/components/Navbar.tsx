import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import ThemeSwitch from "./DarkMode";

const Navbar: React.FC = () => {
  return (
    <div className=" sticky top-0 z-[100] block w-full bg-white px-4 py-4 shadow-lg dark:bg-black ">
      <nav className="container md:w-8/12 mx-auto flex flex-row justify-between" >
        <ul className="flex items-center justify-between gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/gonzalo-zucca-dev/?locale=en_US"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <BsLinkedin className="cursor-pointer text-2xl text-black dark:text-white md:text-3xl 3xl:text-4xl" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/gzucca"
              rel="noreferrer"
              target="_blank"
              title="GitHub"
            >
              <BsGithub className="cursor-pointer text-2xl text-black dark:text-white md:text-3xl 3xl:text-4xl" />
            </a>
          </li>
        </ul>

        <ul className="dark:text-dark flex items-center justify-between gap-4 text-white">
          <li>{<ThemeSwitch /> ? <ThemeSwitch /> : null}</li>

          <li>
            <a
              className="rounded  bg-gradient-to-r  from-cyan-800 to-cyan-700 px-4 py-2 text-lg text-white  md:text-xl "
              href="https://drive.google.com/file/d/1lqPM_Bl86Kb0fsAyYzNnHzHKOjQFbY3x/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
