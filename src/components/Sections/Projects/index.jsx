import { SectionTitle, TextHighlight } from "../../Text";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsPagination from "../../Pagination";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="flex flex-col gap-8">
      <div className="space-y-3">
        <SectionTitle content="Best Projects" className="mb-1" />
        <p className="text-justify text-lg text-gray-100/75 lg:text-xl">
          Over the past few years, I’ve primarily focused on a
          <TextHighlight>
            tech stack that includes Node.js, React.js, and TailwindCSS
          </TextHighlight>
          . I usualy incorporate external libraries such as Radix, Lucide Icons,
          Material Tailwind, and Sooner to ensure my{" "}
          <TextHighlight>
            applications are as consistent and accessible
          </TextHighlight>
          as possible. Take a look at what I’ve been up to!
        </p>
      </div>

      <div className="flex flex-col items-center gap-5">
        <ProjectsFilter />

        <div className="flex w-full flex-col items-center gap-y-5 *:flex-1 lg:flex-row lg:flex-wrap lg:justify-between *:lg:w-[49%] *:lg:flex-none">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>

        <ProjectsPagination />
      </div>
    </section>
  );
}
