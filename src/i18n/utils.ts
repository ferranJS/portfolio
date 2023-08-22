import { defaultLang } from "./languages"
import { uiTranslations as ui } from "./languages"

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key] || key
  }
}
