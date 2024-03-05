import {
  Github,
  Linkedin,
  Location,
  Mail,
  Phone,
  Trailhead,
} from "../../Links";
import Logo from "../../../assets/logo.svg";
import { Button } from "@material-tailwind/react";

export default function () {
  return (
    <footer
      id="footer"
      className="h-fit border-t border-stroke py-6 sm:px-10 lg:h-32 lg:py-4"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center gap-y-4 lg:flex-row lg:justify-between">
        <div className="flex h-full flex-col justify-around gap-y-5 text-gray-400 lg:gap-y-0">
          <div className="flex items-center gap-8">
            <img src={Logo} alt="" className="w-52" />
            <ul className="hidden items-center gap-4 text-sm font-medium lg:flex">
              <li className="cursor-pointer transition-colors hover:text-gray-50">
                <a href="#projects">Projects</a>
              </li>
              <li className="cursor-pointer transition-colors hover:text-gray-50">
                <a href="#about">About</a>
              </li>
              <li className="cursor-pointer transition-colors hover:text-gray-50">
                <a href="#certificates">Experience</a>
              </li>
              <li className="cursor-pointer transition-colors hover:text-gray-50">
                <a href="#certificates">Certificates</a>
              </li>
              <li className="cursor-pointer transition-colors hover:text-gray-50">
                <a href="#experience">Resume</a>
              </li>
            </ul>
          </div>
          <span className="text-sm">
            Copyright © 2024. All rights reserved.
          </span>
        </div>
        <div className="flex h-full flex-col justify-around gap-y-3 text-gray-300 lg:gap-y-0">
          <div className="flex items-center justify-end gap-4 ">
            <Location />
            <Linkedin />
            <Github />
            <Mail />
            <Phone />
            <Trailhead />
          </div>
          <Button
            size="sm"
            className="bg-bg-purple-hover font-medium normal-case"
          >
            Checkout my resume
          </Button>
        </div>
      </div>
    </footer>
  );
}
