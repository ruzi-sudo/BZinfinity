import { createI18n } from 'vue-i18n'
import en from './en.json'
import zhCN from './zh-CN.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'zh-CN',
  fallbackLocale: 'en',
  messages: {
    en,
    'zh-CN': zhCN
  }
})

export default i18n

export function setLanguage(lang: 'en' | 'zh-CN') {
  localStorage.setItem('lang', lang)
  window.location.reload()
}

export function getCurrentLanguage(): 'en' | 'zh-CN' {
  return (localStorage.getItem('lang') as 'en' | 'zh-CN') || 'zh-CN'
}
