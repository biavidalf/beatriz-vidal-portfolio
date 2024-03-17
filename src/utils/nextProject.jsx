import enProjects from "src/locales/en/projects.json";

export const findNextProject = (currentId) => {
  const projectsIds = Object.keys(enProjects["projectsList"]);
  const currentIndex = projectsIds.findIndex((key) => key == currentId);

  if (isLastIndex(currentIndex, projectsIds)) return projectsIds[0];

  return projectsIds[currentIndex + 1];
};

const isLastIndex = (current, total) => current === total.length - 1;
