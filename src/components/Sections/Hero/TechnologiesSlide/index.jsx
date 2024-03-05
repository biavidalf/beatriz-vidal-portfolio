import IconNode from "src/assets/icons/technologies/icon-node.svg";
import IconReact from "src/assets/icons/technologies/icon-react.svg";
import IconTailwind from "src/assets/icons/technologies/icon-tailwind.svg";
import IconFigma from "src/assets/icons/technologies/icon-figma.svg";
import IconPython from "src/assets/icons/technologies/icon-python.svg";
import IconMysql from "src/assets/icons/technologies/icon-mysql.svg";
import IconMongodb from "src/assets/icons/technologies/icon-mongo.svg";
import IconVercel from "src/assets/icons/technologies/icon-vercel.svg";
import IconPhp from "src/assets/icons/technologies/icon-php.svg";
import IconJs from "src/assets/icons/technologies/icon-js.svg";
import IconCss from "src/assets/icons/technologies/icon-css.svg";

export default function TechnologiesSlide() {
  const images = [
    IconNode,
    IconReact,
    IconTailwind,
    IconFigma,
    IconPython,
    IconMysql,
    IconMongodb,
    IconVercel,
    IconPhp,
    IconJs,
    IconCss,
  ];

  return (
    <div className="group flex w-full space-x-16 overflow-hidden">
      <div className="animate-loop-scroll group-hover:paused flex space-x-16">
        {images.map((image, index) => {
          return (
            <img
              loading="lazy"
              src={image}
              key={index}
              className="w-14 max-w-none text-gray-300"
              alt={image}
            />
          );
        })}
      </div>
      <div
        className="animate-loop-scroll group-hover:paused flex space-x-16"
        aria-hidden="true"
      >
        {images.map((image, index) => {
          return (
            <img
              loading="lazy"
              src={image}
              key={index}
              className="w-14 max-w-none text-gray-300"
              alt={image}
            />
          );
        })}
      </div>
    </div>
  );
}
