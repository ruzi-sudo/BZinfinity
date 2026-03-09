<template>
  <div class="tips-item">
    <div class="tips-card">
      <span class="tips-text">{{ text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<style scoped>
.tips-item {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.tips-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 160px;
  min-height: 61px;
  padding: 8px 12px;
  background: linear-gradient(125deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
  border-radius: 8px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow:
    rgba(7, 1, 19, 0.03) 0px 0.5px 0.5px 0px,
    rgba(7, 1, 19, 0.03) 0px 1px 1px -0.5px,
    rgba(7, 1, 19, 0.03) 0px 2px 2px -1px,
    rgba(255, 255, 255, 0.25) 0px 4px 13.3px -8px inset;
}

.tips-text {
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  color: rgb(255, 255, 255);
  word-wrap: break-word;
  text-align: left;
}

/* Mobile Responsive */
@media (max-width: 809.98px) {
  .tips-card {
    width: 140px;
    min-height: 50px;
    padding: 6px 10px;
  }

  .tips-text {
    font-size: 11px;
    line-height: 13px;
  }
}

/* Medium mobile (430px and below) */
@media (max-width: 430px) {
  .tips-card {
    width: 115px;
    min-height: 45px;
    padding: 5px 7px;
    border-radius: 7px;
  }

  .tips-text {
    font-size: 10px;
    line-height: 12px;
  }
}

/* iPhone standard (390px and below) */
@media (max-width: 390px) {
  .tips-card {
    width: 105px;
    min-height: 42px;
    padding: 4px 6px;
    border-radius: 6px;
  }

  .tips-text {
    font-size: 9px;
    line-height: 11px;
  }
}

/* Small screens (374px and below) */
@media (max-width: 374px) {
  .tips-card {
    width: 95px;
    min-height: 38px;
    padding: 3px 5px;
    border-radius: 5px;
  }

  .tips-text {
    font-size: 8px;
    line-height: 10px;
  }
}
</style>
