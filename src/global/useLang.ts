import { create } from "zustand";
import { LanguageOptions } from "../constant/types";

type State = {
  lang: LanguageOptions;
};

type Actions = {
  setLang: (newLang: LanguageOptions) => void;
};

const useLang = create<State & Actions>((set) => ({
  lang: "en",
  setLang: (newLang: LanguageOptions) => set({ lang: newLang }),
}));

export default useLang;
