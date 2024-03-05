import { MapPin, Cloud, Github, Phone, Mail, Linkedin } from "lucide-react";
import Logo from "../../../assets/logo.svg";
import { Button } from "@material-tailwind/react";

export default function () {
  return (
    <footer className="h-fit border-t border-stroke py-6 sm:px-10 lg:h-32 lg:py-4">
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center gap-y-4 lg:flex-row lg:justify-between">
        <div className="flex h-full flex-col justify-around gap-y-5 text-gray-400 lg:gap-y-0">
          <div className="flex items-center gap-8">
            <img src={Logo} alt="" className="w-52" />
            <ul className="hidden items-center gap-4 text-sm font-medium lg:flex">
              <li className="cursor-pointer transition-colors hover:text-gray-50">
                Projects
              </li>
              <li className="cursor-pointer transition-colors hover:text-gray-50">
                About
              </li>
              <li className="cursor-pointer transition-colors hover:text-gray-50">
                Resume
              </li>
              <li className="cursor-pointer transition-colors hover:text-gray-50">
                Experience
              </li>
              <li className="cursor-pointer transition-colors hover:text-gray-50">
                Certificates
              </li>
            </ul>
          </div>
          <span className="text-sm">
            Copyright © 2024. All rights reserved.
          </span>
        </div>
        <div className="flex h-full flex-col justify-around gap-y-3 text-gray-300 lg:gap-y-0">
          <div className="flex items-center justify-end gap-4 ">
            <MapPin size={20} />
            <Cloud size={20} />
            <Github size={20} />
            <Phone size={20} />
            <Mail size={20} />
            <Linkedin size={20} />
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
