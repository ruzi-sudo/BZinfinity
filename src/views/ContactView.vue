<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Form data
const formData = ref({
  name: '',
  email: '',
  website: '',
  notes: '',
  privacy: false
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')

const handleSubmit = async () => {
  if (!formData.value.name || !formData.value.email || !formData.value.privacy) {
    return
  }
  isSubmitting.value = true
  submitStatus.value = 'submitting'
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    submitStatus.value = 'success'
    formData.value = {
      name: '',
      email: '',
      website: '',
      notes: '',
      privacy: false
    }
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="contact-page">
    <div class="contact-container">
      <!-- Left Content -->
      <div class="contact-left">
        <!-- Logo above title -->
        <div class="title-logo">
          <img src="@/assets/images/logo/logo-green2.svg" alt="BZ INFINITY" />
        </div>
        <h1 class="contact-title">{{ t('contact.title') }}</h1>
        <div class="quote-icon">
          <img src="@/assets/images/logo/comma.svg" alt="" />
        </div>
        <div class="contact-description">
          <p>{{ t('contact.description1') }}</p>
          <p>{{ t('contact.description2') }}</p>
        </div>
      </div>

      <!-- Right Form -->
      <div class="contact-right">
        <div class="contact-form-card">
          <form @submit.prevent="handleSubmit">
            <!-- Name Field -->
            <div class="form-group">
              <label for="name">{{ t('contact.form.name') }}</label>
              <div class="input-wrapper">
                <input type="text" id="name" v-model="formData.name" :placeholder="t('contact.form.namePlaceholder')"
                  required />
              </div>
            </div>

            <!-- Email and Website Row -->
            <div class="form-row">
              <div class="form-group">
                <label for="email">{{ t('contact.form.email') }}</label>
                <div class="input-wrapper">
                  <input type="email" id="email" v-model="formData.email"
                    :placeholder="t('contact.form.emailPlaceholder')" required />
                </div>
              </div>
              <div class="form-group">
                <label for="website">{{ t('contact.form.website') }}</label>
                <div class="input-wrapper">
                  <input type="url" id="website" v-model="formData.website"
                    :placeholder="t('contact.form.websitePlaceholder')" />
                </div>
              </div>
            </div>

            <!-- Notes Field -->
            <div class="form-group">
              <label for="notes">{{ t('contact.form.notes') }}</label>
              <div class="input-wrapper textarea-wrapper">
                <textarea id="notes" v-model="formData.notes" rows="5"></textarea>
              </div>
            </div>

            <!-- Privacy Checkbox -->
            <div class="form-checkbox">
              <input type="checkbox" id="privacy" v-model="formData.privacy" required />
              <span class="checkbox-custom"></span>
              <label for="privacy">
                <span>{{ t('contact.form.privacyAgree') }}</span>
                <a href="/legal/privacy-policy">{{ t('contact.form.privacyPolicy') }}</a>
              </label>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <span v-if="isSubmitting">{{ t('contact.form.submitting') }}</span>
              <span v-else>{{ t('contact.form.submit') }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.contact-page {
  // min-height: 100vh;
  background: var(--bg-dark);
  padding-top: 100px;
}

.contact-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
  gap: 60px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 20px;
  }
}

/* Left Content */
.contact-left {
  flex: 1;
  max-width: 500px;
  position: relative;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
}

/* Title Logo */
.title-logo {
  // position: absolute;
  top: -30px;
  left: 0;

  img {
    height: 150px;
    width: auto;
  }

  @media (max-width: 809.98px) {
    top: -20px;
    margin-bottom: 20px;

    img {
      height: 100px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 70px;
    }
  }
}

.contact-title {
  font-family: "Microsoft YaHei UI", "Inter", sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 40px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 36px;
  }
}

.quote-icon {
  margin-bottom: 20px;

  img {
    width: 51px;
    height: auto;
  }
}

.contact-description {
  font-family: "Microsoft YaHei UI", "Inter", sans-serif;
  font-size: 14px;
  line-height: 25px;
  color: var(--text-secondary);

  p {
    margin-bottom: 12px;
  }

  .highlight {
    color: var(--text-primary);
  }
}

/* Right Form */
.contact-right {
  flex: 1;
  max-width: 608px;
  width: 100%;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
}

.contact-form-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(50.95px);
  -webkit-backdrop-filter: blur(50.95px);
  border: 1px solid var(--border-subtle);
  border-radius: 24px;
  padding: 31px 19px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -200px;
    left: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle,
        rgba(42, 237, 120, var(--glow-opacity)) 0%,
        rgba(42, 237, 120, var(--glow-opacity-secondary)) 30%,
        transparent 70%);
    pointer-events: none;
    filter: blur(40px);
    animation: gradientPulse 6s ease-in-out infinite;
  }
}

