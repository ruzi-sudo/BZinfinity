<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LightRays from '@/components/LightRays.vue'

const { t } = useI18n()
</script>

<template>
  <section id="white-section" class="features-section">
    <div class="features-container">
      <div class="features-row">
        <div class="features-header-left">
          <h2>{{ t('features.headerTitle') }}</h2>
        </div>
        <div class="features-items">
          <div class="features-grid-top">
            <div class="features-card-wrapper">
              <div class="features-card-content">
                <div class="features-card-main">
                  <span class="feature-title">{{ t('features.indexFund.title') }}</span>
                  <div class="feature-content-expanded">
                    <p class="feature-description">{{ t('features.indexFund.description') }}</p>
                    <div class="feature-divider"></div>
                    <div class="feature-meta">
                      <div class="meta-item">
                        <span class="meta-value">{{ t('features.indexFund.risk') }}</span>
                        <span class="meta-label">{{ t('metadata.risk') }}</span>
                      </div>
                      <div class="meta-item">
                        <span class="meta-value">{{ t('features.indexFund.return') }}</span>
                        <span class="meta-label">{{ t('metadata.return') }}</span>
                      </div>
                      <div class="meta-item">
                        <span class="meta-value">{{ t('features.indexFund.time') }}</span>
                        <span class="meta-label">{{ t('metadata.time') }}</span>
                      </div>
                    </div>
                    <div class="feature-divider"></div>
                    <button class="feature-button">{{ t('hero.cta.primary') }}</button>
                  </div>
                </div>
                <div class="features-card-side">
                  <div class="features-card-side-item yellow">
                    <div class="features-card-side-inner">
                      <span class="features-card-side-title">{{ t('features.lowCostSip.title') }}</span>
                      <span class="features-card-side-desc">{{ t('features.lowCostSip.description') }}</span>
                    </div>
                  </div>
                  <div class="features-card-side-item green">
                    <div class="features-card-side-inner">
                      <span class="features-card-side-title">{{ t('features.diversified.title') }}</span>
                      <span class="features-card-side-desc">{{ t('features.diversified.description') }}</span>
                    </div>
                  </div>
                  <div class="features-card-side-item blue">
                    <div class="features-card-side-inner">
                      <span class="features-card-side-title">{{ t('features.marketGrowth.title') }}</span>
                      <span class="features-card-side-desc">{{ t('features.marketGrowth.description') }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="features-card-footer">
                <h3 class="features-card-footer-title">{{ t('features.smartInvestment.title') }}</h3>
                <p class="features-card-footer-desc">{{ t('features.smartInvestment.description') }}</p>
              </div>
            </div>
          </div>
          <div class="features-grid-top">
            <img src="../../assets/images/2vgeVyf8qn3741iIdUZDjtV99v0.png" alt="" class="features-grid-corner-img" />
            <div class="features-grid-top-header">
              <img src="../../assets/images/logo/logo-ai.svg" alt="BZ INFINITY" class="features-grid-logo" />
            </div>
            <div class="saving-rules-wrapper">
              <div class="saving-rules-row saving-rules-row-1">
                <div class="saving-rule-card">
                  <svg class="saving-rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <div class="saving-rule-content"><span class="saving-rule-title">{{
                    t('features.savingRules.fixedWeekly.title') }}</span><span class="saving-rule-desc">{{
                        t('features.savingRules.fixedWeekly.description') }}</span></div>
                </div>
                <div class="saving-rule-card">
                  <svg class="saving-rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                    <path d="M12 8l4 4-4 4" />
                  </svg>
                  <div class="saving-rule-content"><span class="saving-rule-title">{{
                    t('features.savingRules.roundUp.title') }}</span><span class="saving-rule-desc">{{
                        t('features.savingRules.roundUp.description') }}</span></div>
                </div>
                <div class="saving-rule-card">
                  <svg class="saving-rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <div class="saving-rule-content"><span class="saving-rule-title">{{
                    t('features.savingRules.spendingChallenge.title') }}</span><span class="saving-rule-desc">{{
                        t('features.savingRules.spendingChallenge.description') }}</span></div>
                </div>
                <div class="saving-rule-card">
                  <svg class="saving-rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                  <div class="saving-rule-content"><span class="saving-rule-title">{{
                    t('features.savingRules.marketDip.title') }}</span><span class="saving-rule-desc">{{
                        t('features.savingRules.marketDip.description') }}</span></div>
                </div>
                <div class="saving-rule-card">
                  <svg class="saving-rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  </svg>
                  <div class="saving-rule-content"><span class="saving-rule-title">{{
                    t('features.savingRules.endOfWeek.title') }}</span><span class="saving-rule-desc">{{
                        t('features.savingRules.endOfWeek.description') }}</span></div>
                </div>
                <div class="saving-rule-card">
                  <svg class="saving-rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                  <div class="saving-rule-content"><span class="saving-rule-title">{{
                    t('features.savingRules.payday.title') }}</span><span class="saving-rule-desc">{{
                        t('features.savingRules.payday.description') }}</span></div>
                </div>
                <div class="saving-rule-card">
                  <svg class="saving-rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                  <div class="saving-rule-content"><span class="saving-rule-title">{{
                    t('features.savingRules.goalBoost.title') }}</span><span class="saving-rule-desc">{{
                        t('features.savingRules.goalBoost.description') }}</span></div>
                </div>
                <div class="saving-rule-card">
                  <svg class="saving-rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="M4.93 4.93l2.83 2.83" />
                    <path d="M16.24 16.24l2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="M4.93 19.07l2.83-2.83" />
                    <path d="M16.24 7.76l2.83-2.83" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                  <div class="saving-rule-content"><span class="saving-rule-title">{{
                    t('features.savingRules.cashback.title') }}</span><span class="saving-rule-desc">{{
                        t('features.savingRules.cashback.description') }}</span></div>
                </div>
              </div>
              <div class="saving-rules-row saving-rules-row-2">
                <div class="saving-rule-card">
                  <svg class="saving-rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <div class="saving-rule-content"><span class="saving-rule-title">{{
                    t('features.savingRules.fixedWeekly.title') }}</span><span class="saving-rule-desc">{{
                        t('features.savingRules.fixedWeekly.description') }}</span></div>
                </div>
                <div class="saving-rule-card">
                  <svg class="saving-rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                    <path d="M12 8l4 4-4 4" />
                  </svg>
                  <div class="saving-rule-content"><span class="saving-rule-title">{{
                    t('features.savingRules.roundUp.title') }}</span><span class="saving-rule-desc">{{
                        t('features.savingRules.roundUp.description') }}</span></div>
                </div>
                <div class="saving-rule-card">
                  <svg class="saving-rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <div class="saving-rule-content"><span class="saving-rule-title">{{
                    t('features.savingRules.spendingChallenge.title') }}</span><span class="saving-rule-desc">{{
                        t('features.savingRules.spendingChallenge.description') }}</span></div>
                </div>
                <div class="saving-rule-card">
                  <svg class="saving-rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                  <div class="saving-rule-content"><span class="saving-rule-title">{{
                    t('features.savingRules.marketDip.title') }}</span><span class="saving-rule-desc">{{
                        t('features.savingRules.marketDip.description') }}</span></div>
                </div>
                <div class="saving-rule-card">
                  <svg class="saving-rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  </svg>
                  <div class="saving-rule-content"><span class="saving-rule-title">{{
                    t('features.savingRules.endOfWeek.title') }}</span><span class="saving-rule-desc">{{
                        t('features.savingRules.endOfWeek.description') }}</span></div>
                </div>
                <div class="saving-rule-card">
                  <svg class="saving-rule-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                  <div class="saving-rule-content"><span class="saving-rule-title">{{
                    t('features.savingRules.payday.title') }}</span><span class="saving-rule-desc">{{
                        t('features.savingRules.payday.description') }}</span></div>
                </div>
              </div>
            </div>
            <div class="saving-rules-footer">
              <h3 class="saving-rules-footer-title">{{ t('features.smartSavingRules.title') }}</h3>
              <p class="saving-rules-footer-desc">{{ t('features.smartSavingRules.description') }}</p>
            </div>
          </div>
          <div class="features-grid-bottom-card">
            <img src="../../assets/images/2vgeVyf8qn3741iIdUZDjtV99v0.png" alt=""
              class="features-grid-bottom-corner-img" />
            <div class="features-grid-bottom-rays">
              <LightRays color="#18e933" color-mode="single" :animate="true" :speed="10" :intensity="30" :rays="30"
                :reach="20" :position="0" />
            </div>
            <div class="section3-images-wrapper">
              <div class="section3-images-row">
                <img src="../../assets/images/section3/0.png" alt="" class="section3-image" />
                <img src="../../assets/images/section3/1.png" alt="" class="section3-image" />
                <img src="../../assets/images/section3/2.png" alt="" class="section3-image section3-image-last" />
              </div>
            </div>
            <div class="section3-footer">
              <h3 class="section3-footer-title">{{ t('features.aiInsights.title') }}</h3>
              <p class="section3-footer-desc">{{ t('features.aiInsights.description') }}</p>
            </div>
          </div>
          <div class="features-card-fourth">
            <img src="../../assets/images/2vgeVyf8qn3741iIdUZDjtV99v0.png" alt=""
              class="features-card-fourth-corner-img" />
            <div class="features-card-fourth-image">
              <img src="../../assets/images/section4/0.png" alt="Portfolio Analytics" class="section4-main-image" />
            </div>
            <div class="features-card-fourth-content">
              <h3 class="features-card-fourth-title">{{ t('features.portfolioAnalytics.title') }}</h3>
              <p class="features-card-fourth-desc">{{ t('features.portfolioAnalytics.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modern Investors Section -->
  <section class="modern-investors-section">
    <div class="modern-investors-container">
      <h2 class="modern-investors-title">{{ t('modernInvestors.title') }}</h2>
      <div class="modern-investors-content">
        <div class="modern-investors-cards">
          <div class="modern-investor-card">
            <div class="modern-investor-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3>{{ t('modernInvestors.smartPortfolio.title') }}</h3>
            <p>{{ t('modernInvestors.smartPortfolio.description') }}</p>
          </div>
          <div class="modern-investor-card">
            <div class="modern-investor-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3>{{ t('modernInvestors.realtimeTracking.title') }}</h3>
            <p>{{ t('modernInvestors.realtimeTracking.description') }}</p>
          </div>
          <div class="modern-investor-card">
            <div class="modern-investor-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>{{ t('modernInvestors.bankLevelSecurity.title') }}</h3>
            <p>{{ t('modernInvestors.bankLevelSecurity.description') }}</p>
          </div>
          <div class="modern-investor-card">
            <div class="modern-investor-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>{{ t('modernInvestors.communityInsights.title') }}</h3>
            <p>{{ t('modernInvestors.communityInsights.description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.features-section {
  padding: 6rem 2rem;
  background: rgb(255, 255, 255);
}

.features-container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.features-row {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  .features-items {
    display: flex;
    justify-content: space-between;
    // align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    width: 100%;
  }
}

.features-header-left {
  flex: 1;
  min-width: 300px;

  h2 {
    // padding-left: 10%;
    font-size: 2rem;
    font-weight: 700;
    color: rgb(4, 5, 11);
    margin: 0;
  }
}

.features-header-card {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

[data-theme='light'] .features-header-left h2 {
  background: linear-gradient(323deg, rgba(0, 0, 0, 0.6) 36%, rgb(0, 0, 0) 49%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.features-grid-top {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  // width: 100%;
  align-items: center;
}

.features-items>.features-grid-top:nth-child(2) {
  width: 700px;
  max-width: 700px;
  min-height: 322px;
  // flex-shrink: 0;
  background-color: rgb(4, 5, 11);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}

.features-grid-bottom-card {
  width: 700px;
  max-width: 650px;
  background-color: rgb(4, 5, 11);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
}

.features-grid-bottom-header {
  margin-bottom: 20px;
}

.features-grid-bottom-logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.features-grid-bottom-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
}

.features-grid-bottom-title {
  font-size: 20px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  margin: 0;
}

.features-grid-bottom-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
  max-width: 400px;
}

.features-grid-bottom-corner-img {
  position: absolute;
  top: -210px;
  right: -300px;
  pointer-events: none;
}

.features-grid-bottom-rays {
  position: absolute;
  top: -50px;
  left: -50px;
  width: 100%;
  height: 200px;
  pointer-events: none;
  z-index: 1;
}

.section3-images-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 20px 0;
}

.section3-images-wrapper::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to top, rgb(4, 5, 11) 0%, transparent 100%);
  pointer-events: none;
  z-index: 2;
}

.section3-images-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  transition: transform 0.5s ease;
  transform: translateX(0);
  margin: 0 20px;
}

.section3-image {
  width: 240px;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 8px;
}

.features-grid-bottom-card:hover .section3-images-row {
  transform: translateX(-150px);
}

.section3-footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // text-align: center;
  gap: 8px;
  // margin-top: 30px;
  padding: 0 40px;
  position: relative;
  z-index: 2;
  width: 100%;
}

.section3-footer-title {
  font-size: 18px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  margin: 0;
}

.section3-footer-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
  max-width: 500px;
}

