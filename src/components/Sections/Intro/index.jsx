import { useTranslation, Trans } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TechnologiesSlide from "../Hero/TechnologiesSlide";

import ProfilePic from "../../../assets/profile-pic.jpeg";
import { useEffect } from "react";

export default function Intro() {
  const { t } = useTranslation();

  return (
    <section
      id="intro"
      className="-mb-20 flex h-screen w-full !max-w-none flex-col items-center bg-bg-intro bg-bottom bg-no-repeat pt-28"
    >
      <div className="mx-auto w-full space-y-8 lg:max-w-5xl">
        <MainContent t={t} />

        <SlideContent />
      </div>
    </section>
  );
}

/* Motion Animations */
const animationMainContent = {
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  hidden: { opacity: 0, y: 100 },
};
const animationSlideContent = {
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.1 } },
  hidden: { opacity: 0, y: 100 },
};

/* Motion Components */
const MainContent = ({ t }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={animationMainContent}
      initial="hidden"
      animate={control}
      className="flex flex-col items-center gap-4 py-14 md:flex-row md:gap-12"
    >
      <img src={ProfilePic} alt="Profile Picture" className="w-64 rounded" />

      <div className="flex flex-col items-center gap-4  text-center md:items-start md:text-left">
        <div className="space-y-1 font-medium">
          <h2 className="text-2xl font-semibold md:text-3xl">Beatriz Vidal</h2>
          <p className="text-gray-100/60 lg:text-2xl">{t("intro.job1")}</p>
          <p className="text-gray-100/60 lg:text-2xl">{t("intro.job2")}</p>
        </div>

        <h1 className="mt-4 text-2xl font-medium lg:text-4xl">
          <Trans i18nKey="intro.description">
            Understand client needs and deliver
            <span className="text-purple-main">exceptional results.</span>
          </Trans>
        </h1>
      </div>
    </motion.div>
  );
};

const SlideContent = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={animationSlideContent}
      initial="hidden"
      animate={control}
    >
      <TechnologiesSlide />
    </motion.div>
  );
};
