import { useEffect, useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Languages, Menu, X } from "lucide-react";

import Logo from "../../assets/logo.svg";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function NavList() {
    return (
      <ul className="my-6 flex flex-col gap-2 text-gray-300 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography as="li" variant="small" className="p-1 font-medium">
          <a
            href="#projects"
            className="flex items-center transition-colors hover:text-purple-main"
          >
            Projects
          </a>
        </Typography>
        <Typography as="li" variant="small" className="p-1 font-medium">
          <a
            href="#about"
            className="flex items-center transition-colors hover:text-purple-main"
          >
            About
          </a>
        </Typography>
        <Typography as="li" variant="small" className="p-1 font-medium">
          <a
            href="#experience"
            className="flex items-center transition-colors hover:text-purple-main"
          >
            Experience
          </a>
        </Typography>
        <Typography as="li" variant="small" className="p-1 font-medium">
          <a
            href="#"
            className="flex items-center transition-colors hover:text-purple-main"
          >
            Resume
          </a>
        </Typography>
        <Languages
          size={20}
          className="transition-colors hover:text-purple-main"
        />
        <button className="mt-3 rounded bg-bg-purple-dark py-3 text-sm font-semibold transition duration-200 hover:bg-bg-purple-hover lg:mt-0 lg:px-4 lg:py-[6px]">
          Contact Me
        </button>
      </ul>
    );
  }

  return (
    <MTNavbar
      fullWidth={true}
      className="sticky top-0 z-50 border-none bg-[#27243C]/60"
    >
      <div className="m-auto flex w-full items-center justify-between text-blue-gray-900 *:text-gray-100 lg:max-w-7xl">
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <X className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </MTNavbar>
  );
}
