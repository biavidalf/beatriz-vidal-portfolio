import { useTranslation } from "react-i18next";

export default function ProjectsFilter() {
  const { t } = useTranslation();
  return (
    <nav className="w-full lg:w-[450px] lg:self-start">
      <ul
        role="tablist"
        className="relative flex flex-row rounded-lg bg-bg-purple-dark bg-opacity-60 p-1"
      >
        <li
          role="tab"
          className="relative flex h-full w-full cursor-pointer select-none items-center justify-center bg-transparent px-2 py-1 text-center font-sans text-base font-normal leading-relaxed text-gray-200 antialiased"
          data-value="all"
        >
          <div className="z-20 text-inherit">
            &nbsp;&nbsp;{t("filter.all")}&nbsp;&nbsp;
          </div>
          <div className="absolute inset-0 z-10 h-full rounded-md bg-bg-purple-hover shadow"></div>
        </li>
        <li
          role="tab"
          className="relative flex h-full w-full cursor-pointer select-none items-center justify-center bg-transparent px-2 py-1 text-center font-sans text-base font-normal leading-relaxed text-gray-200 antialiased"
          data-value="monitored"
        >
          <div className="z-20 text-inherit">&nbsp;&nbsp;Web&nbsp;&nbsp;</div>
        </li>
        <li
          role="tab"
          className="relative flex h-full w-full cursor-pointer select-none items-center justify-center bg-transparent px-2 py-1 text-center font-sans text-base font-normal leading-relaxed text-gray-200 antialiased"
          data-value="unmonitored"
        >
          <div className="z-20 text-inherit">
            &nbsp;&nbsp;Mobile&nbsp;&nbsp;
          </div>
        </li>
        <li
          role="tab"
          className="relative flex h-full w-full cursor-pointer select-none items-center justify-center bg-transparent px-2 py-1 text-center font-sans text-base font-normal leading-relaxed text-gray-200 antialiased"
          data-value="unmonitored"
        >
          <div className="z-20 text-inherit">
            &nbsp;&nbsp;Design&nbsp;&nbsp;
          </div>
        </li>
      </ul>
    </nav>
  );
}
