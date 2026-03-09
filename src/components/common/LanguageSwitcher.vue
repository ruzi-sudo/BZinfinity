<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage'

const { languageLabel, switchLanguage } = useLanguage()
</script>

<template>
  <button class="lang-switcher" @click="switchLanguage" aria-label="Switch language">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
    <span>{{ languageLabel }}</span>
  </button>
</template>

<style scoped lang="scss">
.lang-switcher {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  color: var(--color-text);
  white-space: nowrap;
  background-color: transparent;
  border: none;

  svg {
    opacity: 0.7;
    flex-shrink: 0;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
