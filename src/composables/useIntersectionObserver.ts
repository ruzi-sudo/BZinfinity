import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(options: IntersectionObserverInit = {}) {
  const elementRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  const hasAnimated = ref(false)

  let observer: IntersectionObserver | null = null

  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px',
    ...options
  }

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting && !hasAnimated.value) {
        isVisible.value = true
        hasAnimated.value = true
      }
    }, defaultOptions)

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    elementRef,
    isVisible,
    hasAnimated
  }
}
