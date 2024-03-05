import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export function TransparentTabs({ className }) {
  const data = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Dev",
      value: "dev",
    },
    {
      label: "Design",
      value: "design",
    },
    {
      label: "Salesforce",
      value: "salesforce",
    },
  ];

  return (
    <Tabs value="all" className={`max-w-[40rem] ${className}`}>
      <TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className: "bg-bg-purple-hover shadow-none !text-gray-300 rounded",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="text-gray-300">
            {label}
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}
