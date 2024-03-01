import {
  Menu as MenuIcons,
  Github,
  Phone,
  Mail,
  Linkedin,
  Link,
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
      <header className=" justif flex flex-col items-center gap-16">
        <nav className="flex w-full flex-wrap items-center justify-between">
          <img src={Logo} alt="Beatriz Vidal Logo" />
          <Menu placement="bottom-end">
            <MenuHandler>
              <MenuIcons size={30} />
            </MenuHandler>
            <MenuList className="border-deep-purple-400 bg-bg-purple-hover">
              <MenuItem className="text-gray-200 focus:bg-deep-purple-400 focus:text-gray-100">
                Projects
              </MenuItem>
              <MenuItem className="text-gray-200 focus:bg-deep-purple-400 focus:text-gray-100">
                About
              </MenuItem>
              <MenuItem className="text-gray-200 focus:bg-deep-purple-400 focus:text-gray-100">
                Experience
              </MenuItem>
              <MenuItem className="text-gray-200 focus:bg-deep-purple-400 focus:text-gray-100">
                Certificates
              </MenuItem>
              <MenuItem className="text-gray-200 focus:bg-deep-purple-400 focus:text-gray-100">
                Contact
              </MenuItem>
            </MenuList>
          </Menu>
        </nav>

        <main className="flex flex-col items-center justify-center gap-12">
          <img src={HeroIllustration} className="w-2/3" />
          <div className="flex w-full flex-col items-center gap-3">
            <Chip
              value="Hey there!"
              className="hidden w-fit bg-bg-purple-hover text-sm normal-case"
            />
            <div className="flex flex-col items-center gap-3">
              <h1 className="flex flex-wrap gap-3 text-3xl font-medium ">
                I'm <img src={LogoName} alt="Logo name" className="w-48" />
              </h1>
              <p className="text-center text-[17px] font-medium text-gray-400">
                A 20 year old Brazilian{" "}
                <span className="text-purple-main">Web and Salesforce</span>{" "}
                Sales Cloud Developer that takes the client needs and a nice
                work enviroment as a priority.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-5">
              <Button
                size="lg"
                className="bg-gradient-to-r from-deep-purple-600 to-deep-purple-400 text-base font-semibold normal-case tracking-wide"
              >
                Best Projects
              </Button>
              <a
                href=""
                className="group font-medium hover:border-b hover:border-purple-main "
              >
                Open{" "}
                <span className="border-b group-hover:border-none">resume</span>
              </a>
            </div>
          </div>

          <ul className="mt-3 flex flex-wrap items-center justify-center gap-3 text-gray-400">
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
          </ul>
        </main>
      </header>
    </>
  );
}

export default Hero;
