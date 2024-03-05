import { Code2, Play, MessageSquareMore, Dot } from "lucide-react";
import { TextHighlight } from "../../Text";
import { Chip } from "@material-tailwind/react";

function AboutSection({ id, title, children, className }) {
  return (
    <div id={id} className={`flex flex-col gap-6 ${className}`}>
      <div className="w-fit">
        <h2 className="text-2xl font-medium">{title}</h2>
        <hr className="mt-1 w-4/5 rounded border-[2px] border-purple-main" />
      </div>
      {children}
    </div>
  );
}

function AboutSectionItem({
  data: { date, title, subtitle, topics, tags },
  active = false,
}) {
  return (
    <div className="flex flex-row flex-wrap gap-x-11 gap-y-2">
      {" "}
      {active ? (
        <TextHighlight className="text-lg lg:text-xl">{date}</TextHighlight>
      ) : (
        <strong className="text-lg font-normal lg:text-xl">
          07/2022 - 01/2023
        </strong>
      )}
      <div className="">
        <h2 className="text-xl">{title}</h2>
        <h4 className="text-lg text-gray-400">{subtitle}</h4>
        {topics && (
          <ul className="mt-3 pl-1 text-gray-300 lg:mt-1">
            {topics.map((topic, index) => {
              return (
                <li key={index} className="flex gap-x-1 lg:items-center">
                  <Dot />
                  {topic}
                </li>
              );
            })}
          </ul>
        )}

        <div className="mt-3 flex flex-row flex-wrap gap-2">
          {tags.map((tag, index) => {
            return (
              <Chip
                size="sm"
                value={tag}
                key={index}
                className="w-fit bg-bg-purple-hover text-sm font-normal normal-case text-gray-300"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const professionalExperiences = [
    {
      date: "01/2023 - present",
      title: "Salesforce Sales Cloud Administrator and Support Intern",
      subtitle: "Unimed Fortaleza",
      topics: [
        "User acess, object and profile administration",
        "Validation rules, record types, layouts, permissions",
        "User support, error debug, tickets managment with Jira",
      ],
      tags: [
        "Salesforce SC",
        "Administration",
        "Jira",
        "Client support",
        "Tickets managment",
      ],
    },
    {
      date: "07/2022 - 01/2023",
      title: "Salesforce Sales Cloud Software Developer Intern",
      subtitle: "Grupo Portfólio",
      topics: [
        "User acess, object and profile administration",
        "Validation rules, record types, layouts, permissions",
        "Flows, Apex and LWC creation, debug and manipulation",
      ],
      tags: ["Salesforce SC", "LWC", "Jest", "Apex", "Flow", "SOQL", "Postman"],
    },
  ];

  const education = [
    {
      date: "01/2022 - present",
      title: "Technologist in Systems Analysis and Development",
      subtitle: "Universidade de Fortaleza - UNIFOR",
      tags: [
        "Node.js",
        "React.js",
        "React Native",
        "TailwindCSS",
        "MongoDB",
        "Jira",
        "PostgreSQL",
        "Vercel",
      ],
    },
    {
      date: "01/2018 - 12/2021",
      title: "Integrated Technical High School in Informatics",
      subtitle:
        "Instituto Federal de Educação, Ciência e Tecnologia do Ceará, IFCE",
      tags: [
        "Python",
        "Flask",
        "Postman",
        "PHP",
        "Java",
        "MySQL",
        "Bootstrap",
        "C",
      ],
    },
  ];

  return (
    <section id="about" className="flex flex-col gap-8">
      <h1 className="text-[32px]">About me</h1>
      <AboutSection title="Introduction">
        <div className="flex flex-col gap-5 text-justify text-lg text-gray-100/85 lg:text-xl">
          <p>
            Hey there! I'm a proactive and communicative Web/Salesforce{" "}
            <span className="font-medium text-purple-main">
              Brazilian Developer
            </span>{" "}
            and a passionate gamer with a growing love for programming.{" "}
          </p>
          <p>
            I'm a Salesforce Administrator at Unimed Fortaleza and currently
            graduating in System Analysis and Development at UNIFOR.
          </p>
          <p>
            As a Developer, I am constantly{" "}
            <TextHighlight>seeking growth and improvement</TextHighlight>, not
            just technically but also in all the social aspects of my work. My
            approach is to understand the{" "}
            <TextHighlight>client's needs</TextHighlight> and work
            collaboratively to deliver exceptional results.{" "}
          </p>
        </div>

        <div className="mt-2 space-y-4">
          <div className="flex items-center gap-4 rounded border border-stroke bg-bg-glass/50 px-7 py-4">
            <Code2 size={30} className="text-purple-main" />
            <ul className="flex flex-row flex-wrap gap-x-3 gap-y-1">
              <li>Web Development</li>
              <li>Web Design</li>
              <li>Salesforce</li>
            </ul>
          </div>

          <div className="flex items-center gap-4 rounded border border-stroke bg-bg-glass/50 px-7 py-4">
            <Play size={30} className="text-purple-main" />
            <ul className="flex flex-row flex-wrap gap-x-3 gap-y-1">
              <li>Gaming</li>
              <li>Soccer</li>
              <li>Basketball</li>
              <li>Friends</li>
              <li>Family</li>
            </ul>
          </div>

          <div className="flex items-center gap-4 rounded border border-stroke bg-bg-glass/50 px-7 py-4">
            <MessageSquareMore size={30} className="text-purple-main" />
            <ul className="flex flex-row flex-wrap gap-x-3 gap-y-1">
              <li>Proactive</li>
              <li>Communicative</li>
              <li>Team work</li>
              <li>Fast learner</li>
              <li>Passionate</li>
            </ul>
          </div>
        </div>
      </AboutSection>

      <AboutSection
        id="experience"
        title="Professional Experience"
        className="mt-10"
      >
        <div className="flex flex-col gap-y-11 lg:gap-y-20">
          <AboutSectionItem data={professionalExperiences[0]} active={true} />
          <AboutSectionItem data={professionalExperiences[1]} />
        </div>
      </AboutSection>

      <AboutSection id="education" title="Education" className="mt-10">
        <div className="flex flex-col gap-y-11 lg:gap-y-20">
          <AboutSectionItem data={education[0]} active={true} />
          <AboutSectionItem data={education[1]} />
        </div>
      </AboutSection>
    </section>
  );
}
