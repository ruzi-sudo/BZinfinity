<template>
  <div class="feature-card">
    <div class="feature-title-row">
      <span class="feature-title">{{ title }}</span>
    </div>
    <div class="feature-content">
      <p class="feature-description">{{ description }}</p>

      <template v-if="risk || returnVal || time">
        <div class="feature-divider"></div>
        <div class="feature-meta">
          <div class="meta-item" v-if="risk">
            <span class="meta-value">{{ risk }}</span>
            <span class="meta-label">{{ t('metadata.risk') }}</span>
          </div>
          <div class="meta-item" v-if="returnVal">
            <span class="meta-value">{{ returnVal }}</span>
            <span class="meta-label">{{ t('metadata.return') }}</span>
          </div>
          <div class="meta-item" v-if="time">
            <span class="meta-value">{{ time }}</span>
            <span class="meta-label">{{ t('metadata.time') }}</span>
          </div>
        </div>
      </template>

      <template v-if="buttonText">
        <div class="feature-divider"></div>
        <button class="feature-button">{{ buttonText }}</button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  title: string
  description: string
  risk?: string
  returnVal?: string
  time?: string
  buttonText?: string
}>()
</script>

<style scoped>
.feature-card {
  display: flex;
  flex-direction: column;
  width: 165px;
  min-width: 165px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 4px;
  gap: 4px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.feature-title-row {
  padding: 0 0 0 8px;
}

.feature-title {
  font-size: 12px;
  font-weight: 400;
  color: rgb(4, 5, 11);
}

.feature-content {
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
}

.feature-button:hover {
  background: rgba(5, 197, 31, 0.1);
}

/* Mobile Responsive */
@media (max-width: 809.98px) {
  .feature-card {
    width: 140px;
    min-width: 140px;
  }

  .feature-content {
    min-height: 110px;
  }
}

/* Medium mobile (430px and below) */
@media (max-width: 430px) {
  .feature-card {
    width: 115px;
    min-width: 115px;
    border-radius: 7px;
    padding: 3px;
    gap: 3px;
  }

  .feature-title {
    font-size: 11px;
  }

  .feature-content {
    min-height: 100px;
    padding: 6px;
    gap: 4px;
  }

  .feature-description {
    font-size: 7px;
    line-height: 1.3;
  }

  .feature-meta {
    gap: 3px;
  }

  .meta-label {
    font-size: 5px;
  }

  .meta-value {
    font-size: 7px;
  }

  .feature-button {
    padding: 3px;
    font-size: 7px;
  }
}

/* iPhone standard (390px and below) */
@media (max-width: 390px) {
  .feature-card {
    width: 105px;
    min-width: 105px;
    border-radius: 6px;
    padding: 2px;
    gap: 2px;
  }

  .feature-title {
    font-size: 10px;
  }

  .feature-content {
    min-height: 95px;
    padding: 5px;
    gap: 3px;
  }

  .feature-description {
    font-size: 6px;
    line-height: 1.25;
  }

  .feature-meta {
    gap: 2px;
  }

  .meta-label {
    font-size: 5px;
  }

  .meta-value {
    font-size: 6px;
  }

  .feature-button {
    padding: 2px;
    font-size: 6px;
  }
}

/* Small screens (374px and below) */
@media (max-width: 374px) {
  .feature-card {
    width: 95px;
    min-width: 95px;
    border-radius: 5px;
    padding: 2px;
    gap: 2px;
  }

  .feature-title {
    font-size: 9px;
  }

  .feature-content {
    min-height: 85px;
    padding: 4px;
    gap: 3px;
  }

  .feature-description {
    font-size: 5px;
    line-height: 1.2;
  }

  .feature-meta {
    gap: 2px;
  }

  .meta-label {
    font-size: 4px;
  }

  .meta-value {
    font-size: 5px;
  }

  .feature-button {
    padding: 2px;
    font-size: 5px;
  }
}
</style>
