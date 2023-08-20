import { defaultLang } from "./languages"
import { uiTranslations as ui } from "./languages"

export function getLangFromUrl(url: URL) {
  const lang = url.pathname.split("/")[1]
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key] || key
  }
}