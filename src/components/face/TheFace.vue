<script lang="ts">
import { FaceSide } from './useFace';
</script>

<script lang="ts" setup>
import { computed } from 'vue';
import useFace from './useFace';

type TheFaceProps = {
  side?: FaceSide;
};

const { side = FaceSide.Left } = defineProps<TheFaceProps>();
const { hovering, onMouseLeave, onMouseEnter } = useFace();

const isHoveringOther = computed(() => hovering.value && hovering.value !== side);
const isRight = computed(() => side === FaceSide.Right);
const classObject = computed(() => ({
  right: isRight.value,
  hoveringOther: isHoveringOther.value,
}));
</script>

<template>
  <div
    :class="['transition-wrapper', classObject]"
    @mouseenter="() => onMouseEnter(side)"
    @mouseleave="onMouseLeave"
  >
    <div class="face"></div>
  </div>
</template>

<style scoped lang="scss">
.transition-wrapper {
  flex: 1;
  position: relative;
  transition: transform 0.3s ease;
  transform-origin: v-bind(side);
  &::after {
    opacity: 0;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.3, 1);
    z-index: 1;
  }

  &.hoveringOther {
    transform: scale(0.7, 1);
    &::after {
      opacity: 0.7;
    }
  }
}

.face {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
