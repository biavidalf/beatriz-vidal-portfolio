import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trans, useTranslation } from "react-i18next";

import { SectionTitle, TextHighlight } from "../../Text";
import ProjectsFilter from "./ProjectsFilter";
import Pagination from "../../Pagination";
import Project from "./Project";
import ProjectDrawer from "./ProjectDrawer";

import { useCurrentProject } from "src/contexts/currentProject";

export default function Projects() {
  const { t } = useTranslation();

  // Projects
  const { currentProject, setCurrentProject } = useCurrentProject();
  const [currentFilter, setCurrentFilter] = useState("all");
  const allProjects = t("projectsList", { returnObjects: true });
  const filteredProjects =
    currentFilter == "all"
      ? Object.values(allProjects)
      : Object.values(allProjects).filter(
          (project) => project.type == currentFilter,
        );

  // Drawer
  const [openRight, setOpenRight] = useState(false);
  const openDrawerRight = () => {
    setOpenRight(true);
  };

  // Pagination
  const perPage = 4;
  const totalPages = Math.ceil(filteredProjects.length / perPage);
  const [currentPage, setCurrentPage] = useState(0);

  // Animation
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <section id="projects" className="flex flex-col gap-8 pt-24">
      <motion.div
        ref={ref}
        variants={animationTitle}
        initial="hidden"
        animate={control}
        id="filter"
        className="space-y-3"
      >
        <SectionTitle content={t("projects.title")} className="mb-1" />

        <p className="text-justify text-lg text-gray-100/75 lg:text-xl">
          <Trans i18nKey="projects.description">
            Over the past few years, I’ve primarily focused on a
            <TextHighlight>
              tech stack that includes Node.js, React.js, and TailwindCSS.
            </TextHighlight>
            I usualy incorporate external libraries such as Radix, Lucide Icons,
            Material Tailwind, and Sooner to ensure my
            <TextHighlight>
              applications are as consistent and accessible
            </TextHighlight>
            as possible. Take a look at what I’ve been up to!
          </Trans>
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        variants={animationProjects}
        initial="hidden"
        animate={control}
        className="flex flex-col items-center gap-5"
      >
        <ProjectsFilter
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />

        <div className="flex w-full flex-col items-center gap-y-5 *:flex-1 lg:flex-row lg:flex-wrap lg:justify-between *:lg:h-[238px] *:lg:w-[49%] *:lg:flex-none">
          {filteredProjects
            .slice(currentPage * perPage, perPage * currentPage + 4)
            .map((project, index) => {
              return (
                <Project
                  key={index}
                  openView={openDrawerRight}
                  project={project}
                  idInList={project.id}
                />
              );
            })}
        </div>

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          total={totalPages}
        />
      </motion.div>

      {currentProject != null && (
        <ProjectDrawer
          openRight={openRight}
          setOpenRight={setOpenRight}
          projectsValues={filteredProjects}
        />
      )}
    </section>
  );
}

// Motion Animations
const animationTitle = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, y: 100 },
};

const animationProjects = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  hidden: { opacity: 0, y: 100 },
};
