<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BackgroundCanvas from '@/components/BackgroudCanvas.vue'
import GoalsCard from '@/components/GoalsCard.vue'
import TipsCard from '@/components/TipsCard.vue'

const { t } = useI18n()

const isHoveringForm = ref(false)
const currentPointerPosition = ref(-1)
const generatedButtonText = ref(t('howItWorks.demo.getStarted'))
const emailValue = ref('')
const passwordValue = ref('')
const isButtonClicked = ref(false)

let animationTimeout: ReturnType<typeof setTimeout> | null = null
let typeTimeouts: ReturnType<typeof setTimeout>[] = []

const pointerStyle = computed(() => {
  if (currentPointerPosition.value === -1) {
    return {
      opacity: '0',
      transform: 'translateX(0) translateY(-30px)',
      transition: 'opacity 0.3s ease, transform 0.4s ease'
    }
  }

  if (currentPointerPosition.value === 0) {
    return {
      opacity: '1',
      transform: 'translateX(100px) translateY(50px)',
      transition: 'opacity 0.3s ease, transform 0.5s ease-out'
    }
  }

  if (currentPointerPosition.value === 1) {
    return {
      opacity: '1',
      transform: 'translateX(-50px) translateY(100px)',
      transition: 'transform 0.4s ease-in-out'
    }
  }

  if (currentPointerPosition.value === 2) {
    return {
      opacity: '1',
      transform: 'translateX(-50px) translateY(150px)',
      transition: 'transform 0.4s ease-in-out'
    }
  }

  if (currentPointerPosition.value === 3 || currentPointerPosition.value === 4) {
    return {
      opacity: '1',
      transform: 'translateX(0) translateY(200px)',
      transition: 'transform 0.4s ease-in-out'
    }
  }

  if (currentPointerPosition.value === 5) {
    return {
      opacity: '0',
      transform: 'translateX(120px) translateY(260px)',
      transition: 'opacity 0.3s ease, transform 0.5s ease-in'
    }
  }

  return {
    opacity: '0',
    transform: 'translateX(0) translateY(-30px)',
    transition: 'opacity 0.3s ease, transform 0.4s ease'
  }
})

const clearAllTimeouts = () => {
  if (animationTimeout) {
    clearTimeout(animationTimeout)
    animationTimeout = null
  }
  typeTimeouts.forEach(t => clearTimeout(t))
  typeTimeouts = []
}

const typeText = (target: 'email' | 'password', text: string, callback?: () => void) => {
  const targetRef = target === 'email' ? emailValue : passwordValue
  targetRef.value = ''
  let index = 0

  const type = () => {
    if (index < text.length) {
      targetRef.value += text[index]
      index++
      const timeout = setTimeout(type, 50 + Math.random() * 30)
      typeTimeouts.push(timeout)
    } else if (callback) {
      callback()
    }
  }

  type()
}

const startPointerAnimation = () => {
  clearAllTimeouts()
  isHoveringForm.value = true
  emailValue.value = ''
  passwordValue.value = ''
  isButtonClicked.value = false

  currentPointerPosition.value = 0

  animationTimeout = setTimeout(() => {
    currentPointerPosition.value = 1

    animationTimeout = setTimeout(() => {
      typeText('email', 'example@mail.com', () => {
        animationTimeout = setTimeout(() => {
          currentPointerPosition.value = 2

          animationTimeout = setTimeout(() => {
            typeText('password', '********', () => {
              animationTimeout = setTimeout(() => {
                currentPointerPosition.value = 3

                animationTimeout = setTimeout(() => {
                  isButtonClicked.value = true
                  generatedButtonText.value = t('howItWorks.demo.generated')
                  currentPointerPosition.value = 4

                  animationTimeout = setTimeout(() => {
                    isButtonClicked.value = false
                    currentPointerPosition.value = 5
                  }, 300)
                }, 1000)
              }, 300)
            })
          }, 300)
        }, 200)
      })
    }, 300)
  }, 500)
}

const stopPointerAnimation = () => {
  clearAllTimeouts()
  isHoveringForm.value = false
  currentPointerPosition.value = -1
  emailValue.value = ''
  passwordValue.value = ''
  isButtonClicked.value = false
  generatedButtonText.value = t('howItWorks.demo.getStarted')
}
</script>

