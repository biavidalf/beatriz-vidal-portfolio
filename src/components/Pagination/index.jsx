import { useState } from "react";

import { Typography, IconButton } from "@material-tailwind/react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function ProjectsPagination({ className }) {
  const [active, setActive] = useState(1);

  const next = () => {
    if (active === 10) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className={`flex items-center gap-8 ${className}`}>
      <IconButton
        size="sm"
        onClick={prev}
        disabled={active === 1}
        className="bg-bg-purple-dark text-gray-100 focus:bg-bg-purple-hover focus:ring-purple-main"
      >
        <ChevronLeft className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal text-gray-300">
        Page <strong className="text-purple-main">{active}</strong> of 10
      </Typography>
      <IconButton
        size="sm"
        onClick={next}
        disabled={active === 10}
        className="bg-bg-purple-dark text-gray-300 focus:bg-bg-purple-hover focus:ring-purple-main"
      >
        <ChevronRight className="h-4 w-4" />
      </IconButton>
    </div>
  );
}
