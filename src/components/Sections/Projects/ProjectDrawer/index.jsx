import { useRef } from "react";

import { Drawer, Typography, Button } from "@material-tailwind/react";
import { Link } from "lucide-react";
import ProjectCarousel from "../ProjectCarousel";
import { useCurrentProject } from "src/contexts/currentProject";
import { findNextProject } from "../../../../utils/nextProject";
import { resetScrollPosition } from "../../../../utils/resetScrollPosition";

import IconArrowLeft from "src/assets/icons/arrow-left.svg";
import IconArrowRight from "src/assets/icons/arrow-right.svg";
import { useTranslation } from "react-i18next";
import { getImageURL } from "../../../../utils/imageURL";

export default function ProjectDrawer({
  setOpenRight,
  openRight,
  projectsValues,
}) {
  const { t } = useTranslation();
  const projects = t("projectsList", { returnObjects: true });
  const drawerRef = useRef();

  const { currentProject, setCurrentProject } = useCurrentProject();
  const { fullTitle, stack, description, id, github, images } =
    projects[currentProject];

  const closeDrawerRight = () => {
    setOpenRight(false);
  };

  const goToNextProject = () => {
    const nextProjectId = findNextProject(currentProject, projectsValues);
    setCurrentProject(nextProjectId);
    resetScrollPosition(drawerRef);
  };

  return (
    <Drawer
      id="drawer"
      ref={drawerRef}
      placement="right"
      open={openRight}
      onClose={closeDrawerRight}
      size={650}
      className="overflow-auto bg-bg-purple-dark px-6 py-6 text-blue-gray-100 scrollbar-none"
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
          <a target="_blank" href={github}>
            {fullTitle}
          </a>
        </Typography>

        <div className="space-y-2">
          <h6 className="text-sm font-semibold uppercase text-purple-main">
            About the project
          </h6>

          <div className="space-y-2 text-justify text-lg">
            {description.map((text, index) => {
              return <p key={index}>{text}</p>;
            })}
          </div>
        </div>

        <div className="space-y-2">
          <h6 className="text-sm font-semibold uppercase text-purple-main">
            Github Repository
          </h6>

          <div className="text-lg">
            <a
              target="_blank"
              href={github}
              className="flex flex-row-reverse items-center justify-end gap-2"
            >
              {github}
              <Link size={22} />
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h6 className="text-sm font-semibold uppercase text-purple-main">
            Technologies used
          </h6>

          <div className="flex flex-wrap justify-between gap-2 lg:justify-start ">
            {stack.map((technology, index) => {
              return (
                <div
                  key={index}
                  className="flex min-w-24 cursor-pointer flex-col items-center justify-center gap-y-2 rounded border border-stroke bg-bg-glass/60 p-4 text-sm transition duration-300 hover:scale-105"
                >
                  <img
                    key={`${technology}-icon`}
                    src={getImageURL(
                      `icons/technologies/icon-${technology}.svg`,
                    )}
                    alt={`${technology} icon`}
                    className="w-7"
                  />
                  {technology.charAt(0).toUpperCase() + technology.slice(1)}
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={goToNextProject}
          className="my-4 flex w-fit items-center gap-4 self-center rounded-md px-3 py-1 text-gray-300 transition-all hover:mr-3 hover:bg-bg-purple-hover"
        >
          <Typography variant="h6">GO TO NEXT PROJECT</Typography>
          <img src={IconArrowRight} alt="Next Project Icon" />
        </button>
      </div>
    </Drawer>
  );
}
