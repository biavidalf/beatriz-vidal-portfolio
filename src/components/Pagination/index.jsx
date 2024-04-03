import { useState } from "react";

import { Typography, IconButton } from "@material-tailwind/react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Pagination({
  currentPage,
  setCurrentPage,
  total,
  className,
}) {
  const { t } = useTranslation();

  const [active, setActive] = useState(currentPage);

  const next = () => {
    if (active === total - 1) return;

    setActive(active + 1);
    setCurrentPage(active + 1);
  };

  const prev = () => {
    if (active === 0) return;

    setActive(active - 1);
    setCurrentPage(active - 1);
  };

  return (
    <div className={`flex items-center gap-8 ${className}`}>
      <IconButton
        size="sm"
        onClick={prev}
        disabled={active === 0}
        className="bg-bg-purple-dark text-gray-100 focus:bg-bg-purple-hover focus:ring-purple-main"
      >
        <ChevronLeft className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal text-gray-300">
        {t("pagination.page")}{" "}
        <strong className="text-purple-main">{active + 1}</strong>{" "}
        {t("pagination.of")} {total === 0 ? 1 : total}
      </Typography>
      <IconButton
        size="sm"
        onClick={next}
        disabled={active === total - 1}
        className="bg-bg-purple-dark text-gray-300 focus:bg-bg-purple-hover focus:ring-purple-main"
      >
        <ChevronRight className="h-4 w-4" />
      </IconButton>
    </div>
  );
}
