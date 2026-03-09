<script setup lang="ts">
import SPathBeam from '@/components/common/SPathBeam.vue'
</script>

<template>
  <div class="lines">
    <div class="animated-lines">
      <div class="beam-section">
        <SPathBeam :width="1600" :height="160" :flatness="0.9" :speed="3" :stroke-width="1" />
      </div>
      <div class="beam-section">
        <SPathBeam :width="1600" :height="160" :flatness="0.9" :speed="3" :stroke-width="1" />
      </div>
      <div class="beam-section">
        <SPathBeam :width="1600" :height="160" :flatness="0.9" :speed="3" :stroke-width="1" />
      </div>
      <div class="beam-section">
        <SPathBeam :width="1600" :height="160" :flatness="0.9" :speed="3" :stroke-width="1" />
      </div>
    </div>

    <div class="center-logo">
      <img src="@/assets/images/logo/logo-green2.svg" alt="Logo" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.lines {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-10deg);
  top: 40px;
}

.animated-lines {
  position: absolute;
  // transform: rotate(-9deg) translateY(-250px) translateX(-30%);
  height: 320px;
  left: -20%;

  @media (max-width:1225px) {
    display: none;
  }

  // transform: translateX(50%);
  // top: 300%;
}


.beam-section:nth-child(1) {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  position: absolute;
}

.beam-section:nth-child(2) {
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  transform: rotate(183deg) !important;
}

.beam-section:nth-child(3) {
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  transform: rotate(10deg) !important;
}

.beam-section:nth-child(4) {
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  transform: rotate(195deg) !important;
}

.center-logo {
  position: relative;
  right: -2%;
  // top: -38%;
  // transform: translateX(100%);
  z-index: 10;

  img {
    width: 120px;
    height: 120px;
    filter: drop-shadow(0 0 20px rgba(42, 237, 120, 0.4));
    transform: rotate(9deg);
  }
}
</style>
