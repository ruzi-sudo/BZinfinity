<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

interface Props {
  color?: string
  height?: number
  width?: number
  flatness?: number
  speed?: number
  strokeWidth?: number
}

const props = withDefaults(defineProps<Props>(), {
  color: 'rgb(24, 233, 51)',
  height: 100,
  width: 900,
  flatness: 0.3,
  speed: 3,
  strokeWidth: 1
})

const pathRef = ref<SVGPathElement | null>(null)
const actualLength = ref(1000)

const pathD = computed(() => {
  const w = props.width
  const h = props.height
  const amplitude = h * props.flatness

  return `M 0 ${h / 2}
          Q ${w * 0.25} ${h / 2 - amplitude}, ${w * 0.5} ${h / 2}
          Q ${w * 0.75} ${h / 2 + amplitude}, ${w} ${h / 2}`
})

onMounted(() => {
  if (pathRef.value) {
    actualLength.value = pathRef.value.getTotalLength()
  }
})
</script>

<template>
  <div
    class="s-path-beam"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      '--path-length': `${actualLength}px`,
      '--speed': `${speed}s`
    }"
  >
    <svg :width="width" :height="height" class="beam-svg">
      <defs>
        <!-- 两端渐隐渐变 -->
        <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="transparent" />
          <stop offset="5%" stop-color="transparent" />
          <stop offset="20%" :stop-color="color" stop-opacity="0.6" />
          <stop offset="50%" :stop-color="color" />
          <stop offset="80%" :stop-color="color" stop-opacity="0.6" />
          <stop offset="95%" stop-color="transparent" />
          <stop offset="100%" stop-color="transparent" />
        </linearGradient>

        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="blur1" />
          <feGaussianBlur stdDeviation="1" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- 发光层 -->
      <path
        :d="pathD"
        fill="none"
        :stroke="color"
        :stroke-width="strokeWidth * 2"
        stroke-linecap="round"
        stroke-opacity="0.15"
        filter="url(#glow)"
        class="beam-glow"
      />

      <!-- 主线条 -->
      <path
        ref="pathRef"
        :d="pathD"
        fill="none"
        stroke="url(#fadeGradient)"
        :stroke-width="strokeWidth * 0.5"
        stroke-linecap="round"
        filter="url(#glow)"
        class="beam-path"
      />
    </svg>
  </div>
</template>

<style scoped>
.s-path-beam {
  position: relative;
  overflow: hidden;
}

.beam-svg {
  display: block;
}

.beam-path,
.beam-glow {
  stroke-dasharray: var(--path-length);
  stroke-dashoffset: var(--path-length);
  animation: drawPath var(--speed) ease-in-out infinite alternate;
}

@keyframes drawPath {
  0% {
    stroke-dashoffset: var(--path-length);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
