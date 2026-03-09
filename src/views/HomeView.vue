<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import Segmentation from '@/components/common/Segmentation.vue'
import HowItWorksSection from '@/components/home/HowItWorksSection.vue'
import FeaturesSection from '@/components/home/FeaturesSection.vue'
</script>

<template>
  <div class="home">
    <HeroSection />
    <Segmentation color="rgb(24, 233, 51)" :height="2" :beam-length="80" />
    <HowItWorksSection />
    <FeaturesSection />
  </div>
</template>

<style scoped lang="scss">
.home {
  min-height: 100vh;
  background: var(--color-background);
  color: var(--color-text);
}
</style>
