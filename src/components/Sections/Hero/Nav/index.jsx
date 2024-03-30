import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { Menu as MenuIcons } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "../../../../assets/logo.svg";

export default function Nav() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
function DesktopNav() {
  const { t } = useTranslation();

  return (
    <nav className="hidden font-semibold uppercase text-gray-500 sm:items-center sm:gap-8 sm:text-sm md:flex">
      <a href="#projects" className="transition-colors hover:text-purple-main">
        {t("nav.projects")}
      </a>
      <a href="#about" className="transition-colors hover:text-purple-main">
        {t("nav.about")}
      </a>
      <a
        href="#experience"
        className="transition-colors hover:text-purple-main"
      >
        {t("nav.experience")}
      </a>
      <a
        href="#certificates"
        className="transition-colors hover:text-purple-main"
      >
        {t("nav.certificates")}
      </a>
      <a href="#contact" className="transition-colors hover:text-purple-main">
        {t("nav.contact")}
      </a>
    </nav>
  );
}

function MobileNav() {
  const { t } = useTranslation();

  return (
    <nav className="flex w-full flex-wrap items-center justify-between md:hidden">
      <img src={Logo} alt="Beatriz Vidal Logo" />
      <Menu placement="bottom-end">
        <MenuHandler className="md:hidden">
          <MenuIcons size={30} />
        </MenuHandler>
        <MenuList className="border-[#302548] bg-bg-purple-dark text-gray-200">
          <MenuItem className="focus:bg-bg-purple-hover focus:text-gray-100">
            <a href="#projects">{t("nav.projects")}</a>
          </MenuItem>
          <MenuItem className="focus:bg-bg-purple-hover focus:text-gray-100">
            <a href="#about">{t("nav.about")}</a>
          </MenuItem>
          <MenuItem className="focus:bg-bg-purple-hover focus:text-gray-100">
            <a href="#experience">{t("nav.experience")}</a>
          </MenuItem>
          <MenuItem className="focus:bg-bg-purple-hover focus:text-gray-100">
            <a href="#certificates">{t("nav.certificates")}</a>
          </MenuItem>
          <MenuItem className="focus:bg-bg-purple-hover focus:text-gray-100">
            <a href="#contact">{t("nav.contact")}</a>
          </MenuItem>
        </MenuList>
      </Menu>
    </nav>
  );
}
