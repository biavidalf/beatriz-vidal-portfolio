import { Chip } from "@material-tailwind/react";

export default function Tag({ content, index }) {
  return (
    <Chip
      size="sm"
      value={content}
      key={index}
      className="w-fit bg-bg-purple-hover text-sm font-normal normal-case text-gray-300"
    />
  );
}
