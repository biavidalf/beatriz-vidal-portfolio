import { useState } from "react";
import { Drawer, Typography, Carousel, Button } from "@material-tailwind/react";
import { ChevronLeftIcon, ExternalLink, Link } from "lucide-react";

import { SectionTitle, SectionSubtitle, TextHighlight } from "../../Text";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsPagination from "../../Pagination";
import Project from "./Project";
import { projects } from "../../../data/projects";

import phais1 from "src/assets/projects/phais-plus/solicitacao.png";
import phais2 from "src/assets/projects/phais-plus/estoque.png";
import phais3 from "src/assets/projects/phais-plus/admin.png";
import iconReact from "src/assets/icons/technologies/icon-react.svg";
import iconNode from "src/assets/icons/technologies/icon-node.svg";
import iconTailwind from "src/assets/icons/technologies/icon-tailwind.svg";
import iconPostgre from "src/assets/icons/technologies/icon-postgre.svg";
import iconFigma from "src/assets/icons/technologies/icon-figma.svg";
import iconDocker from "src/assets/icons/technologies/icon-docker.svg";

export default function Projects() {
  const [openRight, setOpenRight] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <section id="projects" className="flex flex-col gap-8">
      <div className="space-y-3">
        <SectionTitle content="Best Projects" className="mb-1" />
        <p className="text-justify text-lg text-gray-100/75 lg:text-xl">
          Over the past few years, I’ve primarily focused on a{" "}
          <TextHighlight>
            tech stack that includes Node.js, React.js, and TailwindCSS
          </TextHighlight>
          . I usualy incorporate external libraries such as Radix, Lucide Icons,
          Material Tailwind, and Sooner to ensure my{" "}
          <TextHighlight>
            applications are as consistent and accessible
          </TextHighlight>{" "}
          as possible. Take a look at what I’ve been up to!
        </p>
      </div>

      <div className="flex flex-col items-center gap-5">
        <ProjectsFilter />

        <div className="flex w-full flex-col items-center gap-y-5 *:flex-1 lg:flex-row lg:flex-wrap lg:justify-between *:lg:w-[49%] *:lg:flex-none">
          {Object.entries(projects).map(([id, project]) => {
            console.log(id, project);
            return (
              <Project key={id} openView={openDrawerRight} project={project} />
            );
          })}
        </div>

        <ProjectsPagination />
      </div>

      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        size={650}
        className="no-scrollbar overflow-auto bg-bg-purple-dark px-6 py-6 text-blue-gray-100"
      >
        <div className="my-4 flex items-center gap-4">
          <button
            onClick={closeDrawerRight}
            className="rounded-md p-1 text-gray-400 hover:bg-bg-purple-hover"
          >
            <ChevronLeftIcon size={30} />
          </button>
          <Typography variant="h6">BACK TO PROJECTS</Typography>
        </div>

        <div className="flex flex-col gap-10 px-3">
          <Carousel
            className="rounded-md"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <img
              src={phais1}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src={phais2}
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src={phais3}
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>

          <Typography variant="h4" className="-my-5">
            <a target="_blank" href="https://github.com/biavidalf/phais-plus">
              PHAIS+ Pharmaceutical System
            </a>
          </Typography>

          <div className="space-y-2">
            <h7 className="text-sm font-semibold uppercase text-purple-main">
              About the project
            </h7>

            <div className="space-y-2 text-justify text-lg">
              <p>
                Pharmaceutical system that manages the exchange of medications
                between hospitals through requests/tickets.
              </p>
              <p>
                Its goal is to help hospitals reduce the waste of medications,
                as they are often discarded due to expiration and other factors.
              </p>
              <p>
                Design made from scratch with TailwindCSS (Figma for
                prototyping).
              </p>
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
                https://github.com/biavidalf/phais-plus
                <Link size={22} />
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h7 className="text-sm font-semibold uppercase text-purple-main">
              Technologies used
            </h7>

            <div className="flex flex-wrap justify-between gap-2 lg:justify-start ">
              <div className="flex min-w-24 cursor-pointer flex-col items-center justify-center gap-y-2 rounded border border-stroke bg-bg-glass/60 p-4 text-sm transition duration-300 hover:scale-105">
                <img src={iconNode} alt="" className="w-7" />
                Node.js
              </div>
              <div className="flex min-w-24 cursor-pointer flex-col items-center justify-center gap-y-2 rounded border border-stroke bg-bg-glass/60 p-4 text-sm transition duration-300 hover:scale-105">
                <img src={iconReact} alt="" className="w-7" />
                React.js
              </div>
              <div className="flex min-w-24 cursor-pointer flex-col items-center justify-center gap-y-2 rounded border border-stroke bg-bg-glass/60 p-4 text-sm transition duration-300 hover:scale-105">
                <img src={iconTailwind} alt="" className="w-7" />
                Tailwind
              </div>
              <div className="flex min-w-24 cursor-pointer flex-col items-center justify-center gap-y-2 rounded border border-stroke bg-bg-glass/60 p-4 text-sm transition duration-300 hover:scale-105">
                <img src={iconPostgre} alt="" className="w-7" />
                Postgre
              </div>
              <div className="flex min-w-24 cursor-pointer flex-col items-center justify-center gap-y-2 rounded border border-stroke bg-bg-glass/60 p-4 text-sm transition duration-300 hover:scale-105">
                <img src={iconDocker} alt="" className="w-7" />
                Docker
              </div>
              <div className="flex min-w-24 cursor-pointer flex-col items-center justify-center gap-y-2 rounded border border-stroke bg-bg-glass/60 p-4 text-sm transition duration-300 hover:scale-105">
                <img src={iconFigma} alt="" className="w-7" />
                Figma
              </div>
            </div>
          </div>

          <Button
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
          </Button>
        </div>
      </Drawer>
    </section>
  );
}
