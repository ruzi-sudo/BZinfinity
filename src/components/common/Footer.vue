<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Segmentation from './Segmentation.vue'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const { t } = useI18n()
const email = ref('')
const { elementRef: footerRef, isVisible: footerVisible } = useIntersectionObserver()
</script>

<template>
  <footer ref="footerRef" class="footer" :class="{ 'is-visible': footerVisible }">
    <div class="footer-container">
      <div class="footer-logo"></div>
      <div class="footer-newsletter">
        <h2>{{ t('footer.newsletter.title') }}</h2>
        <div class="newsletter-form">
          <input v-model="email" type="email" :placeholder="t('footer.newsletter.placeholder')"
            class="newsletter-input" />
          <button class="newsletter-button">{{ t('footer.newsletter.button') }}</button>
        </div>
      </div>


      <Segmentation :beam-length="80" />
      <div class="footer-bottom">
        <p>{{ t('footer.copyright') }}</p>
        <p>{{ t('footer.madeBy') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: var(--color-background);
  color: var(--color-text);
  padding: 4rem 2rem 2rem;
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  -webkit-mask-image: url('@/assets/images/logo/logo-mask.svg');
  mask-image: url('@/assets/images/logo/logo-mask.svg');
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  background: linear-gradient(135deg,
      #00ff33 0%,
      #18e933 25%,
      #2aed78 50%,
      #05c51f 75%,
      #00a015 100%);
  background-size: 300% 300%;
  animation: gradientMove 4s ease infinite;
  filter: drop-shadow(0 0 20px rgba(24, 233, 51, 0.5));
}

@keyframes gradientMove {
  0% {
    background-position: 0% 0%;
  }

  25% {
    background-position: 100% 0%;
  }

  50% {
    background-position: 100% 100%;
  }

  75% {
    background-position: 0% 100%;
  }

  100% {
    background-position: 0% 0%;
  }
}

.footer-newsletter {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  // border-bottom: 1px solid var(--color-border);

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
}

.newsletter-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
  font-size: 0.9rem;

  &::placeholder {
    color: var(--color-text-subtle);
  }
}

.newsletter-button {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background: var(--color-primary);
  color: var(--color-background);
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-primary-hover);
  }
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.tagline {
  color: var(--color-text-muted);
  font-size: 0.95rem;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-section {
  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  a {
    display: block;
    color: var(--color-text-muted);
    text-decoration: none;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-primary);
    }
  }
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;

  p {
    color: var(--color-text-subtle);
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 809.98px) {
  .footer {
    padding: 3rem 1rem 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }

  .newsletter-form {
    flex-direction: column;
    padding: 0 1rem;
  }

  .footer-logo {
    width: 150px;
    height: 150px;
    margin-bottom: 2rem;
  }

  .footer-newsletter {
    margin-bottom: 2rem;
    padding-bottom: 2rem;

    h2 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
  }

  .footer-bottom {
    padding-top: 1.5rem;

    p {
      font-size: 0.8rem;
    }
  }
}

/* Medium mobile (430px and below) */
@media (max-width: 430px) {
  .footer {
    padding: 2.25rem 0.75rem 1rem;
  }

  .footer-logo {
    width: 110px;
    height: 110px;
    margin-bottom: 1.5rem;
  }

  .footer-newsletter {
    margin-bottom: 1.75rem;
    padding-bottom: 1.75rem;

    h2 {
      font-size: 1.125rem;
      margin-bottom: 0.875rem;
    }
  }

  .newsletter-form {
    padding: 0 0.5rem;
  }

  .newsletter-input {
    padding: 0.5625rem 0.875rem;
    font-size: 0.85rem;
  }

  .newsletter-button {
    padding: 0.5625rem 1.125rem;
    font-size: 0.85rem;
  }

  .footer-bottom {
    padding-top: 1.25rem;

    p {
      font-size: 0.75rem;
      margin-bottom: 0.375rem;
    }
  }
}

/* iPhone standard (390px and below) */
@media (max-width: 390px) {
  .footer {
    padding: 2rem 0.6875rem 0.875rem;
  }

  .footer-logo {
    width: 100px;
    height: 100px;
    margin-bottom: 1.25rem;
  }

  .footer-newsletter {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;

    h2 {
      font-size: 1.0625rem;
      margin-bottom: 0.75rem;
    }
  }

  .newsletter-form {
    padding: 0 0.375rem;
  }

  .newsletter-input {
    padding: 0.5rem 0.75rem;
    font-size: 0.825rem;
  }

  .newsletter-button {
    padding: 0.5rem 1rem;
    font-size: 0.825rem;
  }

  .footer-bottom {
    padding-top: 1.125rem;

    p {
      font-size: 0.725rem;
      margin-bottom: 0.3125rem;
    }
  }
}

/* Small screens (374px and below) */
@media (max-width: 374px) {
  .footer {
    padding: 1.5rem 0.5625rem 0.75rem;
  }

  .footer-logo {
    width: 85px;
    height: 85px;
    margin-bottom: 1rem;
  }

  .footer-newsletter {
    margin-bottom: 1.25rem;
    padding-bottom: 1.25rem;

    h2 {
      font-size: 0.9375rem;
      margin-bottom: 0.625rem;
    }
  }

  .newsletter-form {
    padding: 0 0.25rem;
  }

  .newsletter-input {
    padding: 0.4375rem 0.625rem;
    font-size: 0.75rem;
  }

  .newsletter-button {
    padding: 0.4375rem 0.875rem;
    font-size: 0.75rem;
  }

  .footer-bottom {
    padding-top: 1rem;

    p {
      font-size: 0.625rem;
      margin-bottom: 0.25rem;
    }
  }
}
</style>
