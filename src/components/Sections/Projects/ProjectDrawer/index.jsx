import { Drawer, Typography, Button } from "@material-tailwind/react";
import { ChevronLeftIcon, Link } from "lucide-react";
import ProjectCarousel from "../ProjectCarousel";

import IconArrowLeft from "src/assets/icons/arrow-left.svg";
import IconArrowRight from "src/assets/icons/arrow-right.svg";

export default function ProjectDrawer({
  openRight,
  closeDrawerRight,
  project: { fullTitle, stack, description, id, github, images },
}) {
  return (
    <Drawer
      placement="right"
      open={openRight}
      onClose={closeDrawerRight}
      size={650}
      className="no-scrollbar overflow-auto bg-bg-purple-dark px-6 py-6 text-blue-gray-100"
    >
      <button
        onClick={closeDrawerRight}
        className="my-4 flex w-fit items-center gap-4 rounded-md px-3 py-1 text-gray-300 transition-all hover:ml-3 hover:bg-bg-purple-hover"
      >
        <img src={IconArrowLeft} alt="Back Icon" />
        <Typography variant="h6">BACK TO PROJECTS</Typography>
      </button>
      <div className="flex flex-col gap-10 px-3">
        <ProjectCarousel images={images} idProject={id} />

        <Typography variant="h4" className="-my-5">
          <a target="_blank" href="https://github.com/biavidalf/phais-plus">
            {fullTitle}
          </a>
        </Typography>

        <div className="space-y-2">
          <h7 className="text-sm font-semibold uppercase text-purple-main">
            About the project
          </h7>

          <div className="space-y-2 text-justify text-lg">
            {description.map((text, index) => {
              return <p>{text}</p>;
            })}
          </div>
        </div>

        <div className="space-y-2">
          <h7 className="text-sm font-semibold uppercase text-purple-main">
            Github Repository
          </h7>

          <div className="text-lg">
            <a
              href="https://github.com/biavidalf/phais-plus"
              className="flex flex-row-reverse items-center justify-end gap-2"
            >
              {github}
              <Link size={22} />
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h7 className="text-sm font-semibold uppercase text-purple-main">
            Technologies used
          </h7>

          <div className="flex flex-wrap justify-between gap-2 lg:justify-start ">
            {stack.map((technology, index) => {
              return (
                <div className="flex min-w-24 cursor-pointer flex-col items-center justify-center gap-y-2 rounded border border-stroke bg-bg-glass/60 p-4 text-sm transition duration-300 hover:scale-105">
                  <img
                    key={index}
                    src={`src/assets/icons/technologies/icon-${technology}.svg`}
                    alt={`${technology} icon`}
                    className="w-7"
                  />
                  {technology.charAt(0).toUpperCase() + technology.slice(1)}
                </div>
              );
            })}
          </div>
        </div>

        {/* <Button
          variant="text"
          className="mx-auto flex w-fit items-center gap-2 text-purple-main hover:bg-bg-purple-hover"
          onClick={closeDrawerRight}
        >
          Go to next project{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button> */}
        <button
          onClick={closeDrawerRight}
          className="my-4 flex w-fit items-center gap-4 self-center rounded-md px-3 py-1 text-gray-300 transition-all hover:mr-3 hover:bg-bg-purple-hover"
        >
          <Typography variant="h6">GO TO NEXT PROJECT</Typography>
          <img src={IconArrowRight} alt="Next Project Icon" />
        </button>
      </div>
    </Drawer>
  );
}