/* 定义可动画化的自定义属性 - 使渐变动画丝滑 */
@property --glow-opacity {
  syntax: '<number>';
  initial-value: 0;
  inherits: false;
}

@property --glow-opacity-secondary {
  syntax: '<number>';
  initial-value: 0;
  inherits: false;
}

@keyframes gradientPulse {

  0%,
  100% {
    --glow-opacity: 0;
    --glow-opacity-secondary: 0;
  }

  50% {
    --glow-opacity: 0.25;
    --glow-opacity-secondary: 0.1;
  }
}

/* Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 1;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group label {
  font-family: "Microsoft YaHei UI", "Inter", sans-serif;
  font-size: 14px;
  color: var(--text-primary);
}

.form-row {
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .form-group {
    flex: 1;
  }
}

/* Input Wrapper */
.input-wrapper {
  position: relative;
  background: var(--bg-darker);
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  overflow: hidden;

  &:focus-within {
    border-color: var(--color-primary);
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 12px 15px;
    font-family: "Microsoft YaHei UI", "Inter", sans-serif;
    font-size: 16px;
    color: var(--text-primary);
    background: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: rgba(120, 120, 120, 0.8);
      opacity: 0.8;
    }
  }

  textarea {
    min-height: 140px;
    resize: vertical;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    padding-right: 40px;

    option {
      background: var(--bg-darker);
      color: var(--text-primary);
    }
  }
}

.select-wrapper {
  position: relative;
}

