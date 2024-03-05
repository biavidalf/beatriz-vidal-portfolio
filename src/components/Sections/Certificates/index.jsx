import { SectionTitle, TextHighlight } from "../../Text";
import Tag from "../../Tag";
import { BlogCard } from "../../BlogCard";
import Pagination from "../../Pagination";

import OsfAcademy from "../../../assets/courses/osf-academy.png";
import { IconButton } from "@material-tailwind/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Certificate() {
  return (
    <div className="overflow-clip rounded-md border border-stroke bg-bg-glass/40 lg:w-1/2">
      <img src={OsfAcademy} alt="" />
      <div className="p-6">
        <h1 className="text-xl font-medium lg:text-2xl">OSF Academy</h1>
        <p className="mt-2 lg:text-lg">
          Salesforce Commerce Cloud training by the canadian roman company OSF
          Digital
        </p>
        <div className="mt-4 flex flex-row flex-wrap gap-2">
          <Tag content="5 weeks" />
          <Tag content="english" />
          <Tag content="salesforce" />
        </div>
      </div>
    </div>
  );
}

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="h-fit w-full !max-w-none bg-bg-mesh bg-no-repeat"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-y-5 py-20">
        <SectionTitle content="Certificates" />
        <p className="text-justify text-lg text-gray-100/75 lg:text-xl">
          During my <TextHighlight>journey</TextHighlight>, I’ve earned a
          variaty of certificates in web development, Salesforce, and design. I
          firmly believe in the power of continuous learning—constantly{" "}
          <TextHighlight>
            seeking new knowledge and refining my skills
          </TextHighlight>
          . These certifications represent my{" "}
          <TextHighlight>commitment to growth</TextHighlight> and excellence in
          the ever-evolving world of technology.
        </p>
        <div className="mt-4 flex flex-col gap-y-7 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-4">
          {window.innerWidth <= 960 ? (
            ""
          ) : (
            <IconButton
              size="sm"
              className="bg-transparent text-gray-300 hover:bg-bg-purple-hover focus:ring-purple-main"
            >
              <ChevronLeft size={24} />
            </IconButton>
          )}
          <BlogCard />
          <BlogCard />
          {window.innerWidth <= 960 ? (
            <Pagination className="self-center" />
          ) : (
            <IconButton
              size="sm"
              className="bg-transparent text-gray-300 hover:bg-bg-purple-hover focus:ring-purple-main"
            >
              <ChevronRight size={24} />
            </IconButton>
          )}
        </div>
      </div>
    </section>
  );
}
