import { useState, Suspense } from "react";
import { Globe } from "lucide-react";
import { Chip } from "@material-tailwind/react";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";

import {
  Github,
  Linkedin,
  Location,
  Mail,
  Phone,
  Trailhead,
} from "../../Links";
import PdfViewer from "../../PdfViewer";
import Nav from "./Nav";

import LogoName from "../../../assets/logo-name.svg";
import HeroIllustration from "../../../assets/hero-illustration.svg";

function Hero() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [isActive, setIsActive] = useState(false);
  const [style, setStyle] = useState("left-0 right-0 top-0");

  const handleChangeLanguage = () => {
    const newLanguage = language === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
  };

  return (
    <>
      <Suspense fallback={<HeroBackground />}>
        <header
          id="hero"
          className="4xl:max-w-6xl relative z-10 m-auto flex min-h-screen flex-col items-center gap-16 overflow-x-hidden px-7 py-6 md:w-full md:max-w-5xl md:justify-evenly"
        >
          <NavAnimated />

          <main className="flex flex-col items-center justify-center gap-12 lg:w-full lg:flex-row-reverse lg:flex-wrap lg:justify-center ">
            <MainSectionIllustration />
            <MainSectionText t={t} setIsActive={setIsActive} />

            <IconsMobile
              handleChangeLanguage={handleChangeLanguage}
              language={language}
            />
          </main>

          <Icons
            handleChangeLanguage={handleChangeLanguage}
            language={language}
          />

          <PdfViewer
            isActive={isActive}
            setIsActive={setIsActive}
            pdfPath="resume/BeatrizVidal_Curriculo.pdf"
            style={style}
          />
        </header>
        <HeroBackground />
      </Suspense>
    </>
  );
}

/* Motion Animations */
const animationMainText = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.3 } },
  hidden: { opacity: 0, y: 100 },
};

const animationMainIllustration = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.6 } },
  hidden: { opacity: 0, y: 100 },
};
const animationNav = {
  visible: { opacity: 1, transition: { duration: 0.5, delay: 1.8 } },
  hidden: { opacity: 0 },
};

const animationIcons = {
  visible: { opacity: 1, transition: { duration: 0.5, delay: 1.8 } },
  hidden: { opacity: 0 },
};

/* Motion Components */
const HeroBackground = () => {
  return (
    <div className="absolute left-0 top-0 z-0 min-h-screen w-full overflow-hidden">
      <img
        src="/bg-hero.svg"
        alt=""
        className={`${window.innerWidth >= 760 ? "circle" : "circle-mobile"} w-42 blur-xl md:w-[600px]`}
      />
    </div>
  );
};

const MainSectionText = ({ t, setIsActive }) => {
  return (
    <motion.div
      variants={animationMainText}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center gap-3 md:flex-1 md:items-start md:gap-4"
    >
      <Chip
        value={t("hero.greetings")}
        className="hidden w-fit rounded-md bg-bg-purple-hover text-sm font-medium normal-case md:inline"
      />
      <div className="flex flex-col items-center gap-3 md:items-start">
        <h1 className="flex flex-wrap items-center gap-3 text-3xl font-medium md:text-5xl">
          {t("hero.im")}{" "}
          <img
            src={LogoName}
            alt="Logo name"
            className="w-48 md:h-[39px] md:w-auto"
          />
        </h1>
        <p className="text-center text-[18px] font-medium text-gray-100/60 md:text-start">
          <Trans i18nKey="hero.introduction">
            A 20 year old Brazilian
            <span className="text-purple-main">Web and Salesforce</span>
            Sales Cloud Developer that takes the client needs and a nice work
            enviroment as a priority.
          </Trans>
        </p>
      </div>

      <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
        <button className="rounded-md bg-gradient-to-r from-[#5d55ce] via-purple-main to-[#8e87ed] px-7 py-3 font-medium normal-case tracking-wide hover:bg-purple-main hover:bg-none md:text-[20px]">
          <a href="#projects">{t("hero.buttonProjects")}</a>
        </button>
        <button
          onClick={() => {
            setIsActive(true);
          }}
          className="border-b border-gray-400 text-gray-400 transition-all delay-75 hover:border-gray-50 hover:text-gray-50"
        >
          {t("hero.buttonResume")}
        </button>
      </div>
    </motion.div>
  );
};

const MainSectionIllustration = () => {
  return (
    <motion.img
      variants={animationMainIllustration}
      initial="hidden"
      animate="visible"
      src={HeroIllustration}
      className="w-2/3 md:w-auto md:flex-1"
    />
  );
};

const NavAnimated = () => {
  return (
    <motion.div
      variants={animationNav}
      initial="hidden"
      animate="visible"
      className="w-full sm:w-auto"
    >
      <Nav />
    </motion.div>
  );
};

const Icons = ({ language, handleChangeLanguage }) => {
  return (
    <motion.ul
      variants={animationIcons}
      initial="hidden"
      animate="visible"
      className="mt-3 hidden flex-wrap items-center gap-5 self-end text-gray-300 md:flex"
    >
      <li>
        <Location />
      </li>
      <li>
        <Linkedin />
      </li>
      <li>
        <Github />
      </li>
      <li>
        <Mail />
      </li>
      <li>
        <Trailhead />
      </li>
      <li>
        <Phone />
      </li>
      <li className="ml-6">
        <button
          onClick={handleChangeLanguage}
          className="relative flex h-[26px] w-14 items-center justify-between rounded-full border border-purple-main py-1 text-sm font-medium text-purple-main"
        >
          <div
            className={`absolute flex w-1/2 items-center justify-center ${language == "en" ? "left-[50%]" : "left-0"}`}
          >
            <Globe size={18} strokeWidth={1.5} />
          </div>
          <span
            className={`absolute flex w-1/2 items-center justify-center ${language == "en" ? "left-0" : "left-[50%]"}`}
          >
            {`${language == "en" ? "PT" : "EN"}`}
          </span>
        </button>
      </li>
    </motion.ul>
  );
};

const IconsMobile = ({ language, handleChangeLanguage }) => {
  return (
    <motion.div variants={animationIcons} initial="hidden" animate="visible">
      <ul className="mt-3 flex flex-wrap items-center justify-center gap-3 text-gray-300 md:hidden">
        <li>
          <Github strokeWidth={1.5} />
        </li>
        <li>
          <Phone strokeWidth={1.5} />
        </li>
        <li>
          <Mail strokeWidth={1.5} />
        </li>
        <li>
          <Linkedin strokeWidth={1.5} />
        </li>
        <li>
          <button
            onClick={handleChangeLanguage}
            className="relative flex h-[26px] w-14 items-center justify-between rounded-full border border-purple-main py-1 text-sm font-medium text-purple-main"
          >
            <div
              className={`absolute flex w-1/2 items-center justify-center ${language == "en" ? "left-[50%]" : "left-0"}`}
            >
              <Globe size={18} strokeWidth={1.5} />
            </div>
            <span
              className={`absolute flex w-1/2 items-center justify-center ${language == "en" ? "left-0" : "left-[50%]"}`}
            >
              {`${language == "en" ? "PT" : "EN"}`}
            </span>
          </button>
        </li>
      </ul>
    </motion.div>
  );
};

export default Hero;