.select-arrow {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

/* Checkbox */
.form-checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  position: relative;

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    width: 17px;
    height: 17px;
  }

  .checkbox-custom {
    width: 17px;
    height: 17px;
    min-width: 17px;
    background: var(--bg-darker);
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    position: relative;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      left: 5px;
      top: 2px;
      width: 5px;
      height: 9px;
      border: solid var(--color-primary);
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
    }
  }

  input[type="checkbox"]:checked+.checkbox-custom::after {
    opacity: 1;
  }

  label {
    font-family: "Microsoft YaHei UI", "Inter", sans-serif;
    font-size: 14px;
    color: var(--text-secondary);
    cursor: pointer;

    a {
      color: var(--color-primary);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

/* Submit Button */
.submit-btn {
  width: 100%;
  padding: 12px 16px;
  margin-top: 20px;
  font-family: "Microsoft YaHei UI", "Inter", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%),
    linear-gradient(180deg, #06c51f 0%, #00a116 100%);
  border: 0.5px solid var(--border-strong);
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;

  box-shadow:
    0px 8px 8px -3px rgba(7, 1, 19, 0.03),
    0px 5px 5px -2.5px rgba(7, 1, 19, 0.03),
    0px 3px 3px -1.5px rgba(7, 1, 19, 0.03),
    0px 2px 2px -1px rgba(7, 1, 19, 0.03),
    0px 1px 1px -0.5px rgba(7, 1, 19, 0.03);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0px 4px 6.2px -4px rgba(255, 255, 255, 0.25);
    pointer-events: none;
  }

  &:hover:not(:disabled) {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%),
      linear-gradient(180deg, #07e522 0%, #01b818 100%);
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

// Enhanced Mobile Responsive Styles
@media (max-width: 809.98px) {
  .contact-page {
    padding-top: 80px;
  }

  .contact-container {
    padding: 40px 1rem;
    gap: 40px;
  }

  .contact-title {
    font-size: 32px;
    margin-bottom: 24px;
    text-align: center;
  }

  .contact-left {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .quote-icon {
    margin-bottom: 16px;
  }

  .contact-description {
    font-size: 14px;
    line-height: 22px;
  }

  .contact-form-card {
    padding: 24px 16px;
    border-radius: 16px;
  }

  .form-group {
    gap: 12px;
  }

  .form-group label {
    font-size: 13px;
  }

  .submit-btn {
    padding: 14px 16px;
    font-size: 15px;
  }
}

/* Medium mobile (430px and below) */
@media (max-width: 430px) {
  .contact-page {
    padding-top: 75px;
  }

  .contact-container {
    padding: 24px 0.75rem;
    gap: 24px;
  }

  .title-logo img {
    height: 70px;
  }

  .contact-title {
    font-size: 26px;
    margin-bottom: 18px;
  }

  .quote-icon img {
    width: 45px;
  }

  .contact-description {
    font-size: 13px;
    line-height: 19px;

    p {
      margin-bottom: 10px;
    }
  }

  .contact-form-card {
    padding: 18px 12px;
    border-radius: 14px;
  }

  .form-group {
    gap: 11px;
  }

  .form-group label {
    font-size: 13px;
  }

  .input-wrapper input,
  .input-wrapper textarea {
    padding: 11px 13px;
    font-size: 14px;
  }

  .form-checkbox {
    align-items: flex-start;
    gap: 11px;

    label {
      font-size: 12px;
      line-height: 1.45;
    }

    .checkbox-custom {
      width: 16px;
      height: 16px;
      min-width: 16px;
    }
  }

  .submit-btn {
    padding: 13px 15px;
    font-size: 14px;
    margin-top: 18px;
  }
}

/* iPhone standard (390px and below) */
@media (max-width: 390px) {
  .contact-page {
    padding-top: 72px;
  }

  .contact-container {
    padding: 22px 0.6875rem;
    gap: 22px;
  }

  .title-logo img {
    height: 65px;
  }

  .contact-title {
    font-size: 25px;
    margin-bottom: 16px;
  }

  .quote-icon img {
    width: 42px;
  }

  .contact-description {
    font-size: 12px;
    line-height: 18px;

    p {
      margin-bottom: 9px;
    }
  }

  .contact-form-card {
    padding: 16px 11px;
    border-radius: 13px;
  }

  .form-group {
    gap: 10px;
  }

  .form-group label {
    font-size: 12px;
  }

  .input-wrapper input,
  .input-wrapper textarea {
    padding: 10px 12px;
    font-size: 14px;
  }

  .form-checkbox {
    align-items: flex-start;
    gap: 10px;

    label {
      font-size: 11px;
      line-height: 1.4;
    }

    .checkbox-custom {
      width: 15px;
      height: 15px;
      min-width: 15px;
    }
  }

  .submit-btn {
    padding: 12px 14px;
    font-size: 14px;
    margin-top: 16px;
  }
}

/* Small screens (374px and below) */
@media (max-width: 374px) {
  .contact-page {
    padding-top: 68px;
  }

  .contact-container {
    padding: 18px 0.5625rem;
    gap: 18px;
  }

  .title-logo img {
    height: 55px;
  }

  .contact-title {
    font-size: 22px;
    margin-bottom: 14px;
  }

  .quote-icon img {
    width: 36px;
  }

  .contact-description {
    font-size: 11px;
    line-height: 17px;

    p {
      margin-bottom: 8px;
    }
  }

  .contact-form-card {
    padding: 14px 8px;
    border-radius: 11px;
  }

  .form-group {
    gap: 8px;
  }

  .form-group label {
    font-size: 11px;
  }

  .input-wrapper input,
  .input-wrapper textarea {
    padding: 9px 10px;
    font-size: 13px;
  }

  .form-checkbox {
    align-items: flex-start;
    gap: 8px;

    label {
      font-size: 10px;
      line-height: 1.35;
    }

    .checkbox-custom {
      width: 14px;
      height: 14px;
      min-width: 14px;
    }
  }

  .submit-btn {
    padding: 10px 12px;
    font-size: 13px;
    margin-top: 14px;
  }
}
</style>
