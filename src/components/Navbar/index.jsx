import { useEffect, useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Globe, Languages, Menu, X } from "lucide-react";

import Logo from "../../assets/logo.svg";

import { useTranslation, Trans } from "react-i18next";

export default function Navbar() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation("", { keyPrefix: "nav" });

  const handleChangeLanguage = () => {
    const newLanguage = language === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
  };

  const items = [
    "projects",
    "about",
    "experience",
    "resume",
    "certificates",
    "contact",
  ];

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
        {items.map((item, index) => {
          return (
            item != "contact" && (
              <Typography as="li" className="p-1 font-medium" key={index}>
                <a
                  href={`#`}
                  className="flex items-center transition-colors hover:text-purple-main"
                >
                  {t(item)}
                </a>
              </Typography>
            )
          );
        })}
        <li className="mt-3">
          <button
            onClick={handleChangeLanguage}
            className="relative flex h-[26px] w-14 items-center justify-between rounded-full border border-purple-main py-1 text-sm font-medium text-purple-main"
          >
            <div
              className={`absolute flex w-1/2 items-center justify-center ${language == "en" ? "left-[50%]" : "left-0"}`}
            >
              <Globe size={18} strokeWidth={1.5} />
            </div>
            <span
              className={`absolute flex w-1/2 items-center justify-center ${language == "en" ? "left-0" : "left-[50%]"}`}
            >
              {`${language == "en" ? "PT" : "EN"}`}
            </span>
          </button>
        </li>
        <li className="">
          <button className="mt-3 w-full rounded-md bg-bg-purple-dark py-[10px] text-sm font-semibold transition duration-200 hover:bg-bg-purple-hover lg:mt-0 lg:px-4 lg:py-[6px]">
            {t("contact")}
          </button>
        </li>
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
