<script lang="ts">
import { FaceSide } from './useFace';
</script>

<script lang="ts" setup>
import TheFace from './TheFace.vue';
</script>

<template>
  <section class="container">
    <TheFace class="face-1" :side="FaceSide.Left" />
    <TheFace class="face-2" :side="FaceSide.Right" />
  </section>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  width: 100%;
  min-height: 100vh;
}

.face-1 {
  background-color: #943a3a;
}

.face-2 {
  background-color: #39a788;
}
</style>
