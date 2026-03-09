<template>
  <div class="goals-card" @mouseenter="startAnimation" @mouseleave="stopAnimation">
    <div class="progress-track">
      <span class="goals-label">{{ label }}</span>
      <span class="progress-max">{{ displayValue }}</span>
      <div class="progress-fill" :style="{ width: animatedProgress + '%' }"></div>
      <div class="progress-thumb" :style="{ left: 'calc(' + animatedProgress + '% - 4px)' }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  label: string
  maxValue: string
  initialValue: string
  progress?: number
}>()

const animatedProgress = ref(props.progress || 1)
const displayValue = ref(props.initialValue)

const startAnimation = () => {
  animatedProgress.value = 100
  displayValue.value = props.maxValue
}

const stopAnimation = () => {
  animatedProgress.value = props.progress || 1
  displayValue.value = props.initialValue
}
</script>

<style scoped>
.goals-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
}

.progress-track {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  position: relative;
  margin-top: 28px;
}

.goals-label {
  position: absolute;
  top: -20px;
  left: 0;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.72);
}

.progress-max {
  position: absolute;
  top: -20px;
  right: 0;
  font-size: 12px;
  font-weight: 500;
  color: rgb(255, 255, 255);
}

.progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, rgb(24, 233, 51) 0%, rgb(42, 237, 120) 100%);
  border-radius: 2px;
  transition: width 0.4s ease;
}

.progress-thumb {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: left 0.4s ease;
}
</style>
