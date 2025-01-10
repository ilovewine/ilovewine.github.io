<script lang="ts">
import { FaceSide } from './useFace';
</script>

<script lang="ts" setup>
import { computed } from 'vue';
import useFace from './useFace';

type TheFaceProps = {
  side: FaceSide;
};

const { side } = defineProps<TheFaceProps>();
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
    <div class="face-container">
      <div class="face">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:math';

.transition-wrapper {
  flex: 1;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  transform-origin: v-bind(side);

  &::after {
    opacity: 0.2;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.5, 1);

    &::after {
      opacity: 0;
    }

    .face-container {
      transform: scale(math.div(1, 1.5), 1);
    }
  }
}

.face-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.face {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