.features-card-fourth {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0px;
  background: linear-gradient(170deg, rgba(24, 233, 51, 0.7) 0%, rgb(4, 5, 11) 30%);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  min-height: 280px;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 500px;
}

.features-card-fourth-corner-img {
  position: absolute;
  top: -210px;
  right: -130px;
  pointer-events: none;
  z-index: 1;
}

.features-card-fourth-image {
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-bottom: 10px;
  margin: 15% 0;
}

.section4-main-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
}

.features-card-fourth-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  gap: 10px;
  padding: 0 20px;
}

.features-card-fourth-title {
  font-size: 20px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  margin: 0;
}

.features-card-fourth-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
}

.features-card-fourth-stats {
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 20px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: rgb(24, 233, 51);
}

.stat-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.features-grid-corner-img {
  position: absolute;
  top: -210px;
  right: -130px;
  pointer-events: none;
}

.features-grid-top-header {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.features-grid-logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
  position: relative;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.saving-rules-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

}

.saving-rules-footer {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  z-index: 2;
  margin-bottom: 20px;
  padding: 0 20px;
}

.saving-rules-footer-title {
  font-size: 16px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  margin: 0;
}

.saving-rules-footer-desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
}

.saving-rules-row {
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: nowrap;
  overflow: hidden;
  transition: transform 0.4s ease;
}

