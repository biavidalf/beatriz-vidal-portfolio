import { Carousel, IconButton } from "@material-tailwind/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCarousel({ images, idProject }) {
  return (
    <Carousel
      key={idProject}
      className="rounded-md"
      prevArrow={({ handlePrev, firstIndex }) => (
        <IconButton
          variant="text"
          size="md"
          onClick={handlePrev}
          disabled={firstIndex}
          className="!absolute left-4 top-2/4 -translate-y-2/4 text-gray-400 hover:bg-black/20 hover:text-purple-main"
        >
          <ChevronLeft />
        </IconButton>
      )}
      nextArrow={({ handleNext, lastIndex }) => (
        <IconButton
          variant="text"
          color="white"
          size="md"
          onClick={handleNext}
          disabled={lastIndex}
          className="!absolute !right-4 top-2/4 -translate-y-2/4 text-gray-400 hover:bg-black/20 hover:text-purple-main"
        >
          <ChevronRight />
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 rounded-full bg-black/40 p-1">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-purple-main" : "w-4 bg-white/80"
              }`}
              onClick={() => {
                setActiveIndex(i);
              }}
            />
          ))}
        </div>
      )}
    >
      {images.map((image, index) => {
        return (
          <img
            src={`src/assets/projects/${idProject}/${image}`}
            alt={`${idProject} ${image}`}
            key={index}
            className="h-full w-full object-cover"
          />
        );
      })}
    </Carousel>
  );
}
