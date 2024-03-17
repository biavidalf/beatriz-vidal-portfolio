import { Chip } from "@material-tailwind/react";
import { Dot } from "lucide-react";
import { TextHighlight } from "src/components/Text";

export default function AboutSectionItem({
  data: { date, title, subtitle, topics, tags },
  active = false,
}) {
  return (
    <div className="flex flex-row flex-wrap gap-x-11 gap-y-2">
      {" "}
      {active ? (
        <TextHighlight className="text-lg lg:text-xl">{date}</TextHighlight>
      ) : (
        <strong className="text-lg font-normal lg:text-xl">
          07/2022 - 01/2023
        </strong>
      )}
      <div className="">
        <h2 className="text-xl">{title}</h2>
        <h4 className="text-lg text-gray-400">{subtitle}</h4>
        {topics && (
          <ul className="mt-3 pl-1 text-gray-300 lg:mt-1">
            {topics.map((topic, index) => {
              return (
                <li key={index} className="flex gap-x-1 lg:items-center">
                  <Dot />
                  {topic}
                </li>
              );
            })}
          </ul>
        )}

        <div className="mt-3 flex flex-row flex-wrap gap-2">
          {tags.map((tag, index) => {
            return (
              <Chip
                size="sm"
                value={tag}
                key={index}
                className="w-fit bg-bg-purple-hover text-sm font-normal normal-case text-gray-300"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
