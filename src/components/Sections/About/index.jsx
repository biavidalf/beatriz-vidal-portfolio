import { Code2, Play, MessageSquareMore } from "lucide-react";
import { TextHighlight, SectionTitle } from "../../Text";
import { useTranslation, Trans } from "react-i18next";
import AboutSection from "./AboutSection";
import AboutSectionItem from "./AboutSection/AboutSectionItem";

export default function About() {
  const { t } = useTranslation("", { keyPrefix: "about" });
  const hardSkills = t("intro.hardSkills", { returnObjects: true });
  const hobbies = t("intro.hobbies", { returnObjects: true });
  const softSkills = t("intro.softSkills", { returnObjects: true });

  const professionalExperiences = t("experience", { returnObjects: true });
  const education = t("education", { returnObjects: true });

  return (
    <section id="about" className="flex flex-col gap-32">
      <SectionTitle content={t("title")} className="-mb-24" />
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
            <img
              src={"src/assets/icons/animated/code.gif"}
              alt=""
              className="w-7"
            />
            <ul className="flex flex-row flex-wrap gap-x-3 gap-y-1">
              {hardSkills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>

          <div className="flex items-center gap-4 rounded border border-stroke bg-bg-glass/50 px-7 py-4">
            <img
              src={"src/assets/icons/animated/play.gif"}
              alt=""
              className="w-7"
            />
            <ul className="flex flex-row flex-wrap gap-x-3 gap-y-1">
              {hobbies.map((hobby, index) => {
                return <li key={index}>{hobby}</li>;
              })}
            </ul>
          </div>

          <div className="flex items-center gap-4 rounded border border-stroke bg-bg-glass/50 px-7 py-4">
            <img
              src={"src/assets/icons/animated/chat.gif"}
              alt=""
              className="w-7"
            />
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
