import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLanguage, getCurrentLanguage } from '@/i18n'

export function useLanguage() {
  const { locale } = useI18n()

  const currentLanguage = computed(() => locale.value)
  const otherLanguage = computed(() => (locale.value === 'zh-CN' ? 'en' : 'zh-CN'))
  const languageLabel = computed(() => (locale.value === 'zh-CN' ? 'EN' : '中文'))

  const switchLanguage = () => {
    const newLang = otherLanguage.value as 'en' | 'zh-CN'
    setLanguage(newLang)
  }

  return {
    currentLanguage,
    otherLanguage,
    languageLabel,
    switchLanguage,
    getCurrentLanguage,
    setLanguage
  }
}
