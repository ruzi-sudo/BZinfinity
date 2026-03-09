<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const { scrollY } = useScrollAnimation()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

watch(() => scrollY.value, (newY) => {
  isScrolled.value = newY > 50
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    // Store scrollbar width and add padding to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
  } else {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
}
</script>

<template>
  <nav class="navbar" :class="{ 'is-scrolled': isScrolled }">
    <div class="navbar-wrapper">
      <div class="navbar-container">
        <RouterLink to="/" class="nav-brand" @click="closeMobileMenu">
          <img src="@/assets/images/logo/logo-with-text.svg" alt="BZ INFINITY" class="logo" />
        </RouterLink>

        <div class="nav-links">
          <RouterLink to="/" class="nav-link">{{ t('nav.home') }}</RouterLink>
          <RouterLink to="/about" class="nav-link">{{ t('nav.about') }}</RouterLink>
          <RouterLink to="/contact" class="nav-link">{{ t('nav.contact') }}</RouterLink>
        </div>

        <div class="nav-actions">
          <div class="desktop-language">
            <LanguageSwitcher />
          </div>
          <button
            class="mobile-menu-toggle"
            @click="toggleMobileMenu"
            :class="{ 'is-active': isMobileMenuOpen }"
            aria-label="Toggle menu"
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Panel -->
      <Transition name="slide">
        <div v-if="isMobileMenuOpen" class="mobile-menu">
          <div class="mobile-menu-content">
            <RouterLink to="/" class="mobile-nav-link" @click="closeMobileMenu">
              {{ t('nav.home') }}
            </RouterLink>
            <RouterLink to="/about" class="mobile-nav-link" @click="closeMobileMenu">
              {{ t('nav.about') }}
            </RouterLink>
            <RouterLink to="/contact" class="mobile-nav-link" @click="closeMobileMenu">
              {{ t('nav.contact') }}
            </RouterLink>
            <div class="mobile-language-switcher">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div v-if="isMobileMenuOpen" class="mobile-menu-overlay" @click="closeMobileMenu"></div>
    </Transition>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 100;
  padding: 1.5rem 2rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.navbar-wrapper {
  max-width: 1040px;
  margin: 0 auto;
  width: 100%;
  position: relative;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-radius: 16px;
  background: var(--color-border-light);
  backdrop-filter: blur(9px);
  transition: all 0.3s ease;
  min-height: 39px;
  box-sizing: border-box;
  width: 100%;
}

.navbar.is-scrolled .navbar-container {
  background: var(--color-overlay);
  border: 1px solid var(--color-border);
}

.nav-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.nav-brand .logo {
  height: 24px;
  width: auto;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-link {
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-text);
  }

  &.router-link-active {
    color: var(--color-primary);
  }
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

// Desktop language switcher (hidden on mobile)
.desktop-language {
  display: flex;
}

// Mobile Menu Toggle (Hamburger)
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 110;
  flex-shrink: 0;
}

.hamburger-line {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all 0.3s ease;
  margin: 2px 0;
}

.mobile-menu-toggle.is-active {
  .hamburger-line:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }
  .hamburger-line:nth-child(2) {
    opacity: 0;
  }
  .hamburger-line:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }
}

// Mobile Menu Overlay
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  max-width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  z-index: 90;
  overflow: hidden;
}

// Mobile Menu Panel (dropdown from top)
.mobile-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  width: 100%;
  background: var(--color-border-light);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  z-index: 95;
  padding: 0.5rem 0 0.75rem;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 16px;
  transform-origin: top center;
  will-change: transform, opacity;
}

.navbar.is-scrolled .mobile-menu {
  background: var(--color-overlay);
  border: 1px solid var(--color-border);
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 12px;
  box-sizing: border-box;
}

.mobile-nav-link {
  display: block;
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 16px;
  border-radius: 12px;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-text);
  }

  &.router-link-active {
    color: var(--color-primary);
  }
}

.mobile-language-switcher {
  margin-top: 8px;
  padding: 12px 4px 0;
  border-top: 1px solid var(--color-border);
}

// Transition animations
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.2s ease-in;
}

.slide-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}

// Mobile styles
@media (max-width: 809.98px) {
  .nav-links {
    display: none;
  }

  .navbar {
    padding: 1rem;
    box-sizing: border-box;
  }

  .navbar-wrapper {
    width: 100%;
  }

  .desktop-language {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .nav-actions {
    gap: 0;
  }

  .navbar-container {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
}

// Medium mobile (430px and below)
@media (max-width: 430px) {
  .navbar {
    padding: 0.75rem 0.625rem;
    box-sizing: border-box;
  }

  .navbar-wrapper {
    width: calc(100% - 4px);
    margin: 0 auto;
  }

  .navbar-container {
    padding: 6px 10px;
    border-radius: 12px;
    min-height: 36px;
  }

  .nav-brand .logo {
    height: 22px;
  }

  .mobile-menu-toggle {
    width: 30px;
    height: 30px;
  }

  .hamburger-line {
    width: 18px;
  }

  .mobile-menu {
    top: calc(100% + 0.375rem);
    padding: 0.375rem 0 0.625rem;
    border-radius: 12px;
  }

  .mobile-nav-link {
    font-size: 15px;
    padding: 10px 14px;
    border-radius: 10px;
  }

  .mobile-language-switcher {
    padding-top: 10px;
  }
}

// iPhone standard (390px and below)
@media (max-width: 390px) {
  .navbar {
    padding: 0.625rem 0.5rem;
    box-sizing: border-box;
  }

  .navbar-wrapper {
    width: calc(100% - 4px);
    margin: 0 auto;
  }

  .navbar-container {
    padding: 5px 8px;
    border-radius: 10px;
    min-height: 34px;
  }

  .nav-brand .logo {
    height: 20px;
  }

  .mobile-menu-toggle {
    width: 28px;
    height: 28px;
  }

  .hamburger-line {
    width: 16px;
    margin: 2px 0;
  }

  .mobile-menu {
    top: calc(100% + 0.25rem);
    padding: 0.25rem 0 0.5rem;
    border-radius: 10px;
  }

  .mobile-nav-link {
    font-size: 14px;
    padding: 9px 12px;
    border-radius: 8px;
  }

  .mobile-language-switcher {
    padding-top: 9px;
  }
}

// Small screen (374px and below)
@media (max-width: 374px) {
  .navbar {
    padding: 0.5rem 0.375rem;
    box-sizing: border-box;
  }

  .navbar-wrapper {
    width: calc(100% - 4px);
    margin: 0 auto;
  }

  .navbar-container {
    padding: 4px 6px;
    border-radius: 8px;
    min-height: 32px;
  }

  .nav-brand .logo {
    height: 18px;
  }

  .mobile-menu-toggle {
    width: 26px;
    height: 26px;
  }

  .hamburger-line {
    width: 14px;
    margin: 1.5px 0;
  }

  .mobile-menu {
    top: calc(100% + 0.25rem);
    padding: 0.25rem 0 0.5rem;
    border-radius: 8px;
  }

  .mobile-nav-link {
    font-size: 13px;
    padding: 8px 10px;
    border-radius: 6px;
  }

  .mobile-language-switcher {
    padding-top: 8px;
  }
}
</style>
