<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="legal-page">
    <div class="container">
      <h1>{{ t('legal.privacyPolicy') }}</h1>
      <p>{{ t('legal.comingSoon') }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.legal-page {
  min-height: 100vh;
  background: var(--color-background);
  color: var(--color-text);
  padding-top: 100px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
