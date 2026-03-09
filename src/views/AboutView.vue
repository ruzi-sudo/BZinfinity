<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AnimatedLines from '@/components/about/AnimatedLines.vue'

const { t } = useI18n()
</script>

<template>
  <div class="about-page">
    <div class="container">
      <div class="lines-wrapper">
        <AnimatedLines />
      </div>
      <div class="title">
        <h1 class="page-title">{{ t('about.title') }}</h1>
      </div>
      <div class="card">
        <div class="card-content">
          <h2 class="card-title">{{ t('about.cardTitle') }}</h2>
          <p class="card-description">
            {{ t('about.cardDescription') }}
          </p>
          <div class="card-stats">
            <div class="stat-item">
              <span class="stat-value">10M+</span>
              <span class="stat-label">{{ t('about.stats.users') }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">50+</span>
              <span class="stat-label">{{ t('about.stats.countries') }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">$2B+</span>
              <span class="stat-label">{{ t('about.stats.transactions') }}</span>
            </div>
          </div>
        </div>
        <img src="@/assets/images/card-corner/corner.svg">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  box-sizing: border-box;
  position: relative;
  width: 716px;
  height: 497px;
  margin: 60px auto 0;
  padding: 48px;
  background: linear-gradient(171.07deg, rgba(255, 255, 255, 0.05) 64.99%, rgba(255, 255, 255, 0) 89.05%);
  backdrop-filter: blur(68.6px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  img {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media (max-width: 810px) {
    width: 100%;
    height: auto;
    min-height: 400px;
    padding: 32px;
  }
}

.card-content {
  max-width: 480px;
}

.card-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--color-text);
}

.card-description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-muted);
  margin-bottom: 40px;
}

.card-stats {
  display: flex;
  gap: 48px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 24px;
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-value {
  font-size: 36px;
  font-weight: 700;
  background: linear-gradient(135deg, #2aed78 0%, #18e933 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 14px;
  color: var(--color-text-subtle);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.about-page {
  min-height: 100vh;
  background: var(--color-background);
  color: var(--color-text);
  padding-top: 100px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  overflow: visible;
}

.lines-wrapper {
  overflow: visible;
}

.page-title {
  text-align: center;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
  margin-top: 150px;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 810px) {
    font-size: 40px;
  }
}

[data-theme='light'] .page-title {
  background: linear-gradient(135deg, #000000 0%, rgba(0, 0, 0, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Enhanced Mobile Responsive */
@media (max-width: 809.98px) {
  .about-page {
    padding-top: 80px;
  }

  .container {
    padding: 1.5rem 1rem;
  }

  .page-title {
    font-size: 36px;
    margin-top: 80px;
  }

  .card {
    margin-top: 40px;
    padding: 24px;
    min-height: auto;
  }

  .card-content {
    max-width: 100%;
  }

  .card-title {
    font-size: 26px;
    margin-bottom: 16px;
  }

  .card-description {
    font-size: 14px;
    margin-bottom: 24px;
  }

  .card-stats {
    gap: 24px;
  }

  .stat-value {
    font-size: 28px;
  }

  .stat-label {
    font-size: 12px;
  }

  .lines-wrapper {
    display: none;
  }
}

/* Medium mobile (430px and below) */
@media (max-width: 430px) {
  .about-page {
    padding-top: 70px;
  }

  .container {
    padding: 1.25rem 0.875rem;
  }

  .page-title {
    font-size: 28px;
    margin-top: 40px;
  }

  .card {
    padding: 20px 16px;
    margin-top: 30px;
    border-radius: 12px;
  }

  .card-title {
    font-size: 24px;
    margin-bottom: 14px;
  }

  .card-description {
    font-size: 14px;
    line-height: 1.55;
    margin-bottom: 24px;
  }

  .card-stats {
    gap: 20px;
  }

  .stat-value {
    font-size: 26px;
  }

  .stat-label {
    font-size: 12px;
  }

  .card img {
    max-width: 100px;
  }
}

/* iPhone standard (390px and below) */
@media (max-width: 390px) {
  .about-page {
    padding-top: 68px;
  }

  .container {
    padding: 1.125rem 0.75rem;
  }

  .page-title {
    font-size: 26px;
    margin-top: 35px;
  }

  .card {
    padding: 18px 14px;
    margin-top: 28px;
    border-radius: 11px;
  }

  .card-title {
    font-size: 22px;
    margin-bottom: 12px;
  }

  .card-description {
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 22px;
  }

  .card-stats {
    gap: 18px;
  }

  .stat-value {
    font-size: 24px;
  }

  .stat-label {
    font-size: 11px;
  }

  .card img {
    max-width: 90px;
  }
}

/* Small screens (374px and below) */
@media (max-width: 374px) {
  .about-page {
    padding-top: 65px;
  }

  .container {
    padding: 1rem 0.625rem;
  }

  .page-title {
    font-size: 22px;
    margin-top: 28px;
  }

  .card {
    padding: 14px 10px;
    margin-top: 22px;
    border-radius: 10px;
  }

  .card-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .card-description {
    font-size: 12px;
    line-height: 1.45;
    margin-bottom: 18px;
  }

  .card-stats {
    gap: 14px;
  }

  .stat-value {
    font-size: 20px;
  }

  .stat-label {
    font-size: 10px;
  }

  .card img {
    max-width: 70px;
  }
}
</style>
