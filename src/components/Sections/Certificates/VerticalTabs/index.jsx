import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";

export function VerticalTabs() {
  const data = [
    {
      label: "HTML",
      value: "html",
    },
    {
      label: "React",
      value: "react",
    },
    {
      label: "Vue",
      value: "vue",
    },
    {
      label: "Angular",
      value: "angular",
    },
    {
      label: "Svelte",
      value: "svelte",
    },
  ];

  return (
    <Tabs value="html" orientation="vertical">
      <TabsHeader
        className="w-48 bg-bg-purple-dark"
        indicatorProps={{
          className: "bg-bg-purple-hover shadow-none !text-gray-200",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="text-gray-200">
            {label}
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}
