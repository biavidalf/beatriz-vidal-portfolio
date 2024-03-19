import { Tabs, TabsHeader, Tab, input } from "@material-tailwind/react";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const ProjectsFilter = ({ currentFilter, setCurrentFilter }) => {
  const { t } = useTranslation();

  const data = [
    {
      label: t("filter.all").charAt(0).toUpperCase() + t("filter.all").slice(1),
      value: "all",
    },
    {
      label: "Web",
      value: "web",
    },
    {
      label: "Mobile",
      value: "mobile",
    },
    {
      label: "Design",
      value: "design",
    },
  ];

  return (
    <Tabs
      value={currentFilter}
      className="w-full max-w-[60rem] self-start lg:w-2/3"
    >
      <TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className: "bg-bg-purple-dark shadow-none !text-gray-200",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className="text-gray-400"
            onClick={() => setCurrentFilter(value)}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
};

export default ProjectsFilter;
