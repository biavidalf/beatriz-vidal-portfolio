import { Code2, Play, MessageSquareMore, Dot } from "lucide-react";
import { TextHighlight, SectionTitle, SectionSubtitle } from "../../Text";
import { Chip } from "@material-tailwind/react";
import { useTranslation, Trans } from "react-i18next";

export default function About() {
  const { t } = useTranslation("", { keyPrefix: "about" });
  const hardSkills = t("intro.hardSkills", { returnObjects: true });
  const hobbies = t("intro.hobbies", { returnObjects: true });
  const softSkills = t("intro.softSkills", { returnObjects: true });

  const professionalExperiences = t("experience", { returnObjects: true });
  const education = t("education", { returnObjects: true });

  return (
    <section id="about" className="flex flex-col gap-8">
      <SectionTitle content={t("title")} />
      <AboutSection title={t("intro.title")}>
        <div className="flex flex-col gap-5 text-justify text-lg text-gray-100/85 lg:text-xl">
          <p>
            <Trans i18nKey="about.intro.description1">
              Hey there! I'm a proactive and communicative Web/Salesforce
              <span className="font-medium text-purple-main">
                Brazilian Developer
              </span>
              and a passionate gamer with a growing love for programming.
            </Trans>
          </p>
          <p>{t("intro.description2")}</p>
          <p>
            <Trans i18nKey="about.intro.description3">
              As a Developer, I am constantly
              <TextHighlight>seeking growth and improvement</TextHighlight>, not
              just technically but also in all the social aspects of my work. My
              approach is to understand the
              <TextHighlight>client's needs</TextHighlight> and work
              collaboratively to deliver exceptional results.
            </Trans>
          </p>
        </div>

        <div className="mt-2 space-y-4">
          <div className="flex items-center gap-4 rounded border border-stroke bg-bg-glass/50 px-7 py-4">
            <Code2 size={30} className="text-purple-main" />
            <ul className="flex flex-row flex-wrap gap-x-3 gap-y-1">
              {hardSkills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>

          <div className="flex items-center gap-4 rounded border border-stroke bg-bg-glass/50 px-7 py-4">
            <Play size={30} className="text-purple-main" />
            <ul className="flex flex-row flex-wrap gap-x-3 gap-y-1">
              {hobbies.map((hobby, index) => {
                return <li key={index}>{hobby}</li>;
              })}
            </ul>
          </div>

          <div className="flex items-center gap-4 rounded border border-stroke bg-bg-glass/50 px-7 py-4">
            <MessageSquareMore size={30} className="text-purple-main" />
            <ul className="flex flex-row flex-wrap gap-x-3 gap-y-1">
              {softSkills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </AboutSection>

      <AboutSection
        id="experience"
        title={professionalExperiences["title"]}
        className="mt-10"
      >
        <div className="flex flex-col gap-y-11 lg:gap-y-20">
          <AboutSectionItem
            data={professionalExperiences["unimed"]}
            active={true}
          />
          <AboutSectionItem data={professionalExperiences["portfolio"]} />
        </div>
      </AboutSection>

      <AboutSection id="education" title={education["title"]} className="mt-10">
        <div className="flex flex-col gap-y-11 lg:gap-y-20">
          <AboutSectionItem data={education["unifor"]} active={true} />
          <AboutSectionItem data={education["ifce"]} />
        </div>
      </AboutSection>
    </section>
  );
}

function AboutSection({ id, title, children, className }) {
  return (
    <div id={id} className={`flex flex-col gap-6 ${className}`}>
      <SectionSubtitle content={title} />
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
