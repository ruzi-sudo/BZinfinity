<script setup lang="ts">
interface Props {
  color?: string
  height?: number
  beamLength?: number
}

const props = withDefaults(defineProps<Props>(), {
  color: 'rgb(24, 233, 51)',
  height: 2,
  beamLength: 20
})
</script>

<template>
  <div class="segmentation"
    :style="{ '--seg-color': color, '--seg-height': `${height}px`, '--beam-length': `${beamLength}%` }">
    <div class="segmentation-line"></div>
  </div>
</template>

<style scoped>
.segmentation {
  width: 100%;
  box-sizing: border-box;
  padding: 0 1rem;
  overflow: hidden;
}

.segmentation-line {
  flex: 1;
  height: var(--seg-height);
  background: linear-gradient(90deg, transparent var(--beam-length), var(--seg-color) 100%);
  border-radius: 1px;
  animation: slideRight 3s ease-in-out infinite;
}

@keyframes slideRight {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

/* Mobile Responsive */
@media (max-width: 809.98px) {
  .segmentation {
    padding: 0 0.5rem;
  }
}

/* Medium mobile (430px and below) */
@media (max-width: 430px) {
  .segmentation {
    padding: 0 0.375rem;
  }
}

/* iPhone standard (390px and below) */
@media (max-width: 390px) {
  .segmentation {
    padding: 0 0.25rem;
  }
}

/* Small screens (374px and below) */
@media (max-width: 374px) {
  .segmentation {
    padding: 0 0.125rem;
  }
}
</style>
