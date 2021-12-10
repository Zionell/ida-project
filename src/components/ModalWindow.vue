<template>
  <div :class="[$style['modal-window'], $style[!showModal ? '' : 'scale']]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
.modal-window {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fffefb;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04),
    0 6px 10px rgba(0, 0, 0, 0.02);
  transform: scale(0);
  transition: 0.2s linear;
  &__text {
    padding: 30px;
    color: #3f3f3f;
  }
}
.scale {
  transform: scale(1);
}
</style>
