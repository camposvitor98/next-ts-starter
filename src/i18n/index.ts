import i18n from "i18next";
import { ptBR } from "./ptBR";
import { initReactI18next } from "react-i18next";

const resources = {
  ptBR,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ptBR",
});

export default i18n;
