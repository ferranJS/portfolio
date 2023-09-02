import { defaultLang } from "./languages"
import { uiTranslations as ui } from "./languages"

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    key = key
      .split(" ")
      .filter(char => char !== "")
      .join(" ")
    return ui[lang][key] || ui[defaultLang][key] || key
  }
}
