import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import ThemeSwitch from "./DarkMode";

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 z-50 w-screen bg-white py-3 shadow-lg dark:bg-black ">
      <nav>
        <ul className="mx-auto flex w-8/12 flex-row justify-between max-md:w-full max-md:px-4">
          <div className="flex items-center justify-between gap-4">
            <li>
              <a
                href="https://www.linkedin.com/in/gonzalo-zucca-dev/?locale=en_US"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="cursor-pointer text-3xl text-black dark:text-white" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/gzucca"
                rel="noreferrer"
                target="_blank"
              >
                <BsGithub className="cursor-pointer text-3xl text-black dark:text-white" />
              </a>
            </li>
          </div>

          <div className="flex items-center justify-between gap-4">
            <li>{<ThemeSwitch /> ? <ThemeSwitch /> : null}</li>

            <li>
              <a
                className="rounded  bg-gradient-to-r  from-cyan-800 to-cyan-700 px-4 py-2 text-white "
                href="https://drive.google.com/file/d/1lqPM_Bl86Kb0fsAyYzNnHzHKOjQFbY3x/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
