import { projects } from "src/data/projects";

export const nextProject = (currentIndex) => {
  console.log(currentIndex, projects.length);
  if (currentIndex === projects.length - 1) {
    return 0;
  } else {
    return ++currentIndex;
  }
};
