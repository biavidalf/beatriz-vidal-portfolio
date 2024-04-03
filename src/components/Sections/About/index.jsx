import { useTranslation, Trans } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { TextHighlight, SectionTitle } from "../../Text";
import AboutSection from "./AboutSection";
import AboutSectionItem from "./AboutSection/AboutSectionItem";

import { getImageURL } from "../../../utils/imageURL";
import { useEffect } from "react";

export default function About() {
  const { t } = useTranslation("", { keyPrefix: "about" });
  const hardSkills = t("intro.hardSkills", { returnObjects: true });
  const hobbies = t("intro.hobbies", { returnObjects: true });
  const softSkills = t("intro.softSkills", { returnObjects: true });

  const professionalExperiences = t("experience", { returnObjects: true });
  const education = t("education", { returnObjects: true });

  // Animation
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="relative w-full !max-w-none !px-0">
      <section id="about" className="mx-auto flex flex-col pt-24">
        <motion.div
          ref={ref}
          variants={animationTitle}
          initial="hidden"
          animate={control}
        >
          <SectionTitle
            content={t("title")}
            className="mx-auto -mb-24 w-full px-7 lg:max-w-5xl"
          />
        </motion.div>
        <div className="bg-mesh-elipse bg-right-bottom bg-no-repeat">
          <AboutSection
            ref={ref}
            variants={animationContent}
            animate={control}
            motion={motion}
            className="mx-auto px-7 pt-32 lg:max-w-5xl"
            title={t("intro.title")}
          >
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
                  <TextHighlight>seeking growth and improvement</TextHighlight>,
                  not just technically but also in all the social aspects of my
                  work. My approach is to understand the
                  <TextHighlight>client's needs</TextHighlight> and work
                  collaboratively to deliver exceptional results.
                </Trans>
              </p>
            </div>

            <div className="mt-2 space-y-4">
              <div className="flex items-center gap-4 rounded border border-stroke bg-bg-glass/50 px-7 py-4">
                <img
                  src={getImageURL("icons/animated/code.gif")}
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
                  src={getImageURL("icons/animated/play.gif")}
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
                  src={getImageURL("icons/animated/chat.gif")}
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
        </div>

        <div className="mt-10 space-y-32 bg-mesh-elipse bg-left-bottom bg-no-repeat">
          <Experience professionalExperiences={professionalExperiences} />

          <Education education={education} />
        </div>
      </section>
    </div>
  );
}

// Motion Animations
const animationTitle = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 100 },
};
const animationContent = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  hidden: { opacity: 0, y: 100 },
};

// Motion Components
const Experience = ({ professionalExperiences }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <AboutSection
      ref={ref}
      variants={animationContent}
      animate={control}
      motion={motion}
      id="experience"
      title={professionalExperiences["title"]}
      className="mx-auto px-7 pt-32 lg:w-full lg:max-w-5xl"
    >
      <div className="flex flex-col gap-y-11 lg:gap-y-20">
        <AboutSectionItem
          data={professionalExperiences["unimed"]}
          active={true}
        />
        <AboutSectionItem data={professionalExperiences["portfolio"]} />
      </div>
    </AboutSection>
  );
};

const Education = ({ education }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <AboutSection
      ref={ref}
      variants={animationContent}
      animate={control}
      motion={motion}
      id="education"
      title={education["title"]}
      className="mx-auto px-7 pt-32 lg:w-full lg:max-w-5xl"
    >
      <div className="flex flex-col gap-y-11 lg:gap-y-20">
        <AboutSectionItem data={education["unifor"]} active={true} />
        <AboutSectionItem data={education["ifce"]} />
      </div>
    </AboutSection>
  );
};