.saving-rules-row-1 {
  transform: translateX(0);
  position: absolute;
  top: 35%;
  left: 10px;
  width: fit-content;
  overflow: visible;
}

.saving-rules-row-2 {
  transform: translateX(0);
  position: absolute;
  bottom: 30%;
  right: 90px;
  width: fit-content;
  overflow: visible;
}

.features-items>.features-grid-top:nth-child(2):hover .saving-rules-row-1 {
  transform: translateX(-200px);
}

.features-items>.features-grid-top:nth-child(2):hover .saving-rules-row-2 {
  transform: translateX(200px);
}

.saving-rule-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  min-width: 190px;
  background: linear-gradient(to right, rgba(24, 233, 51, 0.3), rgb(4, 5, 11));
  border: 1px solid rgb(24, 233, 51);
  border-radius: 8px;
  flex-shrink: 0;
}

.saving-rule-card:hover {
  border-color: rgb(42, 237, 120);
}

.saving-rule-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: rgb(24, 233, 51);
}

.saving-rule-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.saving-rule-title {
  font-size: 11px;
  font-weight: 500;
  color: rgb(255, 255, 255);
}

.saving-rule-desc {
  font-size: 9px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.3;
}

.features-card-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: linear-gradient(170deg, rgba(24, 233, 51, 0.7) 0%, rgb(4, 5, 11) 30%);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  min-height: 280px;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 500px;
}

