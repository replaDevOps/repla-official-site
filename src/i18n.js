import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import sp from "./locales/sp/translation.json";
import fr from "./locales/fr/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    sp: { translation: sp },
    fr: { translation: fr },
  },
  lng: "en",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
