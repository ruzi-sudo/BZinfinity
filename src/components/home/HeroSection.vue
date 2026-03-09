<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LightRays from '@/components/LightRays.vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'
import { useTheme } from '@/composables/useTheme'

const { t } = useI18n()
const { isDark } = useTheme()
const { elementRef: heroRef, isVisible: heroVisible } = useIntersectionObserver()

const lightRaysProps = computed(() => ({
  color: '#18e933',
  colorMode: isDark.value ? 'single' : 'multi',
  color2: isDark.value ? '#18e933' : '#0ea5e9',
  intensity: isDark.value ? 30 : 40,
  rays: isDark.value ? 60 : 80,
  reach: isDark.value ? -60 : -40,
}))
</script>

<template>
  <section ref="heroRef" class="hero" :class="{ 'is-visible': heroVisible }">
    <div class="hero-background">
      <!-- @vue-skip -->
      <LightRays :color="lightRaysProps.color" :color-mode="lightRaysProps.colorMode" :color2="lightRaysProps.color2"
        :animate="true" :speed="10" :intensity="lightRaysProps.intensity" :rays="lightRaysProps.rays"
        :reach="lightRaysProps.reach" :position="50" />
    </div>

    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-text-wrapper">
          <h1 class="hero-title">{{ t('hero.title') }}</h1>
          <p class="hero-description">{{ t('hero.subtitle') }}</p>
        </div>

        <div class="hero-cta">
          <RouterLink to="/contact" class="btn-primary">
            {{ t('hero.cta.primary') }}
          </RouterLink>
          <p class="btn-secondary">{{ t('hero.cta.secondary') }}</p>
        </div>

        <div class="hero-trust">
          <p>{{ t('hero.trusted') }}</p>
          <p>{{ t('hero.disclaimer') }}</p>
        </div>
      </div>

      <div class="hero-image">
        <img src="@/assets/images/home/BLyQ4FLMkTCH6y2rqN6lXsZ9Q4.png" alt="BZ INFINITY App" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  background: linear-gradient(180deg, var(--color-surface) 0%, var(--color-background) 100%);

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.hero-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 0;
  max-width: 1040px;
  width: 100%;
  height: auto;
  padding: 0;

  @media (max-width: 1199.98px) {
    flex-direction: column;
    max-width: 936px;
    padding: 0 1rem;
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1 0 0;
  max-width: 936px;
  width: 100%;
  gap: 20px;
  text-align: left;
  padding-top: 40px;

  @media (max-width: 1199.98px) {
    flex: none;
    max-width: 100%;
    text-align: center;
    align-items: center;
    padding-top: 0;
  }
}

.hero-text-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 1199.98px) {
    align-items: center;
  }
}

.hero-title {
  font-size: 64px;
  font-weight: 700;
  line-height: 70.4px;
  letter-spacing: normal;
  background: linear-gradient(323deg, rgba(255, 255, 255, 0.6) 36%, rgb(255, 255, 255) 49%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 20px 0;
  text-align: left;
  max-width: 796px;

  @media (max-width: 1199.98px) {
    text-align: center;
    max-width: 100%;
  }

  @media (max-width: 810px) {
    font-size: 40px;
    line-height: 44px;
  }
}

[data-theme='light'] .hero-title {
  background: linear-gradient(323deg, rgba(0, 0, 0, 0.6) 36%, rgb(0, 0, 0) 49%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: var(--color-text-muted);
  margin: 0 0 250px 0;
  max-width: 402px;
  text-align: left;

  @media (max-width: 1199.98px) {
    text-align: center;
    max-width: 402px;
  }
}

.hero-cta {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: nowrap;

  @media (max-width: 1199.98px) {
    justify-content: center;
  }
}

.hero-image {
  position: absolute;
  left: 406px;
  right: 0;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 879px;
  height: auto;
  overflow: visible;
  animation: slideInFromRight 0.8s ease-out;

  @media (max-width: 1199.98px) {
    display: none;
  }

  img {
    width: 879px;
    height: 541px;
    object-fit: cover;
    object-position: center;
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(180deg, rgb(5, 197, 31) 0%, rgb(0, 161, 21) 100%);
  color: #fff;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.04) 100%);
    border-radius: 8px;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(5, 197, 31, 0.4);
  }
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: var(--color-text);
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-primary);
  }
}

.hero-trust {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  text-align: left;
  margin-top: 20px;

  @media (max-width: 1199.98px) {
    text-align: center;
    align-items: center;
    margin-top: 0;
  }

  p {
    color: var(--color-text-muted);
    font-size: 16px;
    line-height: 25.2px;
    margin: 0;

    &:first-child {
      color: rgba(255, 255, 255, 0.72);
      font-size: 16px;
    }
  }
}

[data-theme='light'] .hero-trust p:first-child {
  color: rgba(0, 0, 0, 0.72);
}

// Enhanced Mobile Responsive Styles
@media (max-width: 809.98px) {
  .hero {
    padding: 120px 1rem 60px;
    min-height: auto;
  }

  .hero-container {
    flex-direction: column;
    gap: 40px;
  }

  .hero-content {
    gap: 16px;
  }

  .hero-title {
    font-size: 32px;
    line-height: 36px;
    margin-bottom: 12px;
  }

  .hero-description {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 24px;
    max-width: 100%;
    padding: 0 8px;
  }

  .hero-cta {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }

  .btn-primary {
    width: 100%;
    text-align: center;
    justify-content: center;
  }

  .btn-secondary {
    width: 100%;
    text-align: center;
    justify-content: center;
  }

  .hero-trust {
    margin-top: 16px;

    p {
      font-size: 14px;
      line-height: 20px;
    }
  }

  .hero-image {
    position: relative;
    left: auto;
    right: auto;
    top: auto;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    img {
      width: 100%;
      height: auto;
    }
  }
}

// Medium mobile (430px and below)
@media (max-width: 430px) {
  .hero {
    padding: 100px 0.875rem 35px;
  }

  .hero-title {
    font-size: 26px;
    line-height: 30px;
  }

  .hero-description {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 18px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 0.625rem 1.125rem;
    font-size: 14px;
  }

  .hero-trust p {
    font-size: 12px;
    line-height: 17px;
  }

  .hero-image {
    max-width: 300px;
  }
}

// iPhone standard (390px and below)
@media (max-width: 390px) {
  .hero {
    padding: 90px 0.75rem 28px;
  }

  .hero-title {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 10px;
  }

  .hero-description {
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 16px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 0.5rem 1rem;
    font-size: 13px;
  }

  .hero-trust p {
    font-size: 11px;
    line-height: 16px;
  }

  .hero-image {
    max-width: 280px;
  }
}

// Extra small screens (374px and below)
@media (max-width: 374px) {
  .hero {
    padding: 85px 0.625rem 25px;
  }

  .hero-title {
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 8px;
  }

  .hero-description {
    font-size: 12px;
    line-height: 17px;
    margin-bottom: 14px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 0.5rem 0.875rem;
    font-size: 12px;
  }

  .hero-trust p {
    font-size: 10px;
    line-height: 15px;
  }

  .hero-image {
    max-width: 240px;
  }
}
</style>