.features-card-content {
  display: flex;
  flex-direction: row;
  gap: 0;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 180px;
}

.features-card-footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  margin-top: 10px;
  width: 100%;
}

.features-card-footer-title {
  font-size: 16px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  margin: 0;
}

.features-card-footer-desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.5;
  max-width: 400px;
}

.features-card-main {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 150px;
  min-width: 150px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 4px;
  gap: 4px;
  transition: transform 0.4s ease, box-shadow 0.3s ease;
  transform: scale(1.2);

  &:hover {
    transform: scale(1.2) translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
}

.features-card-wrapper:hover .features-card-main {
  transform: translateX(-120px) scale(1.2);
}

.feature-title {
  font-size: 12px;
  font-weight: 400;
  color: rgb(4, 5, 11);
  padding: 0 0 0 8px;
}

.feature-content-expanded {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 8px;
  gap: 6px;
  min-height: 132px;
}

.feature-description {
  font-size: 8px;
  font-weight: 400;
  color: rgb(104, 104, 104);
  margin: 0;
  line-height: 1.4;
}

.feature-divider {
  height: 2px;
  width: 100%;
  background: rgb(226, 231, 238);
}

.feature-meta {
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 100%;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.meta-label {
  font-size: 6px;
  color: rgba(4, 5, 11, 0.5);
  text-transform: uppercase;
}

.meta-value {
  font-size: 8px;
  font-weight: 500;
  color: rgb(4, 5, 11);
}

.feature-button {
  padding: 4px;
  background: transparent;
  border: none;
  border-radius: 2px;
  color: rgb(5, 197, 31);
  font-size: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  width: fit-content;

  &:hover {
    background: rgba(5, 197, 31, 0.1);
  }
}

.features-card-side {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) translateX(100%) scale(0.9);
  transform-origin: center;
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
  pointer-events: none;
  width: fit-content;
  align-items: flex-end;
  z-index: 10;
}

.features-card-wrapper:hover .features-card-side {
  transform: translateY(-50%) translateX(20%) scale(0.9);
  opacity: 1;
  pointer-events: auto;
}

.features-card-side-item {
  display: flex;
  flex-direction: row;
  padding: 1px;
  border-radius: 4px;
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  border-bottom: 1px solid transparent;
}

.features-card-side-item.yellow {
  background: rgb(255, 193, 7);
  border-color: rgb(255, 193, 7);
}

.features-card-side-item.yellow .features-card-side-inner {
  width: 149px;
}

.features-card-side-item.green {
  background: rgb(5, 197, 31);
  border-color: rgb(5, 197, 31);
}

.features-card-side-item.green .features-card-side-inner {
  width: 189px;
}

.features-card-side-item.blue {
  background: rgb(33, 150, 243);
  border-color: rgb(33, 150, 243);
}

.features-card-side-item.blue .features-card-side-inner {
  width: 149px;
}

.features-card-side-inner {
  display: flex;
  flex-direction: column;
  background: rgb(4, 5, 11);
  border-radius: 4px;
  padding: 8px;
  gap: 8px;
  width: 199px;
}

.features-card-side-title {
  font-size: 12px;
  font-weight: 400;
  color: rgb(255, 255, 255);
}

.features-card-side-desc {
  font-size: 8px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
}

// Modern Investors Section
.modern-investors-section {
  padding: 6rem 2rem;
  background: rgb(255, 255, 255);
}

.modern-investors-container {
  max-width: 1200px;
  margin: 0 auto;
}

.modern-investors-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 4rem;
  color: rgb(4, 5, 11);
}

