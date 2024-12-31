import { ref, type Ref } from 'vue';

export enum FaceSide {
  Left = 'left',
  Right = 'right',
}

type UseFace = {
  hovering: Ref<FaceSide | null>;
  onMouseEnter: (state: FaceSide) => void;
  onMouseLeave: () => void;
};

const hovering = ref<FaceSide | null>(null);

const changeHoveringState = (state: FaceSide | null) => (hovering.value = state);

const onMouseEnter = (state: FaceSide) => changeHoveringState(state);

const onMouseLeave = () => changeHoveringState(null);

export default (): UseFace => {
  return {
    hovering,
    onMouseEnter,
    onMouseLeave,
  };
};
