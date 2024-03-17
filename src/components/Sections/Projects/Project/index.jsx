import { useTranslation } from "react-i18next";
import { useCurrentProject } from "src/contexts/currentProject";

export default function Project({
  openView,
  idInList,
  project: { coverUrl, title, stack, id },
}) {
  const { t } = useTranslation();
  const projects = t("projectsList", { returnObjects: true });
  const { currentProject, setCurrentProject } = useCurrentProject();

  return (
    <div
      onClick={() => {
        openView(idInList);
        setCurrentProject(idInList);
      }}
      className="relative cursor-pointer overflow-hidden rounded-md transition duration-500 ease-in-out hover:scale-105 "
    >
      <img
        src={`src/assets/projects/${id}/${coverUrl}`}
        alt={id}
        className=""
      />
      <div className="absolute left-0 top-0 flex h-full w-full items-end justify-between  bg-gradient-to-t from-black/80 via-black/40 to-black/0 px-7 py-5  hover:bg-gradient-to-t hover:from-deep-purple-900/80 hover:via-deep-purple-900/30 hover:to-deep-purple-900/0">
        <h1 className="font-medium">{title}</h1>
        <div className="flex gap-2">
          {stack.map((technology, index) => {
            return (
              <img
                key={index}
                src={`src/assets/icons/technologies/icon-${technology}.svg`}
                alt={`${technology} icon`}
                className="w-6"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