.modern-investors-content {
  display: flex;
  justify-content: center;
}

.modern-investors-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.modern-investor-card {
  background: transparent;
  border: none;
  border-radius: 16px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // text-align: center;
  gap: 16px;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(60px);
  animation: slideUp 0.6s ease forwards;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  &:nth-child(4) {
    animation-delay: 0.4s;
  }

  &:hover {
    transform: translateY(-4px);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modern-investor-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgb(5, 150, 31) 0%, rgb(4, 5, 11) 100%);
  border-radius: 12px;
  border: 1px solid rgba(100, 237, 120, 0.5);

  svg {
    width: 28px;
    height: 28px;
    color: rgb(255, 255, 255);
  }
}

.modern-investor-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: rgb(4, 5, 11);
  margin: 0;
}

.modern-investor-card p {
  font-size: 14px;
  color: rgba(4, 5, 11, 0.7);
  margin: 0;
  line-height: 1.5;
}

// Mobile Responsive Styles
@media (max-width: 809.98px) {
  .features-section {
    padding: 3rem 1rem;
    overflow-x: hidden;
  }

  .features-row {
    max-width: 100%;
  }

  .features-row .features-items {
    gap: 24px;
    max-width: 100%;
  }

  .features-header-left h2 {
    font-size: 1.5rem;
  }

  // Main feature cards - full width on mobile
  .features-items>.features-grid-top:nth-child(2) {
    width: 100%;
    max-width: 100%;
    min-height: auto;
    box-sizing: border-box;
  }

  .features-grid-bottom-card {
    width: 100%;
    max-width: 100%;
    padding: 24px 0;
    box-sizing: border-box;
  }

  .features-card-wrapper {
    max-width: 100%;
    min-height: auto;
    padding: 20px;
    box-sizing: border-box;
  }

  .features-card-fourth {
    max-width: 100%;
    min-height: auto;
    box-sizing: border-box;
  }

  // Saving rules wrapper - prevent overflow
  .saving-rules-wrapper {
    padding: 120px 10px 80px;
    overflow-x: hidden;
    width: 100%;
    box-sizing: border-box;
  }

  // Saving rules rows - constrain width
  .saving-rules-row-1,
  .saving-rules-row-2 {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  .saving-rule-card {
    min-width: 140px;
    flex: 0 0 auto;
  }

  .saving-rules-footer {
    position: relative;
    bottom: auto;
    margin-top: 16px;
    left: auto;
    right: auto;
  }

  // Images - responsive
  .section3-image {
    width: 180px;
  }

  .section3-images-row {
    margin: 0 10px;
  }

  .features-grid-corner-img,
  .features-grid-bottom-corner-img,
  .features-card-fourth-corner-img {
    display: none;
  }

  // Card main - responsive sizing
  .features-card-main {
    width: 130px;
    min-width: 130px;
    transform: scale(1);
  }

  .features-card-wrapper:hover .features-card-main {
    transform: translateX(0) scale(1);
  }

  // Side cards - hide on mobile (too complex for small screens)
  .features-card-side {
    display: none;
  }

  // Modern investors section
  .modern-investors-section {
    padding: 3rem 1rem;
  }

  .modern-investors-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .modern-investor-card {
    padding: 24px 16px;
  }
}

// Medium mobile (430px and below)
@media (max-width: 430px) {
  .features-section {
    padding: 2.5rem 0.875rem;
    overflow-x: hidden;
  }

  .features-row {
    max-width: 100%;
    padding: 0 4px;
  }

  .features-row .features-items {
    max-width: 100%;
  }

  // Ensure cards don't overflow
  .features-items>.features-grid-top:nth-child(2),
  .features-grid-bottom-card,
  .features-card-wrapper,
  .features-card-fourth {
    width: calc(100% - 8px);
    max-width: calc(100% - 8px);
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
  }

  .features-header-left h2 {
    font-size: 1.35rem;
  }

  .section3-image {
    width: 140px;
  }

  .section3-images-row {
    margin: 0 10px;
    gap: 14px;
  }

  // Saving rules - prevent overflow
  .saving-rules-wrapper {
    padding: 100px 8px 60px;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .saving-rules-row-1,
  .saving-rules-row-2 {
    width: 100%;
    max-width: 100%;
  }

  .saving-rule-card {
    min-width: 110px;
    max-width: 140px;
    padding: 4px 8px;
    gap: 5px;
  }

  .saving-rule-title {
    font-size: 10px;
  }

  .saving-rule-desc {
    font-size: 7px;
  }

  .saving-rule-icon {
    width: 13px;
    height: 13px;
  }

  .features-card-main {
    width: 110px;
    min-width: 110px;
  }

  .feature-title {
    font-size: 10px;
  }

  .feature-description {
    font-size: 7px;
  }

  .features-card-wrapper {
    padding: 18px;
  }

  .features-grid-bottom-card {
    padding: 20px 0;
  }

  .section3-footer {
    padding: 0 20px;
  }

  .section3-footer-title {
    font-size: 17px;
  }

  .section3-footer-desc {
    font-size: 13px;
  }

  .modern-investors-section {
    padding: 2.5rem 0.875rem;
  }

  .modern-investors-title {
    font-size: 1.35rem;
    margin-bottom: 1.75rem;
  }

  .modern-investor-card {
    padding: 22px 14px;
  }

  .modern-investor-card h3 {
    font-size: 17px;
  }

  .modern-investor-card p {
    font-size: 13px;
  }

  .modern-investor-icon {
    width: 50px;
    height: 50px;

    svg {
      width: 25px;
      height: 25px;
    }
  }
}

// iPhone standard (390px and below)
@media (max-width: 390px) {
  .features-section {
    padding: 2rem 0.75rem;
    overflow-x: hidden;
  }

  .features-row {
    max-width: 100%;
    padding: 0 2px;
  }

  .features-row .features-items {
    max-width: 100%;
  }

  // Ensure cards don't overflow
  .features-items>.features-grid-top:nth-child(2),
  .features-grid-bottom-card,
  .features-card-wrapper,
  .features-card-fourth {
    width: calc(100% - 4px);
    max-width: calc(100% - 4px);
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
  }

  .features-header-left h2 {
    font-size: 1.25rem;
  }

  .section3-image {
    width: 120px;
  }

  .section3-images-row {
    margin: 0 8px;
    gap: 12px;
  }

  // Saving rules - prevent overflow
  .saving-rules-wrapper {
    padding: 80px 6px 50px;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .saving-rules-row-1,
  .saving-rules-row-2 {
    width: 100%;
    max-width: 100%;
  }

  .saving-rule-card {
    min-width: 100px;
    max-width: 120px;
    padding: 4px 6px;
    gap: 4px;
  }

  .saving-rule-title {
    font-size: 9px;
  }

  .saving-rule-desc {
    font-size: 7px;
  }

  .saving-rule-icon {
    width: 12px;
    height: 12px;
  }

  .features-card-main {
    width: 100px;
    min-width: 100px;
  }

  .feature-title {
    font-size: 9px;
  }

  .feature-description {
    font-size: 6px;
  }

  .features-card-wrapper {
    padding: 16px;
  }

  .features-grid-bottom-card {
    padding: 16px 0;
  }

  .section3-footer {
    padding: 0 16px;
  }

  .section3-footer-title {
    font-size: 16px;
  }

  .section3-footer-desc {
    font-size: 12px;
  }

  .modern-investors-section {
    padding: 2rem 0.75rem;
  }

  .modern-investors-title {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  .modern-investor-card {
    padding: 20px 12px;
  }

  .modern-investor-card h3 {
    font-size: 16px;
  }

  .modern-investor-card p {
    font-size: 13px;
  }

  .modern-investor-icon {
    width: 48px;
    height: 48px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
}

// Small screens (374px and below)
@media (max-width: 374px) {
  .features-section {
    padding: 1.75rem 0.625rem;
    overflow-x: hidden;
  }

  .features-row {
    max-width: 100%;
    padding: 0;
  }

  .features-row .features-items {
    max-width: 100%;
  }

  // Ensure cards don't overflow
  .features-items>.features-grid-top:nth-child(2),
  .features-grid-bottom-card,
  .features-card-wrapper,
  .features-card-fourth {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    box-sizing: border-box;
  }

  .features-header-left h2 {
    font-size: 1.15rem;
  }

  .section3-image {
    width: 100px;
  }

  .section3-images-row {
    margin: 0 6px;
    gap: 10px;
  }

  // Saving rules - prevent overflow
  .saving-rules-wrapper {
    padding: 60px 4px 40px;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .saving-rules-row-1,
  .saving-rules-row-2 {
    width: 100%;
    max-width: 100%;
  }

  .saving-rule-card {
    min-width: 85px;
    max-width: 100px;
    padding: 3px 5px;
    gap: 3px;
  }

  .saving-rule-title {
    font-size: 8px;
  }

  .saving-rule-desc {
    font-size: 6px;
  }

  .saving-rule-icon {
    width: 10px;
    height: 10px;
  }

  .features-card-main {
    width: 90px;
    min-width: 90px;
  }

  .feature-title {
    font-size: 8px;
  }

  .feature-description {
    font-size: 5px;
  }

  .features-card-wrapper {
    padding: 14px;
  }

  .features-grid-bottom-card {
    padding: 14px 0;
  }

  .section3-footer {
    padding: 0 14px;
  }

  .section3-footer-title {
    font-size: 15px;
  }

  .section3-footer-desc {
    font-size: 11px;
  }

  .modern-investors-section {
    padding: 1.75rem 0.625rem;
  }

  .modern-investors-title {
    font-size: 1.15rem;
    margin-bottom: 1.25rem;
  }

  .modern-investor-card {
    padding: 18px 10px;
  }

  .modern-investor-card h3 {
    font-size: 15px;
  }

  .modern-investor-card p {
    font-size: 12px;
  }

  .modern-investor-icon {
    width: 44px;
    height: 44px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
}
</style>
