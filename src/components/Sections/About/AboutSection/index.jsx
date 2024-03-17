import { SectionSubtitle } from "src/components/Text";

export default function AboutSection({ id, title, children, className }) {
  return (
    <div id={id} className={`flex flex-col gap-6 ${className}`}>
      <SectionSubtitle content={title} />
      {children}
    </div>
  );
}
