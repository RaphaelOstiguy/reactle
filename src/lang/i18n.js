import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as enlng from "./en.json";
import * as frlng from "./fr.json";

function initLang() {
  i18n.use(initReactI18next).init({
    resources: {
      fr: frlng,
      en: enlng,
    },
    lng: "en",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });
}

export { initLang };
