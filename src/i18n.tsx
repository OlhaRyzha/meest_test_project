import i18n from "i18next";
import XHR from "i18next-xhr-backend";

import translationEng from "./app/locales/en/translation.json";
import translationUk from "./app/locales/uk/translation.json";

i18n
  .use(XHR)
  .init({
    debug: false,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    resources: {
      en: {
        translations: translationEng
      },
      uk: {
        translations: translationUk
      },
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations"
  });

export default i18n;
