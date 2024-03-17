import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "../locales/en/en.json";
import enProjects from "../locales/en/projects.json";

import ptTranslations from "../locales/pt/pt.json";
import ptProjects from "../locales/pt/projects.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { ...enTranslations, ...enProjects } },
    pt: { translation: { ...ptTranslations, ...ptProjects } },
  },
  lng: "pt",
});
