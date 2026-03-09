import { ref } from 'vue'

// Always return dark mode
const isDark = ref(true)

export function useTheme() {
  return {
    isDark,
    toggleTheme: () => {
      // No-op: only dark mode is supported
    }
  }
}
