import {
  Menu as MenuIcons,
  Github,
  Phone,
  Mail,
  Linkedin,
  Languages,
} from "lucide-react";
import {
  Chip,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Logo from "./../../assets/logo.svg";
import LogoName from "./../../assets/logo-name.svg";
import HeroIllustration from "./../../assets/hero-illustration.svg";

function Hero() {
  return (
    <>
      <header className="4xl:max-w-6xl m-auto flex flex-col items-center gap-16 px-5 md:h-screen md:w-full md:max-w-5xl md:justify-evenly">
        <nav className="flex w-full flex-wrap items-center justify-between sm:hidden">
          <img src={Logo} alt="Beatriz Vidal Logo" />
          <Menu placement="bottom-end">
            <MenuHandler className="sm:hidden">
              <MenuIcons size={30} />
            </MenuHandler>
            <MenuList className="border-deep-purple-400 bg-bg-purple-hover text-gray-200">
              <MenuItem className="focus:bg-deep-purple-400 focus:text-gray-100">
                Projects
              </MenuItem>
              <MenuItem className="focus:bg-deep-purple-400 focus:text-gray-100">
                About
              </MenuItem>
              <MenuItem className="focus:bg-deep-purple-400 focus:text-gray-100">
                Experience
              </MenuItem>
              <MenuItem className="focus:bg-deep-purple-400 focus:text-gray-100">
                Certificates
              </MenuItem>
              <MenuItem className="focus:bg-deep-purple-400 focus:text-gray-100">
                Contact
              </MenuItem>
            </MenuList>
          </Menu>
        </nav>

        <nav className="hidden font-semibold uppercase text-gray-500 *:transition-all *:delay-75 sm:flex sm:items-center sm:gap-8 sm:text-sm">
          <a href="#Projects" className=" hover:text-gray-200">
            Projects
          </a>
          <a href="#About" className=" hover:text-gray-200">
            About
          </a>
          <a href="#Experience" className=" hover:text-gray-200">
            Experience
          </a>
          <a href="#Certificates" className=" hover:text-gray-200">
            Certificates
          </a>
          <a href="#Contact" className=" hover:text-gray-200">
            Contact
          </a>
        </nav>

        <main className="flex flex-col items-center justify-center gap-12 md:w-full md:flex-row-reverse md:flex-wrap md:justify-center ">
          <img src={HeroIllustration} className="w-2/3 md:w-auto md:flex-1" />
          <div className="flex flex-col items-center gap-3 md:flex-1 md:items-start md:gap-4">
            <Chip
              value="Hey there!"
              className="hidden w-fit rounded-md bg-bg-purple-hover text-sm font-medium normal-case md:inline"
            />
            <div className="flex flex-col items-center gap-3 md:items-start">
              <h1 className="flex flex-wrap items-center gap-3 text-5xl font-medium">
                I'm <img src={LogoName} alt="Logo name" className="h-[39px]" />
              </h1>
              <p className="text-center text-[18px] font-medium text-gray-100/60 md:text-start">
                A 20 year old Brazilian{" "}
                <span className="text-purple-main">Web and Salesforce</span>{" "}
                Sales Cloud Developer that takes the client needs and a nice
                work enviroment as a priority.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-5">
              {/* <Button
                size="lg"
                className="bg-gradient-to-r from-deep-purple-600 to-deep-purple-400 text-base font-semibold normal-case tracking-wide"
              >
                Best Projects
              </Button> */}
              <button className="rounded-md bg-gradient-to-r from-[#5d55ce] via-purple-main to-[#8e87ed] px-7 py-3 text-[20px] font-medium normal-case tracking-wide">
                Best Projects
              </button>
              <a
                href=""
                className="border-b border-gray-400 text-gray-400 transition-all delay-75 hover:border-gray-50 hover:text-gray-50"
              >
                Open resume
              </a>
            </div>
          </div>

          <ul className="mt-3 flex flex-wrap items-center justify-center gap-3 text-gray-400 md:hidden">
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
              <Languages strokeWidth={1.5} />
            </li>
          </ul>
        </main>

        <ul className="mt-3 hidden flex-wrap items-center gap-5 self-end text-gray-400 md:flex">
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
          <li className="ml-6">
            <Languages strokeWidth={1.5} />
          </li>
        </ul>
      </header>
    </>
  );
}

export default Hero;
