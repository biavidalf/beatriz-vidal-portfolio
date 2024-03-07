import { Menu as MenuIcons, Languages } from "lucide-react";
import {
  Chip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import {
  Github,
  Linkedin,
  Location,
  Mail,
  Phone,
  Trailhead,
} from "../../Links";
import Logo from "../../../assets/logo.svg";
import LogoName from "../../../assets/logo-name.svg";
import HeroIllustration from "../../../assets/hero-illustration.svg";
import PdfViewer from "../../PdfViewer";
import { useState } from "react";

function Hero() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <header
        id="hero"
        className="4xl:max-w-6xl relative m-auto flex h-screen flex-col items-center gap-16 px-7 py-6 md:w-full md:max-w-5xl md:justify-evenly"
      >
        <nav className="flex w-full flex-wrap items-center justify-between sm:hidden">
          <img src={Logo} alt="Beatriz Vidal Logo" />
          <Menu placement="bottom-end">
            <MenuHandler className="sm:hidden">
              <MenuIcons size={30} />
            </MenuHandler>
            <MenuList className="border-deep-purple-400 bg-bg-purple-hover text-gray-200">
              <MenuItem className="focus:bg-deep-purple-400 focus:text-gray-100">
                <a href="#projects">Projects</a>
              </MenuItem>
              <MenuItem className="focus:bg-deep-purple-400 focus:text-gray-100">
                <a href="#about">About</a>
              </MenuItem>
              <MenuItem className="focus:bg-deep-purple-400 focus:text-gray-100">
                <a href="#experience">Experience</a>
              </MenuItem>
              <MenuItem className="focus:bg-deep-purple-400 focus:text-gray-100">
                <a href="#certificates">Certificates</a>
              </MenuItem>
              <MenuItem className="focus:bg-deep-purple-400 focus:text-gray-100">
                <a href="#contact">Contact</a>
              </MenuItem>
            </MenuList>
          </Menu>
        </nav>

        <nav className="hidden font-semibold uppercase text-gray-500 sm:flex sm:items-center sm:gap-8 sm:text-sm">
          <a
            href="#projects"
            className="transition-colors hover:text-purple-main"
          >
            Projects
          </a>
          <a href="#about" className="transition-colors hover:text-purple-main">
            About
          </a>
          <a
            href="#experience"
            className="transition-colors hover:text-purple-main"
          >
            Experience
          </a>
          <a
            href="#certificates"
            className="transition-colors hover:text-purple-main"
          >
            Certificates
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-purple-main"
          >
            Contact
          </a>
        </nav>

        <main className="flex flex-col items-center justify-center gap-12 lg:w-full lg:flex-row-reverse lg:flex-wrap lg:justify-center ">
          <img src={HeroIllustration} className="w-2/3 md:w-auto md:flex-1" />
          <div className="flex flex-col items-center gap-3 md:flex-1 md:items-start md:gap-4">
            <Chip
              value="Hey there!"
              className="hidden w-fit rounded-md bg-bg-purple-hover text-sm font-medium normal-case md:inline"
            />
            <div className="flex flex-col items-center gap-3 md:items-start">
              <h1 className="flex flex-wrap items-center gap-3 text-3xl font-medium md:text-5xl">
                I'm{" "}
                <img
                  src={LogoName}
                  alt="Logo name"
                  className="w-48 md:h-[39px] md:w-auto"
                />
              </h1>
              <p className="text-center text-[18px] font-medium text-gray-100/60 md:text-start">
                A 20 year old Brazilian{" "}
                <span className="text-purple-main">Web and Salesforce</span>{" "}
                Sales Cloud Developer that takes the client needs and a nice
                work enviroment as a priority.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-5">
              <button className="rounded-md bg-gradient-to-r from-[#5d55ce] via-purple-main to-[#8e87ed] px-7 py-3 font-medium normal-case tracking-wide hover:bg-purple-main hover:bg-none md:text-[20px]">
                Best Projects
              </button>
              <button
                onClick={() => {
                  setIsActive(true);
                }}
                className="border-b border-gray-400 text-gray-400 transition-all delay-75 hover:border-gray-50 hover:text-gray-50"
              >
                Open resume
              </button>
            </div>
          </div>

          <ul className="mt-3 flex flex-wrap items-center justify-center gap-3 text-gray-300 md:hidden">
            <li>
              <Github strokeWidth={1.5} />
            </li>
            <li>
              <Phone strokeWidth={1.5} />
            </li>
            <li>
              <Mail strokeWidth={1.5} />
            </li>
            <li>
              <Linkedin strokeWidth={1.5} />
            </li>
            <li>
              <Languages className="text-purple-main" strokeWidth={1.5} />
            </li>
          </ul>
        </main>

        <ul className="mt-3 hidden flex-wrap items-center gap-5 self-end text-gray-300 md:flex">
          <li>
            <Location />
          </li>
          <li>
            <Linkedin />
          </li>
          <li>
            <Github />
          </li>
          <li>
            <Mail />
          </li>
          <li>
            <Trailhead />
          </li>
          <li>
            <Phone />
          </li>
          <li className="ml-6">
            <Languages
              className="text-purple-main"
              size={24}
              strokeWidth={1.5}
            />
          </li>
        </ul>

        <PdfViewer
          isActive={isActive}
          setIsActive={setIsActive}
          pdfPath="resume/BeatrizVidalCurriculo.pdf"
        />
      </header>
    </>
  );
}

export default Hero;
