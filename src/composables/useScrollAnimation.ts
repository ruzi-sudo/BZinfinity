import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const scrollY = ref(0)
  const scrollX = ref(0)
  const scrollDirection = ref<'up' | 'down'>('down')
  const lastScrollY = ref(0)

  const handleScroll = () => {
    scrollY.value = window.scrollY
    scrollX.value = window.scrollX
    scrollDirection.value = scrollY.value > lastScrollY.value ? 'down' : 'up'
    lastScrollY.value = scrollY.value
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrollY,
    scrollX,
    scrollDirection
  }
}
