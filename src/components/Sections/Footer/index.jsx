import {
  Github,
  Linkedin,
  Location,
  Mail,
  Phone,
  Trailhead,
} from "../../Links";
import Logo from "../../../assets/logo.svg";
import { Button, Tooltip } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { Paperclip } from "lucide-react";

export default function () {
  const { t } = useTranslation();

  return (
    <footer
      id="footer"
      className="h-fit border-t border-stroke py-6 sm:px-10 lg:h-32 lg:py-4"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center gap-y-4 lg:flex-row lg:justify-between">
        <div className="flex h-full flex-col justify-around gap-y-5 text-gray-400 lg:gap-y-0">
          <div className="flex items-center justify-center gap-8">
            <img src={Logo} alt="" className="w-52" />
            <ul className="hidden items-center gap-4 text-sm font-medium lg:flex">
              <li className="cursor-pointer transition-colors hover:text-gray-50">
                <a href="#projects">{t("nav.projects")}</a>
              </li>
              <li className="cursor-pointer transition-colors hover:text-gray-50">
                <a href="#about">{t("nav.about")}</a>
              </li>
              <li className="cursor-pointer transition-colors hover:text-gray-50">
                <a href="#certificates">{t("nav.experience")}</a>
              </li>
              <li className="cursor-pointer transition-colors hover:text-gray-50">
                <a href="#certificates">{t("nav.certificates")}</a>
              </li>
              <li className="cursor-pointer transition-colors hover:text-gray-50">
                <a href="#experience">{t("nav.resume")}</a>
              </li>
            </ul>
          </div>
          <span className="hidden text-sm lg:inline-block">
            {t("copyright")}
          </span>
        </div>
        <div className="flex h-full flex-col items-center justify-around gap-y-5 text-gray-300 lg:gap-y-0">
          <div className="flex items-center justify-end gap-4 ">
            <Location />
            <Linkedin />
            <Github />
            <Mail />
            <Phone />
            <Trailhead />
            <Tooltip content="open resume">
              <Paperclip
                className="text-gray-400 lg:hidden"
                strokeWidth={1.5}
                size={20}
              />
            </Tooltip>
          </div>
          <Button
            size="sm"
            className="hidden bg-bg-purple-hover font-medium normal-case lg:block lg:w-full"
          >
            {t("buttons.resume")}
          </Button>
          <span className="text-sm lg:hidden">{t("copyright")}</span>
        </div>
      </div>
    </footer>
  );
}
