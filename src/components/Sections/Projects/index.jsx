import { useState } from "react";

import { SectionTitle, TextHighlight } from "../../Text";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsPagination from "../../Pagination";
import Project from "./Project";
import ProjectDrawer from "./ProjectDrawer";
import { projects } from "../../../data/projects";

export default function Projects() {
  const [openRight, setOpenRight] = useState(false);
  const [currentProject, setCurrentProject] = useState();
  const openDrawerRight = (projectId) => {
    setCurrentProject(projectId);
    setOpenRight(true);
    console.log(projectId);
  };
  const closeDrawerRight = () => {
    setCurrentProject(null);
    setOpenRight(false);
  };

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
            return (
              <Project key={id} openView={openDrawerRight} project={project} />
            );
          })}
        </div>

        <ProjectsPagination />
      </div>

      {currentProject && (
        <ProjectDrawer
          openRight={openRight}
          closeDrawerRight={closeDrawerRight}
          project={projects[currentProject]}
        />
      )}
    </section>
  );
}