<template>
  <section id="how-it-works-section" class="how-it-works-section">
    <div class="how-it-works-container">
      <h2 class="section-title">{{ t('howItWorks.title') }}</h2>

      <div class="steps-wrapper">
        <div class="step-card">
          <BackgroundCanvas class="step-background" />
          <div class="step-graphic">
            <div class="signup-card" @mouseenter="startPointerAnimation" @mouseleave="stopPointerAnimation">
              <div class="card-header">
                <img src="@/assets/images/S0BzPzRpD2RMHg0D4rQ7Fq92nk.png" alt="Icon" class="card-icon" />
                <p class="card-title">{{ t('howItWorks.demo.createAccount') }}</p>
              </div>
              <div class="form-field email-field">
                <span class="field-placeholder" v-if="!emailValue">{{ t('howItWorks.demo.emailAddress') }}</span>
                <span class="field-value" v-else>{{ emailValue }}</span>
              </div>
              <div class="form-field password-field">
                <span class="field-placeholder" v-if="!passwordValue">{{ t('howItWorks.demo.password') }}</span>
                <span class="field-value" v-else>{{ passwordValue }}</span>
              </div>
              <div class="submit-button" :class="{ 'is-clicked': isButtonClicked }"
                @mouseenter="generatedButtonText = t('howItWorks.demo.generated')" @mouseleave="generatedButtonText = t('howItWorks.demo.getStarted')">
                <span>{{ generatedButtonText }}</span>
              </div>
            </div>
            <div class="card-pointer" :style="pointerStyle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M13.25.5V3h-2.5V.5zM7 6.75H4.5v2.5H7zm12.5 0H17v2.5h2.5zm-9.25-1H9v9.516l-1.722-.574c-2.104-.702-4.277.865-4.277 3.083v.743l.366.366l5 5l1.768-1.768l-4.592-4.591a.75.75 0 0 1 .945-.462l3.367 1.123l1.646.548V8.25h.75A.75.75 0 0 1 13 9v5.242l.651.355l4.849 2.645V24H21v-8.242l-.652-.355l-4.848-2.645V9a3.25 3.25 0 0 0-3.25-3.25zm4.402-2.17l1.768-1.767l1.768 1.767l-1.768 1.768zm-8.839 0l1.768 1.768L9.35 3.58L7.581 1.813z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <h3>{{ t('howItWorks.steps.consult.title') }}</h3>
          <p>{{ t('howItWorks.steps.consult.description') }}</p>
        </div>

        <div class="step-card">
          <BackgroundCanvas class="step-background" />
          <div class="step-graphic goals-graphic">
            <div class="goals-container">
              <GoalsCard :label="t('howItWorks.goals.savings')" initial-value="$100" max-value="$600" :progress="20" />
              <GoalsCard :label="t('howItWorks.goals.investments')" initial-value="$10" max-value="$250" :progress="10" />
              <GoalsCard :label="t('howItWorks.goals.expenses')" initial-value="$500" max-value="$100" :progress="80" />
            </div>
          </div>
          <h3>{{ t('howItWorks.steps.develop.title') }}</h3>
          <p>{{ t('howItWorks.steps.develop.description') }}</p>
        </div>

        <div class="step-card tips-card-container">
          <BackgroundCanvas class="step-background" />
          <img src="@/assets/images/K9mgf8MGSU4cleIfujLeGSEccws.png" alt="Tips" class="tips-slide-image" />
          <div class="step-graphic tips-graphic">
            <div class="tips-wrapper">
              <div class="tips-row tips-row-1">
                <TipsCard :text="t('howItWorks.tips.tip1')" />
                <TipsCard :text="t('howItWorks.tips.tip2')" />
                <TipsCard :text="t('howItWorks.tips.tip3')" />
                <TipsCard :text="t('howItWorks.tips.tip4')" />
                <TipsCard :text="t('howItWorks.tips.tip5')" />
                <TipsCard :text="t('howItWorks.tips.tip6')" />
              </div>
              <div class="tips-row tips-row-2">
                <TipsCard :text="t('howItWorks.tips.tip1')" />
                <TipsCard :text="t('howItWorks.tips.tip2')" />
                <TipsCard :text="t('howItWorks.tips.tip3')" />
                <TipsCard :text="t('howItWorks.tips.tip4')" />
                <TipsCard :text="t('howItWorks.tips.tip5')" />
                <TipsCard :text="t('howItWorks.tips.tip6')" />
              </div>
            </div>
          </div>
          <h3>{{ t('howItWorks.steps.integrate.title') }}</h3>
          <p>{{ t('howItWorks.steps.integrate.description') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.how-it-works-section {
  padding: 8rem 2rem;
  background: var(--color-background);
}

.how-it-works-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(323deg, rgba(255, 255, 255, 0.6) 36%, rgb(255, 255, 255) 49%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

[data-theme='light'] .section-title {
  background: linear-gradient(323deg, rgba(0, 0, 0, 0.6) 36%, rgb(0, 0, 0) 49%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.steps-wrapper {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 1199.98px) {
    flex-wrap: wrap;
  }
}

.step-card {
  position: relative;
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  background: rgb(10, 11, 17);
  border: 1px solid var(--color-border);
  border-radius: 15px;
  padding: 36px 20px 20px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 21px;
  overflow: hidden;
  align-items: center;

  &:hover {
    border-color: rgba(24, 233, 51, 0.2);
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }

  .step-graphic {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    margin-bottom: 1rem;
  }

  .goals-graphic {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .goals-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 320px;
    padding: 24px;
    background: linear-gradient(125deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
    border-radius: 8px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow:
      rgba(7, 1, 19, 0.03) 0px 0.5px 0.5px 0px,
      rgba(7, 1, 19, 0.03) 0px 1px 1px -0.5px,
      rgba(7, 1, 19, 0.03) 0px 2px 2px -1px,
      rgba(7, 1, 19, 0.03) 0px 3px 3px -1.5px,
      rgba(7, 1, 19, 0.03) 0px 5px 5px -2.5px,
      rgba(7, 1, 19, 0.03) 0px 8px 8px -3px,
      rgba(255, 255, 255, 0.25) 0px 4px 13.3px -8px inset;
  }

  .step-background {
    position: absolute;
    top: -80px;
    left: -40px;
    width: 132%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }

  .tips-graphic {
    position: relative;
    z-index: 1;
    width: 320px;
    height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    overflow: hidden;
    padding: 20px;
    background: linear-gradient(125deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
    border-radius: 8px;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow:
      rgba(7, 1, 19, 0.03) 0px 0.5px 0.5px 0px,
      rgba(7, 1, 19, 0.03) 0px 1px 1px -0.5px,
      rgba(7, 1, 19, 0.03) 0px 2px 2px -1px,
      rgba(7, 1, 19, 0.03) 0px 3px 3px -1.5px,
      rgba(7, 1, 19, 0.03) 0px 5px 5px -2.5px,
      rgba(7, 1, 19, 0.03) 0px 8px 8px -3px,
      rgba(255, 255, 255, 0.25) 0px 4px 13.3px -8px inset;
  }

  .tips-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    width: 100%;
    mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
    -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
  }

  @keyframes scrollTips {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }

  .tips-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    animation: none;
  }

  .tips-row-2 {
    animation: none;
  }

  .tips-slide-image {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateX(-50%) translateY(-50%);
    opacity: 0;
    width: 320px;
    height: auto;
    transition: left 3s ease, opacity 3s ease;
    pointer-events: none;
    z-index: 10;
  }

  &:hover {
    .tips-row {
      animation: scrollTips 20s linear infinite;
    }

    .tips-row-2 {
      animation: scrollTips 25s linear infinite reverse;
    }

    .tips-slide-image {
      left: 80%;
      transform: translateX(-50%) translateY(-50%);
      opacity: 1;
    }
  }

  .signup-card {
    position: relative;
    z-index: 1;
    width: 320px;
    height: 250px;
    background: linear-gradient(125deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow:
      rgba(7, 1, 19, 0.03) 0px 0.5px 0.5px 0px,
      rgba(7, 1, 19, 0.03) 0px 1px 1px -0.5px,
      rgba(7, 1, 19, 0.03) 0px 2px 2px -1px,
      rgba(7, 1, 19, 0.03) 0px 3px 3px -1.5px,
      rgba(7, 1, 19, 0.03) 0px 5px 5px -2.5px,
      rgba(7, 1, 19, 0.03) 0px 8px 8px -3px,
      rgba(255, 255, 255, 0.25) 0px 4px 13.3px -8px inset;
  }

  .card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .card-icon {
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    object-fit: contain;
    filter: drop-shadow(2.55px 3.4px 2px rgba(0, 0, 0, 0.25)) drop-shadow(5.1px 5.1px 5px rgba(0, 0, 0, 0.25));
  }

  .card-title {
    font-size: 12px;
    font-weight: 400;
    color: var(--color-text);
    margin: 0;
    line-height: 1.2;
    letter-spacing: 0.01em;
  }

  .form-field {
    width: 288px;
    height: 38px;
    background: rgb(4, 5, 11);
    border-radius: 8px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    border: 0.86px solid rgba(255, 255, 255, 0.16);
  }

  .field-placeholder {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
    line-height: 1.2;
  }

  .field-value {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
    line-height: 1.2;
    font-family: monospace;
  }

  [data-theme='light'] .field-placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  .submit-button {
    width: 288px;
    height: 38px;
    background: linear-gradient(180deg, rgb(5, 197, 31) 0%, rgb(0, 161, 21) 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%);
      border-radius: 8px;
      pointer-events: none;
    }

    span {
      font-size: 14px;
      font-weight: 500;
      color: white;
      position: relative;
      z-index: 1;
      letter-spacing: 0.01em;
    }

    &:hover {
      box-shadow: 0 4px 12px rgba(5, 197, 31, 0.4);
    }

    &.is-clicked {
      transform: scale(0.95);
      box-shadow: 0 2px 8px rgba(5, 197, 31, 0.6), 0 0 20px rgba(5, 197, 31, 0.4);
    }
  }

  .card-pointer {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(255, 255, 255);
    z-index: 2;
    opacity: 0;
    pointer-events: none;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    margin: 0;
    color: rgb(255, 255, 255);
  }

  [data-theme='light'] .step-card h3 {
    color: rgb(0, 0, 0);
  }

  p {
    color: rgba(255, 255, 255, 0.72);
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    margin: 0;
  }

  [data-theme='light'] .step-card p {
    color: rgba(0, 0, 0, 0.72);
  }
}

// Mobile Responsive Styles
@media (max-width: 809.98px) {
  .how-it-works-section {
    padding: 4rem 1rem;
  }

  .section-title {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  .steps-wrapper {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .step-card {
    min-width: 100%;
    max-width: 100%;
    padding: 24px 16px;

    .step-graphic,
    .goals-graphic,
    .tips-graphic {
      width: 100%;
      height: auto;
      min-height: 200px;
    }

    .signup-card {
      width: 100%;
      max-width: 320px;
      height: auto;
      min-height: 220px;
    }

    .form-field,
    .submit-button {
      width: 100%;
      max-width: 288px;
    }

    .goals-container {
      width: 100%;
      max-width: 320px;
      padding: 16px;
    }

    .tips-graphic {
      width: 100%;
      max-width: 320px;
      height: auto;
      min-height: 200px;
      padding: 16px;
    }

    .tips-wrapper {
      gap: 10px;
    }

    h3 {
      font-size: 18px;
      text-align: center;
    }

    p {
      font-size: 14px;
      text-align: center;
    }
  }
}

// Medium mobile (430px and below)
@media (max-width: 430px) {
  .how-it-works-section {
    padding: 2.75rem 0.875rem;
  }

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 1.75rem;
  }

  .steps-wrapper {
    gap: 18px;
  }

  .step-card {
    padding: 18px 12px;
    border-radius: 14px;

    .step-graphic,
    .goals-graphic,
    .tips-graphic {
      min-height: 180px;
    }

    .signup-card {
      padding: 12px;
      min-height: 200px;
    }

    .form-field,
    .submit-button {
      height: 34px;
      font-size: 14px;
    }

    .goals-container {
      padding: 12px;
    }

    .tips-graphic {
      min-height: 180px;
      padding: 14px;
    }

    .card-icon {
      width: 30px;
      height: 30px;
    }

    .card-title {
      font-size: 12px;
    }

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 13px;
      line-height: 1.45;
    }
  }
}

// iPhone standard (390px and below)
@media (max-width: 390px) {
  .how-it-works-section {
    padding: 2.5rem 0.75rem;
  }

  .section-title {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }

  .steps-wrapper {
    gap: 16px;
  }

  .step-card {
    padding: 16px 10px;
    border-radius: 13px;

    .step-graphic,
    .goals-graphic,
    .tips-graphic {
      min-height: 170px;
    }

    .signup-card {
      padding: 10px;
      min-height: 190px;
    }

    .form-field,
    .submit-button {
      height: 33px;
      font-size: 13px;
    }

    .goals-container {
      padding: 10px;
    }

    .tips-graphic {
      min-height: 170px;
      padding: 12px;
    }

    .card-icon {
      width: 28px;
      height: 28px;
    }

    .card-title {
      font-size: 11px;
    }

    h3 {
      font-size: 15px;
    }

    p {
      font-size: 12px;
      line-height: 1.4;
    }
  }
}

// Small screens (374px and below)
@media (max-width: 374px) {
  .how-it-works-section {
    padding: 2rem 0.625rem;
  }

  .section-title {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .steps-wrapper {
    gap: 14px;
  }

  .step-card {
    padding: 14px 8px;
    border-radius: 12px;

    .step-graphic,
    .goals-graphic,
    .tips-graphic {
      min-height: 150px;
    }

    .signup-card {
      padding: 8px;
      min-height: 170px;
    }

    .form-field,
    .submit-button {
      height: 30px;
      font-size: 12px;
    }

    .goals-container {
      padding: 8px;
    }

    .tips-graphic {
      min-height: 150px;
      padding: 10px;
    }

    .card-icon {
      width: 26px;
      height: 26px;
    }

    .card-title {
      font-size: 10px;
    }

    h3 {
      font-size: 14px;
    }

    p {
      font-size: 11px;
      line-height: 1.35;
    }
  }
}
</style>
