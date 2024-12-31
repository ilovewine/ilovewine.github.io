<script lang="ts">
import { FaceSide } from './useFace';
</script>

<script lang="ts" setup>
import TheFace from './TheFace.vue';
</script>

<template>
  <section class="container">
    <TheFace class="dev-face" :side="FaceSide.Left" />
    <TheFace class="math-face" :side="FaceSide.Right" />
  </section>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  width: 100%;
  min-height: 100vh;
}

.dev-face {
  background-color: var(--color-dev-primary);
}

.math-face {
  background-color: var(--color-math-primary);
}
</style>
