import { Tabs, TabsHeader, Tab, input } from "@material-tailwind/react";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const ProjectsFilter = ({ label, type, placeholder }) => {
  const { t } = useTranslation();

  const data = [
    {
      label: "All",
      value: t("filter.all"),
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
    <Tabs value="all" className="w-full max-w-[60rem] self-start lg:w-2/3">
      <TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className: "bg-bg-purple-dark shadow-none !text-gray-200",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="text-gray-400">
            {label}
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
};

export default ProjectsFilter;
